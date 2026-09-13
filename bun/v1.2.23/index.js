import {
  log
} from "./index-xc38f0jq.js";
import {
  alpha
} from "./index-8j8ep9qx.js";
import {
  __require,
  __toESM
} from "./index-3hqyeswk.js";

// src/index.js
log("index entry loaded", alpha);
import("./home-9th0rg41.js").then((m) => m.render());
import("./about-v6gzj8yj.js");
import("./team-ctf5d9vz.js").then((m) => m.render());
import("./page2-extra-dvc5p34x.js").then((m) => m.side());
import("./settings-213r2w6x.js");
import("./settings-213r2w6x.js");
window.loadTemplate = (name) => import(`./templates/${name}.js`);
window.loadWidget = (name) => import(`./widgets/${name}.js`);
