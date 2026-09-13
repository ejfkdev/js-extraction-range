import { gamma } from "../lib-b/gamma.js";

export function render() {
  console.log("views/team rendered", gamma);
  // second-level nested dynamic import
  import("./dashboard.js").then((d) => d.render());
}
