import{_ as n}from"./preload-helper-PPVm8Dsz.js";import{r as l}from"./iframe-CNpr0gH8.js";const c=(e,t,m)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((d,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==m?". Note that variables only represent file names one level deep.":""))))})};function s({name:e}){return React.createElement("div",{className:"widget"},React.createElement("span",null,"widget:"),React.createElement("strong",null,e))}s.__docgenInfo={description:"",methods:[],displayName:"Widget"};const _={title:"Demo/Widget",component:s},o={args:{name:"alpha"}},a=()=>(l.useEffect(()=>{const e=t=>c(Object.assign({"../components/widgets/alpha.jsx":()=>n(()=>import("./alpha-D1XajNes.js"),[],import.meta.url),"../components/widgets/beta.jsx":()=>n(()=>import("./beta-CN6lrYqb.js"),[],import.meta.url),"../components/widgets/gamma.jsx":()=>n(()=>import("./gamma-D3ZPmW8_.js"),[],import.meta.url)}),`../components/widgets/${t}.jsx`,4);Promise.all([e("alpha"),e("beta"),e("gamma")])},[]),React.createElement(s,{name:"Gallery"}));a.__docgenInfo={description:"",methods:[],displayName:"Gallery"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'alpha'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  useEffect(() => {
    const load = name => import(\`../components/widgets/\${name}.jsx\`);
    Promise.all([load('alpha'), load('beta'), load('gamma')]);
  }, []);
  return <Widget name="Gallery" />;
}`,...a.parameters?.docs?.source}}};const g=["Default","Gallery"];export{o as Default,a as Gallery,g as __namedExportsOrder,_ as default};
