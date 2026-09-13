import { beta } from "../lib-a/beta.js";

export function render() {
  console.log("views/dashboard rendered", beta);
  // third-level nested dynamic import
  import("./metrics.js").then((m) => m.render());
}
