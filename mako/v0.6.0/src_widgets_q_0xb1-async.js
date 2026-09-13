((typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] = (typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] || []).push([
    [
        "src/widgets?context&glob=**/*.js&async"
    ],
    {
        /*./src/widgets?context&glob=**\/*.js&async*/ "src/widgets?context&glob=**/*.js&async": function(module, exports, __mako_require__) {
            const map = {
                './x.js': ()=>Promise.all([
                        __mako_require__.ensure("src/widgets/x.js")
                    ]).then(__mako_require__.bind(__mako_require__, "src/widgets/x.js")),
                './x': ()=>Promise.all([
                        __mako_require__.ensure("src/widgets/x.js")
                    ]).then(__mako_require__.bind(__mako_require__, "src/widgets/x.js")),
                './y.js': ()=>Promise.all([
                        __mako_require__.ensure("src/widgets/y.js")
                    ]).then(__mako_require__.bind(__mako_require__, "src/widgets/y.js")),
                './y': ()=>Promise.all([
                        __mako_require__.ensure("src/widgets/y.js")
                    ]).then(__mako_require__.bind(__mako_require__, "src/widgets/y.js"))
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

//# sourceMappingURL=src_widgets_q_0xb1-async.js.map