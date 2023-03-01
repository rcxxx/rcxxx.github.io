"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[2525],{69087:(e,n,t)=>{t.r(n),t.d(n,{Highlight:()=>s,assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var l=t(87462),a=(t(67294),t(3905));t(83989);const r={authors:"rcxxx",hide_reading_time:!0,title:"OpenCV Nginx \u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41/\u62c9\u6d41",tags:["OpenCV","Nginx","rtmp"]},i=void 0,p={permalink:"/blog/2023/02/opencv-nginx-rtmp",editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/blog/2023/02/opencv-nginx-rtmp.mdx",source:"@site/blog/2023/02/opencv-nginx-rtmp.mdx",title:"OpenCV Nginx \u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41/\u62c9\u6d41",description:"Nginx+RTMP \u89c6\u9891\u670d\u52a1\u5668",date:"2023-03-01T14:56:02.000Z",formattedDate:"2023\u5e743\u67081\u65e5",tags:[{label:"OpenCV",permalink:"/blog/tags/open-cv"},{label:"Nginx",permalink:"/blog/tags/nginx"},{label:"rtmp",permalink:"/blog/tags/rtmp"}],hasTruncateMarker:!1,authors:[{name:"CX R",title:" ",url:"https://github.com/rcxxx",imageURL:"https://github.com/rcxxx.png",key:"rcxxx"}],frontMatter:{authors:"rcxxx",hide_reading_time:!0,title:"OpenCV Nginx \u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41/\u62c9\u6d41",tags:["OpenCV","Nginx","rtmp"]},nextItem:{title:"Chrome \u6d4f\u89c8\u5668\u63d2\u4ef6 SwitchyOmega \u7684\u4f7f\u7528",permalink:"/blog/2023/02/switchyomage"}},o={authorsImageUrls:[void 0]},m=[{value:'<Highlight color="#25c2a0">Nginx+RTMP \u89c6\u9891\u670d\u52a1\u5668</Highlight>',id:"highlight-color25c2a0nginxrtmp-\u89c6\u9891\u670d\u52a1\u5668highlight",level:3},{value:"\u5b89\u88c5 <code>Nginx</code>",id:"\u5b89\u88c5-nginx",level:4},{value:"\u914d\u7f6e RTMP \u670d\u52a1\u5668",id:"\u914d\u7f6e-rtmp-\u670d\u52a1\u5668",level:4},{value:"OpenCV + ffmpeg \u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41",id:"opencv--ffmpeg-\u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41",level:3},{value:"OpenCV \u5c40\u57df\u7f51\u62c9\u53d6 RTMP \u89c6\u5c4f\u6d41",id:"opencv-\u5c40\u57df\u7f51\u62c9\u53d6-rtmp-\u89c6\u5c4f\u6d41",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s=e=>{let{children:n,color:t}=e;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem",borderRadius:"5px"}},n)},c={toc:m,Highlight:s};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"highlight-color25c2a0nginxrtmp-\u89c6\u9891\u670d\u52a1\u5668highlight"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/FelisCatus/SwitchyOmega"},(0,a.kt)(s,{color:"#25c2a0",mdxType:"Highlight"},"Nginx+RTMP \u89c6\u9891\u670d\u52a1\u5668"))),(0,a.kt)("h4",{id:"\u5b89\u88c5-nginx"},"\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"h4"},"Nginx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\nsudo apt-get install nginx libnginx-mod-rtmp\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5b89\u88c5")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Nginx")," \u5b89\u88c5\u5b8c\u6210\u540e\u5c06\u4f1a\u81ea\u52a8\u542f\u52a8\u670d\u52a1\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"systemctl status"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl status nginx.service\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/nginx-rtmp/nginx-status.png",alt:null})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ifconfig")," \u67e5\u770b ip \u5730\u5740")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u8f93\u5165 ip \u5730\u5740\u67e5\u770b\u8fd0\u884c\u60c5\u51b5"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/nginx-rtmp/welcome-nginx.png",alt:null})),(0,a.kt)("h4",{id:"\u914d\u7f6e-rtmp-\u670d\u52a1\u5668"},"\u914d\u7f6e RTMP \u670d\u52a1\u5668"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"li"},"nginx")," \u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/nginx/nginx.conf\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u672b\u5c3e\u6dfb\u52a0 rtmp \u670d\u52a1\u5668\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"rtmp {\n    server {\n        listen 1935;\n        chunk_size 4096;\n\n        application live {\n            live on;\n            record off;\n        }\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rtmp")," \u5757\u5b9a\u4e49\u4e86 RTMP \u534f\u8bae\u652f\u6301\u7684\u670d\u52a1\u5668"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server")," \u5757\u5b9a\u4e49\u670d\u52a1\u5668\u76d1\u542c\u7684\u7aef\u53e3\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"listen")," \u5373\u4e3a\u5b9a\u4e49\u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application")," \u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u540d\u79f0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"live on")," \u6307\u670d\u52a1\u5668\u5f00\u59cb\u63a5\u6536\u6765\u81ea\u5ba2\u6237\u7aef\u7684 RTMP \u6d41"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"record off")," \u6307\u4e0d\u4fdd\u5b58\u76f4\u64ad\u6d41\u5230\u670d\u52a1\u5668")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u5b8c\u6210\u540e\uff0c\u91cd\u542f ",(0,a.kt)("inlineCode",{parentName:"li"},"nginx")," \u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl reload nginx\n")),(0,a.kt)("h3",{id:"opencv--ffmpeg-\u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41"},"OpenCV + ffmpeg \u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import cv2\nimport subprocess\n\ncap = cv2.VideoCapture(0)\n\n# \u8bbe\u7f6e\u89c6\u9891\u6d41\u7684\u5206\u8fa8\u7387\u548c\u5e27\u7387\ncap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)\ncap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)\ncap.set(cv2.CAP_PROP_FPS, 30)\n\n# \u521b\u5efaRTMP\u63a8\u9001\u6d41\u5bf9\u8c61\nrtmp_url = 'rtmp://[your_ip]:1935/live/stream'\ncommand = ['ffmpeg', '-y',\n           '-f', 'rawvideo',\n           '-vcodec', 'rawvideo',\n           '-pix_fmt', 'bgr24',\n           '-s', '640x480',\n           '-r', '30',\n           '-i', '-',\n           '-c:v', 'libx264', '-preset', 'ultrafast',\n           '-f', 'flv', rtmp_url]\np = subprocess.Popen(command, stdin=subprocess.PIPE)\n\n# \u521b\u5efa\u89c6\u9891\u7f16\u7801\u5668\u5bf9\u8c61\nout = cv2.VideoWriter(rtmp_url,\n                      cv2.CAP_FFMPEG,\n                      cv2.VideoWriter_fourcc('H', '2', '6', '4'),\n                      30.0,\n                      (640, 480),\n                      True)\n\n\n# \u5faa\u73af\u83b7\u53d6\u6444\u50cf\u5934\u5e27\uff0c\u5e76\u8fdb\u884c\u63a8\u6d41\nwhile True:\n    # \u8bfb\u53d6\u6444\u50cf\u5934\u5e27\n    ret, frame = cap.read()\n\n    if ret:\n        # \u5199\u5165\u89c6\u9891\u7f16\u7801\u5668\n        out.write(frame)\n\n        # \u5c06\u5e27\u5199\u5165RTMP\u63a8\u9001\u6d41\u4e2d\n        p.stdin.write(frame.tostring())\n\n        cv2.imshow('Local Stream', frame)\n        # \u6309\u4e0bq\u952e\u9000\u51fa\u5faa\u73af\n        if cv2.waitKey(1) == 27:\n            break\n\n    else:\n        break\n\n# \u91ca\u653e\u89c6\u9891\u7f16\u7801\u5668\u548c\u6444\u50cf\u5934\nout.release()\ncap.release()\n\n# \u5173\u95ed\u6240\u6709\u7a97\u53e3\ncv2.destroyAllWindows()\n\n# \u7ec8\u6b62RTMP\u63a8\u9001\u6d41\u8fdb\u7a0b\np.terminate()\np.stdin.close()\np.wait()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/nginx-rtmp/push-stream.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 OBS \u4e4b\u7c7b\u7684\u8f6f\u4ef6\u6309\u7167\u76f8\u5e94\u5730\u5740\u62c9\u53d6\u89c6\u9891\u6d41")),(0,a.kt)("h3",{id:"opencv-\u5c40\u57df\u7f51\u62c9\u53d6-rtmp-\u89c6\u5c4f\u6d41"},"OpenCV \u5c40\u57df\u7f51\u62c9\u53d6 RTMP \u89c6\u5c4f\u6d41"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import cv2\n\nrtmp_url = 'rtmp://[your_ip]:1935/live/stream'\n\ncap = cv2.VideoCapture(rtmp_url)\n\nwhile True:\n    ret, frame = cap.read()\n\n    if ret:\n        cv2.imshow('RTMP Stream', frame)\n\n        if cv2.waitKey(1) == 27:\n            break\n    else:\n        break\n\ncap.release()\ncv2.destroyAllWindows()\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63a8\u6d41\u4e0e\u62c9\u6d41\u6548\u679c\n",(0,a.kt)("img",{parentName:"li",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/nginx-rtmp/stream-result.png",alt:null}))),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/zhuzi1/p/17056030.html"},"ubuntu20.04\u642d\u5efaNginx+rtmp\u670d\u52a1\u5668")))}g.isMDXComponent=!0}}]);