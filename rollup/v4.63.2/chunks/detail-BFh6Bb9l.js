import { l as log } from '../index.js';

function render() {
  log("detail view");
  document.body.insertAdjacentHTML("beforeend", "<p>detail view rendered</p>");
}

export { render };
