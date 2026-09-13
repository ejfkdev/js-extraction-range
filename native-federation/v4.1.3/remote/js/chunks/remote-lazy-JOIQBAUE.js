// src/remote-lazy.js
function start() {
  console.log("remote-lazy start");
  return import("./remoteApp1-6QIUBRNB.js").then((m) => m.init()).catch(() => void 0);
}
export {
  start
};
