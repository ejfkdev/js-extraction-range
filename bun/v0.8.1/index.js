import {
log
} from "./chunk-b4723f77549bb923.js";
import {
__require,
__toESM
} from "./chunk-7a3c703e0367b35a.js";
import {
alpha
} from "./chunk-681e9bd17ff4559f.js";

// src/index.js
log("index entry loaded", alpha);
import("./home.js").then((m) => m.render());
import("./about.js");
import("./team.js").then((m) => m.render());
import("./page2-extra.js").then((m) => m.side());
import("./settings.js");
import("./settings.js");
window.loadTemplate = (name) => import(`./templates/${name}.js`);
window.loadWidget = (name) => import(`./widgets/${name}.js`);
