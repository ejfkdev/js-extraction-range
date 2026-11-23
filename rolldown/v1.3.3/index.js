// src/shared/deep.js
function log(msg, extra) {
	console.log("[shared/deep]", msg, extra === void 0 ? "" : extra);
}
// src/lib-a/alpha.js
const id = "lib-a/alpha";
function alpha() {
	return id;
}
// src/index.js
log("index entry loaded", alpha);
import("./chunks/home-B-ChVFLM.js").then((m) => m.render());
import("./chunks/about-D0G111dJ.js").then((m) => m.render());
import("./chunks/settings-CsQv8Sqq.js").then((m) => m.render());
import("./chunks/team-Lz8XYywA.js").then((m) => m.render());
import("./chunks/page2-extra-DIfE690a.js").then((m) => m.side());
window.loadWidget = (name) => import(`./widgets/${name}.js`);
window.loadTemplate = (name) => import(`./templates/${name}.js`);
export { log as n, alpha as t };
