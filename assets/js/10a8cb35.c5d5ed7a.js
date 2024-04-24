"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[6604],{97782:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var s=i(74848),r=i(28453);const d={},o="Release Notes",t={id:"release_notes",title:"Release Notes",description:"0.5.0-rc0 - 23.04.2024",source:"@site/versioned_docs/version-0.5.0-rc0/release_notes.md",sourceDirName:".",slug:"/release_notes",permalink:"/jellyfish-docs/release_notes",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.5.0-rc0/release_notes.md",tags:[],version:"0.5.0-rc0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Releasing Jellyfish",permalink:"/jellyfish-docs/for_developers/releasing"}},l={},c=[{value:"0.5.0-rc0 - 23.04.2024",id:"050-rc0---23042024",level:2},{value:"Features",id:"features",level:3},{value:"Bugfixes",id:"bugfixes",level:3},{value:"0.4.2 - 08.03.2024",id:"042---08032024",level:2},{value:"Bugfixes",id:"bugfixes-1",level:3},{value:"0.4.1 - 06.03.2024",id:"041---06032024",level:2},{value:"Bugfixes",id:"bugfixes-2",level:3},{value:"0.4.0 - 27.02.2024",id:"040---27022024",level:2},{value:"Features",id:"features-1",level:3},{value:"Bugfixes",id:"bugfixes-3",level:3},{value:"0.3.0 - 09.01.2024",id:"030---09012024",level:2},{value:"Features",id:"features-2",level:3},{value:"Bugfixes",id:"bugfixes-4",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"release-notes",children:"Release Notes"}),"\n",(0,s.jsx)(n.h2,{id:"050-rc0---23042024",children:"0.5.0-rc0 - 23.04.2024"}),"\n",(0,s.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Added Jellyfish version and commit to healthcheck endpoint"}),"\n",(0,s.jsx)(n.li,{children:"Added Recording Component for creating meeting recordings"}),"\n",(0,s.jsx)(n.li,{children:"Added ResourceManager that will remove raw recordings after timeout"}),"\n",(0,s.jsxs)(n.li,{children:["Bumped ",(0,s.jsx)(n.code,{children:"membrane_core"})," to 1.1.0-rc0"]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.code,{children:"Room.State"})," module and peer disconnected timeout, which removes peers after predefined inactivity period"]}),"\n",(0,s.jsx)(n.li,{children:"Added peer websocket url to PeerDetailsResponse"}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.code,{children:"PeerAdded"})," and ",(0,s.jsx)(n.code,{children:"PeerDeleted"})," notifications"]}),"\n",(0,s.jsx)(n.li,{children:"Restricted user assigned room's id to alphanumeric"}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.code,{children:"JF_S3_PATH_PREFIX"})," to config and require s3_config to be provided"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"bugfixes",children:"Bugfixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fixed ex-aws requests"}),"\n",(0,s.jsx)(n.li,{children:"Extended timeout for s3 requests"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"042---08032024",children:"0.4.2 - 08.03.2024"}),"\n",(0,s.jsx)(n.h3,{id:"bugfixes-1",children:"Bugfixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fixed tracks not being removed after WebRTC peer disconnects"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"041---06032024",children:"0.4.1 - 06.03.2024"}),"\n",(0,s.jsx)(n.h3,{id:"bugfixes-2",children:"Bugfixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"API spec fixes - now correct version of OpenAPI is shown in docs"}),"\n",(0,s.jsx)(n.li,{children:"Fixed peer being removed once it disconnects from Jellyfish"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"040---27022024",children:"0.4.0 - 27.02.2024"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IMPORTANT"})," This version might require clearing or updating env vars when running from source on macOS.\nSee ",(0,s.jsx)(n.a,{href:"/jellyfish-docs/getting_started/installation#building-from-source",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"features-1",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'added peer websocket close reason - now, server closes peer websocket with a reason e.g. "Internal server error", "Peer removed" or "Room stopped"'}),"\n",(0,s.jsxs)(n.li,{children:["added support for path in ",(0,s.jsx)(n.a,{href:"./getting_started/installation#required-in-production",children:"JF_HOST"})," env var"]}),"\n",(0,s.jsxs)(n.li,{children:["added framerate option in the ",(0,s.jsx)(n.a,{href:"./getting_started/components/file#configuration-options",children:"File component"})," -  defaults to 30 FPS"]}),"\n",(0,s.jsxs)(n.li,{children:["added healthcheck endpoint - ",(0,s.jsx)(n.a,{href:"./for_developers/api_reference/rest_api#tag/health/",children:"GET /health"})," - requires authorization and returns: status, uptime and information about distribution (enabled/disabled, node status, number of nodes in a cluster)."]}),"\n",(0,s.jsxs)(n.li,{children:["added published tracks and their metadata to the REST API e.g. ",(0,s.jsx)(n.a,{href:"./for_developers/api_reference/rest_api#tag/room",children:"GET /room"})," will return a list of rooms with their components and peers, where each component and each peer will also list all of its published tracks"]}),"\n",(0,s.jsxs)(n.li,{children:["added new server notifications: ",(0,s.jsx)(n.code,{children:"PeerMetadataUpdated"}),", ",(0,s.jsx)(n.code,{children:"TrackAdded"}),", ",(0,s.jsx)(n.code,{children:"TrackRemoved"}),", ",(0,s.jsx)(n.code,{children:"TrackMetadataUpdated"})]}),"\n",(0,s.jsxs)(n.li,{children:["added peerless room purge option - after predefined amount of time, if a room is empty, it will be automatically closed. This behaviour is disabled by default. See ",(0,s.jsx)(n.a,{href:"./getting_started/room#configuration-options",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["added ",(0,s.jsx)(n.a,{href:"./getting_started/components/sip",children:"SIP component"}),". This might require\nclearing or updating env vars when running from source on macOS. See ",(0,s.jsx)(n.a,{href:"/jellyfish-docs/getting_started/installation#building-from-source",children:"here"}),". ",(0,s.jsx)(n.strong,{children:"[BREAKING]"})]}),"\n",(0,s.jsxs)(n.li,{children:["added basic structured logging that can be enabled with ",(0,s.jsx)(n.a,{href:"./getting_started/installation#optional",children:(0,s.jsx)(n.code,{children:"JF_STRUCTURED_LOGGING"})})]}),"\n",(0,s.jsx)(n.li,{children:"added python RTSP -> HLS example"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"bugfixes-3",children:"Bugfixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["fixed duplicated ",(0,s.jsx)(n.code,{children:"peer_disconnected"})," notification"]}),"\n",(0,s.jsx)(n.li,{children:"fixed prometheus metrics not being reset - now, after room is removed, its metrics are set to 0"}),"\n",(0,s.jsx)(n.li,{children:"fixed starting logs not being displayed when JF couldn't run in a distributed mode - now, even if JF crashes because of distribution-related problems, config logs will be displayed (i.e. JF version, WebRTC config, distribution config)"}),"\n",(0,s.jsx)(n.li,{children:"fixed removing component, which crashed from JF state (thanks to @gfodor)"}),"\n",(0,s.jsx)(n.li,{children:"fixed removing component, which finished its work from JF state"}),"\n",(0,s.jsxs)(n.li,{children:["fixed authorization not required for /hls and /recording endpoints ",(0,s.jsx)(n.strong,{children:"[BREAKING]"})]}),"\n",(0,s.jsx)(n.li,{children:"fixed authorization information in OpenAPI spec - previously, all endpoints were marked as requiring authorization, even if they didn't actually need it"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"030---09012024",children:"0.3.0 - 09.01.2024"}),"\n",(0,s.jsx)(n.h3,{id:"features-2",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["added ",(0,s.jsx)(n.code,{children:"persistent"})," and ",(0,s.jsx)(n.code,{children:"targetWindowDuration"})," options for HLS component"]}),"\n",(0,s.jsxs)(n.li,{children:["added VOD HLS (aka HLS recordings) - allows to play out HLS stream recorded with ",(0,s.jsx)(n.code,{children:"persistent"})," set to ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.li,{children:"added support for uploading HLS recordings to S3"}),"\n",(0,s.jsx)(n.li,{children:"added manual subscription mode for HLS - from now, you can manually instruct HLS component when it should start recording tracks from a given peer or component"}),"\n",(0,s.jsx)(n.li,{children:"added File component, which allows for publishing tracks from a file"}),"\n",(0,s.jsx)(n.li,{children:"added ability to assign custom room ID"}),"\n",(0,s.jsx)(n.li,{children:"added (LL)HLS benchmarks"}),"\n",(0,s.jsx)(n.li,{children:"added WebRTC benchmarks"}),"\n",(0,s.jsx)(n.li,{children:"added new ingress/egress traffic metrics for WebRTC and HTTP"}),"\n",(0,s.jsxs)(n.li,{children:["removed metrics per second ",(0,s.jsx)(n.strong,{children:"[BREAKING]"})," - user is expected to calculate those metrics on their own"]}),"\n",(0,s.jsxs)(n.li,{children:["removed total ingress/egress traffic metrics ",(0,s.jsx)(n.strong,{children:"[BREAKING]"})," - user is expected to calculate those metrics on their own"]}),"\n",(0,s.jsxs)(n.li,{children:["added new webhooks - ",(0,s.jsx)(n.code,{children:"PeerConnected"}),", ",(0,s.jsx)(n.code,{children:"PeerDisconnected"}),", ",(0,s.jsx)(n.code,{children:"HlsUploaded"}),", ",(0,s.jsx)(n.code,{children:"HlsUploadCrashed"})]}),"\n",(0,s.jsx)(n.li,{children:"added DNS strategy for clustering"}),"\n",(0,s.jsx)(n.li,{children:"revisited logs - now only Jellyfish logs should be printed"}),"\n",(0,s.jsxs)(n.li,{children:["renamed ComponentMetadata to ComponentProperties in REST API ",(0,s.jsx)(n.strong,{children:"[BREAKING]"})," - requests that add components will result in responses containing ",(0,s.jsx)(n.code,{children:"properties"})," field instead of ",(0,s.jsx)(n.code,{children:"metadata"})," field."]}),"\n",(0,s.jsxs)(n.li,{children:["creating component will now always return configuration options this component was creatd with instead of an empty object ",(0,s.jsx)(n.strong,{children:"[BREAKING]"})]}),"\n",(0,s.jsxs)(n.li,{children:["added ",(0,s.jsx)(n.code,{children:"JF_SSL_KEY_PATH"})," and ",(0,s.jsx)(n.code,{children:"JF_SSL_CERT_PATH"})]}),"\n",(0,s.jsxs)(n.li,{children:["renamed ",(0,s.jsx)(n.code,{children:"JF_OUTPUT_BASE_PATH"})," to ",(0,s.jsx)(n.code,{children:"JF_RESOURCES_BASE_PATH"})," and changed the default from jellyfish_output to jellyfish_resources ",(0,s.jsx)(n.strong,{children:"[BREAKING]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JF_DIST_NODE_NAME"})," defaults to hostname from now"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JF_DIST_MODE"})," defaults to sname from now ",(0,s.jsx)(n.strong,{children:"[BREAKING]"})]}),"\n",(0,s.jsxs)(n.li,{children:["new versions of ",(0,s.jsx)(n.a,{href:"https://hexdocs.pm/jellyfish_server_sdk/readme.html",children:"Elixir"})," (0.3.0) and ",(0,s.jsx)(n.a,{href:"https://jellyfish-dev.github.io/python-server-sdk/v0.2.0/api/jellyfish.html",children:"Python"})," (0.2.0) Server SDKs"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"bugfixes-4",children:"Bugfixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["fixed ",(0,s.jsx)(n.code,{children:"PeerDisconnected"})," notification - it might have not been fired e.g. when non-empty room was deleted. Now ",(0,s.jsx)(n.code,{children:"PeerDisconnected"})," is guaranteed to be fired every time peer is removed, peer crashes, non-empty room is removed or non-empty room crashes."]}),"\n",(0,s.jsx)(n.li,{children:"tests fixes and stability improvements"}),"\n",(0,s.jsx)(n.li,{children:"fixed URL to Jellydashboard"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"prevent from unauthorized access to system files via REST API"})}),"\n",(0,s.jsx)(n.li,{children:"fixed Prometheus metrics resolution - Prometheus metrics are now updated as soon as an event occurs instead of every X seconds"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var s=i(96540);const r={},d=s.createContext(r);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);