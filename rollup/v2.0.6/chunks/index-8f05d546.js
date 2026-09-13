function log(...args) {
  console.log("[spa]", ...args);
}

log("index entry loaded");

// SPA: 唯一的 HTML 入口只直接引用入口 js，下面所有 "页面内容" 均懒加载。

// (routes 1-5) plain lazy modules, each becomes its own chunk
import('./home-b8a2ca2f.js').then((m) => m.render());
import('./about-5e89c0e3.js').then((m) => m.render());
import('./contact-9f6c5b41.js').then((m) => m.render());
import('./profile-3b872c2c.js').then((m) => m.render());
import('./search-aa6c3cb7.js').then((m) => m.render());

// same lazily-loaded module demanded twice (bundler dedupes to one chunk)
import('./settings-e19b56a2.js');
import('./settings-e19b56a2.js');

// (route 6) directly lazy module that is also a nested target below
import('./detail-5b1b421b.js').then((m) => m.render());

// (route 7) three-level nested lazy chain: team -> dashboard -> metrics
import('./team-d3c0560e.js').then((m) => m.render());

// side-effect lazy modules
import('./page2-extra-f27fe626.js').then((m) => m.side());
import('./page3-stats-775a0708.js').then((m) => m.stats());

// runtime expression imports: static prefix + runtime suffix
// (context/glob modules, one chunk per file in each directory where the
//  bundler supports directory globs; otherwise left as runtime imports)
window.loadTemplate = (name) => import(`./templates/${name}.js`);
window.loadWidget = (name) => import(`./widgets/${name}.js`);
window.loadHelper = (name) => import(`./helpers/${name}.js`);

export { log as l };
