((typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] = (typeof globalThis !== "undefined" ? globalThis : self)["makoChunk_mako-dynamic-load-demo"] || []).push([
    [
        "src/views/home.js"
    ],
    {
        /*./src/views/home.js*/ "src/views/home.js": function(module, exports, __mako_require__) {
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "render", {
                enumerable: true,
                get: function() {
                    return render;
                }
            });
            var _alpha = __mako_require__("src/lib-a/alpha.js");
            var _deep = __mako_require__("src/shared/deep.js");
            function render() {
                (0, _deep.log)("views/home rendered", _alpha.alpha);
            }
        }
    }
]);

//# sourceMappingURL=src_views_home_js-async.js.map