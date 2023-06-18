"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[6963],{3372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));n(83989);const a={id:"ros2-install",title:"Ubuntu18.04 \u5b89\u88c5 ROS2",sidebar_label:"install"},s=void 0,o={unversionedId:"ROS/ros2/ros2-install",id:"ROS/ros2/ros2-install",title:"Ubuntu18.04 \u5b89\u88c5 ROS2",description:"\u5b89\u88c5",source:"@site/docs/stack/ROS/ros2/ros2-install.md",sourceDirName:"ROS/ros2",slug:"/ROS/ros2/ros2-install",permalink:"/stack/ROS/ros2/ros2-install",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/ROS/ros2/ros2-install.md",tags:[],version:"current",frontMatter:{id:"ros2-install",title:"Ubuntu18.04 \u5b89\u88c5 ROS2",sidebar_label:"install"},sidebar:"\ud83e\udd16 Robot",previous:{title:"ROS2",permalink:"/stack/category/ROS2"},next:{title:"install on WSL",permalink:"/stack/ROS/ros2/ros2-install-wsl2"}},u={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],i={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u7f16\u7801\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt install locales\nsudo locale-gen en_US en_US.UTF-8\nsudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8 \nexport LANG=en_US.UTF-8\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u8f6f\u4ef6\u6e90"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt install curl gnupg lsb-release \n\nsudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg\n")),(0,r.kt)("p",null,"\u8fd9\u65f6\u5019\u4f1a\u51fa\u73b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"curl: (7) Failed to connect to raw.githubusercontent.com port 443: \u62d2\u7edd\u8fde\u63a5"))),(0,r.kt)("p",null,"\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"raw.githubusercontent.com")," \u7684IP\u5730\u5740\u548c\u57df\u540d\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts")," \u6587\u4ef6\u4e2d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u7167 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://www.guyuehome.com/37844"},"\u89e3\u51b3\u201dFailed to connect to raw.githubusercontent.com\u201c\u62a5\u9519"))," \u4e2d\u7684\u65b9\u6cd5\u89e3\u51b3")),(0,r.kt)("p",null,"\u4e4b\u540e\u7ee7\u7eed\u83b7\u53d6\u79d8\u94a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg\n\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null\n')),(0,r.kt)("p",null,"\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"ROS2-eloquent")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u4e0e\u53e4\u6708\u5c45\u6559\u7a0b\u4e0d\u4e00\u6837\u662f\u56e0\u4e3a\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Ubuntu")," \u7248\u672c\u539f\u56e0\uff0c\u6839\u636e\u81ea\u5df1\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Ubuntu")," \u9700\u8981\u4fee\u6539\u547d\u4ee4\u884c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install ros-eloquent-desktop\n")),(0,r.kt)("p",null,"\u66f4\u65b0\u73af\u5883\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source /opt/ros/eloquent/setup.bash\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u6bcf\u6b21\u542f\u52a8\u7ec8\u7aef\u90fd\u8981\u91cd\u65b0\u8bbe\u7f6e\u4e00\u6b21\u7684\u8bdd\uff0c\u53ef\u4ee5\u5c06\u547d\u4ee4\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," \u6587\u4ef6\u4e2d\uff0c\u4f7f\u7528ROS\u9700\u8981\u9891\u7e41\u7684\u6253\u5f00\u7ec8\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'echo " source /opt/ros/eloquent/setup.bash" >> ~/.bashrc\n')),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210"),(0,r.kt)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u6d4b\u8bd5ROS\u7ecf\u5178\u7684\u5c0f\u4e4c\u9f9f\u4e4b\u524d\uff0c\u5148\u6765\u6d4b\u8bd5\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World")),(0,r.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a\u7ec8\u7aef\uff0c\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"talker")," \u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ros2 run demo_nodes_cpp talker\n")),(0,r.kt)("p",null,"\u542f\u52a8\u53e6\u4e00\u4e2a\u7ec8\u7aef\uff0c\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"listener")," \u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ros2 run demo_nodes_cpp listener\n")),(0,r.kt)("p",null,"\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros2/ros2-talker-listener.png",alt:null})),(0,r.kt)("p",null,"\u6210\u529f\u8fd0\u884c\u5bf9\u5e94\u8282\u70b9"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u8bd5\u8bd5\u5c0f\u6d77\u9f9f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ros2 run turtlesim turtlesim_node \nros2 run turtlesim turtle_teleop_key \n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros2/ros2-turtlesim-demo.png",alt:null})),(0,r.kt)("p",null,"\u5c0f\u6d77\u9f9f\u4e5f\u6210\u529f\u8dd1\u8d77\u6765\uff0c\u5f00\u59cb\u6109\u5feb\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ROS2")," \u5b66\u4e60"),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://www.bilibili.com/video/BV16B4y1Q7jQ?p=3&spm_id_from=pageDriver&vd_source=4cca3a7520260c460d94cf70a3f0a5ba"},"\u3010\u53e4\u6708\u5c45\u3011\u53e4\u6708\xb7ROS2\u5165\u95e821\u8bb2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://www.guyuehome.com/37844"},"\u89e3\u51b3\u201dFailed to connect to raw.githubusercontent.com\u201c\u62a5\u9519"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/notfindjob/article/details/123089235"},"Ubuntu18.04\u5b89\u88c5ros2")))))}c.isMDXComponent=!0}}]);