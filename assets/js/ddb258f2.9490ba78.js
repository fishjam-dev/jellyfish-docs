"use strict";(self.webpackChunkjellyfish_docs=self.webpackChunkjellyfish_docs||[]).push([[3448],{51287:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(74848),o=i(28453);const s={},r="Cloud VPS with cloud-init",l={id:"deploying/vps",title:"Cloud VPS with cloud-init",description:"We're encouraging you to use VPS as the most customizable option.",source:"@site/docs/deploying/vps.md",sourceDirName:"deploying",slug:"/deploying/vps",permalink:"/jellyfish-docs/next/deploying/vps",draft:!1,unlisted:!1,editUrl:"https://github.com/jellyfish-dev/jellyfish-docs/docs/deploying/vps.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Cluster",permalink:"/jellyfish-docs/next/cluster"},next:{title:"Fly.io (experimental)",permalink:"/jellyfish-docs/next/deploying/fly_io"}},c={},a=[{value:"1. Creating primary IP",id:"1-creating-primary-ip",level:2},{value:"2. Registering Domain",id:"2-registering-domain",level:2},{value:"3. Choosing the right VPS",id:"3-choosing-the-right-vps",level:2},{value:"4. Assigning Primary IP",id:"4-assigning-primary-ip",level:2},{value:"5. Adding a <em>cloud-init</em> configuration",id:"5-adding-a-cloud-init-configuration",level:2},{value:"A <em><strong>cloud-config</strong></em> template",id:"a-cloud-config-template",level:3},{value:"Other tools we&#39;ll install with <em>cloud-init</em>",id:"other-tools-well-install-with-cloud-init",level:3},{value:"Setting up Hetzner cloud VPS with <em>cloud-config</em>",id:"setting-up-hetzner-cloud-vps-with-cloud-config",level:3},{value:"6. Checking <em>cloud-init</em> status",id:"6-checking-cloud-init-status",level:2},{value:"Testing your instance with the Jellyfish dashboard",id:"testing-your-instance-with-the-jellyfish-dashboard",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cloud-vps-with-cloud-init",children:"Cloud VPS with cloud-init"}),"\n",(0,t.jsxs)(n.p,{children:["We're encouraging you to use VPS as the most customizable option.\nIn this example, we will show you how to set up a Jellyfish media server on ",(0,t.jsx)(n.a,{href:"https://www.hetzner.com/cloud",children:"Hetzner Cloud"}),", but you can use these instructions to run Jellyfish on VPS from any provider that supports ",(0,t.jsx)(n.a,{href:"https://cloud-init.io/",children:"cloud-init"})," setup."]}),"\n",(0,t.jsx)(n.p,{children:"We're presenting a configuration which uses SSL protocol, as we are aware of the consequences of using unencrypted connections.\nThat means you're going to need a registered domain but getting one is not a big deal nowadays."}),"\n",(0,t.jsx)(n.h2,{id:"1-creating-primary-ip",children:"1. Creating primary IP"}),"\n",(0,t.jsxs)(n.p,{children:["Because configuring a server with ",(0,t.jsx)(n.em,{children:"cloud-init"})," using our script requires you to have a registered domain pointing at a particular IP address, we divided the process of creating VPS into two parts:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"obtaining dedicated IP address"}),"\n",(0,t.jsxs)(n.li,{children:["configuring the server using ",(0,t.jsx)(n.em,{children:"cloud-init"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Let's start with the first one.\nIn Hetzner's project site go to the section ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Primary IPs"})})," then click ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Create Primary IP"})})," button.\nChoose a data center location for your server and select ",(0,t.jsx)(n.strong,{children:"IPv4"})," protocol.\nYou can also name that IP if you'd like."]}),"\n",(0,t.jsx)(n.h2,{id:"2-registering-domain",children:"2. Registering Domain"}),"\n",(0,t.jsxs)(n.p,{children:["We'll not suggest you to use a specific domain provider, maybe you've got one chosen so we'll describe this step without details that may be different among providers.\nIf you'd like, ",(0,t.jsx)(n.a,{href:"https://www.hetzner.com/domainregistration",children:"you can use Hetzner as well to register a domain"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After registering your domain go to the DNS Records Table of your provider and create an ",(0,t.jsx)(n.strong,{children:"A"})," record pointing to the ",(0,t.jsx)(n.strong,{children:"IP"})," you've created in the previous step."]}),"\n",(0,t.jsx)(n.h2,{id:"3-choosing-the-right-vps",children:"3. Choosing the right VPS"}),"\n",(0,t.jsx)(n.p,{children:"Now let's go back to the Hetzner project site.\nIt's time to choose and configure a server for Jellyfish."}),"\n",(0,t.jsx)(n.p,{children:"Although Jellyfish doesn't have minimum requirements to work, we encourage you to choose a middle-sized VPS (at least 8 cores) as media processing is consuming quite a lot of CPU.\nRemember to choose a server located in the data center where you've created an IP address in the first step."}),"\n",(0,t.jsx)(n.p,{children:"For this tutorial, we decided on CPX21 from Hetzner Cloud running Ubuntu 22:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Hetzner Cloud - choosing VPS",src:i(58456).A+"",width:"2174",height:"1358"})}),"\n",(0,t.jsx)(n.h2,{id:"4-assigning-primary-ip",children:"4. Assigning Primary IP"}),"\n",(0,t.jsxs)(n.p,{children:["Below the list of the VPS types there is a ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Networking"})})," section where your Primary IP from Step 1 is waiting to be used.\nSelect it."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Hetzner Cloud - choosing VPS",src:i(94090).A+"",width:"2180",height:"902"})}),"\n",(0,t.jsxs)(n.h2,{id:"5-adding-a-cloud-init-configuration",children:["5. Adding a ",(0,t.jsx)(n.em,{children:"cloud-init"})," configuration"]}),"\n",(0,t.jsxs)(n.p,{children:["To configure a server and install Jellyfish on it we're going to use ",(0,t.jsx)(n.em,{children:"cloud-init"}),".\nIt's a preinstalled tool that lets you set up a newly created server with a YAML config file.\nIn the configuration you can create a user, choose packages to be installed, configure them, write or modify files and in our case finally run a docker container."]}),"\n",(0,t.jsxs)(n.p,{children:["Full documentation about keys you can use in a ",(0,t.jsx)(n.em,{children:"cloud-config"})," file can be found in ",(0,t.jsxs)(n.a,{href:"https://cloudinit.readthedocs.io/en/latest/reference/modules.html",children:["the official ",(0,t.jsx)(n.em,{children:"cloud-init"})," documentation"]}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"a-cloud-config-template",children:["A ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"cloud-config"})})," template"]}),"\n",(0,t.jsxs)(n.p,{children:["We prepared a template ",(0,t.jsx)(n.em,{children:"cloud-config"})," that will configure your server and start a chosen version of Jellyfish:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"cloud-config.yaml"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#cloud-config\nusers:\n  - name: jellyfish\n    groups: docker\n    sudo: null\n    shell: /bin/false\n    no_create_home: true\nssh_pwauth: false\ndisable_root_opts: no-port-forwarding,no-agent-forwarding,no-X11-forwarding\napt:\n  sources:\n    docker.list:\n      source: "deb [arch=amd64,arm64] https://download.docker.com/linux/ubuntu jammy stable"\n      keyid: 9DC858229FC7DD38854AE2D88D81803C0EBFCD88\npackages:\n  - ufw\n  - fail2ban\n  - gzip\n  - containerd.io\n  - docker-ce\n  - docker-ce-cli\n  - nginx\n  - certbot\nwrite_files:\n  - path: /opt/jellyfish/env-file\n    defer: true\n    owner: jellyfish:jellyfish\n\nruncmd:\n  - export JELLYFISH_VERSION=0.3.0\n  - export JELLYFISH_DOMAIN=mydomain.example.com\n  - export LETSENCRYPT_EMAIL=my@email.com\n  - export SERVER_API_TOKEN=test_token\n  - systemctl enable fail2ban\n  - ufw default deny outgoing\n  - ufw default deny incoming\n  - ufw default deny routed\n  - ufw allow in ssh\n  - ufw allow out https\n  - ufw allow out domain\n  - ufw allow in 80/tcp\n  - ufw allow in 443/tcp\n  - ufw allow in 50000:500100/udp\n  - ufw allow in 49999/tcp\n  - ufw allow out 5002\n  - ufw allow out from any port 50000:50100 proto udp to any\n  - ufw allow out 49999 proto tcp to any\n  - ufw enable\n  - service nginx stop\n  - "[ ! -f /etc/letsencrypt/live/$JELLYFISH_DOMAIN/cert.pem ] && certbot certonly --standalone --noninteractive --agree-tos --email $LETSENCRYPT_EMAIL -d $JELLYFISH_DOMAIN"\n  - |\n    cat << EOF > /etc/cron.d/cert_renew\n    0 4 * * * [jellyfish] certbot certonly --webroot -w /usr/share/nginx/html -d $JELLYFISH_DOMAIN --keep-until-expiring --quiet\n    5 4 * * * [jellyfish] service nginx reload\n    EOF\n  - |\n    cat << EOF > /etc/nginx/sites-available/$JELLYFISH_DOMAIN\n      server {\n        server_name $JELLYFISH_DOMAIN;\n        location / {\n          proxy_pass http://localhost:5002;\n          proxy_http_version 1.1;\n          proxy_set_header Upgrade \\$http_upgrade;\n          proxy_set_header Connection "Upgrade";\n          proxy_set_header Host \\$host;\n        }\n\n        listen [::]:443 ssl http2; # managed by Certbot\n        listen 443 ssl http2; # managed by Certbot\n        ssl_certificate /etc/letsencrypt/live/$JELLYFISH_DOMAIN/fullchain.pem; # managed by Certbot\n        ssl_certificate_key /etc/letsencrypt/live/$JELLYFISH_DOMAIN/privkey.pem; # managed by Certbot\n      }\n\n      server {\n          listen 80;\n          listen [::]:80;\n          server_name $JELLYFISH_DOMAIN;\n          # Do not HTTPS redirect Let\'sEncrypt ACME challenge\n          location /.well-known/acme-challenge/ {\n                  auth_basic off;\n                  allow all;\n                  root /usr/share/nginx/html;\n                  try_files \\$uri =404;\n                  break;\n          }\n          location / {\n                  return 301 https://\\$host\\$request_uri;\n          }\n      }\n    EOF\n  - ln -sf /etc/nginx/sites-available/$JELLYFISH_DOMAIN /etc/nginx/sites-enabled/$JELLYFISH_DOMAIN\n  - service nginx start\n  - |\n    cat << EOF > /opt/jellyfish/env-file\n    JF_HOST=$JELLYFISH_DOMAIN\n    JF_PORT=5002\n    JF_SERVER_API_TOKEN=$SERVER_API_TOKEN\n    JF_CHECK_ORIGIN=false\n    JF_WEBRTC_TURN_IP=$(ip route get 1.0.0.0 | sed -n \'s/^.*src \\([0-9.]*\\) .*$/\\1/p\')\n    JF_WEBRTC_TURN_TCP_PORT=49999\n    JF_WEBRTC_TURN_PORT_RANGE=50000-50100\n    JF_WEBRTC_TURN_LISTEN_IP=0.0.0.0\n    EOF\n  - [\n      su,\n      jellyfish,\n      -s,\n      /bin/bash,\n      -c,\n      "docker run -d \\\n      --restart unless-stopped \\\n      -p 50000-50100:50000-50100/udp \\\n      -p 5002:5002 \\\n      --env-file /opt/jellyfish/env-file \\\n      -v /opt/jellyfish/jellyfish_resources:/app/jellyfish_resources \\\n      ghcr.io/jellyfish-dev/jellyfish:$JELLYFISH_VERSION",\n    ]\n'})})]}),"\n",(0,t.jsx)(n.p,{children:"You'll need to manually take care of four lines in that template:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"- export JELLYFISH_VERSION=0.1.0-ed317b"}),"\nChange the value if you want to deploy a different version of Jellyfish.\nYou can find the list of available versions in ",(0,t.jsx)(n.a,{href:"https://github.com/jellyfish-dev/jellyfish/pkgs/container/jellyfish",children:"our package repository"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"- export JELLYFISH_DOMAIN=mydomain.example.com"}),"\nEnter here a domain you've configured with ",(0,t.jsx)(n.strong,{children:"A"})," record in step 2."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"- export LETSENCRYPT_EMAIL=my@email.com"}),"\nEnter your email address to be notified when the SSL certificate will be about to expire."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"export SERVER_API_TOKEN=test_token"}),"\nServer API token is a token you'll need to connect to Jellyfish via API or SDK.\nWrite here a chosen secret value you're going to remember later."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Copy the file and change up those two variables.\nYou're going to need the content of the file in the next section."}),"\n",(0,t.jsxs)(n.h3,{id:"other-tools-well-install-with-cloud-init",children:["Other tools we'll install with ",(0,t.jsx)(n.em,{children:"cloud-init"})]}),"\n",(0,t.jsx)(n.p,{children:"As you might noticed we've chosen some packages to be installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ufw"})," -\nUncomplicated Firewall.\nWe'll need it to allow or block traffic on specific ports ",(0,t.jsx)(n.a,{href:"https://help.ubuntu.com/community/UFW",children:"https://help.ubuntu.com/community/UFW"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fail2ban"})," -\nTool to block traffic recognized as unauthorized ",(0,t.jsx)(n.a,{href:"https://www.fail2ban.org/wiki/index.php/Main_Page",children:"https://www.fail2ban.org/wiki/index.php/Main_Page"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gzip"})," -\nCompression Utility ",(0,t.jsx)(n.a,{href:"https://www.gzip.org/",children:"https://www.gzip.org/"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"containerd.io"}),", ",(0,t.jsx)(n.code,{children:"docker-ce"}),", ",(0,t.jsx)(n.code,{children:"docker-ce-cli"})," -\nDocker and Docker-related libraries."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"setting-up-hetzner-cloud-vps-with-cloud-config",children:["Setting up Hetzner cloud VPS with ",(0,t.jsx)(n.em,{children:"cloud-config"})]}),"\n",(0,t.jsxs)(n.p,{children:["Now, we're going to use the content of the file you prepared in the Hetzner cloud VPS creating form.\nTo do it scroll to the ",(0,t.jsx)(n.em,{children:"Cloud config"})," section of the form and paste the content of your ",(0,t.jsx)(n.em,{children:"cloud-config.yaml"})," file."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Hetzner Cloud - placing cloud-config",src:i(49299).A+"",width:"2138",height:"632"})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"cloud-init"})," will recognize the file as a configuration only if the file starts with that comment:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#cloud-config\n...\n"})}),(0,t.jsx)(n.p,{children:"So be careful while copying."})]}),"\n",(0,t.jsx)(n.p,{children:"That's it.\nYou can click 'Create & Buy' and the server will start to configure."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Think about adding your public SSH key while creating a VPS instance.\nIt will ease up connecting to VPS later.\nIf you don't add any key you're going to need a root password (you'll receive it in an email after creating VPS)"})}),"\n",(0,t.jsxs)(n.h2,{id:"6-checking-cloud-init-status",children:["6. Checking ",(0,t.jsx)(n.em,{children:"cloud-init"})," status"]}),"\n",(0,t.jsxs)(n.p,{children:["Configuring your server will take some time, but it's created almost immediately after creation.\nYou can log into the server using ",(0,t.jsx)(n.em,{children:"ssh"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ssh root@<VPS_IP>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["then, in the server's terminal you can check the current status of ",(0,t.jsx)(n.em,{children:"cloud-init"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cloud-init status\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Possible responses are ",(0,t.jsx)(n.code,{children:"running"}),", ",(0,t.jsx)(n.code,{children:"error"})," and ",(0,t.jsx)(n.code,{children:"done"}),".\nThe first one informs you that ",(0,t.jsx)(n.em,{children:"cloud-init"})," is still configuring your server.\nThe second one means that something went wrong.\nYou can find logs from the ",(0,t.jsx)(n.em,{children:"cloud-init"})," run in ",(0,t.jsx)(n.code,{children:"/var/log/cloud-init-output.log"})," file.\n",(0,t.jsx)(n.code,{children:"done"})," means that your jellyfish server is ready to be used."]}),"\n",(0,t.jsxs)(n.p,{children:["If you'd like to keep an eye on the ",(0,t.jsx)(n.em,{children:"cloud-init"})," process you can use:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cloud-init status --wait\n"})}),"\n",(0,t.jsx)(n.p,{children:"To see the output when the process is finished (successfully or not)."}),"\n",(0,t.jsx)(n.h2,{id:"testing-your-instance-with-the-jellyfish-dashboard",children:"Testing your instance with the Jellyfish dashboard"}),"\n",(0,t.jsxs)(n.p,{children:["To see how (or if) your Jellyfish server is working you can test it by connecting our ",(0,t.jsx)(n.a,{href:"https://jellyfish-dev.github.io/jellyfish-dashboard/",children:"Jellyfish Dashboard"})," with your server.\nDetailed instructions on how to use Jellyfish Dashboard can be found ",(0,t.jsx)(n.a,{href:"/jellyfish-docs/next/tutorials/dashboard",children:"here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"/health"})," endpoint of Jellyfish to see the status of its services. Read more ",(0,t.jsx)(n.a,{href:"/jellyfish-docs/next/for_developers/api_reference/rest_api",children:"here"})]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},58456:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/vps-1-25f3c28165d80b24a9d4386fd31f3350.png"},49299:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/vps-2-13c94282925da4159e20bd3a56b6f39a.png"},94090:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/vps-3-c09b74435f3d57a52e640a02db8cb366.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);