"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[7727],{63307:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var t=a(87462),i=(a(67294),a(3905));a(83989);const p={id:"opencv-cpp-threading-video-stream",title:"\u591a\u7ebf\u7a0b\u8bfb\u53d6\u89c6\u5c4f\u6d41",sidebar_label:"\u89c6\u9891\u6d41 - cpp"},r=void 0,c={unversionedId:"cv/opencv/apply/threading/opencv-cpp-threading-video-stream",id:"cv/opencv/apply/threading/opencv-cpp-threading-video-stream",title:"\u591a\u7ebf\u7a0b\u8bfb\u53d6\u89c6\u5c4f\u6d41",description:"\u9002\u7528\u4e8e\u56fe\u50cf\u5904\u7406\u65f6\u95f4\u8f83\u957f\uff0c\u4f46\u9700\u8981\u8f83\u4e3a\u5b9e\u65f6\u7684\u56fe\u50cf\u66f4\u65b0\uff0c\u5982\u8bfb\u53d6\u7f51\u7edc\u4e32\u6d41\uff0c\u5f00\u542f\u72ec\u7acb\u7684\u5b50\u7ebf\u7a0b\u7528\u6765\u66f4\u65b0\u56fe\u50cf\uff0c\u4e3b\u7ebf\u7a0b\u518d\u8fdb\u884c\u5904\u7406",source:"@site/docs/stack/cv/opencv/apply/threading/opencv-cpp-threading-video-stream.md",sourceDirName:"cv/opencv/apply/threading",slug:"/cv/opencv/apply/threading/opencv-cpp-threading-video-stream",permalink:"/stack/cv/opencv/apply/threading/opencv-cpp-threading-video-stream",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/cv/opencv/apply/threading/opencv-cpp-threading-video-stream.md",tags:[],version:"current",frontMatter:{id:"opencv-cpp-threading-video-stream",title:"\u591a\u7ebf\u7a0b\u8bfb\u53d6\u89c6\u5c4f\u6d41",sidebar_label:"\u89c6\u9891\u6d41 - cpp"},sidebar:"\ud83d\udc40 CV",previous:{title:"\u89c6\u9891\u6d41 - py",permalink:"/stack/cv/opencv/apply/threading/opencv-python-threading-video-stream"},next:{title:"DNN YOLO-v4",permalink:"/stack/cv/opencv/apply/dnn/opencv-dnn-yolov4"}},d={},s=[],o={toc:s};function l(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9002\u7528\u4e8e\u56fe\u50cf\u5904\u7406\u65f6\u95f4\u8f83\u957f\uff0c\u4f46\u9700\u8981\u8f83\u4e3a\u5b9e\u65f6\u7684\u56fe\u50cf\u66f4\u65b0\uff0c\u5982\u8bfb\u53d6\u7f51\u7edc\u4e32\u6d41\uff0c\u5f00\u542f\u72ec\u7acb\u7684\u5b50\u7ebf\u7a0b\u7528\u6765\u66f4\u65b0\u56fe\u50cf\uff0c\u4e3b\u7ebf\u7a0b\u518d\u8fdb\u884c\u5904\u7406"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="video_capture_threading.hpp"',title:'"video_capture_threading.hpp"'},"#ifndef VIDEO_CAPTURE_THREADING_HPP\n#define VIDEO_CAPTURE_THREADING_HPP\n\n#include <opencv2/opencv.hpp>\n\nclass VideoCaptureThreading {\npublic:\n    explicit VideoCaptureThreading(int _cap_id, float _scale = 1.0);\n\n    explicit VideoCaptureThreading(const cv::String& filename, float _scale);\n\n    void updateFrame();\n\n    inline cv::Mat getFrame(){\n        return this->frame_scale;\n    }\n\n    inline cv::Mat getFrameOriginal(){\n        return this->frame;\n    }\n\n    void exit();\nprivate:\n    cv::VideoCapture cap;\n    cv::Mat frame;\n    cv::Mat frame_scale;\n\n    float scale = 1.0;\n    bool is_threading_exit = false;\n};\n\n\n#endif //VIDEO_CAPTURE_THREADING_HPP\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="video_capture_threading.cpp"',title:'"video_capture_threading.cpp"'},'#include "video_capture_threading.hpp"\n\nVideoCaptureThreading::VideoCaptureThreading(int _cap_id, float _scale = 1.0) {\n    this->cap = cv::VideoCapture(_cap_id);\n    this->scale = _scale;\n}\n\nVideoCaptureThreading::VideoCaptureThreading(const cv::String& filename, float _scale = 1.0) {\n    this->cap = cv::VideoCapture(filename);\n    this->scale = _scale;\n}\n\nvoid VideoCaptureThreading::updateFrame() {\n    while (!is_threading_exit){\n        this->cap >> this->frame;\n        if (this->scale != 1.0) {\n            cv::resize(this->frame, this->frame_scale, cv::Size(this->frame.cols * this->scale, this->frame.rows * this->scale));\n        } else {\n            this->frame_scale = this->frame;\n        }\n    }\n\n    printf("VideoCapture thread closed");\n    this->cap.release();\n}\n\nvoid VideoCaptureThreading::exit() {\n    this->is_threading_exit = true;\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},'#include <iostream>\n#include <thread>\n#include <opencv2/opencv.hpp>\n#include "capture_threading/video_capture_threading.hpp"\n\nint main() {\n    std::mutex mtx;\n    VideoCaptureThreading cap(0);\n    std::thread cap_thread(&VideoCaptureThreading::updateFrame, &cap);\n\n    while (true) {\n        cv::Mat src_img;\n        mtx.lock();\n        src_img = cap.getFrameOriginal();\n        mtx.unlock();\n\n        cv::imshow("src_img", src_img);\n        if((char)cv::waitKey(1) == 27){\n            cap.exit();\n            break;\n        }\n    }\n\n    cap_thread.join();\n\n    return 0;\n}\n')))}l.isMDXComponent=!0}}]);