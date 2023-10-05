"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[2453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},s="Basic Concepts",a={unversionedId:"introduction/basic_concepts",id:"version-0.2.0/introduction/basic_concepts",title:"Basic Concepts",description:"This section outlines Jellyfish building blocks. We suggest reading this before",source:"@site/versioned_docs/version-0.2.0/introduction/basic_concepts.md",sourceDirName:"introduction",slug:"/introduction/basic_concepts",permalink:"/jellyfish-docs/introduction/basic_concepts",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.2.0/introduction/basic_concepts.md",tags:[],version:"0.2.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"What is Jellyfish?",permalink:"/jellyfish-docs/"},next:{title:"Example Scenarios",permalink:"/jellyfish-docs/introduction/example_scenarios"}},c={},l=[{value:"Room",id:"room",level:2},{value:"Component",id:"component",level:2},{value:"Peer",id:"peer",level:2},{value:"Difference between Component and Peer",id:"difference-between-component-and-peer",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-concepts"},"Basic Concepts"),(0,o.kt)("p",null,"This section outlines Jellyfish building blocks. We suggest reading this before\nyou proceed, as these terms will be recurrent in the following chapters. Enjoy\nyour exploration!"),(0,o.kt)("h2",{id:"room"},"Room"),(0,o.kt)("p",null,"In Jellyfish, a room serves as a holder for peers and components, its function\nvarying based on application."),(0,o.kt)("p",null,"For instance, within a video conferencing system, a Jellyfish room represents a\nsingle online meeting or a channel accommodating multiple users for\nconversation."),(0,o.kt)("p",null,"On the other hand, in a broadcasting system setting, one room will be a\ncontainer for two components - one responsible for receiving stream from a\nstreaming host (e.g. via RTMP) and the other one responsible for converting this\nstream into an HLS playlist ready to be broadcasted via CDN."),(0,o.kt)("h2",{id:"component"},"Component"),(0,o.kt)("p",null,"A component is a server-side process that publishes or subscribes to tracks.\nExample components are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HLS component - subscribes to all other tracks and creates from them an HLS\nplaylist ready to be broadcasted via CDN"),(0,o.kt)("li",{parentName:"ul"},"RTSP component - connects to the remote media source (e.g. an IP camera) and\npublishes its media to be consumed by other components or peers")),(0,o.kt)("h2",{id:"peer"},"Peer"),(0,o.kt)("p",null,"A peer is a client-side entity that connects to the server to publish, subscribe\nor publish and subscribe to tracks published by components or other peers. The\npeer's process is spawned after the peer connects to the server. At the moment,\nthere is only one type of peer - WebRTC."),(0,o.kt)("h2",{id:"difference-between-component-and-peer"},"Difference between Component and Peer"),(0,o.kt)("p",null,"The most important difference between a component and a peer is that component\nis a purely server-side thing. It starts its work right after adding it to the\nserver. On the other hand, a peer is something that has to ",(0,o.kt)("strong",{parentName:"p"},"connect")," to the\nserver. Therefore, peers are allowed to open so-called signaling channels to the\nserver. See also ",(0,o.kt)("a",{parentName:"p",href:"/jellyfish-docs/introduction/example_scenarios"},"Example Scenarios"),"."))}u.isMDXComponent=!0}}]);