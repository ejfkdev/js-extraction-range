export function log(msg, extra) {
  console.log("[shared/deep]", msg, extra === undefined ? "" : extra);
}
