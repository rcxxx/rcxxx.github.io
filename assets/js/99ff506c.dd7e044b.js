"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[6608],{44378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));n(83989);const r={id:"ros-intrinsic_velodyne_pattern",title:" ",sidebar_label:"Multi Pass Segemntation"},o=void 0,i={unversionedId:"ROS/ros/ros-point-cloud/segmentation/ros-intrinsic_velodyne_pattern",id:"ROS/ros/ros-point-cloud/segmentation/ros-intrinsic_velodyne_pattern",title:" ",description:"\u6709\u5173\u4e00\u79cd\u4f20\u611f\u5668\u56fa\u6709\u95ee\u9898\u7684\u8bb0\u5f55",source:"@site/docs/stack/ROS/ros/ros-point-cloud/segmentation/intrinsic_velodyne_pattern.md",sourceDirName:"ROS/ros/ros-point-cloud/segmentation",slug:"/ROS/ros/ros-point-cloud/segmentation/ros-intrinsic_velodyne_pattern",permalink:"/stack/ROS/ros/ros-point-cloud/segmentation/ros-intrinsic_velodyne_pattern",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/ROS/ros/ros-point-cloud/segmentation/intrinsic_velodyne_pattern.md",tags:[],version:"current",frontMatter:{id:"ros-intrinsic_velodyne_pattern",title:" ",sidebar_label:"Multi Pass Segemntation"},sidebar:"\ud83e\udd16 Robot",previous:{title:"pcl pub&sub topic",permalink:"/stack/ROS/ros/ros-point-cloud/ros-pcl-topic"},next:{title:"\u53c2\u8003\u6587\u732e & \u6e90\u7801",permalink:"/stack/ROS/ros/ros-point-cloud/segmentation/ros-point_cloud_object_segemntation_references"}},l={},p=[{value:"\u6709\u5173\u4e00\u79cd\u4f20\u611f\u5668\u56fa\u6709\u95ee\u9898\u7684\u8bb0\u5f55",id:"\u6709\u5173\u4e00\u79cd\u4f20\u611f\u5668\u56fa\u6709\u95ee\u9898\u7684\u8bb0\u5f55",level:2},{value:"<code>Intrinsic Velodyne Pattern</code>",id:"intrinsic-velodyne-pattern",level:3},{value:"reference",id:"reference",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u6709\u5173\u4e00\u79cd\u4f20\u611f\u5668\u56fa\u6709\u95ee\u9898\u7684\u8bb0\u5f55"},"\u6709\u5173\u4e00\u79cd\u4f20\u611f\u5668\u56fa\u6709\u95ee\u9898\u7684\u8bb0\u5f55"),(0,s.kt)("p",null,"\u6700\u8fd1\u5728\u770b\u4e00\u7bc7\u6587\u732e\u65f6\u6587\u4e2d\u63d0\u5230\u4e00\u79cd\u4f20\u611f\u5668\u7684\u56fa\u6709\u6a21\u5f0f\u6240\u5e26\u6765\u7684\u95ee\u9898"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"paper")," \ud83d\udcf0 :",(0,s.kt)("a",{parentName:"strong",href:"https://www.researchgate.net/publication/328455207_Fast_Multi-Pass_3D_Point_Segmentation_Based_on_a_Structured_Mesh_Graph_for_Ground_Vehicles"},"Fast Multi-Pass 3D Point Segmentation Based on a Structured MeshGraph for Ground Vehicles")))),(0,s.kt)("h3",{id:"intrinsic-velodyne-pattern"},(0,s.kt)("inlineCode",{parentName:"h3"},"Intrinsic Velodyne Pattern")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"velodyne lidar sensor")),(0,s.kt)("p",null,"\u6587\u4e2d\u6240\u4f7f\u7528\u7684\u4f20\u611f\u5668\u662f ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://velodynelidar.com/products/hdl-64e/"},(0,s.kt)("inlineCode",{parentName:"a"},"velodyne HDL-64E")))," \uff0c\u5728\u5b98\u7f51\u4e0a\u6709\u7ed9\u51fa\u8be5\u4f20\u611f\u5668\u7684\u4e00\u4e9b\u53c2\u6570\uff08\u5982\u4e0b\u56fe\uff09\uff0c\u540e\u7eed\u5c06\u4f1a\u7528\u5230"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne-HDL-64E-parameters.png",alt:null})),(0,s.kt)("p",null," \u6587\u4e2d\u63d0\u5230\uff0c\u7531\u4e8e\u4f20\u611f\u5668\u7684\u56fa\u6709\u6a21\u5f0f\uff0c\u4f20\u611f\u5668\u9700\u8981\u6709\u4e0d\u4e00\u6837\u7684\u4fef\u4ef0\u89d2\uff0c\u6700\u7ec8\u4f20\u611f\u5668\u83b7\u53d6\u5230\u7684\u6570\u636e\u4f1a\u51fa\u73b0\u4e0b\u9762\u8fd9\u6837\u7684\u60c5\u51b5"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/paper-figure-01.png",alt:null})),(0,s.kt)("p",null,"\u8fd9\u6837\u7406\u89e3\u53ef\u80fd\u4e0d\u592a\u76f4\u89c2\uff0c\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"Rviz")," \u91cc\u67e5\u770b\u4e86\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"Velodyne")," \u4f20\u611f\u5668\u83b7\u53d6\u5230\u7684\u70b9\u4e91\u6570\u636e\uff0c\u5927\u6982\u957f\u8fd9\u6837"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne_bird_eye_view.png",alt:null})),(0,s.kt)("p",null,"\u89c2\u5bdf\u56fe\u4e2d\u7684\u70b9\u4e91\u6211\u4eec\u80fd\u591f\u53d1\u73b0\uff0c\u5728\u4f20\u611f\u5668 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0\\degree")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0\xb0")))))," \u7684\u4f4d\u7f6e\u9644\u8fd1\uff0c\u80fd\u591f\u53d1\u73b0\u70b9\u4e91\u6570\u636e\u51fa\u73b0\u4e86\u4e00\u4e2a\u952f\u9f7f\u72b6\u7684\u65ad\u5c42\uff0c\u6211\u5728\u4e0b\u9762\u7684\u56fe\u4e2d\u6807\u8bb0\u51fa\u6765\u8fd9\u90e8\u5206\u65ad\u5c42"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne_bird_eye_view_edit.png",alt:null})),(0,s.kt)("p",null,"\u770b\u8d77\u6765\u5c31\u8ddf\u8bba\u6587\u4e2d\u56fe\u4e00\u6837\uff0c\u5230\u6b64\u624d\u76f4\u89c2\u7684\u7406\u89e3\u4e86\u8bba\u6587\u4e2d\u8fd9\u90e8\u5206\u5185\u5bb9\u7684\u610f\u601d"),(0,s.kt)("h2",{id:"reference"},"reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/333670101"},"\u4e00\u79cd\u57fa\u4e8e\u6fc0\u5149\u96f7\u8fbe\u786c\u4ef6\u7ed3\u6784\u7684\u969c\u788d\u7269\u805a\u7c7b\u5206\u5272\u65b9\u6cd5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.researchgate.net/publication/328455207_Fast_Multi-Pass_3D_Point_Segmentation_Based_on_a_Structured_Mesh_Graph_for_Ground_Vehicles"},"Fast Multi-Pass 3D Point Segmentation Based on a Structured Mesh Graph for Ground Vehicles"))))}c.isMDXComponent=!0}}]);