System.register(['../index.js'], (function () {
  'use strict';
  var log;
  return {
    setters: [function (module) {
      log = module.l;
    }],
    execute: (function () {

      log("settings view loaded");

    })
  };
}));
