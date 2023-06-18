"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[4893],{64789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));n(83989);const i={id:"opencv-build-cfg",title:"OpenCV Build Configuration Options",sidebar_label:"Build Config"},r=void 0,p={unversionedId:"cv/opencv/install/opencv-build-cfg",id:"cv/opencv/install/opencv-build-cfg",title:"OpenCV Build Configuration Options",description:"Name | Version |",source:"@site/docs/stack/cv/opencv/install/opencv-build-cfg.md",sourceDirName:"cv/opencv/install",slug:"/cv/opencv/install/opencv-build-cfg",permalink:"/stack/cv/opencv/install/opencv-build-cfg",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/cv/opencv/install/opencv-build-cfg.md",tags:[],version:"current",frontMatter:{id:"opencv-build-cfg",title:"OpenCV Build Configuration Options",sidebar_label:"Build Config"},sidebar:"\ud83d\udc40 CV",previous:{title:"Install-GPU",permalink:"/stack/cv/opencv/install/opencv-install-gpu"},next:{title:"waitKey()",permalink:"/stack/cv/opencv/apply/common-method/opencv-waitKey"}},o={},s=[{value:"Build with extra modules",id:"build-with-extra-modules",level:2},{value:"Generate pkg-config info",id:"generate-pkg-config-info",level:2},{value:"Parallel processing",id:"parallel-processing",level:2},{value:"GUI backends (highgui module)",id:"gui-backends-highgui-module",level:2},{value:"Deep learning neural networks inference backends and options (dnn module)",id:"deep-learning-neural-networks-inference-backends-and-options-dnn-module",level:2},{value:"\u6574\u7406\u4e00\u4efd\u5e38\u7528\u7684 CMake \u914d\u7f6e",id:"\u6574\u7406\u4e00\u4efd\u5e38\u7528\u7684-cmake-\u914d\u7f6e",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"opencv"),(0,l.kt)("td",{parentName:"tr",align:"center"},"4.5.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"opencv_contrib"),(0,l.kt)("td",{parentName:"tr",align:"center"},"4.5.0")))),(0,l.kt)("h2",{id:"build-with-extra-modules"},"Build with extra modules"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"opencv_contrib"))," \u662f ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"opencv"))," \u7684\u62d3\u5c55\u6a21\u5757\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u5982 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"DNN"))," \u6a21\u5757\u7b49\u62d3\u5c55\u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/opencv/opencv_contrib/releases/tag/4.5.0"},"opencv/opencv_contrib")))),(0,l.kt)("p",null,"Cmake \u9009\u9879\u4e3a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DOPENCV_EXTRA_MODULES_PATH={path}/opencv_contrib/modules"))),(0,l.kt)("h2",{id:"generate-pkg-config-info"},"Generate pkg-config info"),(0,l.kt)("p",null,"\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"PKGCONFIG")," \u9009\u9879\u5c06\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv4.pc")," \u6587\u4ef6\uff0c\u4fbf\u4e8e\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pkg-config")),(0,l.kt)("p",null,"Cmake \u9009\u9879\u4e3a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DOPENCV_GENERATE_PKGCONFIG=ON"))),(0,l.kt)("h2",{id:"parallel-processing"},"Parallel processing"),(0,l.kt)("p",null,"\u4e00\u4e9bOpenCV\u7b97\u6cd5\u53ef\u4ee5\u4f7f\u7528\u591a\u7ebf\u7a0b\u6765\u52a0\u901f\u5904\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linux \u9ed8\u8ba4\u540e\u7aef\u4e3apthreads\u5e93")),(0,l.kt)("p",null,"Cmake \u9009\u9879\u4e3a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DWITH_PTHREADS_PF=ON"))),(0,l.kt)("h2",{id:"gui-backends-highgui-module"},"GUI backends (highgui module)"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"GTK")," \u652f\u6301\uff0c\u53ef\u4ee5\u9009\u62e9\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"QT")," \u652f\u6301\u66f4\u9ad8\u7ea7\u7684GUI\u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"GTK3"))," \u652f\u6301")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo apt-get install libgtk-3-dev\n")),(0,l.kt)("p",null,"Cmake \u9009\u9879\u4e3a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DWITH_QT=ON"))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"OpenCV compiled with Qt support enables advanced highgui interface, see ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://docs.opencv.org/4.5.0/dc/d46/group__highgui__qt.html"},"Qt New Functions"))," for details.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OpenGL")),(0,l.kt)("p",null,"Cmake \u9009\u9879\u4e3a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DWITH_OPENGL=ON"))),(0,l.kt)("h2",{id:"deep-learning-neural-networks-inference-backends-and-options-dnn-module"},"Deep learning neural networks inference backends and options (dnn module)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"protobuf"))," \u4e3a\u9ed8\u8ba4\u5f00\u542f"),(0,l.kt)("p",null,"Cmake \u9009\u9879\u4e3a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DWITH_PROTOBUF=ON")),"\u3001",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DBUILD_PROTOBUF=ON"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"TBB"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo apt-get install libtbb2 libtbb-dev"))),(0,l.kt)("p",null,"Cmake \u9009\u9879\u4e3a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DWITH_TBB=ON"))),(0,l.kt)("h2",{id:"\u6574\u7406\u4e00\u4efd\u5e38\u7528\u7684-cmake-\u914d\u7f6e"},"\u6574\u7406\u4e00\u4efd\u5e38\u7528\u7684 CMake \u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4f9d\u8d56\u5b89\u88c5"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install build-essential gcc g++\nsudo apt-get install cmake git pkg-config \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GUI")," \u76f8\u5173\u7684\u4f9d\u8d56")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libgtk-3-dev\nsudo apt-get install qtbase5-dev\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Camera(v4l) & Media")," \u76f8\u5173\u7684\u4f9d\u8d56")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev\nsudo apt-get install libgstreamer1.0-dev  libgstreamer-plugins-base1.0-dev \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Image")," \u76f8\u5173\u7684\u4f9d\u8d56\uff0c\u5404\u79cd\u56fe\u7247\u683c\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libpng-dev libjpeg-dev libopenexr-dev libtiff-dev libwebp-dev\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"libjasper-dev"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo add-apt-repository "deb http://security.ubuntu.com/ubuntu xenial-security main"\nsudo apt update\nsudo apt install libjasper-dev\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"TBB")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libtbb2 libtbb-dev\n")),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.5.0/db/d05/tutorial_config_reference.html"},"OpenCV configuration options reference"))))}u.isMDXComponent=!0}}]);