/* 手写 hel 远程模块 lib：第二个静态脚本，同样内部动态 import 懒 chunk */
console.log("[hel lib] lib-extra");
window.TEST_REMOTE_LIB_EXTRA = true;
import("/lib/lib-extra2.js").then(function (m) {
  console.log("[hel lib] lib-extra2 loaded", m && m.flag);
});