import { l as log } from '../index.js';

function render() {
  log("team view");
  // nested lazy import: this chunk lazily loads the next level
  import('./dashboard-xJKMyl4p.js').then((m) => m.render());
}

export { render };
