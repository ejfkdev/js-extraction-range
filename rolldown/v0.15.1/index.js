import { alpha, log } from "./chunks/alpha-BZjZD8Wj.js";

//#region src/index.js
log("index entry loaded", alpha);
import("./chunks/home-D2F5v2X2.js").then((m) => m.render());
import("./chunks/about-CfkHoHRy.js").then((m) => m.render());
import("./chunks/settings-dC8OlWxb.js").then((m) => m.render());
import("./chunks/team-BVfWN7SS.js").then((m) => m.render());
import("./chunks/page2-extra-uU4aBXx-.js").then((m) => m.side());
window.loadWidget = (name) => import(`./widgets/${name}.js`);
window.loadTemplate = (name) => import(`./templates/${name}.js`);

//#endregion