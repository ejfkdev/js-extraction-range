
//#region src/shared/deep.js
function log(msg, extra) {
	console.log("[shared/deep]", msg, extra === undefined ? "" : extra);
}

//#endregion
//#region src/lib-a/alpha.js
const id = "lib-a/alpha";
function alpha() {
	return id;
}

//#endregion
export { alpha, log };