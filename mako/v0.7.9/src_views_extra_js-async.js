((typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] = (typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] || []).push([
    [
        "src/views/extra.js"
    ],
    {
        /*./src/views/extra.js*/ "src/views/extra.js": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "paint", {
                enumerable: true,
                get: function() {
                    return paint;
                }
            });
            function paint() {
                console.log("views/extra painted");
            }
        }
    }
]);

//# sourceMappingURL=src_views_extra_js-async.js.map