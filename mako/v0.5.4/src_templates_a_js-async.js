((typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] = (typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] || []).push([
    [
        "src/templates/a.js"
    ],
    {
        /*./src/lib-b/gamma.js*/ "src/lib-b/gamma.js": function(module, exports, __mako_require__) {
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            function _export(target, all) {
                for(var name in all)Object.defineProperty(target, name, {
                    enumerable: true,
                    get: all[name]
                });
            }
            __mako_require__.e(exports, {
                gamma: function() {
                    return gamma;
                },
                id: function() {
                    return id;
                }
            });
            const id = "lib-b/gamma";
            function gamma() {
                return id;
            }
        },
        /*./src/templates/a.js*/ "src/templates/a.js": function(module, exports, __mako_require__) {
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            var _gamma = __mako_require__("src/lib-b/gamma.js");
            console.log("template a loaded (context chunk), gamma:", _gamma.gamma);
            // context chunk that itself lazily pulls another chunk
            Promise.all([
                __mako_require__.ensure("src/views/extra.js")
            ]).then(__mako_require__.bind(__mako_require__, "src/views/extra.js")).then((m)=>m.paint());
        }
    }
]);

//# sourceMappingURL=src_templates_a_js-async.js.map