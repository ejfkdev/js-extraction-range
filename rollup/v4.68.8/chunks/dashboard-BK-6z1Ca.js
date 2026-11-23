import { l as log } from '../index.js';

function render() {
  log("dashboard view");
  // third nesting level
  import('./metrics-BG-OFs3g.js').then((m) => m.render());
}

export { render };
