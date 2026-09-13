import {
log
} from "./chunk-b4723f77549bb923.js";
import {
__require
} from "./chunk-10c8d92e4b9ccc65.js";
import {
beta
} from "./chunk-05aa46f176333571.js";

// src/views/about.js
function render() {
  log("views/about rendered", beta);
  import("./detail.js").then((d) => d.show());
}
export {
  render
};
