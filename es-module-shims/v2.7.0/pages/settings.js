// settings: URL-loaded page module used with lazy-once style call + bare import
import { util } from "util-x";

export function ready() {
  console.log("[settings] ready", util());
}

export function render(el) {
  const node = document.createElement("div");
  node.textContent = "settings page rendered";
  el.appendChild(node);
}