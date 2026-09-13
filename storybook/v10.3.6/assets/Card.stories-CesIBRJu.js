import{_ as s}from"./preload-helper-PPVm8Dsz.js";import{r as m}from"./iframe-CNpr0gH8.js";function o({title:e}){return React.createElement("div",{className:"card"},React.createElement("h3",null,e),React.createElement("p",null,"card body"))}o.__docgenInfo={description:"",methods:[],displayName:"Card"};const d={title:"Demo/Card",component:o},a={args:{title:"Basic"}},t=()=>(m.useEffect(()=>{s(()=>import("../components/theme-dark.jsx"),[],import.meta.url).then(e=>e.apply())},[]),React.createElement(o,{title:"ThemedDark"})),r=()=>(m.useEffect(()=>{s(()=>import("../components/theme-light.jsx"),[],import.meta.url).then(e=>e.apply())},[]),React.createElement(o,{title:"ThemedLight"}));t.__docgenInfo={description:"",methods:[],displayName:"ThemedDark"};r.__docgenInfo={description:"",methods:[],displayName:"ThemedLight"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Basic'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  useEffect(() => {
    import(\`../components/theme-\${'dark'}.jsx\`).then(m => m.apply());
  }, []);
  return <Card title="ThemedDark" />;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  useEffect(() => {
    import(\`../components/theme-\${'light'}.jsx\`).then(m => m.apply());
  }, []);
  return <Card title="ThemedLight" />;
}`,...r.parameters?.docs?.source}}};const i=["Basic","ThemedDark","ThemedLight"];export{a as Basic,t as ThemedDark,r as ThemedLight,i as __namedExportsOrder,d as default};
