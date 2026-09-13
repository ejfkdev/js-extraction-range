import { r as reactExports, j as jsxRuntimeExports, _ as __vitePreload } from "./index-B_picePI.js";
const templates = /* @__PURE__ */ Object.assign({ "../../templates/TplOne.tsx": () => __vitePreload(() => import("./TplOne-Beh9LJUT.js"), true ? [] : void 0), "../../templates/TplThree.tsx": () => __vitePreload(() => import("./TplThree-DNLqY47-.js"), true ? [] : void 0), "../../templates/TplTwo.tsx": () => __vitePreload(() => import("./TplTwo-DL-MJJHF.js"), true ? [] : void 0) });
const DashboardPage = () => {
  const [label, setLabel] = reactExports.useState("");
  const load = async (name) => {
    const mod = await templates[`../../templates/${name}.tsx`]();
    setLabel(mod.default.label);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "DashboardPage" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => load("TplOne"), children: "tpl-one" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => load("TplTwo"), children: "tpl-two" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => load("TplThree"), children: "tpl-three" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: label })
  ] });
};
export {
  DashboardPage as default
};
