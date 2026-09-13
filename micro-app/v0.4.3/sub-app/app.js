// 手写静态子应用入口：内部再动态加载两个页面模块
console.log("[sub-app] app.js entry");
import("/sub-app/page-a.js").then((m) => m.mount());
import("/sub-app/page-b.js").then((m) => m.mount());
