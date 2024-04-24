"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[1921],{79683:(e,t,s)=>{s.d(t,{Ay:()=>h,RM:()=>i});var n=s(74848),r=s(28453),a=s(11470),o=s(19365);const i=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"There are a couple of ways to start the dashboard:"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(o.A,{value:"main",label:"Up-to-date version",children:(0,n.jsxs)(t.p,{children:["The current version of the dashboard is ready to use and available\n",(0,n.jsx)(t.a,{href:"https://jellyfish-dev.github.io/jellyfish-dashboard/",children:"here"}),".\nEnsure that it is compatible with your Jellyfish server!\nPlease note that this dashboard only supports secure connections (https/wss)\nor connections to localhost. Any insecure requests (http/ws) will be automatically blocked by the browser."]})}),(0,n.jsxs)(o.A,{value:"docker",label:"Docker container",children:[(0,n.jsx)(t.p,{children:"The dashboard is also published as a docker image, you can pull it using:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker pull ghcr.io/jellyfish-dev/jellyfish-dashboard:v0.1.2\n"})})]}),(0,n.jsx)(o.A,{value:"repo",label:"Official repository",children:(0,n.jsxs)(t.p,{children:["You can also clone our ",(0,n.jsx)(t.a,{href:"https://github.com/jellyfish-dev/jellyfish-dashboard",children:"repo"}),"\nand run dashboard locally"]})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},81028:(e,t,s)=>{s.d(t,{Ay:()=>i,RM:()=>a});var n=s(74848),r=s(28453);const a=[];function o(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"For testing, we'll run the Jellyfish Media Server locally using Docker image:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'docker run -p 50000-50050:50000-50050/udp \\\n           -p 5002:5002/tcp \\\n           -e JF_CHECK_ORIGIN=false \\\n           -e JF_HOST=<your ip address>:5002 \\\n           -e JF_PORT="5002" \\\n           -e JF_WEBRTC_USED=true \\\n           -e JF_WEBRTC_TURN_PORT_RANGE=50000-50050 \\\n           -e JF_WEBRTC_TURN_IP=<your ip address> \\\n           -e JF_WEBRTC_TURN_LISTEN_IP=0.0.0.0 \\\n           -e JF_SERVER_API_TOKEN=development \\\n           ghcr.io/jellyfish-dev/jellyfish:0.2.1\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Make sure to set ",(0,n.jsx)(t.code,{children:"JF_WEBRTC_TURN_IP"})," and ",(0,n.jsx)(t.code,{children:"JF_HOST"})," to your local IP address. Without it, the mobile device won't be able to connect to the Jellyfish."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"To check your local IP you can use this handy command (Linux/macOS):"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ifconfig | grep \"inet \" | grep -Fv 127.0.0.1 | awk '{print $2}'\n"})})]})]})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},21233:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=s(74848),r=s(28453),a=s(67949),o=s(81028),i=s(79683);const l={title:"Jellyfish Dashboard"},h="The Whats and Hows of Jellyfish Dashboard",d={id:"tutorials/dashboard",title:"Jellyfish Dashboard",description:"What is Jellyfish Dashboard?",source:"@site/versioned_docs/version-0.2.1/tutorials/dashboard.mdx",sourceDirName:"tutorials",slug:"/tutorials/dashboard",permalink:"/jellyfish-docs/0.2.1/tutorials/dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.2.1/tutorials/dashboard.mdx",tags:[],version:"0.2.1",frontMatter:{title:"Jellyfish Dashboard"},sidebar:"mainSidebar",previous:{title:"RTSP",permalink:"/jellyfish-docs/0.2.1/getting_started/components/rtsp"},next:{title:"Simple React App",permalink:"/jellyfish-docs/0.2.1/tutorials/simple-react-app"}},c={},u=[{value:"What is Jellyfish Dashboard?",id:"what-is-jellyfish-dashboard",level:2},{value:"How to start Jellyfish Dashboard?",id:"how-to-start-jellyfish-dashboard",level:2},...i.RM,{value:"How to start Jellyfish Media Server?",id:"how-to-start-jellyfish-media-server",level:2},...o.RM,{value:"How to use Jellyfish Dashboard?",id:"how-to-use-jellyfish-dashboard",level:2},{value:"Connecting to the server",id:"connecting-to-the-server",level:3},{value:"Creating a room",id:"creating-a-room",level:3},{value:"Adding and connecting peers to the room",id:"adding-and-connecting-peers-to-the-room",level:3},{value:"Sending tracks",id:"sending-tracks",level:3},{value:"Receiving tracks",id:"receiving-tracks",level:3},{value:"A ton of information that the dashboard provides",id:"a-ton-of-information-that-the-dashboard-provides",level:2},{value:"Server logs in console",id:"server-logs-in-console",level:3},{value:"Server/Room/Client state",id:"serverroomclient-state",level:3},{value:"Server events",id:"server-events",level:3},{value:"HLS and RTSP streaming",id:"hls-and-rtsp-streaming",level:2},{value:"Loadbalancing in Dashboard",id:"loadbalancing-in-dashboard",level:2},{value:"Data collected by Jellyfish",id:"data-collected-by-jellyfish",level:2},{value:"Summary",id:"summary",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"the-whats-and-hows-of-jellyfish-dashboard",children:"The Whats and Hows of Jellyfish Dashboard"}),"\n",(0,n.jsx)(t.h2,{id:"what-is-jellyfish-dashboard",children:"What is Jellyfish Dashboard?"}),"\n",(0,n.jsxs)(t.p,{children:["Jellyfish Dashboard is a web application that allows you to manage your Jellyfish Media Server instance.\nIt is a React application that uses the ",(0,n.jsx)(t.a,{href:"https://github.com/jellyfish-dev/react-client-sdk",children:"Jellyfish React Client API"}),"\nfor adding and receiving tracks and ",(0,n.jsx)(t.a,{href:"https://github.com/jellyfish-dev/jellyfish/blob/main/openapi.yaml",children:"Jellyfish Server API"}),"\nfor adding peers, creating rooms etc."]}),"\n",(0,n.jsx)(t.p,{children:"It was created to help Jellyfish developers in testing but was later extended and adapted as a tool for tutorials and demos.\nHere, we present a short introduction to the dashboard and its features."}),"\n",(0,n.jsx)(t.h2,{id:"how-to-start-jellyfish-dashboard",children:"How to start Jellyfish Dashboard?"}),"\n",(0,n.jsx)(i.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"how-to-start-jellyfish-media-server",children:"How to start Jellyfish Media Server?"}),"\n",(0,n.jsx)(o.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-jellyfish-dashboard",children:"How to use Jellyfish Dashboard?"}),"\n",(0,n.jsx)(t.p,{children:"Since we have Dashboard and Jellyfish Media Server up and running, we can dive into\nthe features."}),"\n",(0,n.jsx)(t.h3,{id:"connecting-to-the-server",children:"Connecting to the server"}),"\n",(0,n.jsx)(t.p,{children:"We started the dashboard and the Jellyfish Media Server separately, so we need to connect them."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Open the dashboard in your browser. Open the side menu and fill in the parameters:"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Dashboard server connection",src:s(14298).A+"",width:"2436",height:"702"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Server token"})," - a token necessary to authenticate the dashboard with the Jellyfish. For now, it's simply ",(0,n.jsx)(t.code,{children:"development"}),",\nbut it is meant to authenticate the dashboard to the Jellyfish, so the good practice is to use a token that is hard to guess."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"WS/WSS"})," - whether to use a secure or insecure connection. , it's ",(0,n.jsx)(t.code,{children:"ws"}),", but if the Jellyfish uses secure WebSocket, use ",(0,n.jsx)(t.code,{children:"wss"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"HTTP/HTTPS"})," - whether to use a secure or insecure connection. By default, it's ",(0,n.jsx)(t.code,{children:"http"}),", but if the Jellyfish uses secure HTTP, use ",(0,n.jsx)(t.code,{children:"https"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Server URL"})," - URL of the Jellyfish server. Here, ",(0,n.jsx)(t.code,{children:"localhost:5002"})," would be a local build, but it can be any URL that points to the Jellyfish."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Socket Path"})," - path to the WebSocket endpoint. The default value is ",(0,n.jsx)(t.code,{children:"/socket/peer/websocket"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Connect to server"}),". If everything is correct, a server will appear in the list of connected servers:"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Connected dashboard",src:s(16590).A+"",width:"2028",height:"788"})}),"\n",(0,n.jsx)(t.h3,{id:"creating-a-room",children:"Creating a room"}),"\n",(0,n.jsx)(t.p,{children:"There are plenty of settings that You can adjust in a room:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Adding Room",src:s(27702).A+"",width:"2034",height:"454"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"h264 or vp8"})," - video codec used in the room. If you want to use ",(0,n.jsx)(t.code,{children:"HLS"})," streaming, you need to use ",(0,n.jsx)(t.code,{children:"h264"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Max Peers"})," - maximum number of peers that can join to the room."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["When you select the settings, click the ",(0,n.jsx)(t.strong,{children:"Add room"})," button. If everything is correct, a room will appear in the list of rooms:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Room added",src:s(26889).A+"",width:"1935",height:"1080"})}),"\n",(0,n.jsx)(t.h3,{id:"adding-and-connecting-peers-to-the-room",children:"Adding and connecting peers to the room"}),"\n",(0,n.jsxs)(t.p,{children:["Using the ",(0,n.jsx)(t.strong,{children:"Create peer"})," button, you can create a peer that will be ready to connect to the room."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Peer created",src:s(35646).A+"",width:"1287",height:"405"})}),"\n",(0,n.jsxs)(t.p,{children:["The peer has its ",(0,n.jsx)(t.code,{children:"ID"})," and ",(0,n.jsx)(t.code,{children:"Token"}),".\nThe ",(0,n.jsx)(t.code,{children:"ID"})," is used to identify the peer in the Jellyfish Server, and the ",(0,n.jsx)(t.code,{children:"Token"})," is used to authenticate the peer with the Jellyfish Server."]}),"\n",(0,n.jsxs)(t.p,{children:["Dashboard has an option to copy both of those values to the clipboard.\nYou can also create a QR code with the peer's ",(0,n.jsx)(t.code,{children:"Token"})," to make connecting to Jellyfish with a mobile device easier."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Peer copied",src:s(51664).A+"",width:"2578",height:"1594"})}),"\n",(0,n.jsxs)(t.p,{children:["To connect the peer to the room, you can either press the ",(0,n.jsx)(t.strong,{children:"Connect"})," button in the peer's row, or scan the QR code with your mobile app, and connect there."]}),"\n",(0,n.jsx)(t.h3,{id:"sending-tracks",children:"Sending tracks"}),"\n",(0,n.jsx)(t.p,{children:"When the peer connects to the room, you will see the track menu.\nIt allows you to send tracks to the room."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Track menu",src:s(55158).A+"",width:"1257",height:"949"})}),"\n",(0,n.jsxs)(t.p,{children:["You can select the ",(0,n.jsx)(t.em,{children:"audio or video track"})," you want to create.\nCreated tracks will be visible in the list below.\nYou can select any track from the list and send it to the room.\nApart from your camera/microphone, you can easily share your screen with its audio or pick one from a list of ",(0,n.jsx)(t.em,{children:"mock tracks"})," that we prepared."]}),"\n",(0,n.jsxs)(t.p,{children:["You can also select the ",(0,n.jsx)(t.em,{children:"resolution"})," of the video track or if you want, send the video as a ",(0,n.jsx)(t.em,{children:"simulcast"})," stream."]}),"\n",(0,n.jsxs)(t.p,{children:["There is also an option to add custom ",(0,n.jsx)(t.em,{children:"metadata"})," (in JSON format) to the track.\nThe peer will send metadata with the track to the room. Each recipient will be able to see it."]}),"\n",(0,n.jsxs)(t.p,{children:["When you select the track, click the ",(0,n.jsx)(t.strong,{children:"Add track"})," button.\nIf everything is correct, client will send the track to the room and other peers will be able to see and hear you."]}),"\n",(0,n.jsx)(t.h3,{id:"receiving-tracks",children:"Receiving tracks"}),"\n",(0,n.jsx)(t.p,{children:"When the peer connects to the room, it will automatically receive tracks from other peers."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Congrats! The basic utils of the dashboard are now covered. Next, we will dive into useful features that will help you with testing."})}),"\n",(0,n.jsx)(t.h2,{id:"a-ton-of-information-that-the-dashboard-provides",children:"A ton of information that the dashboard provides"}),"\n",(0,n.jsx)(t.h3,{id:"server-logs-in-console",children:"Server logs in console"}),"\n",(0,n.jsxs)(t.p,{children:["On the side menu, you can set up the dashboard to display React Client logs in the console.\nLogs are great for debugging purposes and provide insight into the various communications that occur between the dashboard and the Jellyfish Server.\nYou can also register your event handlers in your Jellyfish-based projects, both in the\n",(0,n.jsx)(t.a,{href:"https://github.com/jellyfish-dev/react-client-sdk",children:"React Client SDK"})," and the",(0,n.jsx)(t.a,{href:"https://github.com/jellyfish-dev/ts-client-sdk",children:"TS Client SDK"}),".\nThese logs can show you when particular events occur and provide data that you can use in your own handlers"]}),"\n",(0,n.jsx)(a.x,{url:"/img/tutorials/dashboard/dashboard_server_logs.png",height:500,alt:"Server logs"}),"\n",(0,n.jsx)(t.h3,{id:"serverroomclient-state",children:"Server/Room/Client state"}),"\n",(0,n.jsx)(t.p,{children:"Each server, room, and client has its state. You can see the state of each of them in the dashboard by clicking appropriate buttons."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Server state",src:s(37).A+"",width:"1870",height:"412"})}),"\n",(0,n.jsx)(t.h3,{id:"server-events",children:"Server events"}),"\n",(0,n.jsx)(t.p,{children:"Apart from the state, you can also see the events that occur on the server."}),"\n",(0,n.jsxs)(t.p,{children:["You can see them after clicking the ",(0,n.jsx)(t.strong,{children:"Show Server Events"})," button."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Server events",src:s(68788).A+"",width:"2422",height:"1026"})}),"\n",(0,n.jsx)(t.h2,{id:"hls-and-rtsp-streaming",children:"HLS and RTSP streaming"}),"\n",(0,n.jsx)(t.p,{children:"The dashboard allows adding HLS and RTSP streams in the room.\nYou can set up the streams and see them in the room. It will look like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"HLS and RTSP",src:s(48882).A+"",width:"2492",height:"792"})}),"\n",(0,n.jsx)(t.h2,{id:"loadbalancing-in-dashboard",children:"Loadbalancing in Dashboard"}),"\n",(0,n.jsxs)(t.p,{children:["Jellyfish Server supports load balancing.\nThis means you can run multiple instances of the server and use them simultaneously to distribute the load evenly among them.\nThe dashboard reflects this feature.\nIf you run multiple Jellyfish instances (which ",(0,n.jsx)(t.a,{href:"https://github.com/jellyfish-dev/jellyfish/blob/main/docker-compose.yaml",children:"Docker Compose"})," does by default),\nconnect one server to the dashboard.\nWhen a server opens a room on a different instance, the Dashboard will automatically connect to it and display the room.\nWhen Jellyfish runs in a cluster, and the Dashboard requests a new room, it's created on the Jellyfish instance with the lowest load.\nInformation about the specific Jellyfish instance that hosts the newly created room is returned in the HTTP response body."]}),"\n",(0,n.jsx)(t.h2,{id:"data-collected-by-jellyfish",children:"Data collected by Jellyfish"}),"\n",(0,n.jsxs)(t.p,{children:["For each server, Jellyfish collects WebRTC statistics about the rooms, clients and streamed tracks. You can see them in the dashboard using the ",(0,n.jsx)(t.strong,{children:"Internals"})," button."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Internals button",src:s(99634).A+"",width:"917",height:"211"})}),"\n",(0,n.jsx)(t.p,{children:"The button opens a new tab with the panel to connect to the WebSocket of the Jellyfish of choice.\nYou can observe the data with the dynamically generated charts showing what flows through the Jellyfish."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Internals",src:s(24657).A+"",width:"2508",height:"957"})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"Congrats on finishing the tutorial! You should now be able to use the dashboard to its full potential."}),"\n",(0,n.jsx)(t.p,{children:"But this was just the beginning.\nJellyfish Client API is a powerful tool that allows you to create your own web or mobile multimedia application.\nCheck out the other tutorials to learn more about the Jellyfish Client API and how to use it in your projects."}),"\n",(0,n.jsxs)(t.p,{children:["You can also take a look at our fully featured ",(0,n.jsx)(t.a,{href:"https://github.com/jellyfish-dev/react-native-membrane-webrtc/tree/master/example",children:"Videoroom Demo example"}),":"]}),"\n",(0,n.jsx)(a.x,{url:"/img/tutorials/videoroom.gif",alt:"Videoroom Demo"}),"\n",(0,n.jsx)(t.p,{children:"It's written in React Native, but it uses the same Jellyfish Client API as the dashboard, so you can learn a lot from it."})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>o});s(96540);var n=s(18215);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function o(e){let{children:t,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>w});var n=s(96540),r=s(18215),a=s(23104),o=s(56347),i=s(205),l=s(57485),h=s(31682),d=s(89466);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:s}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=u(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[h,c]=f({queryString:s,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),g=(()=>{const e=h??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,a]),tabValues:a}}var b=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(74848);function v(e){let{className:t,block:s,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:h}=(0,a.a_)(),d=e=>{const t=e.currentTarget,s=l.indexOf(t),r=i[s].value;r!==n&&(h(t),o(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function y(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(y,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,j.jsx)(x,{...e,children:c(e.children)},String(t))}},67949:(e,t,s)=>{s.d(t,{x:()=>o});s(96540);var n=s(86025),r=s(21122),a=s(74848);const o=e=>{let{url:t,height:s,alt:o}=e;return(0,a.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:(0,a.jsx)(r.A,{height:s,alt:o,sources:{light:(0,n.A)(t),dark:(0,n.A)(t)}})})}},27702:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_add_room-d09e37dceae1734f277028893754932f.png"},16590:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_connected-1f7a5bcfc112cd85e1bfdf7ae8c15667.png"},48882:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_hls_rtsp-9909f408c674fdb9c35276d47e974975.png"},24657:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_internals-e00e231291ccf014636c33f298e329c7.png"},99634:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_internals_button-611979396784c147e7ed345524481303.png"},51664:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_peer_copied-1b2a8bd2a37f465697b25e60f746a6a5.png"},35646:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_peer_created-1abebcebfe4df6eae62fab62d55fccbd.png"},26889:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_room_added-e3c484faad570542c7a691069efb53f1.png"},14298:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_server-d9bc9e3bd4aca156733601c5311efd8d.png"},68788:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_server_events-38415cfd8d8a585de3648b105cbff15b.png"},37:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_states-f9cc48f3b48912a77f0d74d82e145144.png"},55158:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dashboard_track_menu-8a027e206f2ea8709c3dc125e619034b.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(96540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);