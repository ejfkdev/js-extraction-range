// main entry module: static bare import + a mix of dynamic imports
// (half bare-specifier, half URL) so both resolution paths are exercised.
import { greet } from "lib-a";

document.getElementById("root").textContent = greet("index");

// --- dynamic imports, bare specifiers (resolved via import map / shims) ---
import("lib-b").then((m) => m.render(document.getElementById("root")));
import("util-x").then((m) => console.log("[main] util-x", m.tag()));

// --- dynamic imports, URL (native module resolution) ---
import("./pages/home.js").then((m) => m.render(document.getElementById("root")));

// lazy-once style: second dynamic import of same URL
import("./pages/settings.js").then((m) => m.ready && m.ready());

// expression dynamic import over page names (URL form)
window.loadPage = (name) =>
  import("./pages/" + name + ".js").then((m) => m.render(document.getElementById("root")));

// exercise the expression loader at runtime
setTimeout(() => { try { window.loadPage("about"); } catch (e) { console.error(e); } }, 50);