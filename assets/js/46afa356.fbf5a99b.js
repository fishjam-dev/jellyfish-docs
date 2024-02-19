"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[208],{1336:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(7624),i=n(2172);const o={},t="Release Notes",d={id:"release_notes",title:"Release Notes",description:"0.3.0 - 09.01.2024",source:"@site/versioned_docs/version-0.3.0/release_notes.md",sourceDirName:".",slug:"/release_notes",permalink:"/jellyfish-docs/release_notes",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.3.0/release_notes.md",tags:[],version:"0.3.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Rest API",permalink:"/jellyfish-docs/for_developers/api_reference/rest_api"}},l={},c=[{value:"0.3.0 - 09.01.2024",id:"030---09012024",level:2},{value:"Features:",id:"features",level:3},{value:"Bugfixes:",id:"bugfixes",level:3}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"release-notes",children:"Release Notes"}),"\n",(0,r.jsx)(s.h2,{id:"030---09012024",children:"0.3.0 - 09.01.2024"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["added ",(0,r.jsx)(s.code,{children:"persistent"})," and ",(0,r.jsx)(s.code,{children:"targetWindowDuration"})," options for HLS component"]}),"\n",(0,r.jsxs)(s.li,{children:["added VOD HLS (a.k.a HLS recordings) - allows to play out HLS stream recorded with ",(0,r.jsx)(s.code,{children:"persistent"})," set to ",(0,r.jsx)(s.code,{children:"true"})]}),"\n",(0,r.jsx)(s.li,{children:"added support for uploading HLS recordings to S3"}),"\n",(0,r.jsx)(s.li,{children:"added manual subscription mode for HLS - from now, you can manually instruct HLS component when it should start recording tracks from a given peer or component"}),"\n",(0,r.jsx)(s.li,{children:"added File component, which allows for publishing tracks from a file"}),"\n",(0,r.jsx)(s.li,{children:"added ability to assign custom room ID"}),"\n",(0,r.jsx)(s.li,{children:"added (LL)HLS benchmarks"}),"\n",(0,r.jsx)(s.li,{children:"added WebRTC benchmarks"}),"\n",(0,r.jsx)(s.li,{children:"added new ingress/egress traffic metrics for WebRTC and HTTP"}),"\n",(0,r.jsxs)(s.li,{children:["removed metrics per second ",(0,r.jsx)(s.strong,{children:"[BREAKING]"})," - user is expected to calculate those metrics on their own"]}),"\n",(0,r.jsxs)(s.li,{children:["removed total ingress/egress traffic metrics ",(0,r.jsx)(s.strong,{children:"[BREAKING]"})," - user is expected to calculate those metrics on their own"]}),"\n",(0,r.jsxs)(s.li,{children:["added new webhooks - ",(0,r.jsx)(s.code,{children:"PeerConnected"}),", ",(0,r.jsx)(s.code,{children:"PeerDisconnected"}),", ",(0,r.jsx)(s.code,{children:"HlsUploaded"}),", ",(0,r.jsx)(s.code,{children:"HlsUploadCrashed"})]}),"\n",(0,r.jsx)(s.li,{children:"added DNS strategy for clustering"}),"\n",(0,r.jsx)(s.li,{children:"revisited logs - now only Jellyfish logs should be printed"}),"\n",(0,r.jsxs)(s.li,{children:["renamed ComponentMetadata to ComponentProperties in REST API ",(0,r.jsx)(s.strong,{children:"[BREAKING]"})," - requests that add components will result in responses containing ",(0,r.jsx)(s.code,{children:"properties"})," field instead of ",(0,r.jsx)(s.code,{children:"metadata"})," field."]}),"\n",(0,r.jsxs)(s.li,{children:["creating component will now always return configuration options this component was creatd with instead of an empty object ",(0,r.jsx)(s.strong,{children:"[BREAKING]"})]}),"\n",(0,r.jsxs)(s.li,{children:["added ",(0,r.jsx)(s.code,{children:"JF_SSL_KEY_PATH"})," and ",(0,r.jsx)(s.code,{children:"JF_SSL_CERT_PATH"})]}),"\n",(0,r.jsxs)(s.li,{children:["renamed ",(0,r.jsx)(s.code,{children:"JF_OUTPUT_BASE_PATH"})," to ",(0,r.jsx)(s.code,{children:"JF_RESOURCES_BASE_PATH"})," and changed the default from jellyfish_output to jellyfish_resources ",(0,r.jsx)(s.strong,{children:"[BREAKING]"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"JF_DIST_NODE_NAME"})," defaults to hostname from now"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"JF_DIST_MODE"})," defaults to sname from now ",(0,r.jsx)(s.strong,{children:"[BREAKING]"})]}),"\n",(0,r.jsxs)(s.li,{children:["new versions of ",(0,r.jsx)(s.a,{href:"https://hexdocs.pm/jellyfish_server_sdk/readme.html",children:"Elixir"})," (0.3.0) and ",(0,r.jsx)(s.a,{href:"https://jellyfish-dev.github.io/python-server-sdk/v0.2.0/api/jellyfish.html",children:"Python"})," (0.2.0) Server SDKs"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugfixes",children:"Bugfixes:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["fixed ",(0,r.jsx)(s.code,{children:"PeerDisconnected"})," notification - it might have not been fired e.g. when non-empty room was deleted. Now ",(0,r.jsx)(s.code,{children:"PeerDisconnected"})," is guaranteed to be fired every time peer is removed, peer crashes, non-empty room is removed or non-empty room crashes."]}),"\n",(0,r.jsx)(s.li,{children:"tests fixes and stability improvements"}),"\n",(0,r.jsx)(s.li,{children:"fixed URL to Jellydashboard"}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"prevent from unauthorized access to system files via REST API"})}),"\n",(0,r.jsx)(s.li,{children:"fixed Prometheus metrics resolution - Prometheus metrics are now updated as soon as an event occurs instead of every X seconds"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2172:(e,s,n)=>{n.d(s,{I:()=>d,M:()=>t});var r=n(1504);const i={},o=r.createContext(i);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);