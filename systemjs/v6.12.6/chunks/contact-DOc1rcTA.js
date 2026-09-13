System.register(['../index.js'], (function (exports) {
  'use strict';
  var log;
  return {
    setters: [function (module) {
      log = module.l;
    }],
    execute: (function () {

      exports("render", render);

      log("contact view loaded");

      function render() {
        document.body.insertAdjacentHTML("beforeend", "<p>contact view rendered</p>");
      }

    })
  };
}));
