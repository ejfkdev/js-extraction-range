function log(...args) {
  console.log("[spa]", ...args);
}

log("index entry loaded");

// SPA: 唯一的 HTML 入口只直接引用入口 js，下面所有 "页面内容" 均懒加载。

// (routes 1-5) plain lazy modules, each becomes its own chunk
import('./chunks/home-DNHwI-2d.js').then((m) => m.render());
import('./chunks/about-IG_fMOPa.js').then((m) => m.render());
import('./chunks/contact-Db2YGKFu.js').then((m) => m.render());
import('./chunks/profile-DedKzoA1.js').then((m) => m.render());
import('./chunks/search-BJdhr2dI.js').then((m) => m.render());

// same lazily-loaded module demanded twice (bundler dedupes to one chunk)
import('./chunks/settings-B6XEHxws.js');
import('./chunks/settings-B6XEHxws.js');

// (route 6) directly lazy module that is also a nested target below
import('./chunks/detail-BFh6Bb9l.js').then((m) => m.render());

// (route 7) three-level nested lazy chain: team -> dashboard -> metrics
import('./chunks/team-Dbu-vJ1s.js').then((m) => m.render());

// side-effect lazy modules
import('./chunks/page2-extra-CbUHbL3x.js').then((m) => m.side());
import('./chunks/page3-stats-B5pLme8k.js').then((m) => m.stats());

// runtime expression imports: static prefix + runtime suffix
// (context/glob modules, one chunk per file in each directory where the
//  bundler supports directory globs; otherwise left as runtime imports)
window.loadTemplate = (name) => import(`./templates/${name}.js`);
window.loadWidget = (name) => import(`./widgets/${name}.js`);
window.loadHelper = (name) => import(`./helpers/${name}.js`);

export { log as l };
