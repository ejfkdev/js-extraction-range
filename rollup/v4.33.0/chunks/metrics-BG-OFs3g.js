import { l as log } from '../index.js';

function render() {
  log("metrics view");
  document.body.insertAdjacentHTML("beforeend", "<p>metrics view rendered</p>");
}

export { render };
