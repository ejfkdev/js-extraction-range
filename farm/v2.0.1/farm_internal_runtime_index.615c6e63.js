(function(){if(typeof window==='undefined'||!window['d25e9ecee5c6996a0667e7c47ebdf736']||!window['d25e9ecee5c6996a0667e7c47ebdf736'].m){let e,r,t,o,n,a,i,l,u;{let e,r="u">typeof globalThis?globalThis:self;void 0===r.window&&(r.window=r),(e=void 0!==r?r:{}).require=e.require||p;}let s={},c={};var d,f={r:p,g:function(e,r){return s[e]=r,()=>p(e);},m:()=>s,c:()=>c};function p(e){if(c[e]){var r=c[e].initializer||c[e].exports;if(!f.p?.b("readModuleCache",c[e]))return r;}let t=s[e];if(!t){if(f.em[e])return f.em[e];{let r=f.p?.b("moduleNotFound",e);if(r)return r;}return console.debug(`[Farm] Module "${e}" is not registered`),{};}let o=c[e]={id:e,meta:{env:{}},exports:{},require:p};return f.p?.s("moduleCreated",o),c[e]=o,t(o,o.exports,p,f.d),f.p?.s("moduleInitialized",o),o.exports;}f.te="browser",f.em={},f.se=function(e){for(let r in e){let t=e[r];t&&t.default&&!t.__esModule&&(t={...t,__esModule:!0}),f.em[r]=t;}},(window.d25e9ecee5c6996a0667e7c47ebdf736={}).m=f;let m={},h=[],y={},w={},b={},v=[],g=new Set,E=0;function O(r){E++;let t=e;return g.add(r),r.then(()=>{g.delete(r);},e=>{g.delete(r),t&&!t.errors.includes(e)&&t.errors.push(e);}),r;}async function _(){for(;g.size;)await Promise.allSettled([...g]);}async function P(){let r,t;if(e)throw Error("Dynamic resource transaction already active");do await _();while(g.size)if(e)throw Error("Dynamic resource transaction already active");let o=R(),n={...w},a=[...v],i={errors:[],elements:new Set};e=i;let l=!1,u=()=>!l&&e===i&&t===E&&!g.size,s=async()=>{if(l||e!==i)throw Error("Dynamic resource transaction closed");l=!0;try{do await _();while(g.size)t=E;}finally{l=!1;}},c=async()=>{r=void 0;do await s();while(!u())if(i.errors.length)throw AggregateError(i.errors,"Dynamic resource transaction failed");r=t;},d=()=>{if(l||e!==i)throw Error("Dynamic resource transaction closed");if(!u())throw Error("Dynamic resource transaction must be settled before restoration");for(let e of i.elements)e.remove();for(let e of Object.keys(w))delete w[e];return Object.assign(w,n),F(o.resources,o.moduleResources),v.splice(0,v.length,...a),e=void 0,[...i.errors];},f=()=>{if(l||e!==i)throw Error("Dynamic resource transaction closed");if(r!==E||!u()||i.errors.length)throw Error("Dynamic resource transaction must be validated after its latest work");e=void 0;};return{settle:s,isSettled:u,restore:d,validate:c,finalize:f,async commit(){await c(),f();},async rollback(){do await s();while(!u())return d();}};}function j(e){let t=r.r(e);return t.__farm_async?t.default:Promise.resolve(t);}function D(e,t=!1){let o=y[e].map(e=>h[e]);if(!r.m()[e]&&(!o||0===o.length))throw Error(`Dynamic imported module "${e}" does not belong to any resource`);return t&&r.a(e),Promise.all(o.map(e=>{if(t){let r=w[e.path];if(z(e.path,!1),r)return O(M(e,`?t=${Date.now()}`));}return O(M(e,void 0));}));}function M(e,t){if(w[e.path]&&!t)return Promise.resolve();if(b[e.path])return t&&(b[e.path]=b[e.path].then(()=>$(e,0,t))),b[e.path];{let o=r.p.b("loadResource",e);if(o)return o.then(r=>{if(r.success)z(e.path);else if(r.retryWithDefaultResourceLoader)return $(e,0,t);else throw Error(`[Farm] Failed to load resource: "${e.path}, type: ${e.type}". Original Error: ${r.err}`);});}return $(e,0,t);}function $(r,t,o){var n,a;let i=v[t],l=`${i.endsWith("/")?i.slice(0,-1):i}/${r.path}${o||""}`,u=Promise.resolve();0===r.type?(n=l,u=new Promise((r,t)=>{let o=document.createElement("script");e?.elements.add(o),o.src=n,document.body.appendChild(o),o.onload=()=>{r();},o.onerror=e=>{o.remove(),t(e);};})):1===r.type&&(a=l,u=new Promise((r,t)=>{let o=document.createElement("link");e?.elements.add(o),o.rel="stylesheet",o.href=a,document.head.appendChild(o),o.onload=()=>{r();},o.onerror=e=>{o.remove(),t(e);};}));let s=u.then(()=>{w[r.path]=!0,b[r.path]=null;}).catch(e=>{if(console.warn(`[Farm] Failed to load resource "${l}" using publicPath: ${v[t]}`),++t<v.length)return $(r,t);throw b[r.path]=null,Error(`[Farm] Failed to load resource: "${r.path}, type: ${r.type}". ${e}`);});return b[r.path]=s,s;}function z(e,r=!0){w[e]=r;}function F(e,r){E++,h=e.map(e=>({...e})),y=Object.fromEntries(Object.entries(r).map(([e,r])=>[e,[...r]]));}function R(){return{resources:h.map(e=>({...e})),moduleResources:Object.fromEntries(Object.entries(y).map(([e,r])=>[e,[...r]]))};}let k=[],S={p:function(e){k=e;},s:function(e,...r){for(let t in k){let o=k[t],n=o[e];n&&n.apply(o,r);}},b:function(e,...r){for(let t in k){let o=k[t],n=o[e];if(n){let e=n.apply(o,r);if(e)return e;}}}};function x(e,r,t){Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t});}function C(e,r){return Object.keys(r).forEach(function(t){"default"===t||Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(e,t,{get:function(){return r[t];},enumerable:!0,configurable:!0});}),r;}function W(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(W=function(e){return e?t:r;})(e);}(r=f).pp=v,r.d=e=>{var t;return O((t=e,r.m()[t]&&!y[t]?j(t):function(e,t=!1){let o=y[e].map(e=>h[e]);return D(e,t).then(()=>{if(!o.every(e=>0!==e.type)){if(!r.m()[e])throw Error(`Dynamic imported module "${e}" is not registered.`);return j(e);}}).catch(r=>{throw console.error(`[Farm] Error loading dynamic module "${e}"`,r),r;});}(t)));},r.sp=function(e){for(let r in E++,e)v[r]=e[r];},r.si=function(e){E++,e.forEach(e=>{z(e);});},r.sd=F,r.gd=R,r.l=(e,r)=>O(D(e,r)),r.beginResourceTransaction=P,f.p=S,f.b=function(){S.s("bootstrap",this);};t=f.r,t.entryBindings??=(d=f,n=new Map,a=new Map,i=e=>d.c()[e.owner.id]===e.owner,l=(e,r)=>{e.listener(r),e.value=r,e.initialized=!0;},u=(e,r)=>{for(let t of a.get(e)?.values()??[])l(t,r);},{bind(e,r,t,o){let a={ready:!1,owner:r,read:t,write:o};return i(a)&&n.set(e,a),{get value(){return t();},set value(value){o(value),i(a)&&(a.ready=!0,n.set(e,a),u(e,t()));}};},seed(e,r,t){let o={ready:!0,owner:r,read:t};if(!i(o))return;let a=t();n.set(e,o),u(e,a);},complete(e,r){for(let t of r){let r=n.get(t);if(r&&r.owner===e&&i(r)){let e=r.read();r.ready=!0,u(t,e);}}},subscribe(e,r,...t){let o=a.get(e);o||a.set(e,o=new Map);let u=Symbol(),s={listener:r,initialized:!1,value:void 0};if(o.set(u,s),t.length)l(s,t[0]);else{let r=n.get(e);r?.ready&&i(r)&&l(s,r.read());}return()=>{let r=a.get(e);r?.delete(u),r?.size===0&&a.delete(e);};},snapshot(){let e=new Map([...n].filter(([,e])=>e.ready).map(([e,r])=>[e,{origin:r,value:r.read()}])),r=new Map([...a].map(([e,r])=>[e,new Map([...r].map(([e,r])=>[e,{...r}]))]));return()=>{for(let[e,t]of(n.clear(),a.clear(),r))a.set(e,new Map([...t].map(([e,r])=>[e,{...r}])));for(let[r,{origin:t,value:o}]of e)n.set(r,t),t.write?.(o);for(let e of a.values())for(let r of e.values())r.initialized&&r.listener(r.value);};}}),t.o=x,t.d=function(e,r,t){x(e,r,function(){return t;});},t._m=function(e){let r="__esModule";e[r]||Object.defineProperty(e,r,{value:!0});},t._e=C,t.i=function(e){return e&&e.__esModule?e:{default:e};},t._g=W,t.w=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=W(r);if(t&&t.has(e))return t.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a];}return o.default=e,t&&t.set(e,o),o;},t._=function(e,r,t,o){x(e,r,function(){return t[null==o?r:o];});},t.f=function(e){return void 0!==e.default?e.default:e;},o="@farm-runtime/module-helper",f.c()[o]||(f.c()[o]={id:o,exports:{defineExportStar:C}}),window.d25e9ecee5c6996a0667e7c47ebdf736.m.p.p([{name:"farm-runtime-import-meta",bootstrap:e=>{m=e;},moduleCreated:e=>{let r=m.pp?.[0]||"",t="node"===m.te;e.meta.env={NODE_ENV:"production",BASE_URL:"/",mode:"production",DEV:!1,PROD:!0}??{};var o=e.meta.env,n={dev:!1,prod:!0,BASE_URL:r,SSR:t};for(let e in n)o[e]=n[e];e.meta.url=m.m()[e.id].url;}}]);}else if(!window['d25e9ecee5c6996a0667e7c47ebdf736'].m.r.entryBindings){function createEntryLiveBindings(modules) {
    const origins = new Map();
    const listeners = new Map();
    const current = (origin)=>modules.c()[origin.owner.id] === origin.owner;
    const deliver = (subscription, value)=>{
        subscription.listener(value);
        subscription.value = value;
        subscription.initialized = true;
    };
    const emit = (key, value)=>{
        for (const subscription of listeners.get(key)?.values() ?? [])deliver(subscription, value);
    };
    return {
        bind (key, owner, read, write) {
            const origin = {
                ready: false,
                owner,
                read,
                write
            };
            if (current(origin)) origins.set(key, origin);
            return {
                get value () {
                    return read();
                },
                set value (value){
                    write(value);
                    if (current(origin)) {
                        origin.ready = true;
                        origins.set(key, origin);
                        emit(key, read());
                    }
                }
            };
        },
        seed (key, owner, read) {
            const origin = {
                ready: true,
                owner,
                read
            };
            if (!current(origin)) return;
            const value = read();
            origins.set(key, origin);
            emit(key, value);
        },
        complete (owner, keys) {
            for (const key of keys){
                const origin = origins.get(key);
                if (origin && origin.owner === owner && current(origin)) {
                    const value = origin.read();
                    origin.ready = true;
                    emit(key, value);
                }
            }
        },
        subscribe (key, listener, ...seed) {
            let bucket = listeners.get(key);
            if (!bucket) listeners.set(key, bucket = new Map());
            const token = Symbol();
            const subscription = {
                listener,
                initialized: false,
                value: undefined
            };
            bucket.set(token, subscription);
            if (seed.length) deliver(subscription, seed[0]);
            else {
                const origin = origins.get(key);
                if (origin?.ready && current(origin)) deliver(subscription, origin.read());
            }
            return ()=>{
                const active = listeners.get(key);
                active?.delete(token);
                if (active?.size === 0) listeners.delete(key);
            };
        },
        snapshot () {
            const saved = new Map([
                ...origins
            ].filter(([, origin])=>origin.ready).map(([key, origin])=>[
                    key,
                    {
                        origin,
                        value: origin.read()
                    }
                ]));
            const savedListeners = new Map([
                ...listeners
            ].map(([key, bucket])=>[
                    key,
                    new Map([
                        ...bucket
                    ].map(([token, subscription])=>[
                            token,
                            {
                                ...subscription
                            }
                        ]))
                ]));
            return ()=>{
                origins.clear();
                listeners.clear();
                for (const [key, bucket] of savedListeners)listeners.set(key, new Map([
                    ...bucket
                ].map(([token, subscription])=>[
                        token,
                        {
                            ...subscription
                        }
                    ])));
                for (const [key, { origin, value }] of saved){
                    origins.set(key, origin);
                    origin.write?.(value);
                }
                for (const bucket of listeners.values())for (const subscription of bucket.values()){
                    if (subscription.initialized) subscription.listener(subscription.value);
                }
            };
        }
    };
}
;window['d25e9ecee5c6996a0667e7c47ebdf736'].m.r.entryBindings=createEntryLiveBindings(window['d25e9ecee5c6996a0667e7c47ebdf736'].m);}}());