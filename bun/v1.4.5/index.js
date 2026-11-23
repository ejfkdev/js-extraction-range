import {
  __preload,
  __chunks,
  log,
  alpha
} from "./index-582hszxm.js";
__chunks(import.meta.url,["6v453cqf","tcd8xzwd","xkpd8g8c","ekvq64nh","14fkrt4v","c0eqtjf7","582hszxm","q861mkzp","p262eh6k","vgmpdgqh"],[["./index.js",6],["./settings-tcd8xzwd.js"],["./home-xkpd8g8c.js",6],["./about-ekvq64nh.js"],["./team-14fkrt4v.js",6],["./page2-extra-c0eqtjf7.js",8],["./index-582hszxm.js"],["./dashboard-q861mkzp.js",6,8],["./index-p262eh6k.js"],["./metrics-vgmpdgqh.js",6]],0);

// src/index.js
log("index entry loaded", alpha);
(__preload("xkpd8g8c"), import("./home-xkpd8g8c.js")).then((m) => m.render());
__preload("ekvq64nh"), import("./about-ekvq64nh.js");
(__preload("14fkrt4v"), import("./team-14fkrt4v.js")).then((m) => m.render());
(__preload("c0eqtjf7"), import("./page2-extra-c0eqtjf7.js")).then((m) => m.side());
__preload("tcd8xzwd"), import("./settings-tcd8xzwd.js");
__preload("tcd8xzwd"), import("./settings-tcd8xzwd.js");
window.loadTemplate = (name) => import(`./templates/${name}.js`);
window.loadWidget = (name) => import(`./widgets/${name}.js`);
