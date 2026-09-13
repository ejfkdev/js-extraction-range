// src/feature-b.js
function feature(x) {
  console.log(x);
  import("./feature-b-deep-HD7LQV5E.js").then((m) => m.deep()).catch(() => void 0);
  return x;
}
export {
  feature
};
