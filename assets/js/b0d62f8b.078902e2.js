"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[3435],{33517:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));a(83989);const r={id:"yolov5-6.0-train",title:"",sidebar_label:"yolov5 v6.0 train"},o=void 0,p={unversionedId:"computer/cv/ml-dl/yolo/yolov5-6.0-train",id:"computer/cv/ml-dl/yolo/yolov5-6.0-train",title:"",description:"yolov5 v6.0 train and convert to onnx",source:"@site/docs/computer/cv/ml-dl/yolo/yolov5-6.0-train.md",sourceDirName:"computer/cv/ml-dl/yolo",slug:"/computer/cv/ml-dl/yolo/yolov5-6.0-train",permalink:"/docs/computer/cv/ml-dl/yolo/yolov5-6.0-train",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/computer/cv/ml-dl/yolo/yolov5-6.0-train.md",tags:[],version:"current",frontMatter:{id:"yolov5-6.0-train",title:"",sidebar_label:"yolov5 v6.0 train"},sidebar:"\ud83d\udc40CV",previous:{title:"yolov5 \u81ea\u5efa\u6570\u636e\u96c6",permalink:"/docs/computer/cv/ml-dl/yolo/yolov5-\u8bad\u7ec3\u81ea\u5efa\u6570\u636e\u96c6"},next:{title:"RealSense",permalink:"/docs/category/realsense"}},i={},s=[{value:"yolov5 v6.0 train and convert to onnx",id:"yolov5-v60-train-and-convert-to-onnx",level:2},{value:"\u8fd0\u884c\u73af\u5883",id:"\u8fd0\u884c\u73af\u5883",level:3},{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:3},{value:"\u8bad\u7ec3\u81ea\u5b9a\u4e49\u6570\u636e\u96c6",id:"\u8bad\u7ec3\u81ea\u5b9a\u4e49\u6570\u636e\u96c6",level:3},{value:"weights",id:"weights",level:4},{value:"data",id:"data",level:4},{value:"cfg",id:"cfg",level:4},{value:"img",id:"img",level:4},{value:"batch epochs",id:"batch-epochs",level:4},{value:"\u8f6c\u6362\u8bad\u7ec3\u5b8c\u6210\u7684\u6743\u91cd\u6587\u4ef6",id:"\u8f6c\u6362\u8bad\u7ec3\u5b8c\u6210\u7684\u6743\u91cd\u6587\u4ef6",level:3},{value:"\u53c2\u8003\u4e0e\u81f4\u8c22",id:"\u53c2\u8003\u4e0e\u81f4\u8c22",level:2}],m={toc:s};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"yolov5-v60-train-and-convert-to-onnx"},"yolov5 v6.0 train and convert to onnx"),(0,l.kt)("h3",{id:"\u8fd0\u884c\u73af\u5883"},"\u8fd0\u884c\u73af\u5883"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://wiki.ubuntu.com/FocalFossa/ReleaseNotes/"},"Windows 10 21H2")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CUDA"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://developer.nvidia.com/cuda-11-3-1-download-archive?target_os=Windows&target_arch=x86_64"},"11.3.1")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CUDNN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://developer.nvidia.cn/rdp/cudnn-archive#a-collapse821-113"},"v8.2.1.32")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://www.python.org/downloads/release/python-380/"},"3.8.0"))," -- ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://www.anaconda.com/"},"Anaconda")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PyTorch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://pytorch.org/get-started/locally/"},"LTS(1.8.2)")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"YOLOv5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/releases/tag/v6.0"},"v6.0")))))),(0,l.kt)("h3",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),(0,l.kt)("p",null,"\u4e0b\u8f7d ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/releases/tag/v6.0"},"YOLOv5-v6.0")," \u6e90\u7801\uff0c\u89e3\u538b\u540e\u8fdb\u5165\u5de5\u4f5c\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4f9d\u8d56\uff08\u5efa\u8bae\ud83d\ude80\ud83d\ude80\ud83d\ude80\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"pip install -r requirements.txt\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"li"},"PyTorch-CUDA"),"\uff0c\u6839\u636e",(0,l.kt)("a",{parentName:"li",href:"https://pytorch.org/get-started/locally/"},"\u5b98\u7f51"),"\u7684\u6307\u4ee4\u6765")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"pip3 install torch==1.8.2 torchvision==0.9.2 torchaudio===0.8.2 --extra-index-url https://download.pytorch.org/whl/lts/1.8/cu111\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"coco128")," \u6570\u636e\u96c6\u6d4b\u8bd5\u4e00\u4e0b\u8fd0\u884c\u73af\u5883",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/wiki/Train-Custom-Data"},"Train Custom Data")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python train.py --img 640 --batch 16 --epochs 3 --data coco128.yaml --weights yolov5s.pt --cfg yolov5s.yaml\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u8bad\u7ec3\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u51fa\u73b0\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u9519\u8bef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'OSError: [WinError 1455] \u9875\u9762\u6587\u4ef6\u592a\u5c0f\uff0c\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c\u3002 Error loading "D:\\workspace\\anaconda3\\envs\\yolov5-6-0\\lib\\site-packages\\torch\\lib\\cudnn_adv_infer64_8.dll" or one of its dependencies.\n')),(0,l.kt)("p",null,"\u53ef\u4ee5\u53c2\u7167 ",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_43959833/article/details/116669523"},"https://blog.csdn.net/weixin_43959833/article/details/116669523")," \u4e2d\u7684\u89e3\u51b3\u529e\u6cd5"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4fee\u6539\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"utils/datasets.py")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"nw")," \u53d8\u91cf\u7684\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"{3}","{3}":!0},"\xb7\xb7\xb7\nbatch_size = min(batch_size, len(dataset))\nnw = min([os.cpu_count(), batch_size if batch_size > 1 else 0, workers])  # number of workers\nnw = 0\nsampler = torch.utils.data.distributed.DistributedSampler(dataset) if rank != -1 else None\n\xb7\xb7\xb7\n")),(0,l.kt)("p",null,"\u4fee\u6539\u540e\u80fd\u591f\u6b63\u5e38\u8bad\u7ec3\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u4f1a\u964d\u4f4e\u8bad\u7ec3\u901f\u5ea6\uff0c\u5982\u679c\u5bf9\u6b64\u6709\u8981\u6c42\u8fd8\u662f\u4fee\u6539\u4e00\u4e0b\u865a\u62df\u5185\u5b58"),(0,l.kt)("h3",{id:"\u8bad\u7ec3\u81ea\u5b9a\u4e49\u6570\u636e\u96c6"},"\u8bad\u7ec3\u81ea\u5b9a\u4e49\u6570\u636e\u96c6"),(0,l.kt)("p",null,"\u6267\u884c\u8bad\u7ec3\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"train.py")," \u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5f88\u591a\u7684\u53c2\u6570\uff0c\u5b9a\u4e49\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"parse_opt")," \u51fd\u6570\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"def parse_opt(known=False):\n    parser = argparse.ArgumentParser()\n    parser.add_argument('--weights', type=str, default=ROOT / 'yolov5s.pt', help='initial weights path')\n    parser.add_argument('--cfg', type=str, default='', help='model.yaml path')\n    parser.add_argument('--data', type=str, default=ROOT / 'data/coco128.yaml', help='dataset.yaml path')\n    \xb7\xb7\xb7\n    return opt\n")),(0,l.kt)("p",null,"\u6211\u4eec\u8bad\u7ec3\u81ea\u5df1\u7684\u6570\u636e\u96c6\u9700\u8981\u8bbe\u7f6e\u7684\u51e0\u4e2a\u53c2\u6570\u4e00\u822c\u4e3a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"--weights \u9884\u8bad\u7ec3\u7684\u6743\u91cd\u6587\u4ef6\uff0c\u76f4\u63a5\u4e0b\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"--data \u8bad\u7ec3\u65f6\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u53c2\u7167 ",(0,l.kt)("inlineCode",{parentName:"li"},"coco128.yaml")," \u4fee\u6539"),(0,l.kt)("li",{parentName:"ul"},"--cfg \u7f51\u7edc\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u53c2\u7167 ",(0,l.kt)("inlineCode",{parentName:"li"},"yolov5s.yaml")," \u4fee\u6539"),(0,l.kt)("li",{parentName:"ul"},"--img \u8bad\u7ec3\u65f6\u56fe\u7247\u7684\u8f93\u5165\u5c3a\u5bf8\uff0c\u4f1a\u5f71\u54cd\u5230\u7f51\u7edc\u7684\u8f93\u51fa\u5c42"),(0,l.kt)("li",{parentName:"ul"},"--batch \u6bcf\u6279\u6b21\u8bad\u7ec3\u8f93\u5165\u7684\u56fe\u50cf\u6570\u91cf\uff0c\u8d8a\u5927\u8bad\u7ec3\u8d8a\u5feb\uff0c\u5bf9\u786c\u4ef6\u8981\u6c42\u4e5f\u8d8a\u9ad8"),(0,l.kt)("li",{parentName:"ul"},"--epochs \u8bad\u7ec3\u603b\u8f6e\u6b21")),(0,l.kt)("h4",{id:"weights"},"weights"),(0,l.kt)("p",null,"\u76f4\u63a5\u4e0b\u8f7d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/releases/tag/v6.0"},"https://github.com/ultralytics/yolov5/releases/tag/v6.0")))),(0,l.kt)("h4",{id:"data"},"data"),(0,l.kt)("p",null,"\u53c2\u7167 ",(0,l.kt)("inlineCode",{parentName:"p"},"data/coco128.yaml")," \u4e2d\u7684\u5185\u5bb9\uff0c\u6839\u636e\u81ea\u5df1\u7684\u6570\u636e\u96c6\u8fdb\u884c\u4fee\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"path:  {path} # dataset root dir\ntrain: images/train  # train images (relative to 'path') 128 images\nval: images/val  # val images (relative to 'path') 128 images\ntest:  # test images (optional)\n\n# Classes\nnc: {n}  # number of classes\nnames: ['', '', '']  # class names\n")),(0,l.kt)("h4",{id:"cfg"},"cfg"),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"models/yolov5s.yaml")," \u4e3a\u4f8b\uff0c\u4e0d\u9700\u8981\u4fee\u6539\u7f51\u7edc\u76f8\u5173\u7684\u7ed3\u6784\uff0c\u4f46\u662f\u8981\u6839\u636e\u4fee\u6539\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"--data")," \u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"nc")," \u4fee\u6539\u4e00\u4e0b\u76f8\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"nc")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"nc: {n}  # number of classes\n")),(0,l.kt)("h4",{id:"img"},"img"),(0,l.kt)("p",null,"\u7f51\u7edc\u7684\u8f93\u5165\u5c3a\u5bf8\uff0c\u56e0\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"8")," \u7684\u500d\u6570\uff0c\u4f8b\u5982 640\uff0c480\uff0c320 \u7b49"),(0,l.kt)("p",null,"\u5bf9\u5e94\u7684\u4f1a\u5f71\u54cd\u7f51\u7edc\u7684\u8f93\u51fa\u5c3a\u5bf8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"layer 345 output resolution*1/8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"layer 403 output resolution*1/16")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"layer 461 output resolution*1/32"))),(0,l.kt)("h4",{id:"batch-epochs"},"batch epochs"),(0,l.kt)("p",null,"\u6839\u636e\u81ea\u5df1\u7684\u786c\u4ef6\u9009\u62e9 batch \u7684\u5927\u5c0f"),(0,l.kt)("p",null,"epochs\u53ef\u4ee5\u7a0d\u5fae\u8bbe\u7f6e\u5927\u4e00\u4e9b\uff0c\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u4f1a\u4fdd\u5b58\u6700\u597d\u7684\u8bad\u7ec3\u7ed3\u679c\u4e3a best.pt"),(0,l.kt)("h3",{id:"\u8f6c\u6362\u8bad\u7ec3\u5b8c\u6210\u7684\u6743\u91cd\u6587\u4ef6"},"\u8f6c\u6362\u8bad\u7ec3\u5b8c\u6210\u7684\u6743\u91cd\u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"strong"},"onnx"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"pip install --upgrade onnx\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8f6c\u6362\u6a21\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python3.8 export.py --data data/{custom}.yaml --weights run/train/exp/weights/best.pt --include onnx\n")),(0,l.kt)("p",null,"\u8f6c\u6362\u6a21\u578b\u7684\u65f6\u5019\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u7f51\u7edc\u8f93\u5165\u7684\u5206\u8fa8\u7387"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python3.8 export.py --data data/{custom}.yaml --weights run/train/exp/weights/best.pt --include onnx --img {size} {size}\n")),(0,l.kt)("h2",{id:"\u53c2\u8003\u4e0e\u81f4\u8c22"},"\u53c2\u8003\u4e0e\u81f4\u8c22"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://pytorch.org/get-started/locally/"},"pytorch"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5"},"ultralytics/yolov5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/releases/tag/v6.0"},"v6.0 - YOLOv5n 'Nano' models, Roboflow integration, TensorFlow export, OpenCV DNN support"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/yolov5/wiki/Train-Custom-Data"},"Train Custom Data"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/weixin_43959833/article/details/116669523"},"\u591a\u79cd\u65b9\u6cd5\u5f7b\u5e95\u89e3\u51b3pycharm\u4e2d: OSError: [WinError 1455] \u9875\u9762\u6587\u4ef6\u592a\u5c0f\uff0c\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c \u7684\u95ee\u9898")))))}d.isMDXComponent=!0}}]);