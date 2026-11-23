(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var shared = require("./lib/shared");
var home = require("./views/home");
var about = require("./views/about");

shared.log("index bundle boot");
home.render();
about.render();

// 运行时注入第二个 bundle：经典 browserify 多入口懒加载写法。
// dj 需要从字符串里发现 /admin.js 并单独抓取。
window.loadAdmin = function () {
  var s = document.createElement("script");
  s.src = "/admin.js";
  document.head.appendChild(s);
};

// 侧边栏小组件：另一个独立 bundle，同样运行时注入
window.loadWidget = function () {
  var s = document.createElement("script");
  s.src = "/widgets.js";
  document.head.appendChild(s);
};
},{"./lib/shared":2,"./views/about":3,"./views/home":4}],2:[function(require,module,exports){
exports.log = function (msg) {
  if (window.console) window.console.log("[app] " + msg);
};

},{}],3:[function(require,module,exports){
var shared = require("../lib/shared");
exports.render = function () {
  shared.log("about view");
};

},{"../lib/shared":2}],4:[function(require,module,exports){
exports.render = function () {
  document.getElementById("app").innerHTML += "<p>home</p>";
};

},{}]},{},[1]);
