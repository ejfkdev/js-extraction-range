import { beta } from "./src_lib-a_beta_js-[hash].js";

// src/views/dashboard.js
function render() {
	console.log('views/dashboard rendered', beta);
	import('./src_views_metrics_js-[hash].js').then(m => m.render());
}

export { render };