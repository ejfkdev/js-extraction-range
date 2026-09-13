import { alpha, log } from "./chunks/alpha-MS9XE1uA.js";

//#region src/index.js
log('index entry loaded', alpha);
import('./chunks/home-3r1Ns66H.js').then((m) => m.render());
import('./chunks/about-0JYb4g-W.js').then((m) => m.render());
import('./chunks/settings-onxQs7t0.js').then((m) => m.render());
import('./chunks/team-w2JLDDq9.js').then((m) => m.render());
import('./chunks/page2_extra-0doQXmM3.js').then((m) => m.side());
window.loadWidget = (name) => import(`./widgets/${name}.js`);
window.loadTemplate = (name) => import(`./templates/${name}.js`);

//#endregion