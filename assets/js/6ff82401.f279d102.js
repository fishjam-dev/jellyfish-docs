"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[6709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(7462),o=(n(7294),n(3905));const r={},a="Cloud VPS with cloud-init",l={unversionedId:"deploying/vps",id:"version-0.2.0/deploying/vps",title:"Cloud VPS with cloud-init",description:"We're encouraging you to use VPS as the most customizable option.",source:"@site/versioned_docs/version-0.2.0/deploying/vps.md",sourceDirName:"deploying",slug:"/deploying/vps",permalink:"/jellyfish-docs/deploying/vps",draft:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/versioned_docs/version-0.2.0/deploying/vps.md",tags:[],version:"0.2.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Cluster",permalink:"/jellyfish-docs/cluster"},next:{title:"Fly.io (experimental)",permalink:"/jellyfish-docs/deploying/fly_io"}},s={},u=[{value:"1. Creating primary IP",id:"1-creating-primary-ip",level:2},{value:"2. Registering Domain",id:"2-registering-domain",level:2},{value:"3. Choosing the right VPS",id:"3-choosing-the-right-vps",level:2},{value:"4. Assigning Primary IP",id:"4-assigning-primary-ip",level:2},{value:"5. Adding a <em>cloud-init</em> configuration",id:"5-adding-a-cloud-init-configuration",level:2},{value:"A <strong><em>cloud-config</em></strong> tempalte",id:"a-cloud-config-tempalte",level:3},{value:"Other tools we&#39;ll install with <em>cloud-init</em>",id:"other-tools-well-install-with-cloud-init",level:3},{value:"Setting up Hetzner cloud VPS with <em>cloud-config</em>",id:"setting-up-hetzner-cloud-vps-with-cloud-config",level:3},{value:"6. Checking <em>cloud-init</em> status",id:"6-checking-cloud-init-status",level:2},{value:"Testing your instance with the Jellyfish dashboard",id:"testing-your-instance-with-the-jellyfish-dashboard",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloud-vps-with-cloud-init"},"Cloud VPS with cloud-init"),(0,o.kt)("p",null,"We're encouraging you to use VPS as the most customizable option.\nIn this example, we will show you how to set up a Jellyfish media server on ",(0,o.kt)("a",{parentName:"p",href:"https://www.hetzner.com/cloud"},"Hetzner Cloud"),", but you can use these instructions to run Jellyfish on VPS from any provider that supports ",(0,o.kt)("a",{parentName:"p",href:"https://cloud-init.io/"},"cloud-init")," setup."),(0,o.kt)("p",null,"We're presenting a configuration which uses SSL protocol, as we are aware of the consequences of using unencrypted connections.\nThat means you're going to need a registered domain but getting one is not a big deal nowadays."),(0,o.kt)("h2",{id:"1-creating-primary-ip"},"1. Creating primary IP"),(0,o.kt)("p",null,"Because configuring a server with ",(0,o.kt)("em",{parentName:"p"},"cloud-init")," using our script requires you to have a registered domain pointing at a particular IP address, we divided the process of creating VPS into two parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"obtaining dedicated IP address"),(0,o.kt)("li",{parentName:"ul"},"configuring the server using ",(0,o.kt)("em",{parentName:"li"},"cloud-init"))),(0,o.kt)("p",null,"Let's start with the first one.\nIn Hetzner's project site go to the section ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Primary IPs"))," then click ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Create Primary IP"))," button.\nChoose a data center location for your server and select ",(0,o.kt)("strong",{parentName:"p"},"IPv4")," protocol.\nYou can also name that IP if you'd like."),(0,o.kt)("h2",{id:"2-registering-domain"},"2. Registering Domain"),(0,o.kt)("p",null,"We'll not suggest you to use a specific domain provider, maybe you've got one chosen so we'll describe this step without details that may be different among providers.\nIf you'd like, ",(0,o.kt)("a",{parentName:"p",href:"https://www.hetzner.com/domainregistration"},"you can use Hetzner as well to register a domain"),"."),(0,o.kt)("p",null,"After registering your domain go to the DNS Records Table of your provider and create an ",(0,o.kt)("strong",{parentName:"p"},"A")," record pointing to the ",(0,o.kt)("strong",{parentName:"p"},"IP")," you've created in the previous step."),(0,o.kt)("h2",{id:"3-choosing-the-right-vps"},"3. Choosing the right VPS"),(0,o.kt)("p",null,"Now let's go back to the Hetzner project site.\nIt's time to choose and configure a server for Jellyfish."),(0,o.kt)("p",null,"Although Jellyfish doesn't have minimum requirements to work, we encourage you to choose a middle-sized VPS (at least 8 cores) as media processing is consuming quite a lot of CPU.\nRemember to choose a server located in the data center where you've created an IP address in the first step."),(0,o.kt)("p",null,"For this tutorial, we decided on CPX21 from Hetzner Cloud running Ubuntu 22:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hetzner Cloud - choosing VPS",src:n(7311).Z,width:"2174",height:"1358"})),(0,o.kt)("h2",{id:"4-assigning-primary-ip"},"4. Assigning Primary IP"),(0,o.kt)("p",null,"Below the list of the VPS types there is a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Networking"))," section where your Primary IP from Step 1 is waiting to be used.\nSelect it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hetzner Cloud - choosing VPS",src:n(234).Z,width:"2180",height:"902"})),(0,o.kt)("h2",{id:"5-adding-a-cloud-init-configuration"},"5. Adding a ",(0,o.kt)("em",{parentName:"h2"},"cloud-init")," configuration"),(0,o.kt)("p",null,"To configure a server and install Jellyfish on it we're going to use ",(0,o.kt)("em",{parentName:"p"},"cloud-init"),".\nIt's a preinstalled tool that lets you set up a newly created server with a YAML config file.\nIn the configuration you can create a user, choose packages to be installed, configure them, write or modify files and in our case finally run a docker container."),(0,o.kt)("p",null,"Full documentation about keys you can use in a ",(0,o.kt)("em",{parentName:"p"},"cloud-config")," file can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/reference/modules.html"},"the official ",(0,o.kt)("em",{parentName:"a"},"cloud-init")," documentation"),"."),(0,o.kt)("h3",{id:"a-cloud-config-tempalte"},"A ",(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("em",{parentName:"strong"},"cloud-config"))," tempalte"),(0,o.kt)("p",null,"We prepared a template ",(0,o.kt)("em",{parentName:"p"},"cloud-config")," that will configure your server and start a chosen version of Jellyfish:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"cloud-config.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#cloud-config\nusers:\n  - name: jellyfish\n    groups: docker\n    sudo: null\n    shell: /bin/false\n    no_create_home: true\nssh_pwauth: false\ndisable_root_opts: no-port-forwarding,no-agent-forwarding,no-X11-forwarding\napt:\n  sources:\n    docker.list:\n      source: "deb [arch=amd64,arm64] https://download.docker.com/linux/ubuntu jammy stable"\n      keyid: 9DC858229FC7DD38854AE2D88D81803C0EBFCD88\npackages:\n  - ufw\n  - fail2ban\n  - gzip\n  - containerd.io\n  - docker-ce\n  - docker-ce-cli\n  - nginx\n  - certbot\nwrite_files:\n  - path: /opt/jellyfish/env-file\n    defer: true\n    owner: jellyfish:jellyfish\n\nruncmd:\n  - export JELLYFISH_VERSION=0.2.0\n  - export JELLYFISH_DOMAIN=mydomain.example.com\n  - export LETSENCRYPT_EMAIL=my@email.com\n  - export SERVER_API_TOKEN=test_token\n  - systemctl enable fail2ban\n  - ufw default deny outgoing\n  - ufw default deny incoming\n  - ufw default deny routed\n  - ufw allow in ssh\n  - ufw allow out https\n  - ufw allow out domain\n  - ufw allow in 80/tcp\n  - ufw allow in 443/tcp\n  - ufw allow in 50000:500100/udp\n  - ufw allow in 49999/tcp\n  - ufw allow out 5002\n  - ufw allow out from any port 50000:50100 proto udp to any\n  - ufw allow out 49999 proto tcp to any\n  - ufw enable\n  - service nginx stop\n  - "[ ! -f /etc/letsencrypt/live/$JELLYFISH_DOMAIN/cert.pem ] && certbot certonly --standalone --noninteractive --agree-tos --email $LETSENCRYPT_EMAIL -d $JELLYFISH_DOMAIN"\n  - |\n    cat << EOF > /etc/cron.d/cert_renew\n    0 4 * * * [jellyfish] certbot certonly --webroot -w /usr/share/nginx/html -d $JELLYFISH_DOMAIN --keep-until-expiring --quiet\n    5 4 * * * [jellyfish] service nginx reload\n    EOF\n  - |\n    cat << EOF > /etc/nginx/sites-available/$JELLYFISH_DOMAIN\n      server {\n        server_name $JELLYFISH_DOMAIN;\n        location / {\n          proxy_pass http://localhost:5002;\n          proxy_http_version 1.1;\n          proxy_set_header Upgrade \\$http_upgrade;\n          proxy_set_header Connection "Upgrade";\n          proxy_set_header Host \\$host;\n        }\n\n        listen [::]:443 ssl http2; # managed by Certbot\n        listen 443 ssl http2; # managed by Certbot\n        ssl_certificate /etc/letsencrypt/live/$JELLYFISH_DOMAIN/fullchain.pem; # managed by Certbot\n        ssl_certificate_key /etc/letsencrypt/live/$JELLYFISH_DOMAIN/privkey.pem; # managed by Certbot\n      }\n\n      server {\n          listen 80;\n          listen [::]:80;\n          server_name $JELLYFISH_DOMAIN;\n          # Do not HTTPS redirect Let\'sEncrypt ACME challenge\n          location /.well-known/acme-challenge/ {\n                  auth_basic off;\n                  allow all;\n                  root /usr/share/nginx/html;\n                  try_files \\$uri =404;\n                  break;\n          }\n          location / {\n                  return 301 https://\\$host\\$request_uri;\n          }\n      }\n    EOF\n  - ln -sf /etc/nginx/sites-available/$JELLYFISH_DOMAIN /etc/nginx/sites-enabled/$JELLYFISH_DOMAIN\n  - service nginx start\n  - |\n    cat << EOF > /opt/jellyfish/env-file\n    JF_HOST=$JELLYFISH_DOMAIN\n    JF_PORT=5002\n    JF_SERVER_API_TOKEN=$SERVER_API_TOKEN\n    JF_CHECK_ORIGIN=false\n    JF_WEBRTC_TURN_IP=$(ip route get 1.0.0.0 | sed -n \'s/^.*src \\([0-9.]*\\) .*$/\\1/p\')\n    JF_WEBRTC_TURN_TCP_PORT=49999\n    JF_WEBRTC_TURN_PORT_RANGE=50000-50100\n    JF_WEBRTC_TURN_LISTEN_IP=0.0.0.0\n    EOF\n  - [\n      su,\n      jellyfish,\n      -s,\n      /bin/bash,\n      -c,\n      "docker run -d \\\n      --restart unless-stopped \\\n      -p 50000-50100:50000-50100/udp \\\n      -p 5002:5002 \\\n      --env-file /opt/jellyfish/env-file \\\n      -v /opt/jellyfish/jellyfish_output:/app/jellyfish_output \\\n      ghcr.io/jellyfish-dev/jellyfish:$JELLYFISH_VERSION",\n    ]\n'))),"You'll need to manually take care of four lines in that template:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"- export JELLYFISH_VERSION=0.1.0-ed317b"),"\nChange the value if you want to deploy a different version of Jellyfish.\nYou can find the list of available versions in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/jellyfish-dev/jellyfish/pkgs/container/jellyfish"},"our package repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"- export JELLYFISH_DOMAIN=mydomain.example.com"),"\nEnter here a domain you've configured with ",(0,o.kt)("strong",{parentName:"li"},"A")," record in step 2."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"- export LETSENCRYPT_EMAIL=my@email.com"),"\nEnter your email address to be notified when the SSL certificate will be about to expire."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"export SERVER_API_TOKEN=test_token"),"\nServer API token is a token you'll need to connect to Jellyfish via API or SDK.\nWrite here a chosen secret value you're going to remember later.")),(0,o.kt)("p",null,"Copy the file and change up those two variables.\nYou're going to need the content of the file in the next section."),(0,o.kt)("h3",{id:"other-tools-well-install-with-cloud-init"},"Other tools we'll install with ",(0,o.kt)("em",{parentName:"h3"},"cloud-init")),(0,o.kt)("p",null,"As you might noticed we've chosen some packages to be installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ufw")," -\nUncomplicated Firewall.\nWe'll need it to allow or block traffic on specific ports ",(0,o.kt)("a",{parentName:"li",href:"https://help.ubuntu.com/community/UFW"},"https://help.ubuntu.com/community/UFW"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fail2ban")," -\nTool to block traffic recognized as unauthorized ",(0,o.kt)("a",{parentName:"li",href:"https://www.fail2ban.org/wiki/index.php/Main_Page"},"https://www.fail2ban.org/wiki/index.php/Main_Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gzip")," -\nCompression Utility ",(0,o.kt)("a",{parentName:"li",href:"https://www.gzip.org/"},"https://www.gzip.org/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"containerd.io"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-ce"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-ce-cli")," -\nDocker and Docker-related libraries.")),(0,o.kt)("h3",{id:"setting-up-hetzner-cloud-vps-with-cloud-config"},"Setting up Hetzner cloud VPS with ",(0,o.kt)("em",{parentName:"h3"},"cloud-config")),(0,o.kt)("p",null,"Now, we're going to use the content of the file you prepared in the Hetzner cloud VPS creating form.\nTo do it scroll to the ",(0,o.kt)("em",{parentName:"p"},"Cloud config")," section of the form and paste the content of your ",(0,o.kt)("em",{parentName:"p"},"cloud-config.yaml")," file."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hetzner Cloud - placing cloud-config",src:n(8992).Z,width:"2138",height:"632"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"cloud-init")," will recognize the file as a configuration only if the file starts with that comment:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"#cloud-config\n...\n")),(0,o.kt)("p",{parentName:"admonition"},"So be careful while copying.")),(0,o.kt)("p",null,"That's it.\nYou can click 'Create & Buy' and the server will start to configure."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Think about adding your public SSH key while creating a VPS instance.\nIt will ease up connecting to VPS later.\nIf you don't add any key you're going to need a root password (you'll receive it in an email after creating VPS)")),(0,o.kt)("h2",{id:"6-checking-cloud-init-status"},"6. Checking ",(0,o.kt)("em",{parentName:"h2"},"cloud-init")," status"),(0,o.kt)("p",null,"Configuring your server will take some time, but it's created almost immediately after creation.\nYou can log into the server using ",(0,o.kt)("em",{parentName:"p"},"ssh"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh root@<VPS_IP>\n")),(0,o.kt)("p",null,"then, in the server's terminal you can check the current status of ",(0,o.kt)("em",{parentName:"p"},"cloud-init"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cloud-init status\n")),(0,o.kt)("p",null,"Possible responses are ",(0,o.kt)("inlineCode",{parentName:"p"},"running"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"done"),".\nThe first one informs you that ",(0,o.kt)("em",{parentName:"p"},"cloud-init")," is still configuring your server.\nThe second one means that something went wrong.\nYou can find logs from the ",(0,o.kt)("em",{parentName:"p"},"cloud-init")," run in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/cloud-init-output.log")," file.\n",(0,o.kt)("inlineCode",{parentName:"p"},"done")," means that your jellyfish server is ready to be used."),(0,o.kt)("p",null,"If you'd like to keep an eye on the ",(0,o.kt)("em",{parentName:"p"},"cloud-init")," process you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cloud-init status --wait\n")),(0,o.kt)("p",null,"To see the output when the process is finished (successfully or not)."),(0,o.kt)("h2",{id:"testing-your-instance-with-the-jellyfish-dashboard"},"Testing your instance with the Jellyfish dashboard"),(0,o.kt)("p",null,"To see how (or if) your Jellyfish server is working you can test it by connecting our ",(0,o.kt)("a",{parentName:"p",href:"https://jellyfish-dev.github.io/jellyfish-dashboard/"},"Jellyfish Dashboard")," with your server.\nDetailed instructions on how to use Jellyfish Dashboard can be found ",(0,o.kt)("a",{parentName:"p",href:"/jellyfish-docs/tutorials/dashboard"},"here"),"."))}d.isMDXComponent=!0},7311:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/vps-1-25f3c28165d80b24a9d4386fd31f3350.png"},8992:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/vps-2-13c94282925da4159e20bd3a56b6f39a.png"},234:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/vps-3-c09b74435f3d57a52e640a02db8cb366.png"}}]);