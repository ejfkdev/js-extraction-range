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
        log("team view");
        // nested lazy import: this chunk lazily loads the next level
        module.import('./dashboard-OSlsGBIF.js').then((m) => m.render());
      }

    })
  };
}));
