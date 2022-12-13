"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[6240],{63082:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(87462),l=(a(67294),a(3905));a(83989);const r={id:"ros-launch",title:" ",sidebar_label:"Launch"},o=void 0,i={unversionedId:"computer/robot/ros/ros-launch",id:"computer/robot/ros/ros-launch",title:" ",description:"roslaunch \u7684\u4f7f\u7528",source:"@site/docs/computer/robot/ros/ros-lunch.md",sourceDirName:"computer/robot/ros",slug:"/computer/robot/ros/ros-launch",permalink:"/docs/computer/robot/ros/ros-launch",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/computer/robot/ros/ros-lunch.md",tags:[],version:"current",frontMatter:{id:"ros-launch",title:" ",sidebar_label:"Launch"},sidebar:"\ud83c\udf96\ufe0frobot",previous:{title:"\u81ea\u5b9a\u4e49\u8bdd\u9898\u6d88\u606f",permalink:"/docs/computer/robot/ros/ros-topic-\u8bdd\u9898\u6d88\u606f\u5b9a\u4e49\u4e0e\u4f7f\u7528"},next:{title:"extract pcd file in bag",permalink:"/docs/computer/robot/ros/ros-point-cloud/ros-bag-to-pcd"}},u={},c=[{value:"<code>roslaunch</code> \u7684\u4f7f\u7528",id:"roslaunch-\u7684\u4f7f\u7528",level:2},{value:"<code>.launch</code> \u6587\u4ef6",id:"launch-\u6587\u4ef6",level:3},{value:"\u4f7f\u7528 <code>roslaunch</code> \u8fd0\u884c\u8282\u70b9",id:"\u4f7f\u7528-roslaunch-\u8fd0\u884c\u8282\u70b9",level:3},{value:"reference",id:"reference",level:2}],p={toc:c};function s(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"roslaunch-\u7684\u4f7f\u7528"},(0,l.kt)("inlineCode",{parentName:"h2"},"roslaunch")," \u7684\u4f7f\u7528"),(0,l.kt)("p",null,"ros \u4e2d\u53ef\u4ee5\u7f16\u5199\u542f\u52a8\u6587\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u6307\u4ee4\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"roslaunch package_name file.launch\n")),(0,l.kt)("h3",{id:"launch-\u6587\u4ef6"},(0,l.kt)("inlineCode",{parentName:"h3"},".launch")," \u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"roslaunch")," \u6240\u6267\u884c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".launch")," \u6587\u4ef6\u662f\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"XML")," \u683c\u5f0f\u63cf\u8ff0\u7684"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u5fc5\u987b\u542b\u6709\u4e00\u4e2a\u6839\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"<launch>")," \uff0c\u6587\u4ef6\u4e2d\u7684\u5176\u4ed6\u5185\u5bb9\u90fd\u4f1a\u5305\u542b\u5728\u8fd9\u4e2a\u6839\u5143\u7d20\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-XML"},"<launch>\n    ......\n<launch>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".launch")," \u6587\u4ef6\u4e2d\u53ef\u4ee5\u542f\u52a8 ROS \u8282\u70b9\uff0c\u5176\u8bed\u6cd5\u4e0e\u7ec8\u7aef\u8fd0\u884c ROS \u8282\u70b9\u76f8\u4f3c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-XML"},'<node pkg="package-name" type="executable-name" name="node-name" />\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pkg")," \u529f\u80fd\u5305\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," \u53ef\u6267\u884c\u6587\u4ef6\u540d\u79f0\uff0c\u5373\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," \u8282\u70b9\u8fd0\u884c\u540d\u79f0\uff0c\u6b64\u53c2\u6570\u4f1a\u8986\u76d6\u6389 ",(0,l.kt)("inlineCode",{parentName:"li"},"ros:init")," \u4e2d\u5b9a\u4e49\u7684\u540d\u79f0")),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u7684\u53c2\u6570\u5916\uff0c\u8fd8\u6709\u4e00\u4e9b\u53ef\u80fd\u4f1a\u7528\u5230\u7684\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'output = "screen"')," \u5c06\u8282\u70b9\u7684\u6807\u51c6\u8f93\u51fa\u6253\u5370\u5230\u7ec8\u7aef\u5c4f\u5e55\uff0c\u9ed8\u8ba4\u8f93\u51fa\u4e3a\u65e5\u5fd7\u6587\u6863"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'respawn = "true"')," \u590d\u4f4d\u5c5e\u6027\uff0c\u8be5\u8282\u70b9\u505c\u6b62\u65f6\uff0c\u4f1a\u81ea\u52a8\u91cd\u542f\uff0c\u9ed8\u8ba4\u4e3afalse"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'required = "true"')," \u5fc5\u8981\u8282\u70b9\uff0c\u5f53\u8be5\u8282\u70b9\u7ec8\u6b62\u65f6\uff0claunch\u6587\u4ef6\u4e2d\u7684\u5176\u4ed6\u8282\u70b9\u4e5f\u88ab\u7ec8\u6b62"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'ns = "namespace"')," \u547d\u540d\u7a7a\u95f4\uff0c\u4e3a\u8282\u70b9\u5185\u7684\u76f8\u5bf9\u540d\u79f0\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4\u524d\u7f00"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'args = "arguments"')," \u8282\u70b9\u9700\u8981\u7684\u8f93\u5165\u53c2\u6570")),(0,l.kt)("h3",{id:"\u4f7f\u7528-roslaunch-\u8fd0\u884c\u8282\u70b9"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"roslaunch")," \u8fd0\u884c\u8282\u70b9"),(0,l.kt)("h2",{id:"reference"},"reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://wiki.ros.org/roslaunch/"},"roslaunch - ROS Wiki")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://wiki.ros.org/roslaunch/Tutorials"},"roslaunch/Tutorials - ROS Wiki")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.guyuehome.com/2195"},"ROS\u63a2\u7d22\u603b\u7ed3\uff08\u4e94\u5341\u516d\uff09\u2014\u2014 launch\u6587\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_41995979/article/details/81784987"},"ROS\u5165\u95e8\u4e4b\u2014\u2014\u6d45\u8c08launch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/13efab3f67e0"},"\u673a\u5668\u4eba\u64cd\u4f5c\u7cfb\u7edfROS\u4ece\u5165\u95e8\u5230\u653e\u5f03(\u516d)\uff1a\u4f7f\u7528roslaunch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/98663550"},"roslaunch \u4ecb\u7ecd"))))}s.isMDXComponent=!0}}]);