import{_ as n}from"./preload-helper-Dp1pzeXC.js";import{r as g}from"./iframe-Dev6IByd.js";const f=(e,t,u)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((E,_)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(_.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==u?". Note that variables only represent file names one level deep.":""))))})};function s({name:e}){return React.createElement("div",{className:"widget"},React.createElement("span",null,"widget:"),React.createElement("strong",null,e))}s.__docgenInfo={description:"",methods:[],displayName:"Widget"};const w={title:"Demo/Widget",component:s},o={args:{name:"alpha"}},a=()=>(g.useEffect(()=>{const e=t=>f(Object.assign({"../components/widgets/alpha.jsx":()=>n(()=>import("./alpha-D1XajNes.js"),[],import.meta.url),"../components/widgets/beta.jsx":()=>n(()=>import("./beta-CN6lrYqb.js"),[],import.meta.url),"../components/widgets/gamma.jsx":()=>n(()=>import("./gamma-D3ZPmW8_.js"),[],import.meta.url)}),`../components/widgets/${t}.jsx`,4);Promise.all([e("alpha"),e("beta"),e("gamma")])},[]),React.createElement(s,{name:"Gallery"}));a.__docgenInfo={description:"",methods:[],displayName:"Gallery"};var m,i,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'alpha'
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  useEffect(() => {
    const load = name => import(\`../components/widgets/\${name}.jsx\`);
    Promise.all([load('alpha'), load('beta'), load('gamma')]);
  }, []);
  return <Widget name="Gallery" />;
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const b=["Default","Gallery"];export{o as Default,a as Gallery,b as __namedExportsOrder,w as default};
