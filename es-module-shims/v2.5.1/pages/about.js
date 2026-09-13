// about: URL-loaded page module; bare import inside a page module
import { greet } from "lib-a";
import("./extra/deep.js").then((m) => console.log("[about] deep", m.msg));

export function render(el) {
  const node = document.createElement("div");
  node.textContent = "about: " + greet("about");
  el.appendChild(node);
}