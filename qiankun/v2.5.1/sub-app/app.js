// 手写静态 qiankun 子应用：HTML entry，导出 umd 生命周期到 window["app1"]
// （qiankun 通过 import-html-entry 拉取 dist/sub-app/index.html 并求值脚本）
(function (global) {
  var lifecycles = {
    bootstrap: function () {
      console.log("[sub-app] bootstrap");
      // 子应用入口内部再动态加载页面模块
      import("/sub-app/page-a.js").then(function (m) {
        m.mount();
      });
      import("/sub-app/page-b.js").then(function (m) {
        m.mount();
      });
      return Promise.resolve();
    },
    mount: function () {
      console.log("[sub-app] mount");
      return Promise.resolve();
    },
    unmount: function () {
      console.log("[sub-app] unmount");
      return Promise.resolve();
    },
  };
  global["app1"] = lifecycles;
})(window);