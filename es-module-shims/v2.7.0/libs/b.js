// lib-b: bare specifier to another bare specifier (nested map resolution)
import { greet } from "lib-a";

export function render(el) {
  el.textContent += " :: " + greet("lib-b");
}
export const version = "b-1";