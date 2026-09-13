import { l as log } from '../index.js';

log("home view loaded");

function render() {
  document.body.insertAdjacentHTML("beforeend", "<p>home view rendered</p>");
}

export { render };
