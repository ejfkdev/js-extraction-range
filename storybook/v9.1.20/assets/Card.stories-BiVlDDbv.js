import{_ as u}from"./preload-helper-Dp1pzeXC.js";import{r as _}from"./iframe-Dev6IByd.js";function o({title:e}){return React.createElement("div",{className:"card"},React.createElement("h3",null,e),React.createElement("p",null,"card body"))}o.__docgenInfo={description:"",methods:[],displayName:"Card"};const g={title:"Demo/Card",component:o},a={args:{title:"Basic"}},t=()=>(_.useEffect(()=>{u(()=>import("../components/theme-dark.jsx"),[],import.meta.url).then(e=>e.apply())},[]),React.createElement(o,{title:"ThemedDark"})),r=()=>(_.useEffect(()=>{u(()=>import("../components/theme-light.jsx"),[],import.meta.url).then(e=>e.apply())},[]),React.createElement(o,{title:"ThemedLight"}));t.__docgenInfo={description:"",methods:[],displayName:"ThemedDark"};r.__docgenInfo={description:"",methods:[],displayName:"ThemedLight"};var s,m,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Basic'
  }
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,d,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  useEffect(() => {
    import(\`../components/theme-\${'dark'}.jsx\`).then(m => m.apply());
  }, []);
  return <Card title="ThemedDark" />;
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,l,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  useEffect(() => {
    import(\`../components/theme-\${'light'}.jsx\`).then(m => m.apply());
  }, []);
  return <Card title="ThemedLight" />;
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const T=["Basic","ThemedDark","ThemedLight"];export{a as Basic,t as ThemedDark,r as ThemedLight,T as __namedExportsOrder,g as default};
