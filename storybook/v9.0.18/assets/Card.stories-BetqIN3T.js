import{r as u,_}from"./iframe-B8HuJuUa.js";function s({title:e}){return React.createElement("div",{className:"card"},React.createElement("h3",null,e),React.createElement("p",null,"card body"))}s.__docgenInfo={description:"",methods:[],displayName:"Card"};const f={title:"Demo/Card",component:s},a={args:{title:"Basic"}},t=()=>(u.useEffect(()=>{_(()=>import("../components/theme-dark.jsx"),[],import.meta.url).then(e=>e.apply())},[]),React.createElement(s,{title:"ThemedDark"})),r=()=>(u.useEffect(()=>{_(()=>import("../components/theme-light.jsx"),[],import.meta.url).then(e=>e.apply())},[]),React.createElement(s,{title:"ThemedLight"}));t.__docgenInfo={description:"",methods:[],displayName:"ThemedDark"};r.__docgenInfo={description:"",methods:[],displayName:"ThemedLight"};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Basic'
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,d,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  useEffect(() => {
    import(\`../components/theme-\${'dark'}.jsx\`).then(m => m.apply());
  }, []);
  return <Card title="ThemedDark" />;
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,l,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  useEffect(() => {
    import(\`../components/theme-\${'light'}.jsx\`).then(m => m.apply());
  }, []);
  return <Card title="ThemedLight" />;
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const g=["Basic","ThemedDark","ThemedLight"];export{a as Basic,t as ThemedDark,r as ThemedLight,g as __namedExportsOrder,f as default};
