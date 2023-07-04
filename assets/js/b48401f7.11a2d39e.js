"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[7052],{16268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(87462),l=(t(67294),t(3905)),s=(t(83989),t(74866)),o=t(85162);const r={id:"opencv-dnn-ultralytics",title:"",sidebar_label:"DNN YOLO-v8-ONNX"},c=void 0,i={unversionedId:"cv/opencv/apply/dnn/opencv-dnn-ultralytics",id:"cv/opencv/apply/dnn/opencv-dnn-ultralytics",title:"",description:"\u4f7f\u7528 CV::DNN \u6a21\u5757\u8bfb\u53d6 ultralytics/YOLO-v8 ONNX \u6a21\u578b\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b",source:"@site/docs/stack/cv/opencv/apply/dnn/dnn-ultralytics.md",sourceDirName:"cv/opencv/apply/dnn",slug:"/cv/opencv/apply/dnn/opencv-dnn-ultralytics",permalink:"/stack/cv/opencv/apply/dnn/opencv-dnn-ultralytics",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/cv/opencv/apply/dnn/dnn-ultralytics.md",tags:[],version:"current",frontMatter:{id:"opencv-dnn-ultralytics",title:"",sidebar_label:"DNN YOLO-v8-ONNX"},sidebar:"\ud83d\udc40 CV && \ud83e\udde0 ML & DL",previous:{title:"DNN YOLO-v5-ONNX",permalink:"/stack/cv/opencv/apply/dnn/opencv-dnn-yolov5-6-0"},next:{title:"\u50cf\u7d20\u7684\u90bb\u57df",permalink:"/stack/cv/opencv/expand/opencv-pixel-connect"}},u={},d=[{value:"\u4f7f\u7528 CV::DNN \u6a21\u5757\u8bfb\u53d6 ultralytics/YOLO-v8 ONNX \u6a21\u578b\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b",id:"\u4f7f\u7528-cvdnn-\u6a21\u5757\u8bfb\u53d6-ultralyticsyolo-v8-onnx-\u6a21\u578b\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b",level:2},{value:"\u8fd0\u884c\u73af\u5883",id:"\u8fd0\u884c\u73af\u5883",level:3},{value:"\u83b7\u53d6 ONNX \u6a21\u578b",id:"\u83b7\u53d6-onnx-\u6a21\u578b",level:2},{value:"clone \u6e90\u7801",id:"clone-\u6e90\u7801",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4e0b\u8f7d\u6a21\u578b",id:"\u4e0b\u8f7d\u6a21\u578b",level:3},{value:"export \u5bfc\u51fa onnx \u6a21\u578b",id:"export-\u5bfc\u51fa-onnx-\u6a21\u578b",level:3},{value:"OpenCV-DNN \u5bfc\u5165 ONNX \u6a21\u578b",id:"opencv-dnn-\u5bfc\u5165-onnx-\u6a21\u578b",level:2},{value:"Class YoloNet()",id:"class-yolonet",level:3},{value:"\u8865\u5145",id:"\u8865\u5145",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528-cvdnn-\u6a21\u5757\u8bfb\u53d6-ultralyticsyolo-v8-onnx-\u6a21\u578b\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b"},"\u4f7f\u7528 CV::DNN \u6a21\u5757\u8bfb\u53d6 ultralytics/YOLO-v8 ONNX \u6a21\u578b\u8fdb\u884c\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b"),(0,l.kt)("h3",{id:"\u8fd0\u884c\u73af\u5883"},"\u8fd0\u884c\u73af\u5883"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://releases.ubuntu.com/20.04/"},"Ubuntu 20.04")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CMake"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://cmake.org/"},"3.24")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenCV"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/opencv/opencv/releases/tag/4.7.0"},"4.7.0")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://www.python.org/downloads/release/python-380/"},"3.8.0")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"YOLOv8"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/ultralytics"},"ultralytics")))))),(0,l.kt)("h2",{id:"\u83b7\u53d6-onnx-\u6a21\u578b"},"\u83b7\u53d6 ONNX \u6a21\u578b"),(0,l.kt)("h3",{id:"clone-\u6e90\u7801"},"clone \u6e90\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ultralytics/ultralytics.git\n")),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ultralytics/\npip install -r requirements.txt\npip install ultralytics\n")),(0,l.kt)("h3",{id:"\u4e0b\u8f7d\u6a21\u578b"},"\u4e0b\u8f7d\u6a21\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'yolo predict model=yolov8s.pt source="https://ultralytics.com/images/bus.jpg"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"model={}")," \u586b\u5165\u6240\u9700\u8981\u7684\u6a21\u578b\uff0c\u5982\u679c\u672c\u5730\u6ca1\u6709\u5219\u4f1a\u4ece\u4ed3\u5e93\u4e0b\u8f7d")),(0,l.kt)("h3",{id:"export-\u5bfc\u51fa-onnx-\u6a21\u578b"},"export \u5bfc\u51fa onnx \u6a21\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 onnx")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install onnx\npip install onnxsim\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bfc\u51fa\u6a21\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yolo export \\\nmodel=yolov8s.pt \\\nimgsz=[640,640] \\\nformat=onnx \\\nopset=12\n")),(0,l.kt)("h2",{id:"opencv-dnn-\u5bfc\u5165-onnx-\u6a21\u578b"},"OpenCV-DNN \u5bfc\u5165 ONNX \u6a21\u578b"),(0,l.kt)("h3",{id:"class-yolonet"},"Class YoloNet()"),(0,l.kt)(s.Z,{defaultValue:"cc",values:[{label:"c++",value:"cc"},{label:"python",value:"py"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"cc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="yolov8_onnx.hpp"',title:'"yolov8_onnx.hpp"'},"#ifndef YOLOV8_ONNX_OPENCV_YOLOV_8_ONNX_HPP\n#define YOLOV8_ONNX_OPENCV_YOLOV_8_ONNX_HPP\n\n#include <fstream>\n#include <vector>\n#include <string>\n#include <random>\n\n#include <opencv2/imgproc.hpp>\n#include <opencv2/opencv.hpp>\n#include <opencv2/dnn.hpp>\n\nnamespace yolov8_onnx {\n    struct Detection\n    {\n        int class_id{0};\n        std::string className{};\n        float confidence{0.0};\n        cv::Scalar color{};\n        cv::Rect box{};\n    };\n\n    class Net\n    {\n    public:\n        explicit Net(const std::string &onnx_model_path, const std::string &classes_txt_file_path,\n                     const cv::Size &model_input_shape = {640, 640}, const bool &is_cuda = false);\n\n        ~Net()= default;\n\n        std::vector<yolov8_onnx::Detection> detect(cv::Mat &src,\n                                              float _score_threshold = 0.45,\n                                              float _NMS_threshold = 0.5,\n                                              float _confidence_threshold = 0.4);\n        inline std::vector<std::string> classList(){\n            return this->class_list_;\n        }\n\n    private:\n        cv::dnn::Net net;\n        std::vector<std::string> class_list_;\n\n        cv::Size2f model_shape_{};\n\n        static cv::Mat format_img(const cv::Mat &_src);\n    };\n};\n\n#endif //YOLOV8_ONNX_OPENCV_YOLOV_8_ONNX_HPP\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="yolov8_onnx.cpp"',title:'"yolov8_onnx.cpp"'},'#include "yolov_8_onnx.hpp"\n\nnamespace yolov8_onnx {\n\n    Net::Net(const std::string &onnx_model_path, const std::string &classes_txt_file_path,\n             const cv::Size &model_input_shape, const bool &is_cuda) {\n        // load models\n        this->net = cv::dnn::readNetFromONNX(onnx_model_path);\n        if (is_cuda)\n        {\n            std::cout << "\\nRunning on CUDA" << std::endl;\n            net.setPreferableBackend(cv::dnn::DNN_BACKEND_CUDA);\n            net.setPreferableTarget(cv::dnn::DNN_TARGET_CUDA);\n        }\n        else\n        {\n            std::cout << "\\nRunning on CPU" << std::endl;\n            net.setPreferableBackend(cv::dnn::DNN_BACKEND_OPENCV);\n            net.setPreferableTarget(cv::dnn::DNN_TARGET_CPU);\n        }\n\n        // load class_list\n        std::ifstream ifs(classes_txt_file_path);\n        if (ifs.is_open())\n        {\n            std::string line;\n            while (getline(ifs, line))\n            {\n                this->class_list_.push_back(line);\n            }\n        }\n\n        this->model_shape_ = model_input_shape;\n    }\n\n    std::vector<yolov8_onnx::Detection>\n    Net::detect(cv::Mat &src,\n                float _score_threshold,\n                float _NMS_threshold,\n                float _confidence_threshold) {\n        // format image\n        cv::Mat input = format_img(src);\n\n        cv::Mat blob;\n        cv::dnn::blobFromImage(input, blob, 1.0/255.0, this->model_shape_, cv::Scalar(), true, false);\n        net.setInput(blob);\n\n        std::vector<cv::Mat> outputs;\n        net.forward(outputs, net.getUnconnectedOutLayersNames());\n\n        // yolo_v8 has an output of shape (batchSize, 84,  8400) (Num classes + box[x,y,w,h])\n        int rows = outputs[0].size[2];\n        int dimensions = outputs[0].size[1];\n\n        outputs[0] = outputs[0].reshape(1, dimensions);\n        cv::transpose(outputs[0], outputs[0]);\n\n        auto *data = (float *)outputs[0].data;\n\n        float x_factor = static_cast<float >(input.cols) / this->model_shape_.width;\n        float y_factor = static_cast<float >(input.rows) / this->model_shape_.height;\n\n        std::vector<int> class_ids;\n        std::vector<float> confidences;\n        std::vector<cv::Rect> boxes;\n\n        for (int i = 0; i < rows; ++i)\n        {\n            float *classes_scores = data+4;\n\n            cv::Mat scores(1, static_cast<int>(this->class_list_.size()), CV_32FC1, classes_scores);\n            cv::Point class_id;\n            double max_class_score;\n\n            minMaxLoc(scores, 0, &max_class_score, 0, &class_id);\n            if (max_class_score > _score_threshold){\n                confidences.push_back(static_cast<float>(max_class_score));\n                class_ids.push_back(class_id.x);\n\n                float x = data[0];\n                float y = data[1];\n                float w = data[2];\n                float h = data[3];\n\n                int left = static_cast<int>((x - 0.5 * w) * x_factor);\n                int top = static_cast<int>(( y - 0.5 * h) * y_factor);\n\n                int width = static_cast<int>(w * x_factor);\n                int height = static_cast<int>(h * y_factor);\n\n                boxes.emplace_back(left, top, width, height);\n            }\n            data += dimensions;\n        }\n\n        std::vector<int> nms_result;\n        cv::dnn::NMSBoxes(boxes, confidences, _score_threshold, _NMS_threshold, nms_result);\n\n        std::vector<yolov8_onnx::Detection> detections{};\n        for(int idx : nms_result){\n            yolov8_onnx::Detection result;\n            result.class_id = class_ids[idx];\n            result.confidence = confidences[idx];\n\n            std::random_device rd;\n            std::mt19937 gen(rd());\n            std::uniform_int_distribution<int> dis(100, 255);\n            result.color = cv::Scalar(dis(gen),\n                                      dis(gen),\n                                      dis(gen));\n\n            result.className = class_list_[result.class_id];\n            result.box = boxes[idx];\n\n            detections.push_back(result);\n        }\n\n        return detections;\n    }\n\n    cv::Mat Net::format_img(const cv::Mat &_src) {\n        int format_size = MAX(_src.cols, _src.rows);\n\n        cv::Mat dst = cv::Mat::zeros(cv::Size(format_size, format_size), CV_8UC3);\n        _src.copyTo(dst(cv::Rect(0, 0, _src.cols, _src.rows)));\n\n        return dst;\n    }\n};\n')),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"v8 \u4e0e v5 \u5728 output \u7ed3\u6784\u4e0a\u6709\u533a\u522b\n// yolov5 has an output of shape (batchSize, 25200, 85) (Num classes + box","[x,y,w,h]"," + confidence","[c]",")\n// yolov8 has an output of shape (batchSize, 84,  8400) (Num classes + box","[x,y,w,h]",")"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},'#include <iostream>\n#include <opencv2/opencv.hpp>\n\n#include "yolov8/yolov_8_onnx.hpp"\n\nint main() {\n    std::string model_path = "../models/yolov8s.onnx";\n    std::string classes_path = "../models/classes.txt";\n    std::string img_path = "../img/bus.jpg";\n\n    yolov8_onnx::Net yolo(model_path, classes_path);\n\n    cv::Mat src_img = cv::imread(img_path);\n\n    // YOLO detect\n    std::vector<yolov8_onnx::Detection> results = yolo.detect(src_img);\n    for (const auto &idx : results) {\n        auto bbox = idx.box;\n        auto classId = idx.class_id;\n        cv::rectangle(src_img, bbox, idx.color, 2);\n        cv::rectangle(src_img, cv::Point(bbox.x, bbox.y + 14), cv::Point(bbox.x + bbox.width, bbox.y), idx.color, cv::FILLED);\n        cv::putText(src_img, yolo.classList()[classId], cv::Point(bbox.x, bbox.y + 10), cv::FONT_HERSHEY_SIMPLEX, 0.6, cv::Scalar(0, 0, 0));\n    }\n\n    cv::imshow("src_img", src_img);\n    cv::waitKey(0);\n\n    return 0;\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmake",metastring:'title="CMakeLists.txt"',title:'"CMakeLists.txt"'},"cmake_minimum_required(VERSION 3.24)\nproject(yolov8_onnx_opencv)\n\nset(CMAKE_CXX_STANDARD 20)\nset(CMAKE_CXX_STANDARD_REQUIRED TRUE)\n\n# Add include dir\ninclude_directories(\n        ${PROJECT_SOURCE_DIR}/modules\n)\n\nadd_executable(yolov8_onnx_opencv src/main.cpp)\n\n# Dependence lib\n## Find and add opencv as required\nfind_package(OpenCV REQUIRED)\ninclude_directories(${OpenCV_INCLUDE_DIRS})\nlink_libraries(${OpenCV_LIBS})\n\n# Add Subdirectories\nadd_subdirectory(${PROJECT_SOURCE_DIR}/modules/yolov8)\n\n# Target\ntarget_link_libraries(yolov8_onnx_opencv\n        ${OpenCV_LIBS}\n        yolov8)\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/yolov8/yolov8-result.png",alt:null}))),(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="yolov8_onnx.py"',title:'"yolov8_onnx.py"'},"import cv2\nimport numpy as np\n\nfrom ultralytics.yolo.utils import yaml_load\nfrom ultralytics.yolo.utils.checks import check_yaml\n\nclass Model:\n    def __init__(self, _model_path, _size=(640,640)):\n        self.model = cv2.dnn.readNetFromONNX(_model_path)\n        self.CLASSES = yaml_load(check_yaml('coco128.yaml'))['names']\n        self.size = _size\n        self.colors = np.random.uniform(0, 255, size=(len(self.CLASSES), 3))\n\n    def draw_bounding_box(self, _img, class_id, confidence, x, y, x_plus_w, y_plus_h):\n        label = f'{self.CLASSES[class_id]} ({confidence:.2f})'\n        color = self.colors[class_id]\n        cv2.rectangle(_img, (x, y), (x_plus_w, y_plus_h), color, 2)\n        cv2.putText(_img, label, (x - 10, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)\n\n    def det(self, _img ,_score_th=0.45, _NMS_th = 0.5):\n        [height, width, _] = _img.shape\n        length = max(height, width)\n        img = np.zeros((length, length, 3), np.uint8)\n        img[0:height, 0:width] = _img\n        scale = length / self.size[0]\n        blob = cv2.dnn.blobFromImage(img, scalefactor= 1/255, size=self.size)\n        self.model.setInput(blob)\n        outputs = self.model.forward()\n\n        outputs = np.array([cv2.transpose(outputs[0])])\n        rows = outputs.shape[1]\n\n        boxes = []\n        scores = []\n        class_ids = []\n\n        for i in range(rows):\n            classes_scores = outputs[0][i][4:]\n            (min_score, max_score, min_class_loc, (x, max_class_index)) = cv2.minMaxLoc(classes_scores)\n            if max_score >= _score_th:\n                box = [outputs[0][i][0] - (0.5 * outputs[0][i][2]),\n                       outputs[0][i][1] - (0.5 * outputs[0][i][3]),\n                       outputs[0][i][2],\n                       outputs[0][i][3]]\n                boxes.append(box)\n                scores.append(max_score)\n                class_ids.append(max_class_index)\n\n        result_boxes = cv2.dnn.NMSBoxes(boxes, scores, _score_th, _NMS_th, 0.5)\n        detections = []\n        for i in range(len(result_boxes)):\n            index = result_boxes[i]\n            box = boxes[index]\n            detection = {\n                'class_id': class_ids[index],\n                'class_name': self.CLASSES[class_ids[index]],\n                'confidence': scores[index],\n                'box': box,\n                'scale': scale}\n            detections.append(detection)\n            self.draw_bounding_box(_img, class_ids[index], scores[index],\n                                   round(box[0] * scale),\n                                   round(box[1] * scale),\n                                   round((box[0] + box[2]) * scale),\n                                   round((box[1] + box[3]) * scale))\n\n        return detections\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="main.py"',title:'"main.py"'},"import cv2\nimport numpy as np\n\nfrom yolov8_onnx import Model\n\ndef main():\n    net = Model('yolov8s-480x.onnx', _size=(640, 640))\n    src_img = cv2.imread('bus.jpg')\n\n    detections = net.det(src_img)\n\n    for i in range(len(detections)):\n        detection = detections[i]\n        net.draw_bounding_box(src_img,\n                              detection['class_id'],\n                              detection['confidence'],\n                              round(detection['box'][0] * detection['scale']),\n                              round(detection['box'][1] * detection['scale']),\n                              round((detection['box'][0] + detection['box'][2]) * detection['scale']),\n                              round((detection['box'][1] + detection['box'][3]) * detection['scale'])\n                              )\n\n    cv2.imshow('image', src_img)\n    cv2.waitKey(0)\n\nif __name__ == '__main__':\n    main()\n    cv2.destroyAllWindows()\n\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/ubuntu/yolov8/yolov8-result-py.png",alt:null})))),(0,l.kt)("h2",{id:"\u8865\u5145"},"\u8865\u5145"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u81ea\u5df1\u8bad\u7ec3\u7684\u6a21\u578b\uff0c\u5219\u8981\u6ce8\u610f\u8f93\u51fa\u56fe\u50cf\u7684\u989c\u8272\u901a\u9053"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.ultralytics.com/modes/predict/"},"Predict - YOLOv8 Docs"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"source"),(0,l.kt)("th",{parentName:"tr",align:null},"model(arg)"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenCV"),(0,l.kt)("td",{parentName:"tr",align:null},"cv2.imread('im.jpg')","[:,:,::-1]"),(0,l.kt)("td",{parentName:"tr",align:null},"np.ndarray"),(0,l.kt)("td",{parentName:"tr",align:null},"HWC, BGR to RGB")))),(0,l.kt)("p",null,"\u4fee\u6b63\u7a0b\u5e8f\u5982\u4e0b"),(0,l.kt)(s.Z,{defaultValue:"cc",values:[{label:"c++",value:"cc"},{label:"python",value:"py"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"cc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},"// YOLO detect\ncv::Mat src_img = cv::imread(img_path);\ncv::Mat rgb_img;\ncv::cvtColor(src_img, rgb_img, cv::COLOR_BGR2RGB);\nstd::vector<yolov8_onnx::Detection> results = yolo.detect(rgb_img);\n"))),(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="main.py"',title:'"main.py"'},"src_img = cv2.imread('bus.jpg')\nrgb_img = src_img[:, :, ::-1]\n# or\n# rgb_img = cv2.cvtColor(src_img, cv2.COLOR_BGR2RGB)\ndetections = net.det(src_img)\n")))),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/ultralytics"},"ultralytics/ultralytics"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/ultralytics/ultralytics/tree/main/examples/YOLOv8-CPP-Inference"},"ultralytics/examples/YOLOv8-CPP-Inference")))))}m.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),l=t(86010);const s="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,o),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(87462),l=t(67294),s=t(86010),o=t(12466),r=t(16550),c=t(91980),i=t(67392),u=t(50012);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}function p(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function _(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,l.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,r]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,i]=_({queryString:t,groupId:a}),[d,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(t);return[a,(0,l.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),h=(()=>{const e=c??d;return m({value:e,tabValues:s})?e:null})();(0,l.useLayoutEffect)((()=>{h&&r(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),i(e),v(e)}),[i,v,s]),tabValues:s}}var h=t(72389);const g="tabList__CuJ",b="tabItem_LNqP";function N(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),a=i[t].value;a!==r&&(d(n),c(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},i.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,s.Z)("tabs__item",b,o?.className,{"tabs__item--active":r===n})}),t??n)})))}function f(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=v(e);return l.createElement("div",{className:(0,s.Z)("tabs-container",g)},l.createElement(N,(0,a.Z)({},e,n)),l.createElement(f,(0,a.Z)({},e,n)))}function x(e){const n=(0,h.Z)();return l.createElement(y,(0,a.Z)({key:String(n)},e))}}}]);