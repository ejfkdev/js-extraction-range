//#region src/shared/deep.js
function log(msg, extra) {
	console.log("[shared/deep]", msg, extra === void 0 ? "" : extra);
}
//#endregion
//#region src/lib-a/alpha.js
const id = "lib-a/alpha";
function alpha() {
	return id;
}
//#endregion
//#region src/index.js
log("index entry loaded", alpha);
import("./chunks/home-DRKFv2o4.js").then((m) => m.render());
import("./chunks/about-Byng5nsw.js").then((m) => m.render());
import("./chunks/settings-BqvZjG1r.js").then((m) => m.render());
import("./chunks/team-KpPPD2-5.js").then((m) => m.render());
import("./chunks/page2-extra-3-uwQWfC.js").then((m) => m.side());
window.loadWidget = (name) => import(`./widgets/${name}.js`);
window.loadTemplate = (name) => import(`./templates/${name}.js`);
//#endregion
export { log as n, alpha as t };
