// hand-written static sub-app: system format module served from /app1/app1.js
System.register([], function (_export) {
  "use strict";
  return {
    execute: function () {
      _export("bootstrap", function () {
        return Promise.resolve();
      });
      _export("mount", function () {
        var d = document.getElementById("root");
        if (d) d.innerHTML += "<p>[app1] mounted</p>";
        return Promise.resolve();
      });
      _export("unmount", function () {
        return Promise.resolve();
      });
      // app1 lazily pulls its own extension file
      System.import("/app1/app1-extra.js").catch(function () {});
    },
  };
});