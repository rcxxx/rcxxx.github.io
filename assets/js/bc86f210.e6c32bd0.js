"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[7943],{64101:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>i,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(87462),u=(n(67294),n(3905));n(83989);const l={id:"ubuntu-20-04-cuda-toolkit",title:"",sidebar_label:"NVIDIA CUDA/CUDNN"},s=void 0,d={unversionedId:"system/linux/ubuntu/ubuntu-20-04-cuda-toolkit",id:"system/linux/ubuntu/ubuntu-20-04-cuda-toolkit",title:"",description:"Name | Version |",source:"@site/docs/stack/system/linux/ubuntu/ubuntu-20.04-cuda.md",sourceDirName:"system/linux/ubuntu",slug:"/system/linux/ubuntu/ubuntu-20-04-cuda-toolkit",permalink:"/stack/system/linux/ubuntu/ubuntu-20-04-cuda-toolkit",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/system/linux/ubuntu/ubuntu-20.04-cuda.md",tags:[],version:"current",frontMatter:{id:"ubuntu-20-04-cuda-toolkit",title:"",sidebar_label:"NVIDIA CUDA/CUDNN"},sidebar:"\ud83d\udcbd System",previous:{title:"Add Application",permalink:"/stack/system/linux/ubuntu/ubuntu-application-desktop"},next:{title:"WSL2 Ubuntu22.04",permalink:"/stack/system/win/win11-wsl-ubuntu2204"}},r={},c=[{value:"\u5b89\u88c5 CUDA",id:"\u5b89\u88c5-cuda",level:2},{value:"\u5b89\u88c5 CUDNN",id:"\u5b89\u88c5-cudnn",level:2}],p={toc:c};function i(t){let{components:e,...n}=t;return(0,u.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Name"),(0,u.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u7248\u672c"),(0,u.kt)("td",{parentName:"tr",align:"center"},"Ubuntu20.04LTS")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"CUDA"),(0,u.kt)("td",{parentName:"tr",align:"center"},"12.0")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"CUDNN"),(0,u.kt)("td",{parentName:"tr",align:"center"},"8.8.1")))),(0,u.kt)("h2",{id:"\u5b89\u88c5-cuda"},"\u5b89\u88c5 CUDA"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("em",{parentName:"li"},(0,u.kt)("a",{parentName:"em",href:"https://developer.nvidia.com/cuda-12-0-0-download-archive"},"CUDA Toolkit 12.0 Downloads"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("em",{parentName:"li"},(0,u.kt)("a",{parentName:"em",href:"https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#"},"NVIDIA CUDA Installation Guide for Linux")))),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/cuda/cuda-download.png",alt:null})),(0,u.kt)("p",null,"\u6309\u7167\u4e0b\u65b9\u7ed9\u51fa\u7684\u547d\u4ee4\u884c\uff0c\u9010\u4e00\u8fdb\u884c\u5b89\u88c5"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin\nsudo mv cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600\nwget https://developer.download.nvidia.com/compute/cuda/12.0.0/local_installers/cuda-repo-ubuntu2004-12-0-local_12.0.0-525.60.13-1_amd64.deb\nsudo dpkg -i cuda-repo-ubuntu2004-12-0-local_12.0.0-525.60.13-1_amd64.deb\nsudo cp /var/cuda-repo-ubuntu2004-12-0-local/cuda-*-keyring.gpg /usr/share/keyrings/\nsudo apt-get update\nsudo apt-get -y install cuda\n")),(0,u.kt)("p",null,"\u5b89\u88c5 CUDA \u7684\u540c\u65f6\u4f1a\u7ed9\u4f60\u7684\u8bbe\u5907\u5b89\u88c5\u76f8\u5e94\u7248\u672c\u7684\u663e\u5361\u9a71\u52a8\uff0c\u4e0d\u7528\u63d0\u524d\u53bb\u627e\u9a71\u52a8\u7248\u672c\u5b89\u88c5\uff0c\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u5c06 CUDA \u5b89\u88c5\u8def\u5f84\u6dfb\u52a0\u5230 $PATH \u73af\u5883\u53d8\u91cf"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u53c2\u7167 ",(0,u.kt)("em",{parentName:"li"},(0,u.kt)("a",{parentName:"em",href:"https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#environment-setup"},"Installation Guide 13.1.1. Environment Setup")))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u5b89\u88c5\u8def\u5f84\u5230\u73af\u5883\u53d8\u91cf")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=/usr/local/cuda-12.0/bin${PATH:+:${PATH}}\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u8fd0\u884c\u65f6\u5e93\u8def\u5f84")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"export LD_LIBRARY_PATH=/usr/local/cuda-12.0/lib64\\\n                         ${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}\n")),(0,u.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u5c06\u4e0a\u8ff0\u6307\u4ee4\u5199\u5165 ",(0,u.kt)("inlineCode",{parentName:"p"},"~/.bashrc")),(0,u.kt)("p",null,"\u914d\u7f6e\u5b8c\u4e4b\u540e\u91cd\u542f\u8bbe\u5907\uff0c\u6d4b\u8bd5\u5b89\u88c5 ",(0,u.kt)("inlineCode",{parentName:"p"},"nvcc -V"),"\uff0c\u5982\u679c\u8f93\u51fa\u7c7b\u4f3c\u4ee5\u4e0b\u5185\u5bb9\uff0c\u5219\u5b89\u88c5\u5b8c\u6210"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"nvcc: NVIDIA (R) Cuda compiler driver\nCopyright (c) 2005-2022 NVIDIA Corporation\nBuilt on Mon_Oct_24_19:12:58_PDT_2022\nCuda compilation tools, release 12.0, V12.0.76\nBuild cuda_12.0.r12.0/compiler.31968024_0\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/local/cuda/extras/demo_suite\n./bandwidthTest\n")),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/cuda/bandwidthTest.png",alt:null})),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/local/cuda/extras/demo_suite\n./deviceQuery\n")),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/cuda/deviceQuery%2C.png",alt:null})),(0,u.kt)("h2",{id:"\u5b89\u88c5-cudnn"},"\u5b89\u88c5 CUDNN"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("em",{parentName:"li"},(0,u.kt)("a",{parentName:"em",href:"https://developer.nvidia.com/rdp/cudnn-download"},"cuDNN Download")))),(0,u.kt)("p",null,"\u9700\u8981\u6ce8\u518c\u4e00\u4e2a NVIDIA \u7684\u8d26\u53f7\u624d\u80fd\u8f6c\u5230\u4e0b\u8f7d\u9875\u9762"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/cuda/cudnn-download.png",alt:null})),(0,u.kt)("p",null,"\u9009\u62e9\u4e0b\u8f7d ",(0,u.kt)("inlineCode",{parentName:"p"},"deb")," \u5305\u8fdb\u884c\u5b89\u88c5"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u53c2\u7167 ",(0,u.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html#installlinux-deb"},"1.3.2. Debian Local Installation"))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -i cudnn-local-repo-*.deb\nsudo cp /var/cudnn-local-repo-*.gpg /usr/share/keyrings/\nsudo apt-get install libcudnn8=8.x.x.x-1+cudaX.Y\nsudo apt-get install libcudnn8-dev=8.x.x.x-1+cudaX.Y\nsudo apt-get install libcudnn8-samples=8.x.x.x-1+cudaX.Y\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="eg."',title:'"eg."'},"sudo apt-get install libcudnn8=8.8.1.3-1+cuda12.0\nsudo apt-get install libcudnn8-dev=8.8.1.3-1+cuda12.0\nsudo apt-get install libcudnn8-samples=8.8.1.3-1+cuda12.0\n")),(0,u.kt)("p",null,"\u6d4b\u8bd5\u5b89\u88c5"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"cd -r /usr/src/cudnn_samples_v8/ ~/workspace/cuda\ncd cudnn_samples_v8/mnistCUDNN/\nsudo apt-get install libfreeimage3 libfreeimage-dev\nmake clean && make\n./mnistCUDNN\n")),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/cuda/test-cudnn.png",alt:null})))}i.isMDXComponent=!0}}]);