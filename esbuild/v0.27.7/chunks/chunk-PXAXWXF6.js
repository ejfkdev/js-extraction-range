var __glob = (map) => (path) => {
  var fn = map[path];
  if (fn) return fn();
  throw new Error("Module not found in bundle: " + path);
};

// src/shared/deep.js
function log(...args) {
  console.log("[spa]", ...args);
}

export {
  __glob,
  log
};
