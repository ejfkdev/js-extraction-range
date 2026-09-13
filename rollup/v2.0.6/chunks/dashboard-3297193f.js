import { l as log } from './index-8f05d546.js';

function render() {
  log("dashboard view");
  // third nesting level
  import('./metrics-bcf9b105.js').then((m) => m.render());
}

export { render };
