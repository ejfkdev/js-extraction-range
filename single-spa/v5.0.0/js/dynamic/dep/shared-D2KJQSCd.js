System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      exports("l", log);

      function log(msg, extra) {
        console.log("[root-config]", msg, "");
      }

    })
  };
}));
