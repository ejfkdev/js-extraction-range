System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      exports("render", render);

      function render() {
        const el = document.getElementById("root");
        if (el) el.innerHTML += "<p>settings view loaded</p>";
      }

    })
  };
}));
