((typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] = (typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] || []).push([
    [
        "src/views/dashboard.js"
    ],
    {
        /*./src/lib-a/beta.js*/ "src/lib-a/beta.js": function(module, exports, __mako_require__) {
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
                beta: function() {
                    return beta;
                },
                id: function() {
                    return id;
                }
            });
            const id = "lib-a/beta";
            function beta() {
                return id;
            }
        },
        /*./src/views/dashboard.js*/ "src/views/dashboard.js": function(module, exports, __mako_require__) {
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "render", {
                enumerable: true,
                get: function() {
                    return render;
                }
            });
            var _beta = __mako_require__("src/lib-a/beta.js");
            function render() {
                console.log("views/dashboard rendered", _beta.beta);
                // third-level nested dynamic import
                Promise.all([
                    __mako_require__.ensure("src/views/metrics.js")
                ]).then(__mako_require__.bind(__mako_require__, "src/views/metrics.js")).then((m)=>m.render());
            }
        }
    }
]);

//# sourceMappingURL=src_views_dashboard_js-async.js.map