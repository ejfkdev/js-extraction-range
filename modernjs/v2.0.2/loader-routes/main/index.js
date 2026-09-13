var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.modern-js/main/route-server-loaders.js
var route_server_loaders_exports = {};
__export(route_server_loaders_exports, {
  routes: () => routes
});
module.exports = __toCommonJS(route_server_loaders_exports);
var routes = [
  {
    "path": "/",
    "children": [
      {
        "path": "about",
        "children": [
          {
            "_component": "@_modern_js_src/routes/about/page.tsx",
            "index": true,
            "id": "about/page",
            "type": "nested"
          }
        ],
        "isRoot": false,
        "id": "about/layout",
        "type": "nested"
      },
      {
        "path": "detail",
        "children": [
          {
            "_component": "@_modern_js_src/routes/detail/page.tsx",
            "index": true,
            "id": "detail/page",
            "type": "nested"
          }
        ],
        "isRoot": false,
        "id": "detail/layout",
        "type": "nested"
      },
      {
        "_component": "@_modern_js_src/routes/page.tsx",
        "index": true,
        "id": "page",
        "type": "nested"
      },
      {
        "path": "settings",
        "children": [
          {
            "_component": "@_modern_js_src/routes/settings/page.tsx",
            "index": true,
            "id": "settings/page",
            "type": "nested"
          }
        ],
        "isRoot": false,
        "id": "settings/layout",
        "type": "nested"
      },
      {
        "path": "team",
        "children": [
          {
            "_component": "@_modern_js_src/routes/team/page.tsx",
            "index": true,
            "id": "team/page",
            "type": "nested"
          }
        ],
        "isRoot": false,
        "id": "team/layout",
        "type": "nested"
      }
    ],
    "isRoot": true,
    "_component": "@_modern_js_src/routes/layout.tsx",
    "id": "layout",
    "type": "nested"
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  routes
});
