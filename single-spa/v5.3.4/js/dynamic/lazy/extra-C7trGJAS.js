System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      exports("side", side);

      function side() {
        console.log("extra loaded");
      }

    })
  };
}));
