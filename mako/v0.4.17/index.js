!(function() {
    var chunksIdToUrlMap = {
        "src/page2-extra.js": "src_page2-extra_js-async.js",
        "src/views/home.js": "src_views_home_js-async.js",
        "src/views/about.js": "src_views_about_js-async.js",
        "src/views/metrics.js": "src_views_metrics_js-async.js",
        "src/widgets?context&glob=**/*.js&async": "src_widgets_q_0xb1-async.js",
        "src/templates/c.js": "src_templates_c_js-async.js",
        "src/views/settings.js": "src_views_settings_js-async.js",
        "src/widgets/y.js": "src_widgets_y_js-async.js",
        "src/templates/a.js": "src_templates_a_js-async.js",
        "src/views/team.js": "src_views_team_js-async.js",
        "src/views/dashboard.js": "src_views_dashboard_js-async.js",
        "src/widgets/x.js": "src_widgets_x_js-async.js",
        "src/views/extra.js": "src_views_extra_js-async.js",
        "src/templates?context&glob=**/*.js&async": "src_templates_q_0xb1-async.js",
        "src/templates/b.js": "src_templates_b_js-async.js"
    };
    var cssChunksIdToUrlMap = {};
    var e = "src/index.js";
    var cssInstalledChunks = {
        "src/index.js": 0
    };
    var m = {
        /*./src/index.js*/ "src/index.js": function(module, exports, __mako_require__) {
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            var _deep = __mako_require__("src/shared/deep.js");
            var _alpha = __mako_require__("src/lib-a/alpha.js");
            (0, _deep.log)("index entry loaded", _alpha.alpha);
            // SPA: 唯一的 HTML 入口只直接引用入口 js，以下内容全部动态 import 懒加载。
            // dj 的输入就是这一张首页。
            // named async chunk
            Promise.all([
                __mako_require__.ensure("src/views/home.js")
            ]).then(__mako_require__.bind(__mako_require__, "src/views/home.js")).then((m)=>m.render());
            // plain lazy chunk
            Promise.all([
                __mako_require__.ensure("src/views/about.js")
            ]).then(__mako_require__.bind(__mako_require__, "src/views/about.js")).then((m)=>m.render());
            // third route chunk
            Promise.all([
                __mako_require__.ensure("src/views/settings.js")
            ]).then(__mako_require__.bind(__mako_require__, "src/views/settings.js")).then((m)=>m.render());
            // 嵌套链：team -> dashboard -> metrics（三层嵌套懒加载）
            Promise.all([
                __mako_require__.ensure("src/views/team.js")
            ]).then(__mako_require__.bind(__mako_require__, "src/views/team.js")).then((m)=>m.render());
            // 懒模块
            Promise.all([
                __mako_require__.ensure("src/page2-extra.js")
            ]).then(__mako_require__.bind(__mako_require__, "src/page2-extra.js")).then((m)=>m.side());
            // 表达式 import（静态前缀 + 变量），目录 ./widgets/（2 个文件）
            window.loadWidget = (name)=>Promise.all([
                    __mako_require__.ensure("src/widgets?context&glob=**/*.js&async")
                ]).then(__mako_require__.bind(__mako_require__, "src/widgets?context&glob=**/*.js&async")).then((m)=>m(`./${name}.js`));
            // 表达式 import（静态前缀 + 变量），目录 ./templates/（3 个文件）
            window.loadTemplate = (name)=>Promise.all([
                    __mako_require__.ensure("src/templates?context&glob=**/*.js&async")
                ]).then(__mako_require__.bind(__mako_require__, "src/templates?context&glob=**/*.js&async")).then((m)=>m(`./${name}.js`));
        },
        /*./src/lib-a/alpha.js*/ "src/lib-a/alpha.js": function(module, exports, __mako_require__) {
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
                alpha: function() {
                    return alpha;
                }
            });
            const id = "lib-a/alpha";
            function alpha() {
                return id;
            }
        },
        /*./src/shared/deep.js*/ "src/shared/deep.js": function(module, exports, __mako_require__) {
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "log", {
                enumerable: true,
                get: function() {
                    return log;
                }
            });
            function log(msg, extra) {
                console.log("[shared/deep]", msg, extra === undefined ? "" : extra);
            }
        }
    };
    function createRuntime(makoModules, entryModuleId, global) {
        var modulesRegistry = {};
        function requireModule(moduleId) {
            var cachedModule = modulesRegistry[moduleId];
            if (cachedModule !== undefined) {
                return cachedModule.exports;
            }
            var module = {
                id: moduleId,
                exports: {}
            };
            modulesRegistry[moduleId] = module;
            var execOptions = {
                id: moduleId,
                module: module,
                factory: makoModules[moduleId],
                require: requireModule
            };
            requireModule.requireInterceptors.forEach(function(interceptor) {
                interceptor(execOptions);
            });
            execOptions.factory.call(execOptions.module.exports, execOptions.module, execOptions.module.exports, execOptions.require);
            return module.exports;
        }
        // module execution interceptor
        requireModule.requireInterceptors = [];
        // module utils
        requireModule.e = function(target, all) {
            for(var name in all)Object.defineProperty(target, name, {
                enumerable: true,
                get: all[name]
            });
        };
        requireModule.d = Object.defineProperty.bind(Object);
        /* mako/runtime/ensure chunk */ !(function() {
            requireModule.chunkEnsures = {};
            // This file contains only the entry chunk.
            // The chunk loading function for additional chunks
            requireModule.ensure = function(chunkId) {
                return Promise.all(Object.keys(requireModule.chunkEnsures).reduce(function(promises, key) {
                    requireModule.chunkEnsures[key](chunkId, promises);
                    return promises;
                }, []));
            };
        })();
        /* mako/runtime/ensure load js Chunk */ !(function() {
            requireModule.jsonpInstalled = {};
            var installedChunks = requireModule.jsonpInstalled;
            requireModule.chunkEnsures.jsonp = function(chunkId, promises) {
                var data = installedChunks[chunkId];
                if (data === 0) return;
                if (data) {
                    //     0       1        2
                    // [resolve, reject, promise]
                    promises.push(data[2]);
                } else {
                    var promise = new Promise(function(resolve, reject) {
                        data = installedChunks[chunkId] = [
                            resolve,
                            reject
                        ];
                    });
                    promises.push((data[2] = promise));
                    var url = requireModule.publicPath + chunksIdToUrlMap[chunkId];
                    var error = new Error();
                    var onLoadEnd = function(event) {
                        data = installedChunks[chunkId];
                        if (data !== 0) installedChunks[chunkId] = undefined;
                        if (data) {
                            var errorType = event && event.type;
                            var src = event && event.target && event.target.src;
                            error.message = 'Loading chunk ' + chunkId + ' failed. (' + errorType + ' : ' + src + ')';
                            error.name = 'ChunkLoadError';
                            error.type = errorType;
                            data[1](error);
                        }
                    };
                    // load
                    requireModule.loadScript(url, onLoadEnd, 'chunk-' + chunkId);
                    return promise;
                }
            };
        })();
        // chunk and async load
        /* mako/runtime/ensure load css chunk */ !(function() {
            var publicPathWithoutOrigin;
            requireModule.cssInstalled = cssInstalledChunks;
            // __CSS_CHUNKS_URL_MAP
            requireModule.findStylesheet = function(url) {
                try {
                    if (!publicPathWithoutOrigin) {
                        publicPathWithoutOrigin = new URL(requireModule.publicPath.replace(/^(\/\/)/, 'https:$1')).pathname;
                    }
                } catch (e) {}
                return Array.from(document.querySelectorAll('link[href][rel=stylesheet]')).find(function(link) {
                    // why not use link.href?
                    // because link.href contains hostname
                    var linkUrl = link.getAttribute('href').split('?')[0];
                    return (// relative path
                    linkUrl === url || // absolute path
                    linkUrl === requireModule.publicPath + url || // absolute path without hostname
                    (publicPathWithoutOrigin && linkUrl === publicPathWithoutOrigin + url));
                });
            };
            requireModule.createStylesheet = function(chunkId, url, oldTag, resolve, reject) {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = url;
                link.onerror = link.onload = function(event) {
                    // avoid mem leaks, from webpack
                    link.onerror = link.onload = null;
                    if (event.type === 'load') {
                        // finished loading css chunk
                        cssInstalledChunks[chunkId] = 0;
                        resolve();
                    } else {
                        // throw error and reset state
                        delete cssInstalledChunks[chunkId];
                        var errorType = event && event.type;
                        var realHref = event && event.target && event.target.href;
                        var err = new Error('Loading CSS chunk ' + chunkId + ' failed.\n(' + realHref + ')');
                        err.code = 'CSS_CHUNK_LOAD_FAILED';
                        err.type = errorType;
                        err.request = realHref;
                        link.parentNode.removeChild(link);
                        reject(err);
                    }
                };
                if (oldTag) {
                    oldTag.parentNode.insertBefore(link, oldTag.nextSibling);
                } else {
                    document.head.appendChild(link);
                }
                return link;
            };
            requireModule.chunkEnsures.css = function(chunkId, promises) {
                if (cssInstalledChunks[chunkId]) {
                    // still pending, avoid duplicate promises
                    promises.push(cssInstalledChunks[chunkId]);
                } else if (cssInstalledChunks[chunkId] !== 0 && cssChunksIdToUrlMap[chunkId]) {
                    // load chunk and save promise
                    cssInstalledChunks[chunkId] = new Promise(function(resolve, reject) {
                        var url = cssChunksIdToUrlMap[chunkId];
                        var fullUrl = requireModule.publicPath + url;
                        if (requireModule.findStylesheet(url)) {
                            // already loaded
                            resolve();
                        } else {
                            // load new css chunk
                            requireModule.createStylesheet(chunkId, fullUrl, null, resolve, reject);
                        }
                    });
                    promises.push(cssInstalledChunks[chunkId]);
                    return promises;
                }
            };
        })();
        /* mako/runtime/load script */ !(function() {
            var inProgress = {};
            requireModule.loadScript = function(url, done, key) {
                // Support worker
                if (!self.document) {
                    importScripts(url);
                    return done();
                }
                if (inProgress[url]) {
                    return inProgress[url].push(done);
                }
                var script = document.querySelector('script[src="' + url + '"]' + ', script[data-mako="' + 'mako-dynamic-load-demo' + ':' + key + '"]');
                if (!script) {
                    script = document.createElement('script');
                    script.timeout = 120;
                    script.src = url;
                }
                inProgress[url] = [
                    done
                ];
                var onLoadEnd = function(prev, event) {
                    clearTimeout(timeout);
                    var doneFns = inProgress[url];
                    delete inProgress[url];
                    if (script.parentNode) script.parentNode.removeChild(script);
                    if (doneFns) {
                        doneFns.forEach(function(fn) {
                            return fn(event);
                        });
                    }
                    if (prev) return prev(event);
                };
                // May not be needed, already has timeout attributes
                var timeout = setTimeout(onLoadEnd.bind(null, undefined, {
                    type: 'timeout',
                    target: script
                }), 120000);
                script.onerror = onLoadEnd.bind(null, script.onerror);
                script.onload = onLoadEnd.bind(null, script.onload);
                document.head.appendChild(script);
            };
        })();
        var registerModules = function(modules) {
            for(var id in modules){
                makoModules[id] = modules[id];
            }
        };
        var jsonpCallback = function(data) {
            var installedChunks = requireModule.jsonpInstalled;
            var chunkIds = data[0];
            var modules = data[1];
            if (chunkIds.some(function(id) {
                return installedChunks[id] !== 0;
            })) {
                registerModules(modules);
            }
            for(var i = 0; i < chunkIds.length; i++){
                var id = chunkIds[i];
                if (installedChunks[id]) {
                    installedChunks[id][0]();
                }
                installedChunks[id] = 0;
            }
        };
        var chunkLoadingGlobal = global['makoChunk_mako-dynamic-load-demo'] = global['makoChunk_mako-dynamic-load-demo'] || [];
        chunkLoadingGlobal.forEach(jsonpCallback.bind(null));
        chunkLoadingGlobal.push = (function(push, data) {
            push(data);
            jsonpCallback(data);
        }).bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
        /* mako/runtime/publicPath */ !function() {
            requireModule.publicPath = "/";
        }();
        /* mako/runtime/helpers */ registerModules({
            "@swc/helpers/_/_interop_require_default": function(module, exports, __mako_require__) {
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
                    _interop_require_default: function() {
                        return _interop_require_default;
                    },
                    _: function() {
                        return _interop_require_default;
                    }
                });
                function _interop_require_default(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
            },
            "@swc/helpers/_/_interop_require_wildcard": function(module, exports, __mako_require__) {
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
                    _interop_require_wildcard: function() {
                        return _interop_require_wildcard;
                    },
                    _: function() {
                        return _interop_require_wildcard;
                    }
                });
                function _getRequireWildcardCache(nodeInterop) {
                    if (typeof WeakMap !== "function") return null;
                    var cacheBabelInterop = new WeakMap();
                    var cacheNodeInterop = new WeakMap();
                    return (_getRequireWildcardCache = function(nodeInterop) {
                        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
                    })(nodeInterop);
                }
                function _interop_require_wildcard(obj, nodeInterop) {
                    if (!nodeInterop && obj && obj.__esModule) return obj;
                    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
                        default: obj
                    };
                    var cache = _getRequireWildcardCache(nodeInterop);
                    if (cache && cache.has(obj)) return cache.get(obj);
                    var newObj = {};
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
                        else newObj[key] = obj[key];
                    }
                    newObj.default = obj;
                    if (cache) cache.set(obj, newObj);
                    return newObj;
                }
            },
            "@swc/helpers/_/_export_star": function(module, exports, __mako_require__) {
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
                    _export_star: function() {
                        return _export_star;
                    },
                    _: function() {
                        return _export_star;
                    }
                });
                function _export_star(from, to) {
                    Object.keys(from).forEach(function(k) {
                        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) Object.defineProperty(to, k, {
                            enumerable: true,
                            get: function() {
                                return from[k];
                            }
                        });
                    });
                    return from;
                }
            }
        });
        global.__mako_require_module__ = requireModule;
        global.__mako_chunk_load__ = requireModule.ensure;
        requireModule(entryModuleId);
        return {
            requireModule: requireModule,
            _jsonpCallback: jsonpCallback
        };
    }
    var root = typeof globalThis !== 'undefined' ? globalThis : self;
    var runtime = createRuntime(m, e, root);
    root.jsonpCallback = runtime._jsonpCallback;
})();

//# sourceMappingURL=index.js.map