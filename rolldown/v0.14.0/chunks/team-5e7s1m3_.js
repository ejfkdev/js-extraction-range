
//#region src/lib-b/gamma.js
const id = "lib-b/gamma";
function gamma() {
	return id;
}

//#endregion
//#region src/views/team.js
function render() {
	console.log("views/team rendered", gamma);
	import("./dashboard-QW6XkksW.js").then((d) => d.render());
}

//#endregion
export { render };