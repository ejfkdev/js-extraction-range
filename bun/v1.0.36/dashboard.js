import {
__require
} from "./chunk-10c8d92e4b9ccc65.js";
import {
beta
} from "./chunk-05aa46f176333571.js";

// src/views/dashboard.js
function render() {
  console.log("views/dashboard rendered", beta);
  import("./metrics.js").then((m) => m.render());
}
export {
  render
};
