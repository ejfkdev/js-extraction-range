// hand-written static sub-app: system format module served from /app2/app2.js
System.register([], function (_export) {
  "use strict";
  return {
    execute: function () {
      _export("bootstrap", function () {
        return Promise.resolve();
      });
      _export("mount", function () {
        var d = document.getElementById("root");
        if (d) d.innerHTML += "<p>[app2] mounted</p>";
        return Promise.resolve();
      });
      _export("unmount", function () {
        return Promise.resolve();
      });
    },
  };
});