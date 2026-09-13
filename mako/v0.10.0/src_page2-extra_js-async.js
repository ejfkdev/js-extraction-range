((typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] = (typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] || []).push([
    [
        "src/page2-extra.js"
    ],
    {
        /*./src/lib-a/beta.js*/ "src/lib-a/beta.js": function(module, exports, __mako_require__) {
            "use strict";
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
        /*./src/page2-extra.js*/ "src/page2-extra.js": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "side", {
                enumerable: true,
                get: function() {
                    return side;
                }
            });
            var _beta = __mako_require__("src/lib-a/beta.js");
            function side() {
                console.log("page2-extra chunk loaded", _beta.beta);
            }
        }
    }
]);

//# sourceMappingURL=src_page2-extra_js-async.js.map