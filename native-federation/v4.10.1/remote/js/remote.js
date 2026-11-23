// src/remote-app.js
function registerRemote(host) {
  const node = document.createElement("div");
  node.dataset.remote = "remote-app";
  node.textContent = "remote-app registered";
  const body = host && host.documentElement ? host.body : document.body;
  body.appendChild(node);
}

// src/remote.js
import("./chunks/feature-a-O7MDJEY5.js").then((m) => m.feature("feature-a loaded")).catch(() => void 0);
import("./chunks/feature-b-FCMJKDFZ.js").then((m) => m.feature("feature-b loaded")).catch(() => void 0);
import("./chunks/remote-lazy-JOIQBAUE.js").then((m) => m.start()).catch(() => void 0);
registerRemote(document);
