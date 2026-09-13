import { l as log } from '../index.js';

log("about view loaded");

function render() {
  document.body.insertAdjacentHTML("beforeend", "<p>about view rendered</p>");
}

export { render };
