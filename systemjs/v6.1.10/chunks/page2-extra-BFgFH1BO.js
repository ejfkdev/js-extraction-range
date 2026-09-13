System.register(['../index.js'], (function (exports) {
  'use strict';
  var log;
  return {
    setters: [function (module) {
      log = module.l;
    }],
    execute: (function () {

      exports("side", side);

      function side() {
        log("page2-extra side effect");
      }

    })
  };
}));
