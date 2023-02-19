"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[2054],{1450:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),s=(n(67294),n(3905)),o=n(83989);const l={id:"opencv-dnn-yolov5-6-0",title:"",sidebar_label:"DNN YOLO-v5-ONNX"},r=void 0,p={unversionedId:"cv/opencv/dnn/opencv-dnn-yolov5-6-0",id:"cv/opencv/dnn/opencv-dnn-yolov5-6-0",title:"",description:"\u4f7f\u7528 CV::DNN \u6a21\u5757\u8bfb\u53d6 YOLO v5 ONNX \u6a21\u578b\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b",source:"@site/docs/stack/cv/opencv/dnn/dnn-yolov5-6.0.md",sourceDirName:"cv/opencv/dnn",slug:"/cv/opencv/dnn/opencv-dnn-yolov5-6-0",permalink:"/stack/cv/opencv/dnn/opencv-dnn-yolov5-6-0",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/cv/opencv/dnn/dnn-yolov5-6.0.md",tags:[],version:"current",frontMatter:{id:"opencv-dnn-yolov5-6-0",title:"",sidebar_label:"DNN YOLO-v5-ONNX"},sidebar:"\ud83d\udc40CV & Robot",previous:{title:"DNN YOLO-v4",permalink:"/stack/cv/opencv/dnn/opencv-dnn-yolov4"},next:{title:"\u8f66\u9053\u7ebf\u68c0\u6d4b",permalink:"/stack/cv/opencv/demo/\u8f66\u9053\u7ebf\u68c0\u6d4b/opencv-lane-detect"}},i={},m=[{value:"\u4f7f\u7528 CV::DNN \u6a21\u5757\u8bfb\u53d6 YOLO v5 ONNX \u6a21\u578b\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b",id:"\u4f7f\u7528-cvdnn-\u6a21\u5757\u8bfb\u53d6-yolo-v5-onnx-\u6a21\u578b\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b",level:2},{value:"\u8fd0\u884c\u73af\u5883",id:"\u8fd0\u884c\u73af\u5883",level:3},{value:"\u83b7\u53d6 ONNX \u6a21\u578b",id:"\u83b7\u53d6-onnx-\u6a21\u578b",level:3},{value:"\u5bfc\u51fa <code>.onnx</code> \u6587\u4ef6",id:"\u5bfc\u51fa-onnx-\u6587\u4ef6",level:4},{value:"OpenCV-DNN \u5bfc\u5165 ONNX \u6a21\u578b",id:"opencv-dnn-\u5bfc\u5165-onnx-\u6a21\u578b",level:3},{value:"\u5173\u952e\u53c2\u6570",id:"\u5173\u952e\u53c2\u6570",level:4},{value:"Class YoloNet()",id:"class-yolonet",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:m};function N(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u4f7f\u7528-cvdnn-\u6a21\u5757\u8bfb\u53d6-yolo-v5-onnx-\u6a21\u578b\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b"},"\u4f7f\u7528 CV::DNN \u6a21\u5757\u8bfb\u53d6 YOLO v5 ONNX \u6a21\u578b\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b"),(0,s.kt)("h3",{id:"\u8fd0\u884c\u73af\u5883"},"\u8fd0\u884c\u73af\u5883"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"name"),(0,s.kt)("th",{parentName:"tr",align:"center"},"version"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"System"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"https://releases.ubuntu.com/20.04/"},"Ubuntu 20.04")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"CMake"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"https://cmake.org/"},"3.10"))," \u2265")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"OpenCV"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/opencv/opencv/releases/tag/4.5.0"},"4.5.0")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Python"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"https://www.python.org/downloads/release/python-380/"},"3.8.0")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"YOLOv5"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/releases/tag/v6.0"},"v6.0")))))),(0,s.kt)("h3",{id:"\u83b7\u53d6-onnx-\u6a21\u578b"},"\u83b7\u53d6 ONNX \u6a21\u578b"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://docs.opencv.org/4.5.0/d6/d0f/group__dnn.html#ga3b34fe7a29494a6a4295c169a7d32422"},(0,s.kt)("inlineCode",{parentName:"a"},"OpenCV-DNN")))," \u6a21\u5757\u652f\u6301\u76f4\u63a5\u5bfc\u5165 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"ONNX"))," \u7684\u6a21\u578b\u6587\u4ef6\uff0c\u9700\u8981\u7f16\u8bd1\u65f6\u540c\u65f6\u7f16\u8bd1 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/opencv/opencv_contrib"},(0,s.kt)("inlineCode",{parentName:"a"},"opencv_contrib")))," \u6a21\u5757"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5"},"yolov5"))," \u63d0\u4f9b\u4e86\u5df2\u8bad\u7ec3\u6a21\u578b\u7684\u5bfc\u51fa\u811a\u672c ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/blob/master/export.py"},(0,s.kt)("inlineCode",{parentName:"a"},"export.py"))),"\uff0c\u652f\u6301\u4ece pytorch \u5bfc\u51fa\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"onnx"),"\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"torchscript"),"\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"TF pb")," \u7b49\u683c\u5f0f"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/issues/251"},"TFLite, ONNX, CoreML, TensorRT Export #251")))),(0,s.kt)("h4",{id:"\u5bfc\u51fa-onnx-\u6587\u4ef6"},"\u5bfc\u51fa ",(0,s.kt)("inlineCode",{parentName:"h4"},".onnx")," \u6587\u4ef6"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d "),(0,s.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/releases/tag/v6.0"},"yolov5-v6.0"),(0,s.kt)("strong",{parentName:"p"}," \u6e90\u7801")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O yolov5-6.0.tar.gz https://github.com/ultralytics/yolov5/archive/refs/tags/v6.0.tar.gz\ntar -zxvf yolov5-6.0.tar.gz  # \u89e3\u538b\ncd yolov5-6.0\npip install -r requirements.txt  # \u5b89\u88c5\u4f9d\u8d56 \n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"conda"),"\uff0c\u5b89\u88c5\u4f9d\u8d56\u524d\u5148\u6fc0\u6d3b ",(0,s.kt)("inlineCode",{parentName:"li"},"conda")," \u73af\u5883")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5b89\u88c5 ",(0,s.kt)("inlineCode",{parentName:"strong"},"onnx"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade onnx\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d\u9884\u8bad\u7ec3\u6a21\u578b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sh data/scripts/download_weights.sh # \u4f1a\u4e0b\u8f7d\u6240\u6709\u79cd\u7c7b\u7684\u6a21\u578b\n# \u8fd9\u91cc\u53ea\u4f1a\u7528\u5230 yolov5s.pt \u4e5f\u53ef\u5355\u72ec\u4e0b\u8f7d\nwget https://github.com/ultralytics/yolov5/releases/download/v6.0/yolov5s.pt\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4e4b\u540e\u5728 ",(0,s.kt)("inlineCode",{parentName:"li"},"yolov5")," \u6839\u76ee\u5f55\u4f1a\u6709\u4e0b\u8f7d\u597d\u7684 ",(0,s.kt)("inlineCode",{parentName:"li"},".pt"),"\u6a21\u578b\u6587\u4ef6")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u8f6c\u6362\u6a21\u578b")),(0,s.kt)("p",null,"\u7531\u4e8e ",(0,s.kt)("inlineCode",{parentName:"p"},"OpenCV")," \u7248\u672c\u9009\u62e9\u7684\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"4.5.0"),"\uff0c\u5728\u76f4\u63a5\u5bfc\u51fa ",(0,s.kt)("inlineCode",{parentName:"p"},"onnx")," \u6a21\u578b\u540e\uff0c\u52a0\u8f7d\u65f6\u4f1a\u51fa\u73b0\u672a\u77e5\u7684\u9519\u8bef\uff0c\u9700\u8981\u5bf9 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/blob/master/export.py"},(0,s.kt)("inlineCode",{parentName:"a"},"export.py")))," \u4e2d\u7684\u5185\u5bb9\u8fdb\u884c\u4e00\u4e9b\u6539\u52a8"),(0,s.kt)("p",null,"\u627e\u5230 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"export.py"))," \u4e2d\u7684 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/blob/master/export.py#L582"},"parser.add_argument('--opset', type=int, default=13, help='ONNX: opset version')"))," \u8fd9\u4e00\u884c"),(0,s.kt)("p",null,"\u5c06 ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," \u7684\u503c\u7531 ",(0,s.kt)("inlineCode",{parentName:"p"},"13")," \u4fee\u6539\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"12")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"def parse_opt():\n    \xb7\xb7\xb7\n    parser.add_argument('--opset', type=int, default=12, help='ONNX: opset version')\n    \xb7\xb7\xb7\n    return opt\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"def parse_opt():\n    \xb7\xb7\xb7\n    parser.add_argument('--opset', type=int, default=12, help='ONNX: opset version')\n    \xb7\xb7\xb7\n    return opt\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u518d\u6267\u884c\u6a21\u578b\u8f6c\u6362")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"python3.8 export.py --data data/coco128.yaml --weights yolov5s.pt --include onnx\n")),(0,s.kt)("p",null,"\u6700\u7ec8\u5f97\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"yolov5s.onnx")," \u6587\u4ef6\uff0c\u5c06\u4f5c\u4e3a\u6211\u4eec\u4f7f\u7528 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"OpenCV-DNN"))," \u6a21\u5757\u5bfc\u5165\u7684\u6a21\u578b\u6587\u4ef6"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"v6.0 \u7248\u672c\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"export.py")," \u6587\u4ef6\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"default=13")),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"pytho3.8 \u5bf9\u5e94\u5b89\u88c5\u7684 onnx \u7248\u672c\u4e3a  onnx-1.12.0 \uff0c\u6240\u4ee5\u5e94\u4fee\u6539\u4e3a ",(0,s.kt)("inlineCode",{parentName:"li"},"default=12"))),(0,s.kt)("p",{parentName:"admonition"},"v6.1 \u7248\u672c\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"export.py")," \u6587\u4ef6\u5219\u88ab\u4fee\u6539\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"default=12")," \u5982\u679c\u4f7f\u7528\nv6.1 \u7248\u672c\u5e94\u8be5\u53ef\u4ee5\u8df3\u8fc7\u4fee\u6539\u6587\u4ef6\u7684\u6b65\u9aa4")),(0,s.kt)("h3",{id:"opencv-dnn-\u5bfc\u5165-onnx-\u6a21\u578b"},"OpenCV-DNN \u5bfc\u5165 ONNX \u6a21\u578b"),(0,s.kt)("p",null,"\u5148\u6765\u770b\u770b\u6a21\u578b\u8f6c\u6362\u540e\u7684\u7f51\u7edc\u7ed3\u6784\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/lutzroeder/netron"},(0,s.kt)("inlineCode",{parentName:"a"},"Netron Viewer")))," \u6765\u8fdb\u884c\u7f51\u7edc\u7ed3\u6784\u7684\u53ef\u89c6\u5316\uff0c\u6b64\u5de5\u5177\u652f\u6301\u5927\u90e8\u5206\u6846\u67b6\u7684\u7f51\u7edc\u7ed3\u6784\u53ef\u89c6\u5316\uff0c\u5e76\u4e14\u80fd\u7684\u83b7\u53d6\u5355\u4e2a\u8282\u70b9\u7684\u4fe1\u606f"),(0,s.kt)("h4",{id:"\u5173\u952e\u53c2\u6570"},"\u5173\u952e\u53c2\u6570"),(0,s.kt)("p",null,"\u9996\u5148\u662f\u6a21\u578b\u8f6c\u6362\u540e\u7684\u4e00\u4e9b\u4f1a\u7528\u5230\u7684\u53c2\u6570\u8bbe\u7f6e\uff0c\u8fd9\u91cc\u4ee5 ",(0,s.kt)("inlineCode",{parentName:"p"},"yolov5s")," \u5e38\u7528\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"640x640")," \u5206\u8fa8\u7387 \u4ee5\u53ca ",(0,s.kt)("inlineCode",{parentName:"p"},"coco128")," \u6570\u636e\u96c6\u4e3a\u4f8b"),(0,s.kt)("p",null,"\u5bf9\u4e8e ",(0,s.kt)("inlineCode",{parentName:"p"},"yolov5s.onnx")," \u6587\u4ef6"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/yolov5/yolov5-6.0-onnx-netron.png",alt:null})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8f93\u5165\u8282\u70b9\u7ef4\u5ea6\u4e3a ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"float32[1,3,640,640]"))," \uff0c\u4e3a\u5206\u8fa8\u7387 ",(0,s.kt)("inlineCode",{parentName:"li"},"640x640")," \u7684 ",(0,s.kt)("inlineCode",{parentName:"li"},"RGB")," \u4e09\u901a\u9053\u56fe\u7247")),(0,s.kt)(o.G,{chart:'flowchart LR;\nA["input [1,3,640,640]"] --\x3eB["L [1,3,80,80,85] 1/8"]--\x3eO["output [1,25200,85]"];\nA["input [1,3,640,640]"] --\x3e C["M [1,3,40,40,85] 1/16"]--\x3eO["output [1,25200,85]"];\nA["input [1,3,640,640]"] --\x3e D["S [1,3,20,20,85] 1/32"]--\x3eO["output [1,25200,85]"];\n\nstyle A fill:#78cdd1,stroke:#333,stroke-width:2px\nstyle B fill:#f58f98,stroke:#333,stroke-width:2px\nstyle C fill:#ffc20e,stroke:#333,stroke-width:2px\nstyle D fill:#f173ac,stroke:#333,stroke-width:2px\nstyle O fill:#45b97c,stroke:#333,stroke-width:2px',mdxType:"Mermaid"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u8282\u70b9\u7ef4\u5ea6\u4e3a ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"float32[1,25200,85]"))," \uff0c\u4e3a\u6240\u6709\u5c3a\u5bf8\u8f93\u51fa\u7684\u96c6\u5408")),(0,s.kt)("p",null,"\u53ef\u4ee5\u83b7\u5f97\u4e09\u4e2a\u53c2\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"float resolution;       // 640 x 640\nint output_dimensions;  // 85\nint output_rows;        // 25200\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"resolution")," \u4e3a\u5206\u8fa8\u7387\uff0c\u8fd9\u91cc\u4e3a ",(0,s.kt)("inlineCode",{parentName:"strong"},"640x640"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"output_dimensions")," \u4e3a\u6bcf\u4e2a\u76ee\u6807\u6240\u5360\u8303\u56f4 ",(0,s.kt)("inlineCode",{parentName:"strong"},"5 + classnames"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"5")," \u5bf9\u5e94 ",(0,s.kt)("inlineCode",{parentName:"li"},"x"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"y"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"w"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"h"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"confidences"),"\uff0c\u5206\u522b\u63cf\u8ff0\u7269\u4f53\u4f4d\u7f6e\u4ee5\u53ca\u6846\u5185\u662f\u5426\u6709\u7269\u4f53\u7684\u7f6e\u4fe1\u5ea6"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"classnames")," \u5bf9\u5e94\u6570\u636e\u96c6\u4e2d\u6bcf\u79cd\u5206\u7c7b\u6240\u5bf9\u5e94\u7684\u7f6e\u4fe1\u5ea6\uff0c\u8fd9\u91cc\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"coco128")," \u6570\u636e\u96c6\uff0c\u6240\u4ee5\u4e3a ",(0,s.kt)("strong",{parentName:"li"},"80"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"output_rows")," \u4e3a\u8f93\u51fa\u8282\u70b9\u7684\u7ef4\u5ea6\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u5206\u522b\u5bf9\u5e94")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"layer 345 output resolution*1/8")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"layer 403 output resolution*1/16")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"layer 461 output resolution*1/32")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"25200"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"8"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"25200=3*(80^2 + 40^2 + 20^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"25200"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"8"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("h3",{id:"class-yolonet"},"Class YoloNet()"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="yolov5_onnx.hpp"',title:'"yolov5_onnx.hpp"'},"#include <fstream>\n#include <math.h>\n#include <opencv2/opencv.hpp>\n\nnamespace yolov5_onnx{\n\nstruct Detection\n{\n    int class_id;\n    float confidence;\n    cv::Rect bbox;\n};\n\n\nclass Net\n{\npublic:\n    /**\n     * @brief Construct a new Net object\n     * \n     * @param onnx_model_path yolov5 onnx model file path\n     * @param class_list_path class_list file path\n     * @param is_cuda is CUDA supported\n     */\n    Net(std::string onnx_model_path, \n        std::string class_list_path, \n        const float resolution,\n        bool is_cuda = false);\n    /**\n     * @brief Destroy the Net object\n     * \n     */\n    ~Net();\n\n    /**\n     * @brief \n     * \n     * @param src \n     * @param _score_threshold \n     * @param _NMS_threshold \n     * @param _confidence_threshold \n     * @return std::vector<yolov5_onnx::Detection> \n     */\n    std::vector<yolov5_onnx::Detection> detect(cv::Mat &src,\n                                    float _score_threshold = 0.2,\n                                    float _NMS_threshold = 0.4,\n                                    float _confidence_threshold = 0.4);\n\n    cv::Mat format_img(const cv::Mat &src);\n\n    inline std::vector<std::string> classList(){\n        return this->class_list;\n    }\n\nprivate:\n    cv::dnn::Net net;\n    std::vector<std::string> class_list;\n    \n    float resolution;\n    int output_dimensions;\n    int output_rows;\n};\n\n} // namespace yolov5_onnx\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="yolov5_onnx.cpp"',title:'"yolov5_onnx.cpp"'},'#include "yolov5_onnx/yolov5_onnx.hpp"\n\nnamespace yolov5_onnx{\n\nNet::Net(   std::string onnx_model_path, \n            std::string class_list_path, \n            const float RESOLUTION,\n            bool is_cuda)\n{\n    // load model\n    this->net = cv::dnn::readNet(onnx_model_path);\n    if (is_cuda)\n    {\n        std::cout << "Attempty to use CUDA\\n";\n        net.setPreferableBackend(cv::dnn::DNN_BACKEND_CUDA);\n        net.setPreferableTarget(cv::dnn::DNN_TARGET_CUDA_FP16);\n    }\n    else\n    {\n        std::cout << "Running on CPU\\n";\n        net.setPreferableBackend(cv::dnn::DNN_BACKEND_OPENCV);\n        net.setPreferableTarget(cv::dnn::DNN_TARGET_CPU);\n    }\n\n    // load class_list\n    std::ifstream ifs(class_list_path);\n    std::string line;\n    while (getline(ifs, line))\n    {\n        this->class_list.push_back(line);\n    }\n\n    this->resolution = RESOLUTION;\n\n    this->output_dimensions = 5 + this->class_list.size();\n    this->output_rows = 3 *(pow(this->resolution/8,2) + pow(this->resolution/16,2) + pow(this->resolution/32,2)) ;\n\n}\n\nstd::vector<yolov5_onnx::Detection> Net::detect(cv::Mat &src,\n                                    float _score_threshold,\n                                    float _NMS_threshold,\n                                    float _confidence_threshold){\n    cv::Mat blob;\n    cv::Mat input = this->format_img(src);\n    cv::dnn::blobFromImage(input, blob, 1./255., cv::Size(this->resolution, this->resolution), cv::Scalar(0,0,0), true, false);\n    net.setInput(blob);\n    std::vector<cv::Mat> outputs;\n    net.forward(outputs, net.getUnconnectedOutLayersNames());\n\n    float x_factor = input.cols / this->resolution;\n    float y_factor = input.rows / this->resolution;\n\n    float *data = (float *)outputs[0].data;\n\n    std::vector<int> class_ids;\n    std::vector<float> confidences;\n    std::vector<cv::Rect> boxes;\n\n        for (int i = 0; i < this->output_rows; ++i) {\n\n        float confidence = data[4];\n        if (confidence >= _confidence_threshold) {\n\n            float * classes_scores = data + 5;\n            cv::Mat scores(1, this->class_list.size(), CV_32FC1, classes_scores);\n            cv::Point class_id;\n            double max_class_score;\n            minMaxLoc(scores, 0, &max_class_score, 0, &class_id);\n            if (max_class_score > _score_threshold) {\n\n                confidences.push_back(confidence);\n\n                class_ids.push_back(class_id.x);\n\n                float x = data[0];\n                float y = data[1];\n                float w = data[2];\n                float h = data[3];\n                int left = int((x - 0.5 * w) * x_factor);\n                int top = int((y - 0.5 * h) * y_factor);\n                int width = int(w * x_factor);\n                int height = int(h * y_factor);\n                boxes.push_back(cv::Rect(left, top, width, height));\n            }\n\n        }\n        data += this->output_dimensions;\n    }\n    \n    std::vector<Detection> output;\n    std::vector<int> nms_result;\n    cv::dnn::NMSBoxes(boxes, confidences, _score_threshold, _NMS_threshold, nms_result);\n    for (size_t i = 0; i < nms_result.size(); i++) {\n        int idx = nms_result[i];\n        Detection result;\n        result.class_id = class_ids[idx];\n        result.confidence = confidences[idx];\n        result.bbox = boxes[idx];\n        output.push_back(result);\n    }\n\n    return output;\n}\n\ncv::Mat Net::format_img(const cv::Mat &src){\n    int format_size = src.cols > src.rows ? src.cols:src.rows;\n    cv::Mat dst = cv::Mat::zeros(cv::Size(format_size, format_size), CV_8UC3);\n    src.copyTo(dst(cv::Rect(0, 0, src.cols, src.rows)));\n    \n    return dst;\n}\n\n} // namespace yolov5_onnx\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"yolov5_onnx::Detection")," \u7528\u4e8e\u5b58\u653e\u68c0\u6d4b\u7ed3\u679c\u7684\u7ed3\u6784\u4f53")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"class_id")," \u7269\u4f53\u7684\u7c7b\u522b"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"confidence")," \u7f6e\u4fe1\u5ea6"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bbox")," \u4f4d\u7f6e\u7684\u77e9\u5f62 boundingBox")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"yolov5_onnx::Net::format_img")," \u9884\u5904\u7406\u8f93\u5165\u56fe\u7247")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"}," cv::dnn::blobFromImage()"))," \u51fd\u6570\u867d\u7136\u80fd\u81ea\u5df1\u5904\u7406\u8f93\u5165\u7684\u56fe\u7247\uff0c\u4f46\u662f\u5982\u679c\u8f93\u5165\u7684\u56fe\u7247\u4e0d\u662f\u7b49\u5bbd\u7684\uff0c\u538b\u7f29\u7ed3\u679c\u5c31\u4f1a\u5f71\u54cd\u68c0\u6d4b\u7ed3\u679c\u7684\u8f93\u51fa\uff0c\u8fd9\u91cc\u7684\u5904\u7406\u65b9\u6cd5\u5c31\u662f\u4ee5\u8f93\u5165\u56fe\u50cf\u7684\u957f\u8fb9\u521b\u5efa\u4e00\u5f20\u9ed1\u8272\u7684\u56fe\u50cf\uff0c\u7136\u540e\u5c06\u8f93\u5165\u56fe\u50cf\u5c3a\u5bf8\u7684ROI\u533a\u57df\u8bbe\u7f6e\u4e3a\u8f93\u5165\u56fe\u50cf\uff0c\u8fd9\u6837\u5c31\u4fdd\u8bc1\u8f93\u5165\u56fe\u50cf\u4e00\u5b9a\u662f\u7b49\u5bbd\u7684\uff0c\u80fd\u4fdd\u8bc1\u68c0\u6d4b\u7ed3\u679c\uff0c\u5e76\u4e14\u4e0d\u9700\u8981\u5bf9\u68c0\u6d4b\u7ed3\u679c\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"boundingBox")," \u7684\u4f4d\u7f6e\u518d\u8fdb\u884c\u5904\u7406"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/yolov5/yolov5-6.0-onnx-format-img.png",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},'#include <opencv2/opencv.hpp>\n#include "yolov5_onnx/yolov5_onnx.hpp"\n\nint main(){\n    yolov5_onnx::Net yolo("{path}/yolov5-6.0/yolov5s.onnx",\n                            "{path}/yolov5-6.0/classes.txt",\n                            640);\n    const std::vector<cv::Scalar> colors = {cv::Scalar(255, 255, 0), cv::Scalar(0, 255, 0), cv::Scalar(0, 255, 255), cv::Scalar(255, 0, 0)};\n\n    cv::Mat src_img = cv::imread("{path}yolov5-6.0/data/images/bus.jpg");\n\n    // YOLO detect\n    std::vector<yolov5_onnx::Detection> result =  yolo.detect(src_img);\n    for (size_t i = 0; i < result.size(); ++i)\n    {\n\n        auto detection = result[i];\n        auto bbox = detection.bbox;\n        auto classId = detection.class_id;\n        const auto color = colors[classId % colors.size()];\n        cv::rectangle(color_img, bbox, color, 3);\n\n        cv::rectangle(color_img, cv::Point(bbox.x, bbox.y - 20), cv::Point(bbox.x + bbox.width, bbox.y), color, cv::FILLED);\n        cv::putText(color_img, yolo.classList()[classId].c_str(), cv::Point(bbox.x, bbox.y - 5), cv::FONT_HERSHEY_SIMPLEX, 0.5, cv::Scalar(0, 0, 0));\n    }\n\n    cv::imshow("color_img", color_img);\n\n    cv::waitKey(0);\n    \n    return 0;\n}\n')),(0,s.kt)("p",null,"\u6700\u7ec8\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/yolov5/yolov5-6.0-onnx-detect-result.png",alt:null})),(0,s.kt)("p",null,"\u4f7f\u7528 CPU \u63a8\u7406\uff0c\u5e27\u7387\u6bd4\u8f83\u611f\u4eba\uff0c\u8005\u5c1d\u8bd5\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"ONNX onnxruntime")," \u6216\u8005 ",(0,s.kt)("inlineCode",{parentName:"p"},"openvino")," \u52a0\u901f\u63a8\u7406\uff0c\u53ef\u4ee5\u663e\u8457\u63d0\u5347\u63a8\u7406\u901f\u5ea6"),(0,s.kt)("p",null,"\u6216\u8005\u5c1d\u8bd5\u964d\u4f4e\u7f51\u7edc\u7684\u5206\u8fa8\u7387\uff0c\u727a\u7272\u4e00\u4e9b\u68c0\u6d4b\u7684\u7cbe\u5ea6\uff0c\u4ee5\u5927\u5e45\u5ea6\u63d0\u9ad8\u68c0\u6d4b\u7684\u901f\u5ea6"),(0,s.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5"},"ultralytics/yolov5"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/issues/251"},"TFLite, ONNX, CoreML, TensorRT Export #251"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/lutzroeder/netron"},"Netron Viewer"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/Hexmagic/ONNX-yolov5"},"Hexmagic/ONNX-yolov5"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/doleron/yolov5-opencv-cpp-python"},"yolov5-opencv-cpp-python"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/qq_34124780/article/details/121079317"},"2021.11.01 c++\u4e0b opencv\u90e8\u7f72yolov5-6.0\u7248\u672c (\u56db)"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/dongjuexk/article/details/124243178"},"opencv dnn\u6a21\u5757\u5b9e\u73b0Yolov5_6.1"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/hong3731/yolov5-opencv"},"hong3731/yolov5-opencv")))))}N.isMDXComponent=!0}}]);