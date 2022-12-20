"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[4310],{97835:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>o,frontMatter:()=>m,metadata:()=>r,toc:()=>i});var s=t(87462),n=(t(67294),t(3905));t(83989);const m={id:"ros-traditional_point_cloud_object_segmentation",title:"Traditional Point Cloud Object Segmentation",sidebar_label:"Segmentation"},p=void 0,r={unversionedId:"ROS/ros/ros-point-cloud/segmentation/ros-traditional_point_cloud_object_segmentation",id:"ROS/ros/ros-point-cloud/segmentation/ros-traditional_point_cloud_object_segmentation",title:"Traditional Point Cloud Object Segmentation",description:"\u4f20\u7edf\u65b9\u6cd5\u5b9e\u73b0\u70b9\u4e91\u5206\u5272",source:"@site/docs/stack/ROS/ros/ros-point-cloud/segmentation/traditional_point_cloud_object_segmentation.md",sourceDirName:"ROS/ros/ros-point-cloud/segmentation",slug:"/ROS/ros/ros-point-cloud/segmentation/ros-traditional_point_cloud_object_segmentation",permalink:"/stack/ROS/ros/ros-point-cloud/segmentation/ros-traditional_point_cloud_object_segmentation",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/ROS/ros/ros-point-cloud/segmentation/traditional_point_cloud_object_segmentation.md",tags:[],version:"current",frontMatter:{id:"ros-traditional_point_cloud_object_segmentation",title:"Traditional Point Cloud Object Segmentation",sidebar_label:"Segmentation"},sidebar:"\ud83d\udc40CV & Robot",previous:{title:"\u53c2\u8003\u6587\u732e & \u6e90\u7801",permalink:"/stack/ROS/ros/ros-point-cloud/segmentation/ros-point_cloud_object_segemntation_references"},next:{title:"ROS2",permalink:"/stack/category/ROS2"}},l={},i=[{value:"\u4f20\u7edf\u65b9\u6cd5\u5b9e\u73b0\u70b9\u4e91\u5206\u5272",id:"\u4f20\u7edf\u65b9\u6cd5\u5b9e\u73b0\u70b9\u4e91\u5206\u5272",level:2},{value:"\u590d\u73b0\u8fc7\u7a0b",id:"\u590d\u73b0\u8fc7\u7a0b",level:2},{value:"clustering",id:"clustering",level:2},{value:"references",id:"references",level:2}],N={toc:i};function o(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f20\u7edf\u65b9\u6cd5\u5b9e\u73b0\u70b9\u4e91\u5206\u5272"},"\u4f20\u7edf\u65b9\u6cd5\u5b9e\u73b0\u70b9\u4e91\u5206\u5272"),(0,n.kt)("p",null,"\u53c2\u8003 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Fast range image-based segmentation of sparse 3D laser scans for online operation")," ",(0,n.kt)("a",{parentName:"strong",href:"https://www.researchgate.net/publication/311758635_Fast_range_image-based_segmentation_of_sparse_3D_laser_scans_for_online_operation"},"(pdf)"))," \u4e2d\u7684\u65b9\u6cd5\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"range image")," \u4e2d\u5b9e\u73b0\u76ee\u6807\u5206\u5272"),(0,n.kt)("h2",{id:"\u590d\u73b0\u8fc7\u7a0b"},"\u590d\u73b0\u8fc7\u7a0b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6784\u5efa ",(0,n.kt)("inlineCode",{parentName:"li"},"range image"))),(0,n.kt)("p",null,"\u6587\u4e2d\u76f4\u63a5\u4ece ",(0,n.kt)("inlineCode",{parentName:"p"},"velodyne")," \u4f20\u611f\u5668\u7684\u6570\u636e\u6784\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"range image"),"\uff0c\u4f46\u662f\u6211\u80fd\u4f7f\u7528\u7684\u6570\u636e\u662f\u5df2\u7ecf\u8f6c\u6362\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"sensor_msgs/pointcloud2")," \u7684\u70b9\u4e91\u6570\u636e\uff0c\u6240\u4ee5\u8fd9\u91cc\u8981\u4ece\u70b9\u4e91\u6570\u636e\u4e2d\u6784\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"range image")),(0,n.kt)("p",null,"\u9996\u5148\u8981\u77e5\u9053\u6240\u4f7f\u7528\u4f20\u611f\u5668\u7684\u4e00\u4e9b\u53c2\u6570\uff0c\u6d4b\u8bd5\u4ee3\u6570\u636e\u5305\u6240\u4f7f\u7528\u7684\u4f20\u611f\u5668\u662f ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://velodynelidar.com/products/hdl-64e/"},(0,n.kt)("inlineCode",{parentName:"a"},"velodyne HDL-64E")))," \uff0c\u5728\u5b98\u7f51\u4e0a\u6709\u7ed9\u51fa\u8be5\u4f20\u611f\u5668\u7684\u4e00\u4e9b\u53c2\u6570\uff08\u5982\u4e0b\u56fe\uff09\uff0c\u540e\u7eed\u5c06\u4f1a\u7528\u5230"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/velodyne-HDL-64E-parameters.png",alt:null})),(0,n.kt)("p",null,"\u5c06\u70b9\u4e91\u6570\u636e\u8f6c\u6362\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"range image")," \u7684\u65b9\u6cd5\u53c2\u8003\u4e86\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u7684\u65b9\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"GitHub repository")," \ud83d\udce6 :",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/versatran01/cloud2range"},"versatran01/cloud2range")))),(0,n.kt)("p",null,"\u9700\u8981\u7528\u5230\u7684\u53c2\u6570\u5982\u4e0b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"/*-- range image shape 4500x64 --*/\nint n_beams_        = 64;\nint range_img_cols_ = 4500;   // 360 / 0.08\n\ndouble min_range_   = 0.0;\ndouble max_range_   = 120.0;\n\ndouble min_angle_   = -(26.9*0.5);  // -1/2 Vertical FOV\ndouble max_angle_   =  (26.9*0.5);  //  1/2 Vertical FOV\n\ndouble angular_resolution_h_ = 0.08;   // azimuth\ndouble angular_resolution_v_ = 0.4;    // altitude\n")),(0,n.kt)("p",null,"\u901a\u8fc7\u70b9\u4e91\u4e2d\u6bcf\u4e2a\u70b9\u7684\u4f4d\u7f6e\u4fe1\u606f ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"z"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(x,y,z)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u53ef\u4ee5\u6c42\u51fa\u6bcf\u4e2a\u70b9\u76f8\u5bf9\u4e8e\u4f20\u611f\u5668\u7684\u4f4d\u7f6e\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"range image")," \u4e2d\u7684\u5bf9\u5e94\u70b9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u70b9 ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"p")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," \u7684 ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mfrac"},"z"),(0,n.kt)("msqrt",{parentName:"mfrac"},(0,n.kt)("mrow",{parentName:"msqrt"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"x"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"y"),(0,n.kt)("mn",{parentName:"msup"},"2"))))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"arctan(\\frac{z}{\\sqrt{x^2 + y^2}})")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.5796em",verticalAlign:"-0.8296em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"rc"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6954em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.446em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord sqrt mtight"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.0628em"}},(0,n.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3.4286em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.4286em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mtight",style:{paddingLeft:"1.19em"}},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7463em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.786em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7463em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.786em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.0348em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.4286em"}}),(0,n.kt)("span",{parentName:"span",className:"hide-tail mtight",style:{minWidth:"0.853em",height:"1.5429em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.5429em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,n.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3937em"}},(0,n.kt)("span",{parentName:"span"})))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.04398em"}},"z"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8296em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u53ef\u4ee5\u6c42\u51fa ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"p")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," \u76f8\u5bf9\u4e8e xy \u5e73\u9762\u7684\u89d2\u5ea6\uff0c\u5373\u5782\u76f4\u65b9\u5411\u7684\u89d2\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u70b9 ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"p")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," \u7684 ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"c"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"mfrac"},"y"),(0,n.kt)("mi",{parentName:"mfrac"},"x")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"arctan(\\frac{y}{x})")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.095em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"rc"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7475em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.4461em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u5219\u8868\u793a\u6c34\u5e73\u65b9\u5411\u7684\u89d2\u5ea6\uff0c\u8fd9\u91cc\u8981\u628a\u89d2\u5ea6\u8f6c\u6362\u5230 ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mn",{parentName:"mrow"},"2"),(0,n.kt)("mi",{parentName:"mrow"},"\u03c0"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[0, 2\\pi]")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"["),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0"),(0,n.kt)("span",{parentName:"span",className:"mclose"},"]")))))," \u4e4b\u95f4\uff0c\u5373\u5f53 ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mo",{parentName:"mrow"},"<"),(0,n.kt)("mn",{parentName:"mrow"},"0")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y<0")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7335em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0")))))," \u7684\u65f6 ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"2"),(0,n.kt)("mi",{parentName:"mrow"},"\u03c0")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"angle = angle + 2\\pi")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0")))))),(0,n.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u70b9\u5230\u4f20\u611f\u5668\u7684\u8ddd\u79bb ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msqrt",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"msqrt"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"x"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"y"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"z"),(0,n.kt)("mn",{parentName:"msup"},"2"))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"range = \\sqrt{x^2 + y^2 + z^2}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.24em",verticalAlign:"-0.2822em"}}),(0,n.kt)("span",{parentName:"span",className:"mord sqrt"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9578em"}},(0,n.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3.2em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.2em"}}),(0,n.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"1em"}},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7401em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.989em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7401em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.989em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7401em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.989em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-2.9178em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.2em"}}),(0,n.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"1.02em",height:"1.28em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.28em",viewBox:"0 0 400000 1296",preserveAspectRatio:"xMinYMin slice"},(0,n.kt)("path",{parentName:"svg",d:"M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z"}))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2822em"}},(0,n.kt)("span",{parentName:"span"}))))))))))),(0,n.kt)("h2",{id:"clustering"},"clustering"),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u7ae0\u5f00\u6e90\u7684\u4ee3\u7801\u8fdb\u884c\u805a\u7c7b\uff0c\u4ed3\u5e93\u5730\u5740"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"GitHub repository")," \ud83d\udce6 :",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/PRBonn/depth_clustering"},"PRBonn/depth_clustering")))),(0,n.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4f7f\u7528\u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff08BFS\uff09\u6765\u5bf9\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"range image")," \u8fdb\u884c\u805a\u7c7b\uff0c\u5728\u6e90\u7801\u4e2d\uff0c\u8fd9\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"range image")," \u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},"OpenCV Mat")," \u7684\u5f62\u5f0f\u8868\u793a\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u4e8c\u7ef4\u7684\u77e9\u9635\uff0c\u6587\u4e2d\u7684\u65b9\u6cd5\u4e00\u6b21\u904d\u5386\u5c31\u80fd\u5b8c\u6210\u805a\u7c7b\uff0c\u76f8\u5f53\u4e8e\u904d\u5386\u4e86\u6240\u6709\u70b9\u4e91\u7684\u70b9\uff0c\u590d\u6742\u5ea6\u4e3a ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"O"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"N"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/pictures/fig-03.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5177\u4f53\u5b9e\u73b0\u4e3a\u6e90\u7801\u4e2d ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/PRBonn/depth_clustering/blob/master/src/image_labelers/linear_image_labeler.h"},(0,n.kt)("inlineCode",{parentName:"a"},"src/image_labelers/linear_image_labeler.h")))," \u4e2d\u7684 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"ComputeLabels()"))," \u51fd\u6570")),(0,n.kt)("p",null,"\u904d\u5386\u65f6\u8fdb\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"BFS")," \u64cd\u4f5c\uff0c\u5148\u5c06\u8d77\u59cb\u70b9\u586b\u5165\u961f\u5217\u4e2d\uff0c\u5982\u679c\u8fd9\u4e2a\u961f\u5217\u975e\u7a7a\uff0c\u90a3\u4e48\u5c31\u521b\u5efa\u4e00\u4e2a\u961f\u9996\u70b9\u7684\u590d\u5236\uff0c\u7136\u540e\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"pop")," \u64cd\u4f5c\uff0c\u5224\u65ad\u8fd9\u4e2a\u70b9\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"N4\u9886\u57df\uff08\u5373\u4e0a\u4e0b\u5de6\u53f3\u76f8\u90bb\u7684\u56db\u4e2a\u70b9\uff09")," \u4e0a\u7684\u70b9\u662f\u5426\u4e0e\u5f53\u524d\u70b9\u6ee1\u8db3\u4e00\u5b9a\u7684\u6761\u4ef6\uff0c\u5e76\u5c06\u6ee1\u8db3\u6761\u4ef6\u7684\u76f8\u90bb\u70b9\u6dfb\u52a0\u5230\u961f\u5217\u4e2d\uff0c\u5982\u6b64\u5faa\u73af\uff0c\u5f53\u5faa\u73af\u7ed3\u675f\u65f6\u56fe\u50cf\u4e2d\u5bf9\u5e94\u7684\u70b9\u5df2\u7ecf\u6253\u4e0a\u4e86\u76f8\u540c\u7684\u6807\u7b7e\uff0c\u904d\u5386\u8fc7\u7a0b\u4f1a\u8df3\u8fc7\u5df2\u7ecf\u88ab\u6807\u8bb0\u8fc7\u7684\u70b9\uff0c\u5e76\u66f4\u65b0\u6807\u7b7e\uff0c\u5982\u6b64\u5728\u904d\u5386\u7ed3\u675f\u65f6\uff0c\u6574\u5f20\u56fe\u50cf\u90fd\u5df2\u7ecf\u88ab\u6253\u4e0a\u4e86\u4e0d\u540c\u7684\u6807\u7b7e\uff0c\u5373\u5b8c\u6210\u4e86\u805a\u7c7b"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/pictures/fig-04.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5177\u4f53\u5b9e\u73b0\u4e3a\u6e90\u7801\u4e2d ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/PRBonn/depth_clustering/blob/master/src/image_labelers/linear_image_labeler.h"},(0,n.kt)("inlineCode",{parentName:"a"},"src/image_labelers/linear_image_labeler.h")))," \u4e2d\u7684 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"LabelOneComponent()"))," \u51fd\u6570")),(0,n.kt)("p",null,"\u5224\u65ad\u76f8\u90bb\u70b9\u662f\u5426\u6ee1\u8db3\u7684\u6761\u4ef6\u5728\u6587\u4e2d\u6709\u8be6\u7ec6\u8bf4\u660e\uff0c\u901a\u8fc7\u624b\u52a8\u8bbe\u5b9a\u4e00\u4e2a\u9608\u503c\uff0c\u5e76\u901a\u8fc7\u4f20\u611f\u5668\u8fd4\u56de\u7684\u6df1\u5ea6\u503c\uff0c\u8ba1\u7b97\u51fa\u4e24\u4e2a\u70b9\u6240\u8fde\u76f4\u7ebf\u4e0e\u7b2c\u4e00\u4e2a\u70b9\u7684\u4f20\u611f\u5668\u5149\u675f\u76f4\u7ebf\u7684\u5939\u89d2\uff0c\u770b\u8fd9\u4e2a\u5939\u89d2\u662f\u5426\u6ee1\u8db3\u9608\u503c"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/pictures/fig-01.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/ros/multi_pass_segemntation/pictures/fig-02.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5177\u4f53\u5b9e\u73b0\u4e3a\u6e90\u7801\u4e2d ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/PRBonn/depth_clustering/blob/master/src/image_labelers/diff_helpers/line_dist_diff.cpp"},(0,n.kt)("inlineCode",{parentName:"a"},"src/image_labelers/diff_helpers/line_dist_diff.cpp")))," \u4e2d\u7684 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"LineDistDiff::DiffAt()"))," \u51fd\u6570")),(0,n.kt)("h2",{id:"references"},"references"))}o.isMDXComponent=!0}}]);