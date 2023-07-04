"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[9078],{70613:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=l(87462),a=(l(67294),l(3905));l(83989);const o={id:"yolov5-start",title:"yolov5 \u73af\u5883\u914d\u7f6e",sidebar_label:"yolov5 \u73af\u5883\u914d\u7f6e"},r=void 0,s={unversionedId:"cv/yolo/yolov5-start",id:"cv/yolo/yolov5-start",title:"yolov5 \u73af\u5883\u914d\u7f6e",description:"- yolov5 GitHub \u94fe\u63a5",source:"@site/docs/stack/cv/yolo/yolov5-start.md",sourceDirName:"cv/yolo",slug:"/cv/yolo/yolov5-start",permalink:"/stack/cv/yolo/yolov5-start",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/cv/yolo/yolov5-start.md",tags:[],version:"current",frontMatter:{id:"yolov5-start",title:"yolov5 \u73af\u5883\u914d\u7f6e",sidebar_label:"yolov5 \u73af\u5883\u914d\u7f6e"},sidebar:"\ud83d\udc40 CV && \ud83e\udde0 ML & DL",previous:{title:"\ud83d\ude09 YOLO",permalink:"/stack/category/YOLO"},next:{title:"yolov5 \u8bad\u7ec3\u5f00\u6e90\u6570\u636e\u96c6",permalink:"/stack/cv/yolo/yolov5-train"}},p={},i=[{value:"\u514b\u9686\u6e90\u7801",id:"\u514b\u9686\u6e90\u7801",level:2},{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:2},{value:"\u6267\u884c\u6d4b\u8bd5",id:"\u6267\u884c\u6d4b\u8bd5",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:i};function m(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5"},"yolov5 GitHub \u94fe\u63a5")))),(0,a.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u7c7b\u795e\u5947\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u6211\u5e76\u6ca1\u6709\u5f88\u6df1\u523b\u7684\u53bb\u7406\u89e3\uff0c\u4e5f\u6ca1\u6709\u90a3\u79cd\u80fd\u529b"),(0,a.kt)("p",null,"\u66f4\u591a\u7684\u8fd8\u662f\u51fa\u4e8e\u81ea\u5df1\u7684\u5174\u8da3\u6765\u505a\u4e00\u4e9b\u5b9e\u73b0\uff0c\u819c\u62dc\u5927\u4f6c\u4eec\u5c31\u5b8c\u4e8b\u4e86"),(0,a.kt)("h2",{id:"\u514b\u9686\u6e90\u7801"},"\u514b\u9686\u6e90\u7801"),(0,a.kt)("p",null,"\u5148\u4ece ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5"},(0,a.kt)("inlineCode",{parentName:"a"},"GitHub")))," \u4e0a\u514b\u9686\u6e90\u7801"),(0,a.kt)("p",null,"\u6574\u4e2a\u9879\u76ee\u7684\u5927\u81f4\u76ee\u5f55\u5982\u4e0b\uff0c\u53ea\u8d34\u51fa\u6765\u4e86\u8fd9\u91cc\u4f1a\u63d0\u5230\u7684\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yolov5-master/\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 images\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bus.jpg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 zidane.jpg\n\u2502\xa0\xa0 \u2514\u2500\u2500 \xb7\xb7\xb7\n\u251c\u2500\u2500 weights\n\u2502 \xa0 \u2514\u2500\u2500 download_weights.sh\n\u251c\u2500\u2500 requirements.txt\n\u251c\u2500\u2500 detect.py\n\u2514\u2500\u2500 \xb7\xb7\xb7\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data/images/")," \u8def\u5f84\u4e0b\u5b58\u653e\u793a\u4f8b\u6240\u7528\u7684\u4e24\u5f20\u56fe\u7247"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"weights/")," \u76ee\u5f55\u4e0b\u662f\u4e0b\u8f7d\u6743\u91cd\u6587\u4ef6\u7684\u811a\u672c ",(0,a.kt)("inlineCode",{parentName:"li"},"download_weights.sh")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requirements.txt")," \u6587\u4ef6\u5217\u51fa\u4e86\u73af\u5883\u6240\u9700\u8981\u7684\u4f9d\u8d56"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"detect.py")," \u7528\u6765\u5b9e\u73b0\u68c0\u6d4b\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"py")," \u6587\u4ef6")),(0,a.kt)("h2",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5b89\u88c5\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Anaconda")," \u7684\u8bdd\uff0c\u5efa\u8bae\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u865a\u62df\u73af\u5883\uff0c\u907f\u514d\u4e0e\u81ea\u5df1\u672c\u6765\u7684\u5f00\u53d1\u73af\u5883\u51b2\u7a81"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"conda create -n yolov5 python==3.8\nsource activate yolov5\n")),(0,a.kt)("p",null,"\u7136\u540e\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.txt")," \u6587\u4ef6\u5b89\u88c5\u4f9d\u8d56\u73af\u5883"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,a.kt)("p",null,"\u6b63\u5e38\u7684\u8bdd\u76f8\u5173\u73af\u5883\u5df2\u7ecf\u914d\u7f6e\u5b8c\u6210\u4e86"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u6267\u884c\u6d4b\u8bd5"},"\u6267\u884c\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"download_weights.sh")," \u811a\u672c\u4e0b\u8f7d\u8bad\u7ec3\u597d\u7684\u6743\u91cd\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bash weights/download_weights.sh\n")),(0,a.kt)("admonition",{title:"\ud83d\udcbb",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u4f1a\u56e0\u4e3a\u7f51\u7edc\u7684\u539f\u56e0\u800c\u5bfc\u81f4\u5931\u8d25\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5230 yolov5 \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/releases"},"release"))," \u4e0b\u8f7d")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u6839\u76ee\u5f55\u4e0b\u4f1a\u591a\u51fa\u51e0\u4e2a\u6743\u91cd\u6587\u4ef6\uff0c\u5206\u522b\u5bf9\u5e94\u4e0d\u540c\u7684\u7f51\u7edc\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yolov5-master/\n\u251c\u2500\u2500 \xb7\xb7\xb7\n\u251c\u2500\u2500 yolov5l.pt\n\u251c\u2500\u2500 yolov5m.pt\n\u251c\u2500\u2500 yolov5s.pt\n\u2514\u2500\u2500 yolov5x.pt\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"yolov5s.pt")," \u4e3a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python detect.py --source data/images --weights yolov5s.pt --conf 0.25\n")),(0,a.kt)("p",null,"\u6267\u884c\u68c0\u6d4b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/yolo-start.png",alt:null})),(0,a.kt)("p",null,"\u4ece\u7ec8\u7aef\u6253\u5370\u7684\u4fe1\u606f\u53ef\u4ee5\u770b\u5230\uff0c\u5206\u522b\u5728\u4e24\u5f20\u56fe\u4e2d\u68c0\u6d4b\u5230\u4e86\u4e00\u4e9b\u5185\u5bb9"),(0,a.kt)("p",null,"\u4e5f\u4f1a\u5728\u76ee\u5f55\u4e2d\u751f\u6210\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"runs/detect/exp")," \u76ee\u5f55\uff0c\u53ef\u4ee5\u76f4\u63a5\u5230\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u67e5\u770b\u68c0\u6d4b\u7684\u7ed3\u679c"),(0,a.kt)("p",null,"\u793a\u4f8b\ud83d\udc47"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/zidane.jpg",alt:null})),(0,a.kt)("p",null,"\u8fd9\u91cc\u56e0\u4e3a\u6211\u6267\u884c\u4e86\u4e24\u6b21\uff0c\u6240\u4ee5\u51fa\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Results saved to runs/detect/exp2")),(0,a.kt)("p",null,"\u4f8b\u7a0b\u770b\u5b8c\u4e86\uff0c\u4e0b\u4e00\u6b65\u5c31\u662f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"yolov5")," \u6765\u8bad\u7ec3\u5176\u4ed6\u7684\u6570\u636e\u96c6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://sinnammanyo.cn/stack/cv/ml-dl/yolo/yolov5-train"},"\u4f20\u9001\u95e8")))),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ultralytics/yolov5/blob/master/README.md"},"yolov5 README"))))}m.isMDXComponent=!0}}]);