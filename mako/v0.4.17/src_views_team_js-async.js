(globalThis["makoChunk_mako-dynamic-load-demo"] = globalThis["makoChunk_mako-dynamic-load-demo"] || []).push([
    [
        "src/views/team.js"
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
                id: function() {
                    return id;
                },
                gamma: function() {
                    return gamma;
                }
            });
            const id = "lib-b/gamma";
            function gamma() {
                return id;
            }
        },
        /*./src/views/team.js*/ "src/views/team.js": function(module, exports, __mako_require__) {
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "render", {
                enumerable: true,
                get: function() {
                    return render;
                }
            });
            var _gamma = __mako_require__("src/lib-b/gamma.js");
            function render() {
                console.log("views/team rendered", _gamma.gamma);
                // second-level nested dynamic import
                Promise.all([
                    __mako_require__.ensure("src/views/dashboard.js")
                ]).then(__mako_require__.bind(__mako_require__, "src/views/dashboard.js")).then((d)=>d.render());
            }
        }
    }
]);

//# sourceMappingURL=src_views_team_js-async.js.map