System.register(['../index.js'], (function (exports, module) {
  'use strict';
  var log;
  return {
    setters: [function (module) {
      log = module.l;
    }],
    execute: (function () {

      exports("render", render);

      function render() {
        log("dashboard view");
        // third nesting level
        module.import('./metrics-BfcGBNY_.js').then((m) => m.render());
      }

    })
  };
}));
