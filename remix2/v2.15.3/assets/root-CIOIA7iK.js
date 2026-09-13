import{r as o,j as e}from"./jsx-runtime-56DGgGmo.js";import{u as y,a as S,b as w,c as f,_ as g,M as l,L as c,O as k,S as d}from"./components-3Pj3izc1.js";/**
 * @remix-run/react v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:r,...u}){let{isSpaMode:h}=y(),n=S(),x=w();f({getKey:r,storageKey:a});let m=o.useMemo(()=>{if(!r)return null;let t=r(n,x);return t!==n.key?t:null},[]);if(h)return null;let j=((t,p)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[p||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return o.createElement("script",g({},u,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${j})(${JSON.stringify(a)}, ${JSON.stringify(m)})`}}))}const L=()=>[];function O(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(l,{}),e.jsx(c,{})]}),e.jsxs("body",{children:[e.jsx("p",{children:"Loading…"}),e.jsx(d,{})]})]})}function R(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(l,{}),e.jsx(c,{})]}),e.jsxs("body",{children:[e.jsx(k,{}),e.jsx(M,{}),e.jsx(d,{})]})]})}export{O as HydrateFallback,R as default,L as links};
