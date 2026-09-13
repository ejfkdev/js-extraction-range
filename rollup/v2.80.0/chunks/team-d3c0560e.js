import { l as log } from './index-8f05d546.js';

function render() {
  log("team view");
  // nested lazy import: this chunk lazily loads the next level
  import('./dashboard-3297193f.js').then((m) => m.render());
}

export { render };
