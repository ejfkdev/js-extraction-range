import{r as o,j as e}from"./jsx-runtime-56DGgGmo.js";import{u as S,a as w,b as f,c as g,_ as k,e as a,M as c,L as d,O as M,S as u}from"./components-gWfHheAF.js";/**
 * @remix-run/react v2.17.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let l="positions";function b({getKey:r,...h}){let{isSpaMode:x}=S(),n=w(),m=f();g({getKey:r,storageKey:l});let p=o.useMemo(()=>{if(!r)return null;let t=r(n,m);return t!==n.key?t:null},[]);if(x)return null;let j=((t,y)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[y||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return o.createElement("script",k({},h,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${j})(${a(JSON.stringify(l))}, ${a(JSON.stringify(p))})`}}))}const O=()=>[];function H(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(c,{}),e.jsx(d,{})]}),e.jsxs("body",{children:[e.jsx("p",{children:"Loading…"}),e.jsx(u,{})]})]})}function R(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(c,{}),e.jsx(d,{})]}),e.jsxs("body",{children:[e.jsx(M,{}),e.jsx(b,{}),e.jsx(u,{})]})]})}export{H as HydrateFallback,R as default,O as links};
