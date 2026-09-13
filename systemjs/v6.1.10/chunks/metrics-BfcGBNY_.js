System.register(['../index.js'], (function (exports) {
  'use strict';
  var log;
  return {
    setters: [function (module) {
      log = module.l;
    }],
    execute: (function () {

      exports("render", render);

      function render() {
        log("metrics view");
        document.body.insertAdjacentHTML("beforeend", "<p>metrics view rendered</p>");
      }

    })
  };
}));
