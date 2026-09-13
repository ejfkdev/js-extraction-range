export function mount() {
  console.log("[sub-app] page-a");
  // 子应用内部嵌套动态加载
  import("/sub-app/page-c.js").then((m) => m.mount());
}
