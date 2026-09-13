import { alpha, log } from "./src_shared_deep_js-[hash].js";

// src/index.js
log('index entry loaded', alpha);
import('./src_views_home_js-[hash].js').then(m => m.render());
import('./src_views_about_js-[hash].js').then(m => m.render());
import('./src_views_settings_js-[hash].js').then(m => m.render());
import('./src_views_team_js-[hash].js').then(m => m.render());
import('./src_page2-extra_js-[hash].js').then(m => m.side());
window.loadWidget = name => import(`./widgets/${name}.js`);
window.loadTemplate = name => import(`./templates/${name}.js`);
