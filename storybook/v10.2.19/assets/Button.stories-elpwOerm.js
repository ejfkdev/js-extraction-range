import{_ as c}from"./preload-helper-PPVm8Dsz.js";import{r as i}from"./iframe-oY5XDFDE.js";function s({label:e,onClick:r}){return React.createElement("button",{type:"button",onClick:r},e)}s.__docgenInfo={description:"",methods:[],displayName:"Button"};const l={title:"Demo/Button",component:s},a={args:{label:"Primary"}},n={args:{label:"Secondary"}},o=()=>(i.useEffect(()=>{let e=!1;return c(()=>import("./modal-bWgkFMoy.js"),[],import.meta.url).then(r=>{e||r.attach()}),()=>{e=!0}},[]),React.createElement(s,{label:"WithModal"})),t=()=>{const e=()=>c(()=>import("./accordion-BzYEZSrY.js"),[],import.meta.url).then(r=>r.toggle());return React.createElement(s,{label:"WithAccordion",onClick:e})};o.__docgenInfo={description:"",methods:[],displayName:"WithModal"};t.__docgenInfo={description:"",methods:[],displayName:"WithAccordion"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  useEffect(() => {
    let disposed = false;
    import('../components/modal').then(m => {
      if (!disposed) m.attach();
    });
    return () => {
      disposed = true;
    };
  }, []);
  return <Button label="WithModal" />;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const onOpen = () => import('../components/accordion').then(m => m.toggle());
  return <Button label="WithAccordion" onClick={onOpen} />;
}`,...t.parameters?.docs?.source}}};const p=["Primary","Secondary","WithModal","WithAccordion"];export{a as Primary,n as Secondary,t as WithAccordion,o as WithModal,p as __namedExportsOrder,l as default};
