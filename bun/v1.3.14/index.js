import {
  log
} from "./index-xc38f0jq.js";
import {
  alpha
} from "./index-8j8ep9qx.js";
import {
  __require
} from "./index-6j5pq722.js";

// src/index.js
log("index entry loaded", alpha);
import("./home-4qrpf3vy.js").then((m) => m.render());
import("./about-4cq6wyes.js");
import("./team-4m2a3xnn.js").then((m) => m.render());
import("./page2-extra-53tswsnv.js").then((m) => m.side());
import("./settings-r0cbtx0p.js");
import("./settings-r0cbtx0p.js");
window.loadTemplate = (name) => import(`./templates/${name}.js`);
window.loadWidget = (name) => import(`./widgets/${name}.js`);
