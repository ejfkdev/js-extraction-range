(function(){"use strict";function e(o,s){console.log("[shared/deep]",o,"")}e("worker started"),self.onmessage=function(){postMessage("ok")}})();
