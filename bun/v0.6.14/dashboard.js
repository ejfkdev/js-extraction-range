import {
__require,
__toESM
} from "./chunk-7a3c703e0367b35a.js";
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
