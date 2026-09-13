import { l as log } from '../index.js';

log("profile view loaded");

function render() {
  document.body.insertAdjacentHTML("beforeend", "<p>profile view rendered</p>");
}

export { render };
