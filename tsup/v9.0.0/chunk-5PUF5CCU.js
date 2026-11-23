// src/lib/shared.ts
function log(msg) {
  if (typeof window !== "undefined" && window.console) window.console.log("[app] " + msg);
}

export {
  log
};
