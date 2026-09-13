// src/main.js
var REMOTE_ENTRY = "/remote/remoteEntry.js";
var REMOTE_APP_URL = "/remote/js/remote.js";
var VIEWS = ["/views/v1.html", "/views/v2.html"];
(function boot() {
  window.__MFE_REMOTE__ = REMOTE_ENTRY;
  window.__MFE_VIEWS__ = VIEWS;
  import(REMOTE_ENTRY).then((m) => {
    console.log("remote entry loaded", m);
    return import("./chunks/bootstrap-5UO7JFAV.js");
  }).catch((e) => console.warn("remote entry failed", e));
  import(REMOTE_APP_URL).catch((e) => console.warn("remote app failed", e));
})();
var loadView = (name) => {
  if (name === "home") return import("./chunks/home-JFG5I3ZN.js");
  if (name === "about") return import("./chunks/about-WTOBDZ6Y.js");
  if (name === "team") return import("./chunks/team-RED7354Q.js");
  return Promise.reject(new Error("unknown view " + name));
};
loadView("home").catch(() => void 0);
loadView("about").catch(() => void 0);
loadView("team").catch(() => void 0);
var features = {
  f1: () => import("./chunks/f1-NEQJVILQ.js"),
  f2: () => import("./chunks/f2-JVNASGZM.js")
};
features.f1().catch(() => void 0);
features.f2().catch(() => void 0);
export {
  loadView
};
