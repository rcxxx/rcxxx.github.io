"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[3139],{44967:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var n=t(87462),l=(t(67294),t(3905));t(83989);const a={id:"win11-wsl-usb",title:"Win11 WSL2 \u8fde\u63a5 USB \u8bbe\u5907",sidebar_label:"WSL2 \u8fde\u63a5 USB \u8bbe\u5907"},i=void 0,u={unversionedId:"system/win/win11-wsl-usb",id:"system/win/win11-wsl-usb",title:"Win11 WSL2 \u8fde\u63a5 USB \u8bbe\u5907",description:"\u5b89\u88c5 usbipd-win",source:"@site/docs/stack/system/win/win11-wsl2-usb.md",sourceDirName:"system/win",slug:"/system/win/win11-wsl-usb",permalink:"/stack/system/win/win11-wsl-usb",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/system/win/win11-wsl2-usb.md",tags:[],version:"current",frontMatter:{id:"win11-wsl-usb",title:"Win11 WSL2 \u8fde\u63a5 USB \u8bbe\u5907",sidebar_label:"WSL2 \u8fde\u63a5 USB \u8bbe\u5907"},sidebar:"\ud83d\udcbd System",previous:{title:"WSL2 Proxy Configure",permalink:"/stack/system/win/win11-wsl-clash-proxy"}},r={},p=[{value:"\u5b89\u88c5 usbipd-win",id:"\u5b89\u88c5-usbipd-win",level:3},{value:"WSL2 Ubuntu \u5b89\u88c5 USB/IP \u9879\u76ee",id:"wsl2-ubuntu-\u5b89\u88c5-usbip-\u9879\u76ee",level:3},{value:"\u6dfb\u52a0 USB \u8bbe\u5907",id:"\u6dfb\u52a0-usb-\u8bbe\u5907",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],o={toc:p};function d(s){let{components:e,...t}=s;return(0,l.kt)("wrapper",(0,n.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u5b89\u88c5-usbipd-win"},"\u5b89\u88c5 usbipd-win"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/dorssel/usbipd-win/releases"},"dorssel/usbipd-win/releases")))),(0,l.kt)("h3",{id:"wsl2-ubuntu-\u5b89\u88c5-usbip-\u9879\u76ee"},"WSL2 Ubuntu \u5b89\u88c5 USB/IP \u9879\u76ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install linux-tools-generic hwdata\nsudo update-alternatives --install /usr/local/bin/usbip usbip /usr/lib/linux-tools/*-generic/usbip 20\n")),(0,l.kt)("h3",{id:"\u6dfb\u52a0-usb-\u8bbe\u5907"},"\u6dfb\u52a0 USB \u8bbe\u5907"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ba1\u7406\u5458\u8eab\u4efd\u542f\u52a8 powershell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"usbipd wsl list\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u8bbe\u5907\u5230 WSL2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"usbipd wsl attach --busid <busid>\n")),(0,l.kt)("p",null,"\u4f8b\u5982 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"usbipd wsl attach --busid 3-1\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/win11/wsl2-usb/usbipd-wsl-list.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"WSL2 Ubuntu \u4e2d\u5217\u51fa USB \u8bbe\u5907\u5217\u8868"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lsusb\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/win11/wsl2-usb/lsusb.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u95ed USB \u8fde\u63a5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"usbipd wsl detach --busid <busid>\n")),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/zh-cn/windows/wsl/connect-usb"},"\u8fde\u63a5 USB \u8bbe\u5907"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/dorssel/usbipd-win"},"dorssel/usbipd-win")))))}d.isMDXComponent=!0}}]);