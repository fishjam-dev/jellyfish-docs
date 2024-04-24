"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[7838],{33469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(74848),a=n(28453),s=n(86025),r=n(21122);const o={},c="Example Scenarios",l={id:"introduction/example_scenarios",title:"Example Scenarios",description:"Below, we present example scenarios that can be achieved with Jellyfish.",source:"@site/docs/introduction/example_scenarios.md",sourceDirName:"introduction",slug:"/introduction/example_scenarios",permalink:"/jellyfish-docs/next/introduction/example_scenarios",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/introduction/example_scenarios.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Basic Concepts",permalink:"/jellyfish-docs/next/introduction/basic_concepts"},next:{title:"Installation",permalink:"/jellyfish-docs/next/getting_started/installation"}},h={},d=[{value:"Real-time video conferencing system",id:"real-time-video-conferencing-system",level:2},{value:"Broadcasting system with the real-time mixin",id:"broadcasting-system-with-the-real-time-mixin",level:2},{value:"Displaying IP camera streams in a web browser",id:"displaying-ip-camera-streams-in-a-web-browser",level:2}];function m(e){const t={h1:"h1",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"example-scenarios",children:"Example Scenarios"}),"\n",(0,i.jsx)(t.p,{children:"Below, we present example scenarios that can be achieved with Jellyfish.\nEach scenario consists of a short description and illustrative Jellyfish\ninternal architecture so that you can catch the difference between peers\nand components even better!"}),"\n",(0,i.jsx)(t.h2,{id:"real-time-video-conferencing-system",children:"Real-time video conferencing system"}),"\n",(0,i.jsx)(t.p,{children:"In this scenario, we want to create a simple video conferencing system\nwhere people can talk to each other in the real-time."}),"\n",(0,i.jsx)(t.p,{children:"Because of interactive and real-time requirements, the natural choice is\nto use the WebRTC standard."}),"\n",(0,i.jsx)(t.p,{children:"The final architecture would look like this:"}),"\n",(0,i.jsx)(r.A,{alt:"Real-time video conferencing system architecture",sources:{light:(0,s.A)("/img/video-conferencing-light.png"),dark:(0,s.A)("/img/video-conferencing-dark.png")}}),"\n",(0,i.jsx)(t.h2,{id:"broadcasting-system-with-the-real-time-mixin",children:"Broadcasting system with the real-time mixin"}),"\n",(0,i.jsx)(t.p,{children:"In this scenario, we want to create a broadcasting solution where\nthe conversation between multiple people is broadcasted to the broader\naudience."}),"\n",(0,i.jsx)(t.p,{children:"Here, we choose WebRTC as a standard used for connecting people talking\nto each other in real-time and HLS for creating a playlist that can be\nthen uploaded to CDN and broadcasted to the broader audience."}),"\n",(0,i.jsx)(t.p,{children:"As you can see, the whole system will automatically\nadapt to the number of participants talking in real-time.\nIn particular, Jellyfish will handle a scenario with only one streamer out of the box."}),"\n",(0,i.jsx)(r.A,{alt:"Broadcasting system architecture",sources:{light:(0,s.A)("/img/broadcasting-real-time-mixin-light.png"),dark:(0,s.A)("/img/broadcasting-real-time-mixin-dark.png")}}),"\n",(0,i.jsx)(t.h2,{id:"displaying-ip-camera-streams-in-a-web-browser",children:"Displaying IP camera streams in a web browser"}),"\n",(0,i.jsx)(t.p,{children:"In this scenario, we have a set of IP cameras and we want to display\ntheir streams in a web browser.\nIP cameras very often use RTSP for streaming media but browsers\ndon't ship with support for this protocol.\nTherefore, to display audio and video in a web browser, we have to use either WebRTC or HLS.\nBecause, in this scenario, the delay is not the most crucial thing, we choose HLS."}),"\n",(0,i.jsx)(t.p,{children:"The most important thing here is that the RTSP component connects to the IP camera\nand then the camera starts streaming.\nIt's not the camera that initializes the connection to the server.\nTherefore, the RTSP component is a purely server-side thing - once you add it,\nit should be able to work on its own."}),"\n",(0,i.jsx)(r.A,{alt:"Multiple IP cameras system architecture",sources:{light:(0,s.A)("/img/ip-cameras-light.png"),dark:(0,s.A)("/img/ip-cameras-dark.png")}})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);