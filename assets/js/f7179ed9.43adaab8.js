"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[467],{12521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));n(83989);const l={id:"ros2-ws_pkg",title:"ROS2 \u5de5\u4f5c\u7a7a\u95f4\u4e0e\u529f\u80fd\u5305",sidebar_label:"\u5de5\u4f5c\u7a7a\u95f4\u4e0e\u529f\u80fd\u5305"},s=void 0,a={unversionedId:"computer/robot/ros2/ros2-ws_pkg",id:"computer/robot/ros2/ros2-ws_pkg",title:"ROS2 \u5de5\u4f5c\u7a7a\u95f4\u4e0e\u529f\u80fd\u5305",description:"- ROS 2 Documentation",source:"@site/docs/computer/robot/ros2/ros2-ws_pkg.md",sourceDirName:"computer/robot/ros2",slug:"/computer/robot/ros2/ros2-ws_pkg",permalink:"/docs/computer/robot/ros2/ros2-ws_pkg",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/computer/robot/ros2/ros2-ws_pkg.md",tags:[],version:"current",frontMatter:{id:"ros2-ws_pkg",title:"ROS2 \u5de5\u4f5c\u7a7a\u95f4\u4e0e\u529f\u80fd\u5305",sidebar_label:"\u5de5\u4f5c\u7a7a\u95f4\u4e0e\u529f\u80fd\u5305"}},p={},i=[{value:"\u529f\u80fd\u7a7a\u95f4",id:"\u529f\u80fd\u7a7a\u95f4",level:2},{value:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4",id:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:i};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.ros.org/en/humble/"},"ROS 2 Documentation")))),(0,r.kt)("h2",{id:"\u529f\u80fd\u7a7a\u95f4"},"\u529f\u80fd\u7a7a\u95f4"),(0,r.kt)("p",null,"\u4e00\u4e2aROS2\u5de5\u4f5c\u7a7a\u95f4\u7684\u7ed3\u6784\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"<workspace>\n    \u251c\u2500\u2500 src\n    \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n    \u251c\u2500\u2500 install\n    \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n    \u251c\u2500\u2500 build\n    \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n    \u2514\u2500\u2500 log\n        \u2514\u2500\u2500 ...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src \u4ee3\u7801\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},"install \u5b89\u88c5\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},"build \u7f16\u8bd1\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},"log \u65e5\u5fd7\u7a7a\u95f4")),(0,r.kt)("h3",{id:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4"},"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa\u6587\u4ef6\u76ee\u5f55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p {path}/{ws_name}/src\n\n# eg\nmkdir -p dev_ws/src\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u514b\u9686\u6559\u7a0b\u4ee3\u7801")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd dev_ws/src\ngit clone https://gitee.com/guyuehome/ros2_21_tutorials.git\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u4f9d\u8d56")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install -y python3-pip\nsudo pip3 install rosdepc\nsudo rosdepc init\nrosdepc update\ncd ..\nrosdepc install -i --from-path src --rosdistro humble -y\n")),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Ubuntu18.04")," \u7248\u672c\u7684\u7cfb\u7edf\uff0c\u5b89\u88c5\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"ROS2-eloquent")," \u4f7f\u7528\u6700\u540e\u4e00\u884c\u547d\u4ee4\u7684\u65f6\u5019\u6709\u62a5\u9519"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'rosdepc install -i --from-path src/ --rosdistro humble -y\n...\n---------------------------------------------------------------------------\nWARNING: given --rosdistro humble but ROS_DISTRO is "eloquent". Ignoring environment.\nERROR: the following packages/stacks could not have their rosdep keys resolved\nto system dependencies:\nlearning_tf: No definition of [tf_transformations] for OS version [bionic]\nlearning_urdf: No definition of [xacro] for OS version [bionic]\n\n')),(0,r.kt)("p",null,"\u4fee\u6539\u547d\u4ee4\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rosdepc install -i --from-path ~/workspace/ROS_2/dev_ws/src/ --ignore-src -r --rosdistro=eloquent -y\n")),(0,r.kt)("p",null,"\u6267\u884c\u540e ",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR")," \u4f9d\u7136\u5b58\u5728\uff0c\u4f46\u662f\u51fa\u73b0\u4e86\u4ee5\u4e0b\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"---------------------------------------------------------------------------\nERROR: the following packages/stacks could not have their rosdep keys resolved\nto system dependencies:\nlearning_tf: Cannot locate rosdep definition for [tf_transformations]\nlearning_urdf: Cannot locate rosdep definition for [xacro]\nContinuing to install resolvable dependencies...\n#All required rosdeps installed successfully\n---------------------------------------------------------------------------\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#All required rosdeps installed successfully"))),(0,r.kt)("p",null,"\u7b97\u662f\u89e3\u51b3\u4e86\u95ee\u9898 = ="),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u5de5\u4f5c\u7a7a\u95f4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install python3-colcon-ros\ncolcon build\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ws")," \u76ee\u5f55\u4e0b\u51fa\u73b0\u5bf9\u5e94\u7684\u76ee\u5f55\u6587\u4ef6\uff0c\u7f16\u8bd1\u5b8c\u6210\u4e4b\u540e\u9700\u8981\u8bbe\u7f6e\u4e00\u4e0b\u73af\u5883\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'source install/local_setup.sh # \u4ec5\u5728\u5f53\u524d\u7ec8\u7aef\u751f\u6548\necho " source {path}/dev_ws/install/local_setup.sh" >> ~/.bashrc # \u6240\u6709\u7ec8\u7aef\u5747\u751f\u6548\n')),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://www.cnblogs.com/mhbb/p/13221654.html"},"https://www.cnblogs.com/mhbb/p/13221654.html")))))}c.isMDXComponent=!0}}]);