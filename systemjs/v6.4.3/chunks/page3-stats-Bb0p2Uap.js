System.register(['../index.js'], (function (exports) {
  'use strict';
  var log;
  return {
    setters: [function (module) {
      log = module.l;
    }],
    execute: (function () {

      exports("stats", stats);

      function stats() {
        log("page3-stats side effect");
      }

    })
  };
}));
