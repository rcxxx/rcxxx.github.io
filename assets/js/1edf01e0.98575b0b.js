"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[5589],{30919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>i,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));n(83989);const o={id:"doker-ubuntu20-install",title:"Ubuntu20.04 \u5b89\u88c5 Doker",sidebar_label:"Ubuntu20.04 Install"},l=void 0,u={unversionedId:"computer/pc/docker/doker-ubuntu20-install",id:"computer/pc/docker/doker-ubuntu20-install",title:"Ubuntu20.04 \u5b89\u88c5 Doker",description:"\u542f\u7528 Docker \u8f6f\u4ef6\u6e90\uff0c\u5bfc\u5165 GPG key",source:"@site/docs/computer/pc/docker/ubuntu20-doker-install.md",sourceDirName:"computer/pc/docker",slug:"/computer/pc/docker/doker-ubuntu20-install",permalink:"/docs/computer/pc/docker/doker-ubuntu20-install",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/computer/pc/docker/ubuntu20-doker-install.md",tags:[],version:"current",frontMatter:{id:"doker-ubuntu20-install",title:"Ubuntu20.04 \u5b89\u88c5 Doker",sidebar_label:"Ubuntu20.04 Install"}},c={},d=[{value:"\u542f\u7528 Docker \u8f6f\u4ef6\u6e90\uff0c\u5bfc\u5165 GPG key",id:"\u542f\u7528-docker-\u8f6f\u4ef6\u6e90\u5bfc\u5165-gpg-key",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:d};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u542f\u7528-docker-\u8f6f\u4ef6\u6e90\u5bfc\u5165-gpg-key"},"\u542f\u7528 Docker \u8f6f\u4ef6\u6e90\uff0c\u5bfc\u5165 GPG key"),(0,r.kt)("p",null,"\u66f4\u65b0\u8f6f\u4ef6\u5305\uff0c\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common\n")),(0,r.kt)("p",null,"\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"GPG key"),"\uff0c\u6dfb\u52a0\u8f6f\u4ef6\u6e90"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\nsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\n')),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u6700\u65b0\u7248\u672c ",(0,r.kt)("inlineCode",{parentName:"li"},"docker"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install docker-ce docker-ce-cli containerd.io\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u6307\u5b9a\u7248\u672c ",(0,r.kt)("inlineCode",{parentName:"li"},"docker"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\napt list -a docker-ce\nsudo apt install docker-ce=<VERSION> docker-ce-cli=<VERSION> containerd.io\n")),(0,r.kt)("h2",{id:"\u9a8c\u8bc1\u5b89\u88c5"},"\u9a8c\u8bc1\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status docker\n")),(0,r.kt)("p",null,"\u5f97\u5230\u5927\u6982\u8fd9\u6837\u7684\u8f93\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u25cf docker.service - Docker Application Container Engine\n     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset>\n     Active: active (running) since Sun 2022-06-26 18:54:05 CST; 51s ago\nTriggeredBy: \u25cf docker.socket\n       Docs: https://docs.docker.com\n   Main PID: 7292 (dockerd)\n      Tasks: 13\n     Memory: 31.1M\n     CGroup: /system.slice/docker.service\n             \u2514\u25007292 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/cont>\n")),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://zhuanlan.zhihu.com/p/143156163"},"\u5982\u4f55\u5728 Ubuntu 20.04 \u4e0a\u5b89\u88c5\u548c\u4f7f\u7528 Docker")))))}i.isMDXComponent=!0}}]);