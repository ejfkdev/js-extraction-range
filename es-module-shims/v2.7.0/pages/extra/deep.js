// deep: deeply nested page module (3rd level from entry)
export const msg = "deep-ok";
export function render(el) {
  const node = document.createElement("div");
  node.textContent = "deep rendered";
  if (el) el.appendChild(node);
}