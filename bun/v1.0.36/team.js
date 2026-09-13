import {
__require
} from "./chunk-10c8d92e4b9ccc65.js";
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
