System.register([], (function (exports, module) {
  'use strict';
  return {
    execute: (function () {

      exports("l", log);

      function log(...args) {
        console.log("[spa]", ...args);
      }

      log("index entry loaded");

      // SPA: 唯一的 HTML 入口只直接引用入口 js，下面所有 "页面内容" 均懒加载。

      // (routes 1-5) plain lazy modules, each becomes its own chunk
      module.import('./chunks/home-CnesVshB.js').then((m) => m.render());
      module.import('./chunks/about-Dsfg7YvQ.js').then((m) => m.render());
      module.import('./chunks/contact-DOc1rcTA.js').then((m) => m.render());
      module.import('./chunks/profile-BbLTR59r.js').then((m) => m.render());
      module.import('./chunks/search-CUQEfNBi.js').then((m) => m.render());

      // same lazily-loaded module demanded twice (bundler dedupes to one chunk)
      module.import('./chunks/settings-DlPAJwKc.js');
      module.import('./chunks/settings-DlPAJwKc.js');

      // (route 6) directly lazy module that is also a nested target below
      module.import('./chunks/detail-B8RVtXvt.js').then((m) => m.render());

      // (route 7) three-level nested lazy chain: team -> dashboard -> metrics
      module.import('./chunks/team-BOxpZLpp.js').then((m) => m.render());

      // side-effect lazy modules
      module.import('./chunks/page2-extra-BFgFH1BO.js').then((m) => m.side());
      module.import('./chunks/page3-stats-Bb0p2Uap.js').then((m) => m.stats());

      // runtime expression imports: static prefix + runtime suffix
      // (context/glob modules, one chunk per file in each directory where the
      //  bundler supports directory globs; otherwise left as runtime imports)
      window.loadTemplate = (name) => module.import(`./templates/${name}.js`);
      window.loadWidget = (name) => module.import(`./widgets/${name}.js`);
      window.loadHelper = (name) => module.import(`./helpers/${name}.js`);

    })
  };
}));
