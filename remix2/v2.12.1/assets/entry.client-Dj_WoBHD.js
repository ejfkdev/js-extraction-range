import{r,j as R}from"./jsx-runtime-56DGgGmo.js";import{E as v,i as C,d as M,e as y,m as g,s as E,f as b,g as S,h as F,j as P,k,l as D,R as z,n as j,o as H,p as L,r as O}from"./components-CWg3KUHl.js";/**
 * @remix-run/react v2.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T(u){if(!u)return null;let m=Object.entries(u),s={};for(let[a,e]of m)if(e&&e.__type==="RouteErrorResponse")s[a]=new v(e.status,e.statusText,e.data,e.internal===!0);else if(e&&e.__type==="Error"){if(e.__subType){let i=window[e.__subType];if(typeof i=="function")try{let o=new i(e.message);o.stack=e.stack,s[a]=o}catch{}}if(s[a]==null){let i=new Error(e.message);i.stack=e.stack,s[a]=i}}else s[a]=e;return s}/**
 * @remix-run/react v2.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let n,t,c=!1,f;new Promise(u=>{f=u}).catch(()=>{});function B(u){if(!t){if(window.__remixContext.future.unstable_singleFetch){if(!n){let l=window.__remixContext.stream;C(l,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,n=M(l,window).then(d=>{window.__remixContext.state=d.value,n.value=!0}).catch(d=>{n.error=d})}if(n.error)throw n.error;if(!n.value)throw n}let i=y(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),o;if(!window.__remixContext.isSpaMode){o={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let l=g(i,window.location,window.__remixContext.basename);if(l)for(let d of l){let _=d.route.id,x=window.__remixRouteModules[_],w=window.__remixManifest.routes[_];x&&E(w,x,window.__remixContext.isSpaMode)&&(x.HydrateFallback||!w.hasLoader)?o.loaderData[_]=void 0:w&&!w.hasLoader&&(o.loaderData[_]=null)}o&&o.errors&&(o.errors=T(o.errors))}t=b({routes:i,history:P(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:window.__remixContext.future.unstable_singleFetch===!0},hydrationData:o,mapRouteProperties:L,unstable_dataStrategy:window.__remixContext.future.unstable_singleFetch?F(window.__remixManifest,window.__remixRouteModules,()=>t):void 0,unstable_patchRoutesOnNavigation:S(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename)}),t.state.initialized&&(c=!0,t.initialize()),t.createRoutesForHMR=k,window.__remixRouter=t,f&&f(t)}let[m,s]=r.useState(void 0),[a,e]=r.useState(t.state.location);return r.useLayoutEffect(()=>{c||(c=!0,t.initialize())},[]),r.useLayoutEffect(()=>t.subscribe(i=>{i.location!==a&&e(i.location)}),[a]),D(t,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),r.createElement(r.Fragment,null,r.createElement(z.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:m,isSpaMode:window.__remixContext.isSpaMode}},r.createElement(j,{location:a},r.createElement(H,{router:t,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.unstable_singleFetch?r.createElement(r.Fragment,null):null)}var h,p=O;p.createRoot,h=p.hydrateRoot;r.startTransition(()=>{h(document,R.jsx(r.StrictMode,{children:R.jsx(B,{})}))});
