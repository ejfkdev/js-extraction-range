import { l as log } from './index-8f05d546.js';

log("about view loaded");

function render() {
  document.body.insertAdjacentHTML("beforeend", "<p>about view rendered</p>");
}

export { render };
