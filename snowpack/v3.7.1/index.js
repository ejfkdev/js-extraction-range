import { log } from "./shared/deep.js";
import { alpha } from "./lib-a/alpha.js";

log("index entry loaded", alpha);

// SPA: 唯一的 HTML 入口只直接引用入口 js，以下内容全部动态 import 懒加载。
// dj 的输入就是这一张首页。

// named async chunk
import("./views/home.js").then((m) => m.render());

// plain lazy chunk
import("./views/about.js").then((m) => m.render());

// third route chunk
import("./views/settings.js").then((m) => m.render());

// 嵌套链：team -> dashboard -> metrics（三层嵌套懒加载）
import("./views/team.js").then((m) => m.render());

// 懒模块
import("./page2-extra.js").then((m) => m.side());

// 表达式 import（静态前缀 + 变量），目录 ./widgets/（2 个文件）
window.loadWidget = (name) => import(`./widgets/${name}.js`);

// 表达式 import（静态前缀 + 变量），目录 ./templates/（3 个文件）
window.loadTemplate = (name) => import(`./templates/${name}.js`);
