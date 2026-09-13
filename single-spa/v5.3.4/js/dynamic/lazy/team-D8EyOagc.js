System.register([], (function (exports, module) {
  'use strict';
  return {
    execute: (function () {

      exports("render", render);

      // lazily loads dashboard which lazily loads metrics (3-level nested chain)
      module.import('../chain2/dashboard-WZNOKAk-.js').then((m) => m.render());

      function render() {
        const el = document.getElementById("root");
        if (el) el.innerHTML += "<p>team view loaded</p>";
      }

    })
  };
}));
