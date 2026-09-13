import { l as log } from '../index.js';

log("settings view loaded");

function render() {
  document.body.insertAdjacentHTML("beforeend", "<p>settings view rendered</p>");
}

export { render };
