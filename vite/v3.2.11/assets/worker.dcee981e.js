(function(){"use strict";function o(s,e){console.log("[shared/deep]",s,e===void 0?"":e)}o("worker started"),self.onmessage=function(){postMessage("ok")}})();
