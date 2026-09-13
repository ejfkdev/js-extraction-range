// hand-written static sub-app: system format module served from /app3/app3.js
System.register([], function (_export) {
  "use strict";
  return {
    execute: function () {
      _export("bootstrap", function () {
        return Promise.resolve();
      });
      _export("mount", function () {
        var d = document.getElementById("root");
        if (d) d.innerHTML += "<p>[app3] mounted</p>";
        return Promise.resolve();
      });
      _export("unmount", function () {
        return Promise.resolve();
      });
    },
  };
});