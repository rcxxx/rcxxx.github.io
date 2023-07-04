"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[2402],{88263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));t(83989);const i={id:"opencv-python-threading-video-stream",title:"\u591a\u7ebf\u7a0b\u8bfb\u53d6\u89c6\u5c4f\u6d41",sidebar_label:"\u89c6\u9891\u6d41 - py"},p=void 0,c={unversionedId:"cv/opencv/apply/threading/opencv-python-threading-video-stream",id:"cv/opencv/apply/threading/opencv-python-threading-video-stream",title:"\u591a\u7ebf\u7a0b\u8bfb\u53d6\u89c6\u5c4f\u6d41",description:"",source:"@site/docs/stack/cv/opencv/apply/threading/opencv-python-threading-video-stream.md",sourceDirName:"cv/opencv/apply/threading",slug:"/cv/opencv/apply/threading/opencv-python-threading-video-stream",permalink:"/stack/cv/opencv/apply/threading/opencv-python-threading-video-stream",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/cv/opencv/apply/threading/opencv-python-threading-video-stream.md",tags:[],version:"current",frontMatter:{id:"opencv-python-threading-video-stream",title:"\u591a\u7ebf\u7a0b\u8bfb\u53d6\u89c6\u5c4f\u6d41",sidebar_label:"\u89c6\u9891\u6d41 - py"},sidebar:"\ud83d\udc40 CV && \ud83e\udde0 ML & DL",previous:{title:"rtmp \u63a8\u62c9\u6d41",permalink:"/stack/cv/opencv/apply/opencv-nginx-rtmp-pull-stream"},next:{title:"\u89c6\u9891\u6d41 - cpp",permalink:"/stack/cv/opencv/apply/threading/opencv-cpp-threading-video-stream"}},o={},s=[],d={toc:s};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="eg"',title:'"eg"'},"import cv2\nimport threading\nfrom threading import Thread\n\nthread_lock = threading.Lock()\nthread_exit = False\n\nclass capThread(Thread):\n    def __init__(self, _cap=0):\n        super(capThread, self).__init__()\n        self.cap = cv2.VideoCapture(_cap)\n        self.ret, self.frame = self.cap.read()\n\n    def getFrame(self):\n        return self.frame\n    \n    def run(self):\n        global thread_exit\n        while not thread_exit:\n            self.ret, self.frame = self.cap.read()\n            # cv2.imshow('frame', self.frame)\n\n        self.cap.release()\n\ndef main():\n    global thread_exit\n    cap_t = capThread()\n    cap_t.start()\n    \n    while not thread_exit:\n        # \u7ebf\u7a0b\u9501\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\n        thread_lock.acquire()\n        src_img = t.getFrame()\n        thread_lock.release()\n\n        # do something\n\n        cv2.imshow('src_img', src_img)\n        if cv2.waitKey(1) & 0xFF == 27:\n            thread_exit = True\n    t.join()\n\nif __name__ == \"__main__\":\n    main()\n")))}l.isMDXComponent=!0}}]);