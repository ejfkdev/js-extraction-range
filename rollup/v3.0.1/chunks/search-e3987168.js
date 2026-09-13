import { l as log } from '../index.js';

log("search view loaded");

function render() {
  document.body.insertAdjacentHTML("beforeend", "<p>search view rendered</p>");
}

export { render };
