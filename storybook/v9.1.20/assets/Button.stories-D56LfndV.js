import{_ as E}from"./preload-helper-Dp1pzeXC.js";import{r as b}from"./iframe-Dev6IByd.js";function s({label:e,onClick:r}){return React.createElement("button",{type:"button",onClick:r},e)}s.__docgenInfo={description:"",methods:[],displayName:"Button"};const A={title:"Demo/Button",component:s},a={args:{label:"Primary"}},n={args:{label:"Secondary"}},o=()=>(b.useEffect(()=>{let e=!1;return E(()=>import("./modal-bWgkFMoy.js"),[],import.meta.url).then(r=>{e||r.attach()}),()=>{e=!0}},[]),React.createElement(s,{label:"WithModal"})),t=()=>{const e=()=>E(()=>import("./accordion-BzYEZSrY.js"),[],import.meta.url).then(r=>r.toggle());return React.createElement(s,{label:"WithAccordion",onClick:e})};o.__docgenInfo={description:"",methods:[],displayName:"WithModal"};t.__docgenInfo={description:"",methods:[],displayName:"WithAccordion"};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Primary'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary'
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,_,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(h=(_=o.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var f,g,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const onOpen = () => import('../components/accordion').then(m => m.toggle());
  return <Button label="WithAccordion" onClick={onOpen} />;
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const P=["Primary","Secondary","WithModal","WithAccordion"];export{a as Primary,n as Secondary,t as WithAccordion,o as WithModal,P as __namedExportsOrder,A as default};
