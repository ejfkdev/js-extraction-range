import { l as log } from '../index.js';

function render() {
  log("dashboard view");
  // third nesting level
  import('./metrics-421eg7Ek.js').then((m) => m.render());
}

export { render };
