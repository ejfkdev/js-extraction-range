// Hand-rolled fixture for harness validation. Dynamic load patterns:
//  1. ESM dynamic import (DynamicImport plugin)
//  2. document.createElement('script') with string concat (ScriptCreate / UniversalURL)
//  3. webpack-5-style minified runtime: r.u hash map + r.e chunk loader (Webpack plugin)
import("./lazy-a.js").then(function (m) { console.log(m); });

var loader = "/";
document.createElement("script").src = loader + "lazy-b.js";

var r = {}, o = {1: 0};
r.u = function (e) { return "" + e + "." + {2: "x7k2"}[e] + ".js"; };
r.p = "";
r.f = {}; r.f.j = function (e, t) {
  var i = o[e];
  if (0 !== i) { if (i) t.push(i[2]); else {
    var p = new Promise(function (a, b) { i = t.push([e, a, b]) - 1; });
    var u = r.p + r.u(e), n = document.createElement("script");
    n.src = u; document.head.appendChild(n);
  } }
};
r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); };
r.e = function (e) { var t = []; r.f.j(e, t); return Promise.all(t); };
r.e(2);

if (navigator.serviceWorker) { navigator.serviceWorker.register("./sw.js"); }