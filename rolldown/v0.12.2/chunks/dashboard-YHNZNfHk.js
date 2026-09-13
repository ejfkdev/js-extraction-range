import { beta } from "./beta-Nl02kBod.js";

//#region src/views/dashboard.js
function render() {
	console.log("views/dashboard rendered", beta);
	(import("./metrics-REtIZMqC.js")).then((m) => m.render());
}

//#endregion
export { render };
