import {
  log
} from "./chunk-5PUF5CCU.js";
import {
  __glob
} from "./chunk-YZFATT7X.js";

// import("./views/**/*") in src/index.ts
var globImport_views = __glob({
  "./views/about.ts": () => import("./about-INQPNTGS.js"),
  "./views/dashboard.ts": () => import("./dashboard-E5DUS5LI.js"),
  "./views/home.ts": () => import("./home-Q3YKI2OG.js")
});

// src/index.ts
log("boot");
import("./home-Q3YKI2OG.js").then((m) => m.render());
import("./about-INQPNTGS.js").then((m) => m.render());
import("./dashboard-E5DUS5LI.js").then((m) => m.render());
function load(name) {
  return globImport_views(`./views/${name}`).then((m) => m.render());
}
globalThis.loadView = load;
export {
  load
};
