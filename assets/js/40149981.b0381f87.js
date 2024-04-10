"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[5216],{30772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(17624),s=t(4552);const i={},r="Room",l={id:"getting_started/room",title:"Room",description:"The holder for peers and components.",source:"@site/docs/getting_started/room.md",sourceDirName:"getting_started",slug:"/getting_started/room",permalink:"/jellyfish-docs/next/getting_started/room",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/getting_started/room.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"SDKs",permalink:"/jellyfish-docs/next/getting_started/sdks"},next:{title:"HLS",permalink:"/jellyfish-docs/next/getting_started/components/hls"}},d={},c=[{value:"Configuration options",id:"configuration-options",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"room",children:"Room"}),"\n",(0,o.jsx)(n.p,{children:"The holder for peers and components."}),"\n",(0,o.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Optional"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"roomId"})," (string, default: null) - Custom ID used for identifying the room within Jellyfish.\nMust be unique across all rooms. If not provided, a random UUID will be generated.\nIt may contain only alphanumeric characters and hyphens."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"maxPeers"})," (integer 1.., default: null) - Maximum number of peers allowed in the room.\nIf set to null (default), the number of peers is unlimited."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"videoCodec"}),' (string "h264" or "vp8", default: null) - Video codec enforced for each peer and component in the room.\nIf set to null (default), no codec is enforced (peers and components may publish both H264 and VP8).']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"webhookUrl"})," (string, default: null) - If provided, Jellyfish notifications will be sent to this URL."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"peerlessPurgeTimeout"})," (integer 1.., default: null) - Duration (in seconds) after which the room\nwill be removed if no peers are connected. If set to null (default), this feature is disabled."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var o=t(11504);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);