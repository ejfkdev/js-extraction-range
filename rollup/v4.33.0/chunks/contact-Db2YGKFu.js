import { l as log } from '../index.js';

log("contact view loaded");

function render() {
  document.body.insertAdjacentHTML("beforeend", "<p>contact view rendered</p>");
}

export { render };
