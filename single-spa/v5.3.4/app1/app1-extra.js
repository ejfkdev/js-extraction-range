// hand-written static extension used by app1
System.register([], function (_export) {
  "use strict";
  return {
    execute: function () {
      _export("render", function () {
        var d = document.getElementById("root");
        if (d) d.innerHTML += "<p>[app1-extra] loaded</p>";
      });
    },
  };
});