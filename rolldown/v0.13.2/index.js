import { alpha, log } from "./chunks/alpha-WY2Q_Foz.js";

//#region src/index.js
log("index entry loaded", alpha);
import("./chunks/home-9heb9l9l.js").then((m) => m.render());
import("./chunks/about-n5B6B0cj.js").then((m) => m.render());
import("./chunks/settings-HQvDpVsW.js").then((m) => m.render());
import("./chunks/team-5e7s1m3_.js").then((m) => m.render());
import("./chunks/page2-extra-LlOGgV8f.js").then((m) => m.side());
window.loadWidget = (name) => import(`./widgets/${name}.js`);
window.loadTemplate = (name) => import(`./templates/${name}.js`);

//#endregion