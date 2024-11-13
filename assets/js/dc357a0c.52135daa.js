"use strict";(self.webpackChunkfishjam_docs=self.webpackChunkfishjam_docs||[]).push([[3859],{42563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=r(74848),a=r(28453),s=r(11470),l=r(19365);const o={},i="Server SDK Examples",u={id:"tutorials/server_sdk_examples",title:"Server SDK Examples",description:"This page contains Jellyfish usage examples utilising server SDKs.",source:"@site/versioned_docs/version-0.5.0/tutorials/server_sdk_examples.md",sourceDirName:"tutorials",slug:"/tutorials/server_sdk_examples",permalink:"/fishjam-docs/0.5.0/tutorials/server_sdk_examples",draft:!1,unlisted:!1,editUrl:"https://github.com/fishjam-dev/fishjam-docs/versioned_docs/version-0.5.0/tutorials/server_sdk_examples.md",tags:[],version:"0.5.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"React Native",permalink:"/fishjam-docs/0.5.0/tutorials/react-native"},next:{title:"Cluster",permalink:"/fishjam-docs/0.5.0/cluster"}},c={},d=[{value:"RTSP to HLS conversion",id:"rtsp-to-hls-conversion",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"server-sdk-examples",children:"Server SDK Examples"}),"\n",(0,n.jsxs)(t.p,{children:["This page contains Jellyfish usage examples utilising server ",(0,n.jsx)(t.a,{href:"/fishjam-docs/0.5.0/getting_started/sdks",children:"SDKs"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"rtsp-to-hls-conversion",children:"RTSP to HLS conversion"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"elixir",label:"Elixir",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-elixir",metastring:"reference",children:"https://github.com/jellyfish-dev/jellyfish/blob/main/examples/rtsp_to_hls.exs\n"})})}),(0,n.jsx)(l.A,{value:"python",label:"Python",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"reference",children:"https://github.com/jellyfish-dev/jellyfish/blob/main/examples/rtsp_to_hls.py\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),a=r(18215),s=r(23104),l=r(56347),o=r(205),i=r(57485),u=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:r,groupId:a}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=o[r].value;a!==n&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function _(e){const t=(0,v.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);