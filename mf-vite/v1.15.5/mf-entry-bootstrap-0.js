
const __mfCacheGlobalKey = "__mf_module_cache__";
globalThis[__mfCacheGlobalKey] ||= { share: {}, remote: {} };
globalThis[__mfCacheGlobalKey].share ||= {};
globalThis[__mfCacheGlobalKey].remote ||= {};
const __mfModuleCache = globalThis[__mfCacheGlobalKey];

const __mfImport = (src) =>
  globalThis.System && typeof globalThis.System.import === 'function'
    ? globalThis.System.import(src)
    : import(src);
(async () => {
  const { initHost } = await __mfImport("/assets/hostInit-DLFxp7_n.js");
  const runtime = await initHost();
  const __mfRemotePreloads = [runtime.loadRemote("remote/remote-app")];
  await Promise.all(__mfRemotePreloads);
})().then(() => __mfImport("/assets/index-CQ-visr9.js"));
