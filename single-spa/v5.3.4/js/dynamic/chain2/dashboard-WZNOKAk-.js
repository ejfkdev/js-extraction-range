System.register([], (function (exports, module) {
  'use strict';
  return {
    execute: (function () {

      exports("render", render);

      module.import('../chain3/metrics-uEBb0Kju.js').then((m) => m.render());

      function render() {
        const el = document.getElementById("root");
        if (el) el.innerHTML += "<p>dashboard view loaded</p>";
      }

    })
  };
}));
