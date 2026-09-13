// src/shared/deep.js
function log(msg, extra) {
  console.log("[shared/deep]", msg, extra === undefined ? "" : extra);
}

export { log };
