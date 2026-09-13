(function(modules, entryModule) {
    var cache = {};
    function require(id) {
        if (cache[id]) return cache[id];
        var module = {
            id: id,
            exports: {}
        };
        modules[id](module, module.exports, require);
        cache[id] = module;
        return module.exports;
    }
    require(entryModule);
})({
    "node_modules/@farmfe/runtime/src/plugin.ts.farm-runtime": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "FarmRuntimePluginContainer", {
            enumerable: true,
            get: function() {
                return FarmRuntimePluginContainer;
            }
        });
        class FarmRuntimePluginContainer {
            plugins = [];
            constructor(plugins){
                this.plugins = plugins;
            }
            hookSerial(hookName, ...args) {
                for (const plugin of this.plugins){
                    const hook = plugin[hookName];
                    if (hook) {
                        hook.apply(plugin, args);
                    }
                }
            }
            hookBail(hookName, ...args) {
                for (const plugin of this.plugins){
                    const hook = plugin[hookName];
                    if (hook) {
                        const result = hook.apply(plugin, args);
                        if (result) {
                            return result;
                        }
                    }
                }
            }
        }
    },
    "node_modules/@swc/legacy-helpers/lib/_interop_require_default.js.farm-runtime": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "default", {
            enumerable: true,
            get: function() {
                return _interopRequireDefault;
            }
        });
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
    },
    "node_modules/@swc/helpers/lib/_interop_require_default.js.farm-runtime": function(module, exports, require) {
        module.exports = require("node_modules/@swc/legacy-helpers/lib/_interop_require_default.js.farm-runtime");
    },
    "node_modules/@farmfe/runtime/src/module.ts.farm-runtime": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "Module", {
            enumerable: true,
            get: function() {
                return Module;
            }
        });
        class Module {
            constructor(id){
                this.id = id;
                this.exports = {};
                this.meta = {};
            }
        }
    },
    "node_modules/@swc/legacy-helpers/lib/_interop_require_wildcard.js.farm-runtime": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "default", {
            enumerable: true,
            get: function() {
                return _interopRequireWildcard;
            }
        });
        function _getRequireWildcardCache(nodeInterop) {
            if (typeof WeakMap !== "function") return null;
            var cacheBabelInterop = new WeakMap();
            var cacheNodeInterop = new WeakMap();
            return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
            })(nodeInterop);
        }
        function _interopRequireWildcard(obj, nodeInterop) {
            if (!nodeInterop && obj && obj.__esModule) {
                return obj;
            }
            if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
                return {
                    default: obj
                };
            }
            var cache = _getRequireWildcardCache(nodeInterop);
            if (cache && cache.has(obj)) {
                return cache.get(obj);
            }
            var newObj = {};
            var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for(var key in obj){
                if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                    if (desc && (desc.get || desc.set)) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
            newObj.default = obj;
            if (cache) {
                cache.set(obj, newObj);
            }
            return newObj;
        }
    },
    "node_modules/@farmfe/runtime-plugin-hmr/src/index.ts.farm-runtime": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "default", {
            enumerable: true,
            get: function() {
                return _default;
            }
        });
        var _hotModuleState = require("node_modules/@farmfe/runtime-plugin-hmr/src/hot-module-state.ts.farm-runtime");
        const port = 9801;
        const host = "localhost";
        var _default = {
            name: "farm-runtime-hmr-client-plugin",
            bootstrap (moduleSystem) {
                console.log("[Farm HMR] connecting to the server...");
                const socket = new WebSocket(`ws://${host}:${port}`);
                socket.addEventListener("message", (event)=>{
                    const data = JSON.parse(event.data);
                    import(`/__hmr?id=${data.id}`).then((result)=>{
                        (0, _hotModuleState.applyHotUpdates)(result.default, moduleSystem);
                    });
                });
                socket.addEventListener("open", ()=>{
                    console.log("[Farm HMR] connected to the server");
                });
            },
            moduleCreated (module) {
                module.meta.hot = (0, _hotModuleState.createHotContext)(module.id);
            }
        };
    },
    "node_modules/@farmfe/runtime/src/module-system.ts.farm-runtime": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "ModuleSystem", {
            enumerable: true,
            get: function() {
                return ModuleSystem;
            }
        });
        var _module = require("node_modules/@farmfe/runtime/src/module.ts.farm-runtime");
        var _plugin = require("node_modules/@farmfe/runtime/src/plugin.ts.farm-runtime");
        var _resourceLoader = require("node_modules/@farmfe/runtime/src/resource-loader.ts.farm-runtime");
        class ModuleSystem {
            constructor(){
                this.modules = {};
                this.cache = {};
                this.publicPaths = [];
                this.dynamicModuleResourcesMap = {};
                this.resourceLoader = new _resourceLoader.ResourceLoader(this.publicPaths);
                this.pluginContainer = new _plugin.FarmRuntimePluginContainer([]);
            }
            require(moduleId) {
                if (this.cache[moduleId]) {
                    const shouldSkip = this.pluginContainer.hookBail("readModuleCache", this.cache[moduleId]);
                    if (!shouldSkip) {
                        return this.cache[moduleId].exports;
                    }
                }
                const initializer = this.modules[moduleId];
                if (!initializer) {
                    throw new Error(`Module "${moduleId}" is not registered`);
                }
                const module = new _module.Module(moduleId);
                this.pluginContainer.hookSerial("moduleCreated", module);
                this.cache[moduleId] = module;
                initializer(module, module.exports, this.require.bind(this), this.dynamicRequire.bind(this));
                this.pluginContainer.hookSerial("moduleInitialized", module);
                return module.exports;
            }
            dynamicRequire(moduleId) {
                const resources = this.dynamicModuleResourcesMap[moduleId];
                if (!resources || resources.length === 0) {
                    throw new Error(`Dynamic imported module "${module}" does not belong to any resource`);
                }
                return Promise.all(resources.map((resource)=>this.resourceLoader.load(resource))).then(()=>this.require(moduleId));
            }
            register(moduleId, initializer) {
                if (this.modules[moduleId]) {
                    throw new Error(`Module "${moduleId}" has registered! It should not be registered twice`);
                }
                this.modules[moduleId] = initializer;
            }
            update(moduleId, init) {
                this.modules[moduleId] = init;
                this.clearCache(moduleId);
            }
            delete(moduleId) {
                if (this.modules[moduleId]) {
                    delete this.modules[moduleId];
                    this.clearCache(moduleId);
                    return true;
                } else {
                    return false;
                }
            }
            clearCache(moduleId) {
                if (this.modules[moduleId]) {
                    delete this.cache[moduleId];
                    return true;
                } else {
                    return false;
                }
            }
            setDynamicModuleResourcesMap(dynamicModuleResourcesMap) {
                this.dynamicModuleResourcesMap = dynamicModuleResourcesMap;
            }
            setPublicPaths(publicPaths) {
                this.publicPaths = publicPaths;
                this.resourceLoader.publicPaths = this.publicPaths;
            }
            setPlugins(plugins) {
                this.pluginContainer.plugins = plugins;
            }
            bootstrap() {
                this.pluginContainer.hookSerial("bootstrap", this);
            }
        }
    },
    "node_modules/@swc/helpers/lib/_interop_require_wildcard.js.farm-runtime": function(module, exports, require) {
        module.exports = require("node_modules/@swc/legacy-helpers/lib/_interop_require_wildcard.js.farm-runtime");
    },
    "node_modules/@farmfe/runtime/src/index.ts.farm-runtime": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _interopRequireDefault = require("node_modules/@swc/helpers/lib/_interop_require_default.js.farm-runtime").default;
        var _indexTs = _interopRequireDefault(require("node_modules/@farmfe/runtime-plugin-hmr/src/index.ts.farm-runtime"));
        var _moduleSystem = require("node_modules/@farmfe/runtime/src/module-system.ts.farm-runtime");
        const __farm_global_this__ = globalThis || window || global || self;
        __farm_global_this__.noop = function() {};
        __farm_global_this__.__farm_module_system__ = (function() {
            const moduleSystem = new _moduleSystem.ModuleSystem();
            return function() {
                return moduleSystem;
            };
        })()();
        __farm_global_this__.__farm_module_system__.setPlugins([
            _indexTs.default
        ]);
    },
    "node_modules/@farmfe/runtime/src/resource-loader.ts.farm-runtime": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "ResourceLoader", {
            enumerable: true,
            get: function() {
                return ResourceLoader;
            }
        });
        class ResourceLoader {
            constructor(publicPaths){
                this.publicPaths = publicPaths;
            }
            async load(resource) {
                let index = 0;
                while(index < this.publicPaths.length){
                    const publicPath = this.publicPaths[index];
                    const url = `${publicPath}/${resource.path}`;
                    try {
                        if (resource.type === "script") {
                            await this._loadScript(url);
                        } else if (resource.type === "link") {
                            await this._loadLink(url);
                        }
                        return;
                    } catch (e) {
                        index++;
                    }
                }
            }
            async _loadScript(path) {
                if (__FARM_TARGET_ENV__ === "node") {
                    await import(path);
                } else {
                    return new Promise((resolve, reject)=>{
                        const script = document.createElement("script");
                        script.src = path;
                        document.body.appendChild(script);
                        script.onload = ()=>{
                            resolve();
                        };
                        script.onerror = (e)=>{
                            reject(e);
                        };
                    });
                }
            }
            async _loadLink(path) {
                if (__FARM_TARGET_ENV__ === "node") {} else {
                    return new Promise((resolve, reject)=>{
                        const link = document.createElement("link");
                        link.rel = "stylesheet";
                        link.href = path;
                        document.head.appendChild(link);
                        link.onload = ()=>{
                            resolve();
                        };
                        link.onerror = (e)=>{
                            reject(e);
                        };
                    });
                }
            }
        }
    },
    "node_modules/@farmfe/runtime-plugin-hmr/src/hot-module-state.ts.farm-runtime": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        function _export(target, all) {
            for(var name in all)Object.defineProperty(target, name, {
                enumerable: true,
                get: all[name]
            });
        }
        _export(exports, {
            HotModuleState: function() {
                return HotModuleState;
            },
            createHotContext: function() {
                return createHotContext;
            },
            applyHotUpdates: function() {
                return applyHotUpdates;
            }
        });
        const REGISTERED_HOT_MODULES = new Map();
        class HotModuleState {
            acceptCallbacks = [];
            constructor(id){
                this.id = id;
            }
            accept(callback) {
                if (callback) {
                    this.acceptCallbacks.push(callback);
                }
            }
        }
        function createHotContext(id) {
            const state = new HotModuleState(id);
            REGISTERED_HOT_MODULES.set(id, state);
            return state;
        }
        function applyHotUpdates(result, moduleSystem) {
            console.log(result);
            for (const id of result.removed){
                moduleSystem.delete(id);
            }
            for (const id of result.added){
                moduleSystem.register(id, result.modules[id]);
            }
            for (const id of result.changed){
                moduleSystem.update(id, result.modules[id]);
                if (!result.boundaries[id]) {
                    window.location.reload();
                }
            }
            for (const updated_id of Object.keys(result.boundaries)){
                const chains = result.boundaries[updated_id];
                for (const chain of chains){
                    for (const id of chain){
                        moduleSystem.clearCache(id);
                    }
                }
                for (const chain of chains){
                    moduleSystem.require(chain[chain.length - 1]);
                }
            }
        }
    }
}, "node_modules/@farmfe/runtime/src/index.ts.farm-runtime");
(function(modules) {
    for(var key in modules){
        var __farm_global_this__ = globalThis || window || global || self;
        __farm_global_this__.__farm_module_system__.register(key, modules[key]);
    }
})({
    "src/shared/deep.js": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "log", {
            enumerable: true,
            get: function() {
                return log;
            }
        });
        function log(msg, extra) {
            console.log("[shared/deep]", msg, extra === undefined ? "" : extra);
        }
    },
    "node_modules/@swc/helpers/lib/_interop_require_wildcard.js": function(module, exports, require) {
        module.exports = require("node_modules/@swc/legacy-helpers/lib/_interop_require_wildcard.js");
    },
    "src/index.js": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _deep = require("src/shared/deep.js");
        var _alpha = require("src/lib-a/alpha.js");
        (0, _deep.log)("index entry loaded", _alpha.alpha);
        import("./views/home.js").then((m)=>m.render());
        import("./views/about.js").then((m)=>m.render());
        import("./views/settings.js").then((m)=>m.render());
        import("./views/team.js").then((m)=>m.render());
        import("./page2-extra.js").then((m)=>m.side());
        window.loadWidget = (name)=>import(`./widgets/${name}.js`);
        window.loadTemplate = (name)=>import(`./templates/${name}.js`);
    },
    "src/lib-a/alpha.js": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        function _export(target, all) {
            for(var name in all)Object.defineProperty(target, name, {
                enumerable: true,
                get: all[name]
            });
        }
        _export(exports, {
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
    "node_modules/@swc/legacy-helpers/lib/_interop_require_wildcard.js": function(module, exports, require) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "default", {
            enumerable: true,
            get: function() {
                return _interopRequireWildcard;
            }
        });
        function _getRequireWildcardCache(nodeInterop) {
            if (typeof WeakMap !== "function") return null;
            var cacheBabelInterop = new WeakMap();
            var cacheNodeInterop = new WeakMap();
            return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
            })(nodeInterop);
        }
        function _interopRequireWildcard(obj, nodeInterop) {
            if (!nodeInterop && obj && obj.__esModule) {
                return obj;
            }
            if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
                return {
                    default: obj
                };
            }
            var cache = _getRequireWildcardCache(nodeInterop);
            if (cache && cache.has(obj)) {
                return cache.get(obj);
            }
            var newObj = {};
            var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for(var key in obj){
                if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                    if (desc && (desc.get || desc.set)) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
            newObj.default = obj;
            if (cache) {
                cache.set(obj, newObj);
            }
            return newObj;
        }
    }
});
const __farm_global_this__ = globalThis || window || global || self;
const farmModuleSystem = __farm_global_this__.__farm_module_system__;
farmModuleSystem.bootstrap();
const entry = farmModuleSystem.require("src/index.js").default;
export default entry;
