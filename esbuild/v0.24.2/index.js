import {
  __glob,
  log
} from "./chunks/chunk-PXAXWXF6.js";

// import("./templates/**/*.js") in src/index.js
var globImport_templates_js = __glob({
  "./templates/a.js": () => import("./chunks/a-7K4WFQVA.js"),
  "./templates/b.js": () => import("./chunks/b-5RF7SS4L.js"),
  "./templates/c.js": () => import("./chunks/c-BUJO7GUR.js")
});

// import("./widgets/**/*.js") in src/index.js
var globImport_widgets_js = __glob({
  "./widgets/x.js": () => import("./chunks/x-4A5AXTFZ.js"),
  "./widgets/y.js": () => import("./chunks/y-HLJKNNP5.js"),
  "./widgets/z.js": () => import("./chunks/z-2AXXVNCA.js")
});

// import("./helpers/**/*.js") in src/index.js
var globImport_helpers_js = __glob({
  "./helpers/one.js": () => import("./chunks/one-6WHMMIHK.js"),
  "./helpers/three.js": () => import("./chunks/three-W6PCBEQJ.js"),
  "./helpers/two.js": () => import("./chunks/two-CCAGEKCF.js")
});

// src/index.js
log("index entry loaded");
import("./chunks/home-BC5BPK7J.js").then((m) => m.render());
import("./chunks/about-WF4AWWFE.js").then((m) => m.render());
import("./chunks/contact-CPZSCF5B.js").then((m) => m.render());
import("./chunks/profile-G7N4MBWT.js").then((m) => m.render());
import("./chunks/search-IAVAM27C.js").then((m) => m.render());
import("./chunks/settings-MZARITI4.js");
import("./chunks/settings-MZARITI4.js");
import("./chunks/detail-G3OXCIAW.js").then((m) => m.render());
import("./chunks/team-LNMNB46K.js").then((m) => m.render());
import("./chunks/page2-extra-S2PUGW3G.js").then((m) => m.side());
import("./chunks/page3-stats-KLN7FULZ.js").then((m) => m.stats());
window.loadTemplate = (name) => globImport_templates_js(`./templates/${name}.js`);
window.loadWidget = (name) => globImport_widgets_js(`./widgets/${name}.js`);
window.loadHelper = (name) => globImport_helpers_js(`./helpers/${name}.js`);
