import { beta } from "./src_lib-a_beta_js-[hash].js";

// src/page2-extra.js
function side() {
	console.log('page2-extra chunk loaded', beta);
}

export { side };