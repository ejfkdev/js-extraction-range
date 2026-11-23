import {
  __preload
} from "./index-582hszxm.js";

// src/lib-b/gamma.js
var id = "lib-b/gamma";
function gamma() {
  return id;
}

// src/views/team.js
function render() {
  console.log("views/team rendered", gamma);
  (__preload("q861mkzp"), import("./dashboard-q861mkzp.js")).then((d) => d.render());
}
export {
  render
};
