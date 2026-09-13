const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./list-extra-IAXAiUpa.js","./preload-helper-Dp1pzeXC.js"])))=>i.map(i=>d[i]);
import{_ as l}from"./preload-helper-Dp1pzeXC.js";import{r as u}from"./iframe-Dev6IByd.js";function r({items:a}){return React.createElement("ul",null,(a||[]).map((p,d)=>React.createElement("li",{key:d},p)))}r.__docgenInfo={description:"",methods:[],displayName:"List"};const f={title:"Demo/List",component:r},t={args:{items:["alpha","beta","gamma"]}},e=()=>(u.useEffect(()=>{l(()=>import("./list-extra-IAXAiUpa.js"),__vite__mapDeps([0,1]),import.meta.url).then(a=>a.enhance())},[]),React.createElement(r,{items:[]}));e.__docgenInfo={description:"",methods:[],displayName:"HeavyChain"};var s,n,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    items: ['alpha', 'beta', 'gamma']
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var m,i,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  useEffect(() => {
    // nested dynamic chain: list-extra -> items-extra
    import('../components/list-extra').then(m => m.enhance());
  }, []);
  return <List items={[]} />;
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const E=["Items","HeavyChain"];export{e as HeavyChain,t as Items,E as __namedExportsOrder,f as default};
