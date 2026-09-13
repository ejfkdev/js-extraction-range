import {
__require,
__toESM
} from "./chunk-7a3c703e0367b35a.js";
import {
gamma
} from "./chunk-a37100b4292d8558.js";

// src/views/team.js
function render() {
  console.log("views/team rendered", gamma);
  import("./dashboard.js").then((d) => d.render());
}
export {
  render
};
