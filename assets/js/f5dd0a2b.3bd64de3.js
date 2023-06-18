"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[7861],{4887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(87462),l=(a(67294),a(3905));a(83989);const n={id:"intel-realsense-apriltag",title:"D435i use apriltag with OpenCV",sidebar_label:"D435i apriltag"},r=void 0,s={unversionedId:"devices/realsense/intel-realsense-apriltag",id:"devices/realsense/intel-realsense-apriltag",title:"D435i use apriltag with OpenCV",description:"apriltag",source:"@site/docs/stack/devices/realsense/intel_realsense_apriltag.md",sourceDirName:"devices/realsense",slug:"/devices/realsense/intel-realsense-apriltag",permalink:"/stack/devices/realsense/intel-realsense-apriltag",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/devices/realsense/intel_realsense_apriltag.md",tags:[],version:"current",frontMatter:{id:"intel-realsense-apriltag",title:"D435i use apriltag with OpenCV",sidebar_label:"D435i apriltag"},sidebar:"\ud83d\udd0c devices",previous:{title:"D435i",permalink:"/stack/devices/realsense/intel-realsense-start"},next:{title:"apriltag Pose Estimation",permalink:"/stack/devices/realsense/intel-realsense-intrinsics"}},p={},c=[{value:"apriltag",id:"apriltag",level:2},{value:"\u7f16\u8bd1\u5b89\u88c5",id:"\u7f16\u8bd1\u5b89\u88c5",level:3},{value:"librealsense2-AprilTag-OpenCV",id:"librealsense2-apriltag-opencv",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],o={toc:c};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/realsense/realsense-apriltag.png",alt:null})),(0,l.kt)("h2",{id:"apriltag"},"apriltag"),(0,l.kt)("p",null,"\u5b98\u65b9\u7f51\u7ad9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://april.eecs.umich.edu/software/apriltag"},"AprilTag")))),(0,l.kt)("p",null,"\u9879\u76ee\u5730\u5740"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag"},"AprilRobotics/apriltag")))),(0,l.kt)("h3",{id:"\u7f16\u8bd1\u5b89\u88c5"},"\u7f16\u8bd1\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/AprilRobotics/apriltag.git\ncd apriltag\nmkdir build\ncd build/\ncmake -DCMAKE_INSTALL_PREFIX=/usr/local -DCMAKE_BUILD_TYPE=Release ..\nNUM_CPU=$(nproc)\nmake -j$(($NUM_CPU - 1))\nsudo make install\n")),(0,l.kt)("h2",{id:"librealsense2-apriltag-opencv"},"librealsense2-AprilTag-OpenCV"),(0,l.kt)("p",null,"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/wiki/AprilTag-User-Guide"},"AprilTag User Guide"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/blob/master/example/opencv_demo.cc"},"opencv_demo.cc")))),(0,l.kt)("p",null,"\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"apriltag")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// aprilTag config\napriltag_detector_t *td = apriltag_detector_create();\napriltag_family_t   *tf = tag36h11_create();\napriltag_detector_add_family(td, tf);\ntd->nthreads = 4;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apriltag_family_t")," \u4e3a\u6807\u7b7e\u7684\u4e0d\u540c\u5206\u7c7b\u5408\u96c6\uff0c\u8fd9\u91cc\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"li"},"tag36h11"),"\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("strong",{parentName:"li"},"User Guide")," \u4e2d\u7684 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/wiki/AprilTag-User-Guide#choosing-a-tag-family"},"choosing-a-tag-family")))),(0,l.kt)("p",null,"\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"img_header")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"cv::Mat gray_img;\ncv::cvtColor(color_img, gray_img, cv::COLOR_BGR2GRAY);\n// Make an image_u8_t header for the Mat data\nimage_u8_t img_header = { .width = gray_img.cols,\n    .height = gray_img.rows,\n    .stride = gray_img.cols,\n    .buf = gray_img.data\n};\n")),(0,l.kt)("p",null,"\u6267\u884c\u68c0\u6d4b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"zarray_t *detections = apriltag_detector_detect(td, &img_header);\n")),(0,l.kt)("p",null,"\u7ed8\u5236\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'for(int i = 0; i < zarray_size(detections); ++i){\n    apriltag_detection_t *det;\n    zarray_get(detections, i, &det);\n    for(size_t i = 0; i < 4; ++i){\n        cv::line(color_img, cv::Point(static_cast<int>(det->p[i][0]), static_cast<int>(det->p[i][1])),\n                cv::Point(static_cast<int>(det->p[(i+1)%4][0]), static_cast<int>(det->p[(i+1)%4][1])),\n                cv::Scalar(0xff, 0xff, 0), 2);\n    }\n\n    stringstream ss;\n    ss << det->id;\n    cv::String text = ss.str();\n    int fontface = cv::FONT_HERSHEY_SCRIPT_SIMPLEX;\n    double fontscale = 1.0;\n    int baseline;\n    cv::Size textsize = cv::getTextSize(text, fontface, fontscale, 2,\n                                    &baseline);\n    putText(color_img, text, cv::Point( static_cast<int>(det->c[0]-textsize.width/2),\n                                        static_cast<int>(det->c[1]+textsize.height/2)),\n                                        fontface, fontscale, cv::Scalar(0xff, 0x99, 0), 2);\n}\n\nimshow("color_img", color_img);\n')),(0,l.kt)("p",null,"\u6700\u7ec8\u6548\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/realsense/realsense-apriltag.png",alt:null})),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://april.eecs.umich.edu/software/apriltag"},"AprilTag"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag"},"AprilRobotics/apriltag"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/wiki/AprilTag-User-Guide"},"AprilTag User Guide"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/blob/master/example/opencv_demo.cc"},"opencv_demo.cc"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/AprilRobotics/apriltag/wiki/AprilTag-User-Guide#choosing-a-tag-family"},"choosing-a-tag-family")))))}g.isMDXComponent=!0}}]);