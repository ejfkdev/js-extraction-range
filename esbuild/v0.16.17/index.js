import {
  log
} from "./chunks/chunk-GYQGVO2O.js";

// src/index.js
log("index entry loaded");
import("./chunks/home-XPMNG4HI.js").then((m) => m.render());
import("./chunks/about-DYTZ3WRM.js").then((m) => m.render());
import("./chunks/contact-5XD2XOUT.js").then((m) => m.render());
import("./chunks/profile-6QHKU5N7.js").then((m) => m.render());
import("./chunks/search-7QCKSQTR.js").then((m) => m.render());
import("./chunks/settings-DN42KYZJ.js");
import("./chunks/settings-DN42KYZJ.js");
import("./chunks/detail-FO67245T.js").then((m) => m.render());
import("./chunks/team-NWB2EPV2.js").then((m) => m.render());
import("./chunks/page2-extra-KAJQNVRC.js").then((m) => m.side());
import("./chunks/page3-stats-4RQRWOJ4.js").then((m) => m.stats());
window.loadTemplate = (name) => import(`./templates/${name}.js`);
window.loadWidget = (name) => import(`./widgets/${name}.js`);
window.loadHelper = (name) => import(`./helpers/${name}.js`);
