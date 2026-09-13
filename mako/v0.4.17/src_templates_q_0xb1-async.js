(globalThis["makoChunk_mako-dynamic-load-demo"] = globalThis["makoChunk_mako-dynamic-load-demo"] || []).push([
    [
        "src/templates?context&glob=**/*.js&async"
    ],
    {
        /*./src/templates?context&glob=**\/*.js&async*/ "src/templates?context&glob=**/*.js&async": function(module, exports, __mako_require__) {
            const map = {
                './a.js': ()=>Promise.all([
                        __mako_require__.ensure("src/templates/a.js")
                    ]).then(__mako_require__.bind(__mako_require__, "src/templates/a.js")),
                './a': ()=>Promise.all([
                        __mako_require__.ensure("src/templates/a.js")
                    ]).then(__mako_require__.bind(__mako_require__, "src/templates/a.js")),
                './b.js': ()=>Promise.all([
                        __mako_require__.ensure("src/templates/b.js")
                    ]).then(__mako_require__.bind(__mako_require__, "src/templates/b.js")),
                './b': ()=>Promise.all([
                        __mako_require__.ensure("src/templates/b.js")
                    ]).then(__mako_require__.bind(__mako_require__, "src/templates/b.js")),
                './c.js': ()=>Promise.all([
                        __mako_require__.ensure("src/templates/c.js")
                    ]).then(__mako_require__.bind(__mako_require__, "src/templates/c.js")),
                './c': ()=>Promise.all([
                        __mako_require__.ensure("src/templates/c.js")
                    ]).then(__mako_require__.bind(__mako_require__, "src/templates/c.js"))
            };
            module.exports = (id)=>{
                if (map[id]) return map[id]();
                else {
                    const e = new Error("Cannot find module '" + id + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }
            };
        }
    }
]);

//# sourceMappingURL=src_templates_q_0xb1-async.js.map