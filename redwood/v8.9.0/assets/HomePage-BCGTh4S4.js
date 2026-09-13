import { r as reactExports, j as jsxRuntimeExports, _ as __vitePreload } from "./index-B_picePI.js";
const widgets = /* @__PURE__ */ Object.assign({ "../../widgets/WdgAlpha.tsx": () => __vitePreload(() => import("./WdgAlpha-D6nB_OK6.js"), true ? [] : void 0), "../../widgets/WdgBeta.tsx": () => __vitePreload(() => import("./WdgBeta-Dq8xEKRu.js"), true ? [] : void 0) });
const HomePage = () => {
  const [label, setLabel] = reactExports.useState("");
  const load = async (name) => {
    const mod = await widgets[`../../widgets/${name}.tsx`]();
    setLabel(mod.default.label);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "HomePage" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => load("WdgAlpha"), children: "wdg-alpha" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => load("WdgBeta"), children: "wdg-beta" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: label })
  ] });
};
export {
  HomePage as default
};
