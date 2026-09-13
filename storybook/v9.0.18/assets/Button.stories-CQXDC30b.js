import{r as b,_ as E}from"./iframe-B8HuJuUa.js";function s({label:e,onClick:r}){return React.createElement("button",{type:"button",onClick:r},e)}s.__docgenInfo={description:"",methods:[],displayName:"Button"};const S={title:"Demo/Button",component:s},a={args:{label:"Primary"}},n={args:{label:"Secondary"}},t=()=>(b.useEffect(()=>{let e=!1;return E(()=>import("./modal-bWgkFMoy.js"),[],import.meta.url).then(r=>{e||r.attach()}),()=>{e=!0}},[]),React.createElement(s,{label:"WithModal"})),o=()=>{const e=()=>E(()=>import("./accordion-BzYEZSrY.js"),[],import.meta.url).then(r=>r.toggle());return React.createElement(s,{label:"WithAccordion",onClick:e})};t.__docgenInfo={description:"",methods:[],displayName:"WithModal"};o.__docgenInfo={description:"",methods:[],displayName:"WithAccordion"};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Primary'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary'
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,_,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(h=(_=t.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var g,f,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const onOpen = () => import('../components/accordion').then(m => m.toggle());
  return <Button label="WithAccordion" onClick={onOpen} />;
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const A=["Primary","Secondary","WithModal","WithAccordion"];export{a as Primary,n as Secondary,o as WithAccordion,t as WithModal,A as __namedExportsOrder,S as default};
