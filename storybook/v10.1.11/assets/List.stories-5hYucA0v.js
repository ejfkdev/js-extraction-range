const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./list-extra-B4yKYlQT.js","./preload-helper-PPVm8Dsz.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./preload-helper-PPVm8Dsz.js";import{r as m}from"./iframe-CBpktCam.js";function r({items:a}){return React.createElement("ul",null,(a||[]).map((s,n)=>React.createElement("li",{key:n},s)))}r.__docgenInfo={description:"",methods:[],displayName:"List"};const p={title:"Demo/List",component:r},t={args:{items:["alpha","beta","gamma"]}},e=()=>(m.useEffect(()=>{o(()=>import("./list-extra-B4yKYlQT.js"),__vite__mapDeps([0,1]),import.meta.url).then(a=>a.enhance())},[]),React.createElement(r,{items:[]}));e.__docgenInfo={description:"",methods:[],displayName:"HeavyChain"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['alpha', 'beta', 'gamma']
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  useEffect(() => {
    // nested dynamic chain: list-extra -> items-extra
    import('../components/list-extra').then(m => m.enhance());
  }, []);
  return <List items={[]} />;
}`,...e.parameters?.docs?.source}}};const d=["Items","HeavyChain"];export{e as HeavyChain,t as Items,d as __namedExportsOrder,p as default};
