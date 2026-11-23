# JS Extraction Test Range · JS 提取测试靶场

[English](#english) ｜ [中文](#中文)

---

## English

**What is this?**

A static collection of **597 real website builds**, produced by **78 bundlers / frameworks / app templates** across their version lines. Every page is deliberately full of **dynamically loaded JavaScript**: lazy routes, expression/context imports, webpack & rspack chunk hash-maps, Vite modulepreload / build manifests, Module Federation remotes, micro-frontend sub-app entries, web workers, WASM, multi-page HTML pivots, source maps…

It is a **benchmark range for agents and tools that extract JavaScript from websites** (crawlers, recon tooling, AI agents): serve one build, point your tool at it, then diff what it found against the ground truth shipped right next to it.

| | |
|---|---|
| Tools / frameworks | **74** (15 bundlers · 17 micro-frontend · 25 meta/SSR · 3 Rust-WASM · 12 admin apps · 2 other) |
| Version builds (test sites) | **597** — each one an independent static site |
| Files / size | 20,560 files · ~461 MB (incl. **2,377 source maps**) |
| Deployment | Pure static — GitHub Pages / Cloudflare Pages / any file server, no build step |

### Layout

```
/index.html                    catalog table of everything:
                               type · tool · version · homepage · js total · html-ref · expected · unreferenced
/<tool>/<version>/index.html   one test site, e.g. /vite/v8.3.0/ , /rspack/v2.2.3/ , /qiankun/v2.10.16/
/<tool>/<version>/writeup.txt  GROUND TRUTH: every .js of that build, one relative path per line
/<tool>/<version>/**           the build output (entry html, assets, chunks, .map files…)
```

**One directory = one site.** All fixtures are built with `base: "/"`, so their assets are referenced by root-absolute paths (`/assets/…`). To run or scan a site, serve **its own directory as the web root** — never a shared parent directory:

```bash
# from the repo root — one site, its directory as web root
python3 -m http.server 8000 --directory vite/v8.3.0
# then open / scan  http://127.0.0.1:8000/
```

Opened under a shared parent path (e.g. directly on a Pages domain), a page renders only its skeleton because `/assets/…` resolves against the wrong root. The deployed range is therefore a **catalog + artifact source**; actual testing happens against a per-version server (local, or one deployment per version if you need remote scanning).

### Ground truth & scoring

Every build's `.js` files are classified (per-version numbers are in the catalog `index.html`):

- **html-ref** — directly `<script>`-linked by the entry page;
- **expected** — referenced somewhere in the build's text (literal path, or composed via chunk id/hash maps); a real runtime would load them;
- **unreferenced** — no static trace anywhere (on-demand manifests, orphan chunks). Statically unreachable by design; treat finding them as a bonus.

Invariant: `js total = html-ref + expected + unreferenced`.

Suggested scoring for your tool, per version:

- **recall** over `html-ref + expected` (compare against `writeup.txt`);
- **bonus recall** over `unreferenced`;
- **false positives** = reported URLs whose path is not in `writeup.txt`;
- optionally: source-map discovery/restoration — 2,377 `.map` files are present and referenced via `sourceMappingURL`.

### Categories

**Bundlers (15 tools / 167 builds)** — `esbuild` `farm` `mako` `parcel` `rolldown` `rollup` `rsbuild` `rspack` `snowpack` `systemjs` `turbopack` `vite` `vite-plus` `webpack` `webpack4`

**Micro-frontend frameworks (17 / 159)** — `emp` `garfish` `hel-micro` `icestark` `luigi` `mf-rsbuild` `mf-runtime` `mf-vite` `micro-app` `module-federation` `native-federation` `piral` `qiankun` `single-spa` `vite-plugin-federation` `webpack-mf` `wujie`

**Meta frameworks / SSR (25 / 190)** — `analog` `angular` `astro` `bun` `cra` `fresh` `gatsby` `hono` `icejs` `marko` `modernjs` `nuxt` `one` `qwik` `react-router` `redwood` `remix2` `solidstart` `stencil` `storybook` `sveltekit` `tanstack-start` `umi` `vike` `vue-cli`

**Rust / WASM frontends (3 / 14)** — `leptos` `lustre` `trunk`

**Admin app templates (12 / 31)** — `amis` `ant-design-pro` `d2admin` `jeecg` `ng-alain` `pig-ui` `ruoyi-vue2` `ruoyi-vue3` `tdesign-starter` `vue-element-admin` `vue-pure-admin` `vue-vben-admin`

**Spec / polyfill + self-test (2 / 9)** — `es-module-shims` `selftest`

Version coverage is one representative build per minor line (oldest → latest), e.g. vite `v3.0.9 … v8.3.0`, webpack `v5.0.0 … v5.110.3`, rspack `v1.0.14 … v2.2.3`. The exact list is the catalog `index.html`.

### Try it

```bash
# 1) serve ONE version with its directory as web root
python3 -m http.server 8000 --directory vite/v8.3.0

# 2) run your extractor against it
your-tool http://127.0.0.1:8000/ > found.txt

# 3) diff against ground truth
diff <(sort found.txt) <(sort vite/v8.3.0/writeup.txt)
```

### Deployment

- **GitHub Pages**: push this directory as a repo, Settings → Pages → deploy from branch root (or Actions). Jekyll is disabled via the bundled `.nojekyll` (required — many builds emit `_next/`, `_astro/`, `_nuxt/` paths). The deployed site is the **catalog** (browse metadata, download artifacts); per the `base: "/"` note above, individual sites must be served from their own directory to run.
- **Cloudflare Pages**: connect the repo; Build command: *(leave empty)*; Output directory: `/` (repo root). Same catalog semantics.
- Repo is ~450 MB with no single file over 50 MB — comfortable for both platforms; clone with `--depth 1`.

### Notes & limitations

- These are SPA / admin **build outputs** served statically: client-side routing works, but anything requiring a backend API (most admin templates) renders only its shell. That does not affect JS extraction testing — the artifacts are exactly what a real deployment serves.
- Enter pages via the catalog `index.html`; hosting platforms do not provide directory listings.
- A few builds are hard by design and make good adversarial cases: official webpack Module Federation runtime slices and snowpack expression-import context chunks have **zero static references** — no static extractor can enumerate them.
- **Privacy scrub**: build-machine paths are neutralized in this copy — the `/Users/<user>/…/sites/<tool>/<version>/` prefix embedded in source-map `sources` and bundled module-id strings is stripped (paths become relative), and Rust `.wasm` panic strings are replaced **length-preservingly** (binary layout untouched). Re-verified after scrubbing: extractor counts on these copies match the harness records exactly.

### Generation & licenses

- Generated by `build-range.py` from the [dj](https://github.com/ejfkdev/dj) test harness: every tool/version is really `npm install && build`-ed, then compared against statically derived ground truth.
- The fixture **source code** is original demo code written for this harness. The **build outputs** embed third-party runtimes and — in *Admin app templates* — compiled artifacts of open-source admin projects; all rights belong to their respective projects and licenses. They are redistributed here solely for interoperability / security-testing purposes. If you maintain one of these projects and want it removed, open an issue.
- Range tooling & docs: MPL-2.0 (same as dj).

---

## 中文

**这是什么？**

一个纯静态的 **JS 提取测试靶场**：**78 个打包器 / 框架 / 应用模板**、跨版本线共 **597 个真实构建产物**。每个页面都刻意布满**动态加载的 JavaScript**：懒加载路由、表达式/上下文 import、webpack 与 rspack 的 chunk hash 映射、Vite modulepreload 与构建清单、Module Federation 远程模块、微前端子应用入口、Web Worker、WASM、多路 HTML 入口、source map……

用途：给**从网站提取 JS 的工具或 Agent**（爬虫、信息收集工具、AI Agent）当**基准靶场**——把某个构建产物单独起服，让你的工具去扫，然后和随附的标准答案做 diff。

| | |
|---|---|
| 工具 / 框架 | **78 个**（打包器 19 · 微前端 17 · 元框架/SSR 25 · Rust-WASM 3 · 应用模板 12 · 规范垫片 1 · 其他 1） |
| 版本构建（测试站点） | **597 个**，每个都是一个独立静态站点 |
| 文件 / 体积 | 20,560 个文件 · 约 461 MB（含 **2,377 个 source map**） |
| 部署 | 纯静态——GitHub Pages / Cloudflare Pages / 任意文件服务器，无需构建 |

### 目录结构

```
/index.html                    总目录表：类型 · 工具 · 版本 · 首页地址 · js 总数 · HTML 直引 · 应提取 · 无引用
/<工具>/<版本>/index.html       一个测试站点，如 /vite/v8.3.0/ 、/rspack/v2.2.3/ 、/qiankun/v2.10.16/
/<工具>/<版本>/writeup.txt      标准答案：该版本全部 .js 文件，每行一个相对路径
/<工具>/<版本>/**               构建产物（入口 html、assets、chunk、.map……）
```

**一个目录 = 一个站点。** 所有夹具都以 `base: "/"` 构建，资源是根绝对路径（`/assets/…`）。要运行或扫描某个站点，必须**以它自己的目录为 Web 根**单独起服务，而不是挂在一个共享的父目录下：

```bash
# 在仓库根目录执行——单站点起服，该目录即 Web 根
python3 -m http.server 8000 --directory vite/v8.3.0
# 然后打开 / 扫描  http://127.0.0.1:8000/
```

如果直接在共享父路径下打开（例如部署后的 Pages 域名子路径），页面只能渲染出骨架——`/assets/…` 会解析到错误的根。因此**部署形态的靶场是"目录索引 + 产物下载源"**；真正的测试针对单版本服务进行（本地起服，或需要远程扫描时一个版本部署一个站点）。

### 标准答案与评分口径

每个版本的 `.js` 文件分类如下（各版本数字见目录页 `index.html`）：

- **HTML 直引** —— 入口页面 `<script>` 直接引用；
- **应提取** —— 在产物文本中存在引用痕迹（字面路径，或经 chunk id/hash 映射拼接）；真实运行时一定会加载；
- **无引用** —— 全产物找不到任何静态引用痕迹（按需 manifest、孤儿 chunk）。设计上静态不可达，提取到算加分。

恒等式：`js 总数 = HTML 直引 + 应提取 + 无引用`。

建议的评分方式（按版本）：

- **召回率**：以 `HTML 直引 + 应提取` 为分母，对照 `writeup.txt`；
- **加分召回**：`无引用` 部分；
- **误报**：报告了但不在 `writeup.txt` 里的 URL；
- 可选：source map 发现/还原能力——2,377 个 `.map` 文件都在，且产物带 `sourceMappingURL` 引用。

### 分类

**打包器（15 个工具 / 167 个构建）** — `esbuild` `farm` `mako` `parcel` `rolldown` `rollup` `rsbuild` `rspack` `snowpack` `systemjs` `turbopack` `vite` `vite-plus` `webpack` `webpack4`

**微前端框架（17 / 159）** — `emp` `garfish` `hel-micro` `icestark` `luigi` `mf-rsbuild` `mf-runtime` `mf-vite` `micro-app` `module-federation` `native-federation` `piral` `qiankun` `single-spa` `vite-plugin-federation` `webpack-mf` `wujie`

**元框架 / SSR（25 / 190）** — `analog` `angular` `astro` `bun` `cra` `fresh` `gatsby` `hono` `icejs` `marko` `modernjs` `nuxt` `one` `qwik` `react-router` `redwood` `remix2` `solidstart` `stencil` `storybook` `sveltekit` `tanstack-start` `umi` `vike` `vue-cli`

**Rust / WASM 前端（3 / 14）** — `leptos` `lustre` `trunk`

**应用模板（12 / 31）** — `amis` `ant-design-pro` `d2admin` `jeecg` `ng-alain` `pig-ui` `ruoyi-vue2` `ruoyi-vue3` `tdesign-starter` `vue-element-admin` `vue-pure-admin` `vue-vben-admin`

**规范垫片 + 自测（2 / 9）** — `es-module-shims` `selftest`

版本覆盖为"每个 minor 线取一个代表版本"（最旧 → 最新），如 vite `v3.0.9 … v8.3.0`、webpack `v5.0.0 … v5.110.3`、rspack `v1.0.14 … v2.2.3`。完整清单以目录页 `index.html` 为准。

### 快速上手

```bash
# 1) 以单个版本目录为 Web 根起服务
python3 -m http.server 8000 --directory vite/v8.3.0

# 2) 用你的工具扫它
your-tool http://127.0.0.1:8000/ > found.txt

# 3) 与标准答案 diff
diff <(sort found.txt) <(sort vite/v8.3.0/writeup.txt)
```

### 部署

- **GitHub Pages**：把本目录作为仓库推送，Settings → Pages → 从分支根目录部署（或 Actions）。仓库自带 `.nojekyll` 关闭 Jekyll（必须——大量产物使用 `_next/`、`_astro/`、`_nuxt/` 这类下划线开头路径）。部署后是**目录索引**（浏览元数据、下载产物）；如上所述，单个站点要完整运行需以自己的目录为根起服。
- **Cloudflare Pages**：连接仓库；Build command 留空；Output directory 填 `/`（仓库根）。语义同上。
- 仓库约 450 MB、单文件均小于 50 MB——两个平台都无压力，建议 `--depth 1` 浅克隆。

### 注意事项与已知限制

- 这些是 SPA / 后台模板的**静态构建产物**：前端路由可用，但依赖后端 API 的部分（多数应用模板）只能渲染出外壳。这不影响 JS 提取测试——产物与真实部署完全一致。
- 请从目录页 `index.html` 进入；托管平台不提供目录列表。
- 少数构建是"故意很难"的对抗样本：webpack 官方 Module Federation 的运行时切片、snowpack 表达式 import 的上下文 chunk **没有任何静态引用痕迹**，任何静态提取器都无法枚举，适合用来压测工具上限。
- **隐私清洗**：本库副本已中性化构建机路径——sourcemap 的 `sources` 与打包产物里的模块 id 字符串中嵌入的 `/Users/<用户>/…/sites/<工具>/<版本>/` 前缀已去除（变为相对路径）；Rust `.wasm` 里的 panic 路径做了**等长替换**（二进制结构不变）。清洗后已复验：提取器在这些副本上的结果与测试台记录完全一致。

### 生成方式与许可

- 由 [dj](https://github.com/ejfkdev/dj) 测试台的 `build-range.py` 生成：每个工具/版本真实执行 `npm install && build`，再以静态推导的真值比对入库。
- 夹具**源码**为本测试台编写的原创 demo 代码；**构建产物**内嵌各第三方运行时，其中"应用模板"分类是开源后台项目的编译产物，权利归属各自项目与许可证。此处仅出于互操作/安全测试目的再分发——若你是相关项目维护者并希望下架，请提 issue。
- 靶场工具与文档：MPL-2.0（与 dj 一致）。