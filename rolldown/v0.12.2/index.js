import { alpha, log } from "./chunks/alpha--EZFoPsd.js";

//#region src/index.js
log("index entry loaded", alpha);
(import("./chunks/home-Soi0H1gr.js")).then((m) => m.render());
(import("./chunks/about-l27s4uC0.js")).then((m) => m.render());
(import("./chunks/settings-tkr8Lo1O.js")).then((m) => m.render());
(import("./chunks/team-ffc9ixxm.js")).then((m) => m.render());
(import("./chunks/page2-extra-kuT8oFv7.js")).then((m) => m.side());
window.loadWidget = (name) => import(`./widgets/${name}.js`);
window.loadTemplate = (name) => import(`./templates/${name}.js`);

//#endregion
