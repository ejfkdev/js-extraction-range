// src/lib-b/gamma.js
const id = "lib-b/gamma";
function gamma() {
	return id;
}
// src/views/team.js
function render() {
	console.log("views/team rendered", gamma);
	import("./dashboard-oeB_ShPL.js").then((d) => d.render());
}
export { render };
