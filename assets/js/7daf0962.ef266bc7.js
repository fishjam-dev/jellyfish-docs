"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[6706],{73929:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(74848),d=s(28453);const i={},n="Metrics",c={id:"getting_started/metrics",title:"Metrics",description:"Jellyfish exports several metrics in the Prometheus format.",source:"@site/versioned_docs/version-0.5.0-rc0/getting_started/metrics.md",sourceDirName:"getting_started",slug:"/getting_started/metrics",permalink:"/jellyfish-docs/getting_started/metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.5.0-rc0/getting_started/metrics.md",tags:[],version:"0.5.0-rc0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Notifications",permalink:"/jellyfish-docs/getting_started/notifications"},next:{title:"SDKs",permalink:"/jellyfish-docs/getting_started/sdks"}},o={},l=[];function h(e){const t={code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"metrics",children:"Metrics"}),"\n",(0,r.jsxs)(t.p,{children:["Jellyfish exports several metrics in the Prometheus format.\nBy default, they are available on port ",(0,r.jsx)(t.code,{children:"9568"})," at ",(0,r.jsx)(t.code,{children:"/metrics"}),".\nSee ",(0,r.jsx)(t.code,{children:"JF_METRICS_IP"})," and ",(0,r.jsx)(t.code,{children:"JF_METRICS_PORT"})," for configuration options."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Labels"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_traffic_ingress_webrtc_total_bytes"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Total WebRTC traffic received"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_traffic_egress_webrtc_total_bytes"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Total WebRTC traffic sent"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_traffic_ingress_http_total_bytes"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Total HTTP traffic received"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_traffic_egress_http_total_bytes"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Total HTTP traffic sent"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_rooms"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Number of rooms currently present in Jellyfish"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_room_peers"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"room_id"})}),(0,r.jsx)(t.td,{children:"Number of peers currently present in a given room"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_room_peer_time_total_seconds"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"room_id"})}),(0,r.jsx)(t.td,{children:"Total peer time accumulated for a given room"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_room_duration_seconds"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"room_id"})}),(0,r.jsx)(t.td,{children:"Duration of a given room"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_room_peer_connects_total"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"room_id"})}),(0,r.jsx)(t.td,{children:"Number of PeerConnected events emitted during the lifetime of a given room"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_room_peer_disconnects_total"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"room_id"})}),(0,r.jsx)(t.td,{children:"Number of PeerDisconnected events emitted during the lifetime of a given room"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"jellyfish_room_peer_crashes_total"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"room_id"})}),(0,r.jsx)(t.td,{children:"Number of PeerCrashed events emitted during the lifetime of a given room"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"vm_memory_total_bytes"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Total memory used by Erlang Virtual Machine"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"vm_total_run_queue_lengths_total"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Number of Erlang processes waiting to be executed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"vm_total_run_queue_lengths_cpu"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Number of Erlang processes waiting to be executed on CPU schedulers"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"vm_total_run_queue_lengths_io"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Number of Erlang processes waiting to be executed on IO schedulers"})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var r=s(96540);const d={},i=r.createContext(d);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);