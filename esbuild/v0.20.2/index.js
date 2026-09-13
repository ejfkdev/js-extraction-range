import {
  __glob,
  log
} from "./chunks/chunk-S3HAU4IS.js";

// import("./templates/**/*.js") in src/index.js
var globImport_templates_js = __glob({
  "./templates/a.js": () => import("./chunks/a-QOVRDNG4.js"),
  "./templates/b.js": () => import("./chunks/b-AJ2TYDE3.js"),
  "./templates/c.js": () => import("./chunks/c-POV72KTH.js")
});

// import("./widgets/**/*.js") in src/index.js
var globImport_widgets_js = __glob({
  "./widgets/x.js": () => import("./chunks/x-LCR3XIEN.js"),
  "./widgets/y.js": () => import("./chunks/y-N7UZO225.js"),
  "./widgets/z.js": () => import("./chunks/z-ZZONXURI.js")
});

// import("./helpers/**/*.js") in src/index.js
var globImport_helpers_js = __glob({
  "./helpers/one.js": () => import("./chunks/one-UUQD3R3B.js"),
  "./helpers/three.js": () => import("./chunks/three-IG5HVSKJ.js"),
  "./helpers/two.js": () => import("./chunks/two-GX6EATFD.js")
});

// src/index.js
log("index entry loaded");
import("./chunks/home-QA2FAXKT.js").then((m) => m.render());
import("./chunks/about-UUNV4W2V.js").then((m) => m.render());
import("./chunks/contact-7XSI2TZM.js").then((m) => m.render());
import("./chunks/profile-BBIXWADG.js").then((m) => m.render());
import("./chunks/search-OAIHHZJX.js").then((m) => m.render());
import("./chunks/settings-QN6IAMDB.js");
import("./chunks/settings-QN6IAMDB.js");
import("./chunks/detail-3FNJBNPG.js").then((m) => m.render());
import("./chunks/team-UUHTYSIW.js").then((m) => m.render());
import("./chunks/page2-extra-AQQRCA3B.js").then((m) => m.side());
import("./chunks/page3-stats-NA2USULR.js").then((m) => m.stats());
window.loadTemplate = (name) => globImport_templates_js(`./templates/${name}.js`);
window.loadWidget = (name) => globImport_widgets_js(`./widgets/${name}.js`);
window.loadHelper = (name) => globImport_helpers_js(`./helpers/${name}.js`);
