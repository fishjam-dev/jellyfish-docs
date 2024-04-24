"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[7729],{61753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=t(74848),r=t(28453),i=t(11470),s=t(19365);const a={},l="Notifications",c={id:"getting_started/notifications",title:"Notifications",description:"Jellyfish sends server side notifications whenever some important event occurs, e.g.:",source:"@site/versioned_docs/version-0.4.2/getting_started/notifications.md",sourceDirName:"getting_started",slug:"/getting_started/notifications",permalink:"/jellyfish-docs/0.4.2/getting_started/notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.4.2/getting_started/notifications.md",tags:[],version:"0.4.2",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/jellyfish-docs/0.4.2/getting_started/authentication"},next:{title:"Metrics",permalink:"/jellyfish-docs/0.4.2/getting_started/metrics"}},u={},d=[{value:"WebSockets",id:"websockets",level:2},{value:"Webhooks",id:"webhooks",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"notifications",children:"Notifications"}),"\n",(0,o.jsx)(n.p,{children:"Jellyfish sends server side notifications whenever some important event occurs, e.g.:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"a room has been created"}),"\n",(0,o.jsx)(n.li,{children:"some peer has connected"}),"\n",(0,o.jsx)(n.li,{children:"component has crashed"}),"\n",(0,o.jsx)(n.li,{children:"etc."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["A full list of available notifications is always present in specific server SDK documentation.\nNotifications can be received through ",(0,o.jsx)(n.a,{href:"#websockets",children:"WebSockets"})," or ",(0,o.jsx)(n.a,{href:"#webhooks",children:"Webhooks"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"websockets",children:"WebSockets"}),"\n",(0,o.jsx)(n.p,{children:"WebSocket (WS) is a communication protocol that provides full-duplex communication between a client and a server over a persistent connection.\nWhen you create a notifier, it will open WS connection, receive notifications,\ndecode and return them to you via callbacks or messages.\nIn other words, you don't have to do anything on your own."}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(s.A,{value:"python",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from jellyfish import Notifier\n\nserver_address = \"localhost:5002\"\nserver_api_token = \"development\"\n\nnotifier = Notifier(server_address = server_address, server_api_token = server_api_token)\n\n@notifier.on_server_notification\ndef handle_notification(server_notification):\n    print(f'Received a notification: {server_notification}')\n\n@notifier.on_metrics\ndef handle_metrics(metrics_report):\n    print(f'Received WebRTC metrics: {metrics_report}')\n\nasync def run():\n    await notifier.connect()\n    await notifier.wait_ready()\n\nasyncio.run(run())\n"})})}),(0,o.jsx)(s.A,{value:"elixir",label:"Elixir",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-elixir",children:'server_address = "localhost:5002"\nserver_api_token = "development"\n\n{:ok, notifier} =\n  Jellyfish.WSNotifier.start(server_address: server_address, server_api_token: server_api_token)\n\n:ok = Jellyfish.WSNotifier.subscribe_server_notifications(notifier)\n:ok = Jellyfish.WSNotifier.subscribe_metrics(notifier)\n\nreceive do\n  {:jellyfish, %Jellyfish.Notification.PeerConnected{} = notification} ->\n    IO.inspect(notification)\n  # other notificaitons ...\nend\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"As a result, you should see the following logs on the server side"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"07:45:02.684 [info] New incoming server WebSocket connection, accepting\n07:45:02.688 [info] Server WS authenticated.\n"})}),"\n",(0,o.jsx)(n.h2,{id:"webhooks",children:"Webhooks"}),"\n",(0,o.jsx)(n.p,{children:"Webhooks are simply HTTP POST requests sent to a specified URL.\nThey are a common choice in serverless architectures where a WebSocket connection cannot be established."}),"\n",(0,o.jsx)(n.p,{children:"The most important difference between Webhook and WebSocket notifications is that you have to receive those\nPOST requests on your own and then use SDK's decode functions to get the actual notification."}),"\n",(0,o.jsxs)(n.p,{children:["To receive server notifications through webhooks you have to pass ",(0,o.jsx)(n.code,{children:"webhook_url"})," during room creation."]}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(s.A,{value:"python",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from jellyfish import Notifier, RoomApi\nfrom jellyfish import recevie_json\n\nserver_address = "localhost:5002"\nserver_api_token = "development"\nwebhook_url = "http://localhost:5003/webhook"\n\nroom_api = RoomApi(server_address = server_address, server_api_token = server_api_token)\n_, room = room_api.create_room(webhook_url=webhook_url)\n\n# assuming you are using Flask\n@app.route("/webhook", methods=["POST"])\ndef respond_root():\n    json = request.get_json()\n    notification = receive_json(json)\n\n    return Response(status=200)\n'})})}),(0,o.jsx)(s.A,{value:"elixir",label:"Elixir",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-elixir",children:'server_address = "localhost:5002"\nserver_api_token = "development"\nwebhook_url = "http://localhost:5003/webhook"\n\nclient = Jellyfish.Client.new(server_address: server_address, server_api_token: server_api_token)\n{:ok, %Jellyfish.Room{id: room_id}, jellyfish_address} = Jellyfish.Room.create(client, max_peers: 10, webhook_url: webhook_url)\n\n# assuming you are using Phoenix\n# router.ex\nscope "/", MyAppWeb do\n  post "/webhook", WebhookController, :receive_webhook_notification\nend\n\n# webhook_controller.ex\ndef receive_webhook_notification(conn, _params) do\n  {:ok, body, conn} = Plug.Conn.read_body(conn, [])\n  json_body = Jason.decode!(body)\n\n  notification = Jellyfish.WebhookNotifier.receive(json_body)\n\n  conn\n  |> put_resp_content_type("text/plain")\n  |> send_resp(200, "OK")\nend\n\n'})})})]})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var o=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>x});var o=t(96540),r=t(18215),i=t(23104),s=t(56347),a=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:t,groupId:r}),[v,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),m=(()=>{const e=c??v;return f({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(74848);function y(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==o&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=v(e);return(0,_.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,_.jsx)(y,{...e,...n}),(0,_.jsx)(g,{...e,...n})]})}function x(e){const n=(0,b.A)();return(0,_.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);