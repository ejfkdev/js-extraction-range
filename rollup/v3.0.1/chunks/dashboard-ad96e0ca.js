import { l as log } from '../index.js';

function render() {
  log("dashboard view");
  // third nesting level
  import('./metrics-fdbf1947.js').then((m) => m.render());
}

export { render };
