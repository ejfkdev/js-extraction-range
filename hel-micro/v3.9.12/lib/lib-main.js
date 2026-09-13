/* 手写 hel 远程模块 lib：主 lib，内部再动态 import 一个懒 chunk */
console.log("[hel lib] lib-main");
window.TEST_REMOTE_LIB = { version: "1.0.0", name: "test-remote-lib" };
import("/lib/lib-lazy.js").then(function (m) {
  console.log("[hel lib] lib-lazy loaded", m && m.flag);
});