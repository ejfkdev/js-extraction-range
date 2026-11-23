import { t as log } from "./shared-Dr2M_yRX.js";
// src/index.ts
log("boot");
import("./home-C1I53xNe.js").then((m) => m.render());
import("./about-DsWKqb-h.js").then((m) => m.render());
import("./dashboard-j-lCF32K.js").then((m) => m.render());
function load(name) {
	return import(`./views/${name}`).then((m) => m.render());
}
globalThis.loadView = load;
export { load };
