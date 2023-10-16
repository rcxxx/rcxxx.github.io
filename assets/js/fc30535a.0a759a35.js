"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[5222],{47409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));n(83989);const l={id:"ubuntu-20-04-nfs-server",title:"Ubuntu20.04 \u5b89\u88c5\u5e76\u914d\u7f6e nfs server",sidebar_label:"nfs-server"},u=void 0,r={unversionedId:"system/linux/ubuntu/ubuntu-20-04-nfs-server",id:"system/linux/ubuntu/ubuntu-20-04-nfs-server",title:"Ubuntu20.04 \u5b89\u88c5\u5e76\u914d\u7f6e nfs server",description:"\u5b89\u88c5",source:"@site/docs/stack/system/linux/ubuntu/ubuntu-20-04-nfs-server.md",sourceDirName:"system/linux/ubuntu",slug:"/system/linux/ubuntu/ubuntu-20-04-nfs-server",permalink:"/stack/system/linux/ubuntu/ubuntu-20-04-nfs-server",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/system/linux/ubuntu/ubuntu-20-04-nfs-server.md",tags:[],version:"current",frontMatter:{id:"ubuntu-20-04-nfs-server",title:"Ubuntu20.04 \u5b89\u88c5\u5e76\u914d\u7f6e nfs server",sidebar_label:"nfs-server"},sidebar:"\ud83d\udcbd System",previous:{title:"NVIDIA CUDA/CUDNN",permalink:"/stack/system/linux/ubuntu/ubuntu-20-04-cuda-toolkit"},next:{title:"WSL2 Ubuntu22.04",permalink:"/stack/system/win/win11-wsl-ubuntu2204"}},i={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5ba2\u6237\u7aef\u6302\u8f7d nfs \u76ee\u5f55",id:"\u5ba2\u6237\u7aef\u6302\u8f7d-nfs-\u76ee\u5f55",level:2},{value:"\u5ba2\u6237\u7aef\u5378\u8f7d nfs \u76ee\u5f55",id:"\u5ba2\u6237\u7aef\u5378\u8f7d-nfs-\u76ee\u5f55",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],k={toc:p};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt install nfs-kernel-server\n")),(0,s.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u5171\u4eab nfs \u670d\u52a1\u7684\u76ee\u5f55"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo mkdir ~/nfs\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u4fee\u6539 nfs \u670d\u52a1\u914d\u7f6e\u6587\u4ef6"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/exports\n")),(0,s.kt)("p",null,"\u5728\u5176\u4e2d\u52a0\u5165\u5982\u4e0b\u5185\u5bb9"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"/nfs  *(rw,sync,no_root_squash,no_subtree_check)\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"[/nfs]")," \u5236\u5b9a nfs \u5171\u4eab\u7684\u76ee\u5f55")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"[*]")," \u5141\u8bb8\u6240\u6709\u7684\u7f51\u6bb5\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u56fa\u5b9a\u7684 ip \u5730\u5740")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"[rw]")," \u8bfb\u5199\u6743\u9650")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"[sync]")," \u540c\u6b65\u5199\u5165\u5185\u5b58\u548c\u786c\u76d8")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"[no_root_squash]")," root\u7528\u6237\u5177\u6709\u5bf9\u6839\u76ee\u5f55\u7684\u5b8c\u5168\u7ba1\u7406\u8bbf\u95ee\u6743\u9650")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"[no_subtree_check]")," \u4e0d\u68c0\u67e5\u7236\u76ee\u5f55\u7684\u6743\u9650")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"\u68c0\u67e5\u914d\u7f6e\u9879\u662f\u5426\u6b63\u786e")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo exportfs -ar\nsudo exportfs -rv\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u91cd\u542f nfs \u670d\u52a1"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"no_subtree_check\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u67e5\u770b\u6b63\u5728\u5171\u4eab\u7684\u76ee\u5f55"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"showmount -e localhost\n")),(0,s.kt)("h2",{id:"\u5ba2\u6237\u7aef\u6302\u8f7d-nfs-\u76ee\u5f55"},"\u5ba2\u6237\u7aef\u6302\u8f7d nfs \u76ee\u5f55"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mount -t nfs -o nolock <ip>:/nfs /nfs\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[<ip>:/nfs]")," \u4e3b\u673a\u7684 ip + \u76ee\u5f55\u8def\u5f84"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[/nfs]")," \u5ba2\u6237\u7aef\u8981\u6302\u8f7d\u7684\u76ee\u6807\u8def\u5f84 ")),(0,s.kt)("h2",{id:"\u5ba2\u6237\u7aef\u5378\u8f7d-nfs-\u76ee\u5f55"},"\u5ba2\u6237\u7aef\u5378\u8f7d nfs \u76ee\u5f55"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"umount <ip>:/nfs\numount /nfs\n")),(0,s.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/wkd_007/article/details/129092820"},"Ubuntu\u6700\u65b0\u7248\u672c(Ubuntu22.04LTS)\u5b89\u88c5nfs\u670d\u52a1\u5668\u53ca\u4f7f\u7528\u6559\u7a0b"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/weixin_43025343/article/details/123488573"},"\u5982\u4f55\u5728 Ubuntu 20.04 \u4e0a\u5b89\u88c5\u548c\u914d\u7f6e NFS \u670d\u52a1\u5668")))))}m.isMDXComponent=!0}}]);