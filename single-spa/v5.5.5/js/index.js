System.register(['./dynamic/dep/single-spa-BPwXb8Nx.js', './dynamic/dep/shared-D2KJQSCd.js'], (function (exports, module) {
  'use strict';
  var Pt, Rt, log;
  return {
    setters: [function (module) {
      Pt = module.P;
      Rt = module.R;
    }, function (module) {
      log = module.l;
    }],
    execute: (function () {

      log("root-config entry loaded");

      // ---------------------------------------------------------------------------
      // single-spa root-config: sub-app entry URLs are plain string literals in the
      // source (they survive into the built js/index.js). Sub-apps live under
      // dist/appN/ as hand-written system-format modules - they are static files
      // relative to this single index.html entry. dj's input is just the index page.
      // ---------------------------------------------------------------------------
      Pt({
        name: "app1",
        app: () => System.import("/app1/app1.js"),
        activeWhen: ["/"],
      });
      Pt({
        name: "app2",
        app: () => System.import("/app2/app2.js"),
        activeWhen: ["/app2"],
      });
      Pt({
        name: "app3",
        app: () => System.import("/app3/app3.js"),
        activeWhen: ["/app3"],
      });

      Rt();

      // lazy "routes" -> separate system chunks emitted by rollup
      module.import('./dynamic/lazy/home-JDYy4kN6.js').then((m) => m.render());
      module.import('./dynamic/lazy/about-C6tBUwwG.js').then((m) => m.render());
      module.import('./dynamic/lazy/settings-C8MOrQBP.js').then((m) => m.render());
      module.import('./dynamic/lazy/team-D8EyOagc.js').then((m) => m.render());
      module.import('./dynamic/lazy/extra-C7trGJAS.js').then((m) => m.side());

    })
  };
}));
