"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[471],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=t(7462),a=(t(7294),t(3905));const r={},o="Cluster",l={unversionedId:"cluster",id:"version-0.2.0/cluster",title:"Cluster",description:"Jellyfish comes with a built-in clustering mechanism.",source:"@site/versioned_docs/version-0.2.0/cluster.md",sourceDirName:".",slug:"/cluster",permalink:"/jellyfish-docs/cluster",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.2.0/cluster.md",tags:[],version:"0.2.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Simple React App",permalink:"/jellyfish-docs/tutorials/simple-react-app"},next:{title:"Cloud VPS with cloud-init",permalink:"/jellyfish-docs/deploying/vps"}},s={},u=[{value:"Configuring a Cluster",id:"configuring-a-cluster",level:2},{value:"Examples",id:"examples",level:2},{value:"Running from source",id:"running-from-source",level:3},{value:"Running with Docker (locally)",id:"running-with-docker-locally",level:3},{value:"Running with Docker (globally)",id:"running-with-docker-globally",level:3},{value:"Verifying that a cluster has been created",id:"verifying-that-a-cluster-has-been-created",level:2},{value:"Deeper dive into Erlang Distribution",id:"deeper-dive-into-erlang-distribution",level:2}],p={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cluster"},"Cluster"),(0,a.kt)("p",null,"Jellyfish comes with a built-in clustering mechanism.\nBy a cluster, we mean a set of connected Jellyfish instances.\nWhenever a new request for creating a room is sent to one of Jellyfishes in a cluster, this Jellyfish\ncommunicates with all other nodes and creates a room on the node with the lowest load.\nIn response, a Jellyfish address (specified with ",(0,a.kt)("inlineCode",{parentName:"p"},"JF_HOST")," environment variable) where the room was created is returned."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Even when running a cluster of Jellyfishes, a room still has to fit into one Jellyfish.\nCurrently, Jellyfish doesn't offer an option to split a room across multiple machines.")),(0,a.kt)("h2",{id:"configuring-a-cluster"},"Configuring a Cluster"),(0,a.kt)("p",null,"Jellyfish cluster can be created in 4 simple steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enable distribution mode with ",(0,a.kt)("inlineCode",{parentName:"li"},"JF_DIST_ENABLED=true")),(0,a.kt)("li",{parentName:"ol"},"Give your node a name with ",(0,a.kt)("inlineCode",{parentName:"li"},"JF_DIST_NODE_NAME")),(0,a.kt)("li",{parentName:"ol"},"Specify a list of nodes to connect to with ",(0,a.kt)("inlineCode",{parentName:"li"},"JF_DIST_NODES")),(0,a.kt)("li",{parentName:"ol"},"Configure HTTP and metrics ports so they don't overlap with other nodes.\nYou can do this with ",(0,a.kt)("inlineCode",{parentName:"li"},"JF_PORT")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"JF_METRICS_PORT")," environment variables.")),(0,a.kt)("admonition",{title:"Distribution Environment Variables",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"List of all cluster-related environment variables is available ",(0,a.kt)("a",{parentName:"p",href:"./getting_started/installation#distribution"},"here"),".")),(0,a.kt)("admonition",{title:"Security",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Currently, Jellyfish distribution is not encrypted meaning that data between\nJellyfishes is sent as plain text.\nCookie does not provide any cryptographic security.\nDo run a cluster only across machines in the same network!")),(0,a.kt)("admonition",{title:"Extra network Configuration",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Jellyfish leverages Erlang Distribution to form a cluster.\nThis means that we don't need to use any database where we would store\ninformation about network topology.\nInstead, some extra network configuration might be needed."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Jellyfish uses a service called EPMD (Erlang Port Mapper Deamon)\nthat runs on port ",(0,a.kt)("inlineCode",{parentName:"p"},"4369")," (TCP).\nIf you run Jellyfish using Docker, you have to explicitly export this port.\nIn production deployment, you also have to allow for traffic on this port in your firewall.\nEPMD is started automatically when running Jellyfish, so you don't need to take\nany extra steps to make it work.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Jellyfish uses a random port for connecting to other Jellyfishes.\nIf you run Jellyfish using Docker, this port defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"9000")," (TCP) but you can configure\nthe range it is selected from with ",(0,a.kt)("inlineCode",{parentName:"p"},"JF_DIST_MIN_PORT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"JF_DIST_MAX_PORT"),".\nNote that ",(0,a.kt)("inlineCode",{parentName:"p"},"JF_DIST_MIN_PORT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"JF_DIST_MAX_PORT")," are not available when running from source\n(using ",(0,a.kt)("inlineCode",{parentName:"p"},"mix phx.server"),") as in development you don't have to worry about the port used for\nforming a cluster.\nAs in the case of EPMD, in production deployment, you have to modify your firewall rules appropriately."))),(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"#deeper-dive-into-erlang-distribution"},"Deeper dive into Erlang Distribution")," for more information.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"running-from-source"},"Running from source"),(0,a.kt)("p",null,"Run the first Jellyfish:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"JF_DIST_ENABLED=true JF_DIST_NODE_NAME=j1@127.0.0.1 mix phx.server\n")),(0,a.kt)("p",null,"Run the second Jellyfish"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'JF_DIST_ENABLED=true JF_DIST_NODE_NAME=j2@127.0.0.1 JF_DIST_NODES="j1@127.0.0.1" JF_PORT=4002 JF_METRICS_PORT=9468 mix phx.server\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that when running the second Jellyfish, we had to change its HTTP and metrics ports.")),(0,a.kt)("h3",{id:"running-with-docker-locally"},"Running with Docker (locally)"),(0,a.kt)("p",null,"This simple docker compose file sets a cluster of two Jellyfishes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\n\nx-jellyfish-template: &jellyfish-template\n  build: .\n  environment: &jellyfish-environment\n    JF_SERVER_API_TOKEN: "development"\n    JF_DIST_ENABLED: "true"\n    JF_DIST_MODE: "sname"\n    JF_DIST_NODES: "j1@jellyfish1 j2@jellyfish2"\n  restart: on-failure\n\nservices:\n  jellyfish1:\n    <<: *jellyfish-template\n    environment:\n      <<: *jellyfish-environment\n      JF_HOST: "localhost:5001"\n      JF_PORT: 5001\n      JF_METRICS_PORT: 6001\n      JF_DIST_NODE_NAME: j1@jellyfish1\n    ports:\n      - 5001:5001\n      - 6001:6001\n\n  jellyfish2:\n    <<: *jellyfish-template\n    environment:\n      <<: *jellyfish-environment\n      JF_HOST: "localhost:5002"\n      JF_PORT: 5002\n      JF_METRICS_PORT: 6002\n      JF_DIST_NODE_NAME: j2@jellyfish2\n    ports:\n      - 5002:5002\n      - 6002:6002\n')),(0,a.kt)("p",null,"Because we run Jellyfishes in the same Docker network:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"we can use ",(0,a.kt)("inlineCode",{parentName:"li"},'JF_DIST_NODE: "sname"'),", which allows\nus to reference Jellyfishes using their service names so\n",(0,a.kt)("inlineCode",{parentName:"li"},"jellyfish1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"jellyfish2")),(0,a.kt)("li",{parentName:"ul"},"we don't need to export EPMD (",(0,a.kt)("inlineCode",{parentName:"li"},"4369"),") or distribution (",(0,a.kt)("inlineCode",{parentName:"li"},"9000"),")\nports")),(0,a.kt)("h3",{id:"running-with-docker-globally"},"Running with Docker (globally)"),(0,a.kt)("p",null,"When forming a cluster across multiple machines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you have to take care of ",(0,a.kt)("a",{parentName:"li",href:"#configuring-a-cluster"},"Extra Network Configuration")),(0,a.kt)("li",{parentName:"ul"},"you also can't use ",(0,a.kt)("inlineCode",{parentName:"li"},'JF_DIST_MODE="sname"')," as you have to name Jellyfish nodes using their publicly available IP address\nor domain names (see ",(0,a.kt)("inlineCode",{parentName:"li"},"JF_DIST_NODE_NAME")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"JF_DIST_MODE"),")"),(0,a.kt)("li",{parentName:"ul"},"you can't simulate this setup locally as you won't be able to expose two EMPD ports on the same machine.\nSee ",(0,a.kt)("a",{parentName:"li",href:"#deeper-dive-into-erlang-distribution"},"Deeper dive into Erlang Distribution")," for more information.")),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/jellyfish_videoroom/blob/main/docker-compose-deploy.yaml"},"Jellyfish Videoroom deployment configuration")," for an example."),(0,a.kt)("h2",{id:"verifying-that-a-cluster-has-been-created"},"Verifying that a cluster has been created"),(0,a.kt)("p",null,"When a cluster is created correctly you will see a log indicating that one of your Jellyfishes connected to the other one, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[info] [libcluster:epmd_cluster] connected to :"j1@127.0.0.1"\n')),(0,a.kt)("p",null,"To see clustering in action, create two rooms using the same Jellyfish address and observe how they are load balanced:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "authorization: Bearer development" http://localhost:4002/room\n# {"data":{"jellyfish_address":"localhost:4001"}}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "authorization: Bearer development" http://localhost:4002/room\n# {"data":{"jellyfish_address":"localhost:4002"}}\n')),(0,a.kt)("p",null,"Load balancing can also be tested using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jellyfish-dev/jellyfish-dashboard"},"Jellyfish Dashboard"),".\nSee ",(0,a.kt)("a",{parentName:"p",href:"./tutorials/dashboard#loadbalancing-in-dashboard"},"here")," for more information."),(0,a.kt)("h2",{id:"deeper-dive-into-erlang-distribution"},"Deeper dive into Erlang Distribution"),(0,a.kt)("p",null,"The most tricky thing when running Jellyfish in a cluster is to understand the role of EPMD.\nEPMD is responsible for mapping node names to ports they use.\nNode names consist of two parts ",(0,a.kt)("inlineCode",{parentName:"p"},"nodename@hostname"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"hostname")," identifies a host machine, and ",(0,a.kt)("inlineCode",{parentName:"p"},"nodename")," identifies a node on this machine.\nWhen node A wants to connect to node B, it uses node's B name to ask EPMD (running on node B)\nfor the actual port node B is accessible on."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Let's assume that node's B name is ",(0,a.kt)("inlineCode",{parentName:"li"},"nodeb@192.168.1.2"),"."),(0,a.kt)("li",{parentName:"ol"},"Node A will contact EPMD using ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.2")," IP address and port ",(0,a.kt)("inlineCode",{parentName:"li"},"4369"),", and ask for the\nport number used by a node with the name ",(0,a.kt)("inlineCode",{parentName:"li"},"nodeb"),"."),(0,a.kt)("li",{parentName:"ol"},"After that, node A can contact node B using ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.2")," IP address and port returned by EPMD.")),(0,a.kt)("p",null,"A couple of notes about EPMD:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it always uses port ",(0,a.kt)("inlineCode",{parentName:"li"},"4369")," (TCP)"),(0,a.kt)("li",{parentName:"ul"},"it is started automatically when running Jellyfish"),(0,a.kt)("li",{parentName:"ul"},"there is one EPMD per machine or one EPMD per docker container -\nthat's why we can't simulate Global Docker setup locally")),(0,a.kt)("p",null,"You can read more about Erlang Distribution ",(0,a.kt)("a",{parentName:"p",href:"https://www.erlang.org/doc/reference_manual/distributed.html"},"here"),"."))}c.isMDXComponent=!0}}]);