// home: URL-loaded page module; nested dynamic imports inside a page
import("./extra/deep.js").then((m) => console.log("[home] deep", m.msg));

export function render(el) {
  const node = document.createElement("div");
  node.textContent = "home page rendered";
  el.appendChild(node);
}