"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[1477],{30010:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2023/02/opencv-nginx-rtmp","metadata":{"permalink":"/blog/2023/02/opencv-nginx-rtmp","editUrl":"https://github.com/rcxxx/sinnammanyo.cn/tree/master/blog/2023/02/opencv-nginx-rtmp.mdx","source":"@site/blog/2023/02/opencv-nginx-rtmp.mdx","title":"OpenCV Nginx \u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41/\u62c9\u6d41","description":"Nginx+RTMP \u89c6\u9891\u670d\u52a1\u5668","date":"2023-03-01T14:56:02.000Z","formattedDate":"2023\u5e743\u67081\u65e5","tags":[{"label":"OpenCV","permalink":"/blog/tags/open-cv"},{"label":"Nginx","permalink":"/blog/tags/nginx"},{"label":"rtmp","permalink":"/blog/tags/rtmp"}],"hasTruncateMarker":false,"authors":[{"name":"CX R","title":" ","url":"https://github.com/rcxxx","imageURL":"https://github.com/rcxxx.png","key":"rcxxx"}],"frontMatter":{"authors":"rcxxx","hide_reading_time":true,"title":"OpenCV Nginx \u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41/\u62c9\u6d41","tags":["OpenCV","Nginx","rtmp"]},"nextItem":{"title":"Chrome \u6d4f\u89c8\u5668\u63d2\u4ef6 SwitchyOmega \u7684\u4f7f\u7528","permalink":"/blog/2023/02/switchyomage"}},"content":"export const Highlight = ({children, color}) => (\\n  <span\\n    style={{\\n      backgroundColor: color,\\n      borderRadius: \'2px\',\\n      color: \'#fff\',\\n      padding: \'0.2rem\',\\n      borderRadius: \'5px\'\\n    }}>\\n    {children}\\n  </span>\\n);\\n\\n### [<Highlight color=\\"#25c2a0\\">Nginx+RTMP \u89c6\u9891\u670d\u52a1\u5668</Highlight>](https://github.com/FelisCatus/SwitchyOmega)\\n\\n#### \u5b89\u88c5 `Nginx`\\n\\n``` shell\\nsudo apt-get update\\nsudo apt-get install nginx libnginx-mod-rtmp\\n```\\n\\n- \u9a8c\u8bc1\u5b89\u88c5\\n\\n1. `Nginx` \u5b89\u88c5\u5b8c\u6210\u540e\u5c06\u4f1a\u81ea\u52a8\u542f\u52a8\u670d\u52a1\uff0c\u53ef\u4ee5\u901a\u8fc7 `systemctl status`\\n\\n``` shell\\nsudo systemctl status nginx.service\\n```\\n\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/nginx-rtmp/nginx-status.png)\\n\\n2. \u901a\u8fc7 `ifconfig` \u67e5\u770b ip \u5730\u5740\\n\\n3. \u6d4f\u89c8\u5668\u8f93\u5165 ip \u5730\u5740\u67e5\u770b\u8fd0\u884c\u60c5\u51b5\\n\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/nginx-rtmp/welcome-nginx.png)\\n\\n#### \u914d\u7f6e RTMP \u670d\u52a1\u5668\\n\\n1. \u7f16\u8f91 `nginx` \u914d\u7f6e\u6587\u4ef6\\n\\n``` shell\\nsudo vim /etc/nginx/nginx.conf\\n```\\n\\n2. \u6587\u4ef6\u672b\u5c3e\u6dfb\u52a0 rtmp \u670d\u52a1\u5668\u914d\u7f6e\\n\\n``` shell\\nrtmp {\\n    server {\\n        listen 1935;\\n        chunk_size 4096;\\n\\n        application live {\\n            live on;\\n            record off;\\n        }\\n    }\\n}\\n```\\n\\n- `rtmp` \u5757\u5b9a\u4e49\u4e86 RTMP \u534f\u8bae\u652f\u6301\u7684\u670d\u52a1\u5668\\n- `server` \u5757\u5b9a\u4e49\u670d\u52a1\u5668\u76d1\u542c\u7684\u7aef\u53e3\uff0c`listen` \u5373\u4e3a\u5b9a\u4e49\u7aef\u53e3\\n- `application` \u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u540d\u79f0\\n    - `live on` \u6307\u670d\u52a1\u5668\u5f00\u59cb\u63a5\u6536\u6765\u81ea\u5ba2\u6237\u7aef\u7684 RTMP \u6d41\\n    - `record off` \u6307\u4e0d\u4fdd\u5b58\u76f4\u64ad\u6d41\u5230\u670d\u52a1\u5668\\n\\n3. \u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u5b8c\u6210\u540e\uff0c\u91cd\u542f `nginx` \u670d\u52a1\\n\\n``` shell\\nsudo systemctl reload nginx\\n```\\n\\n### OpenCV + ffmpeg \u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41\\n\\n``` py\\nimport cv2\\nimport subprocess\\n\\ncap = cv2.VideoCapture(0)\\n\\n# \u8bbe\u7f6e\u89c6\u9891\u6d41\u7684\u5206\u8fa8\u7387\u548c\u5e27\u7387\\ncap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)\\ncap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)\\ncap.set(cv2.CAP_PROP_FPS, 30)\\n\\n# \u521b\u5efaRTMP\u63a8\u9001\u6d41\u5bf9\u8c61\\nrtmp_url = \'rtmp://[your_ip]:1935/live/stream\'\\ncommand = [\'ffmpeg\', \'-y\',\\n           \'-f\', \'rawvideo\',\\n           \'-vcodec\', \'rawvideo\',\\n           \'-pix_fmt\', \'bgr24\',\\n           \'-s\', \'640x480\',\\n           \'-r\', \'30\',\\n           \'-i\', \'-\',\\n           \'-c:v\', \'libx264\', \'-preset\', \'ultrafast\',\\n           \'-f\', \'flv\', rtmp_url]\\np = subprocess.Popen(command, stdin=subprocess.PIPE)\\n\\n# \u521b\u5efa\u89c6\u9891\u7f16\u7801\u5668\u5bf9\u8c61\\nout = cv2.VideoWriter(rtmp_url,\\n                      cv2.CAP_FFMPEG,\\n                      cv2.VideoWriter_fourcc(\'H\', \'2\', \'6\', \'4\'),\\n                      30.0,\\n                      (640, 480),\\n                      True)\\n\\n\\n# \u5faa\u73af\u83b7\u53d6\u6444\u50cf\u5934\u5e27\uff0c\u5e76\u8fdb\u884c\u63a8\u6d41\\nwhile True:\\n    # \u8bfb\u53d6\u6444\u50cf\u5934\u5e27\\n    ret, frame = cap.read()\\n\\n    if ret:\\n        # \u5199\u5165\u89c6\u9891\u7f16\u7801\u5668\\n        out.write(frame)\\n\\n        # \u5c06\u5e27\u5199\u5165RTMP\u63a8\u9001\u6d41\u4e2d\\n        p.stdin.write(frame.tostring())\\n\\n        cv2.imshow(\'Local Stream\', frame)\\n        # \u6309\u4e0bq\u952e\u9000\u51fa\u5faa\u73af\\n        if cv2.waitKey(1) == 27:\\n            break\\n\\n    else:\\n        break\\n\\n# \u91ca\u653e\u89c6\u9891\u7f16\u7801\u5668\u548c\u6444\u50cf\u5934\\nout.release()\\ncap.release()\\n\\n# \u5173\u95ed\u6240\u6709\u7a97\u53e3\\ncv2.destroyAllWindows()\\n\\n# \u7ec8\u6b62RTMP\u63a8\u9001\u6d41\u8fdb\u7a0b\\np.terminate()\\np.stdin.close()\\np.wait()\\n```\\n\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/nginx-rtmp/push-stream.png)\\n\\n- \u4f7f\u7528 OBS \u4e4b\u7c7b\u7684\u8f6f\u4ef6\u6309\u7167\u76f8\u5e94\u5730\u5740\u62c9\u53d6\u89c6\u9891\u6d41\\n\\n### OpenCV \u5c40\u57df\u7f51\u62c9\u53d6 RTMP \u89c6\u5c4f\u6d41\\n\\n```py\\nimport cv2\\n\\nrtmp_url = \'rtmp://[your_ip]:1935/live/stream\'\\n\\ncap = cv2.VideoCapture(rtmp_url)\\n\\nwhile True:\\n    ret, frame = cap.read()\\n\\n    if ret:\\n        cv2.imshow(\'RTMP Stream\', frame)\\n\\n        if cv2.waitKey(1) == 27:\\n            break\\n    else:\\n        break\\n\\ncap.release()\\ncv2.destroyAllWindows()\\n```\\n\\n- \u63a8\u6d41\u4e0e\u62c9\u6d41\u6548\u679c\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/nginx-rtmp/stream-result.png)\\n\\n\\n## \u53c2\u8003\\n[ubuntu20.04\u642d\u5efaNginx+rtmp\u670d\u52a1\u5668](https://www.cnblogs.com/zhuzi1/p/17056030.html)"},{"id":"/2023/02/switchyomage","metadata":{"permalink":"/blog/2023/02/switchyomage","editUrl":"https://github.com/rcxxx/sinnammanyo.cn/tree/master/blog/2023/02/switchyomage.mdx","source":"@site/blog/2023/02/switchyomage.mdx","title":"Chrome \u6d4f\u89c8\u5668\u63d2\u4ef6 SwitchyOmega \u7684\u4f7f\u7528","description":"SwitchyOmega","date":"2023-03-01T14:56:02.000Z","formattedDate":"2023\u5e743\u67081\u65e5","tags":[{"label":"SwitchyOmega","permalink":"/blog/tags/switchy-omega"},{"label":"Clash","permalink":"/blog/tags/clash"}],"hasTruncateMarker":true,"authors":[{"name":"CX R","title":" ","url":"https://github.com/rcxxx","imageURL":"https://github.com/rcxxx.png","key":"rcxxx"}],"frontMatter":{"authors":"rcxxx","hide_reading_time":true,"title":"Chrome \u6d4f\u89c8\u5668\u63d2\u4ef6 SwitchyOmega \u7684\u4f7f\u7528","tags":["SwitchyOmega","Clash"]},"prevItem":{"title":"OpenCV Nginx \u5b9e\u73b0\u5c40\u57df\u7f51\u89c6\u9891\u63a8\u6d41/\u62c9\u6d41","permalink":"/blog/2023/02/opencv-nginx-rtmp"},"nextItem":{"title":"\u4ece\u96f6\u642d\u5efa\u81ea\u5df1\u7684\u4e2a\u4eba\u7f51\u7ad9","permalink":"/blog/start"}},"content":"export const Highlight = ({children, color}) => (\\n  <span\\n    style={{\\n      backgroundColor: color,\\n      borderRadius: \'2px\',\\n      color: \'#fff\',\\n      padding: \'0.2rem\',\\n      borderRadius: \'5px\'\\n    }}>\\n    {children}\\n  </span>\\n);\\n\\n### [<Highlight color=\\"#25c2a0\\">SwitchyOmega</Highlight>](https://github.com/FelisCatus/SwitchyOmega)\\n\\n**\u4e00\u4e2a\u4ee3\u7406\u8bbe\u7f6e\u5de5\u5177\uff0c\u53ea\u63d0\u4f9b\u6d4f\u89c8\u5668\u7684\u4ee3\u7406\u65b9\u5f0f\u5207\u6362\uff0c\u4e0d\u63d0\u4f9b\u4ee3\u7406\u670d\u52a1\u5668**\\n\\n\u7b80\u5355\u6613\u4e0a\u624b\\n\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/switchyomega/switchyomega.png)\\n\\n\x3c!--truncate--\x3e\\n\\n### \u4ee3\u7406\u670d\u52a1\u5668\\n\xb7\xb7\xb7\xb7\xb7\xb7\\n\\n\u4f7f\u7528\u63d2\u4ef6\u4e4b\u524d\uff0c\u9700\u8981\u6709\u4e00\u4e2a\u4ee3\u7406\u670d\u52a1\u5668\\n\\n\\n### \u5ba2\u6237\u7aef\\n\u4f8b\u5982 **`V2rayN`**\u3001**`Clash`** \u4e4b\u7c7b\u7684\u5ba2\u6237\u7aef\\n- *[**Dreamacro/clash**](https://github.com/Dreamacro/clash)*\\n- *[**2dust/v2rayN**](https://github.com/2dust/v2rayN)*\\n\\n\u8fd9\u91cc\u4ee5 **[`clash_for_windows_pkg`](https://github.com/Fndroid/clash_for_windows_pkg)** \u4e3a\u4f8b\uff0c\u53ef\u4ee5\u5728\u4ed3\u5e93\u7684 [**Tag**](https://github.com/Fndroid/clash_for_windows_pkg/tags) \u53d1\u5e03\u9875\u4e2d\u4e0b\u8f7d\\n\\n- General \u4e3a\u4e3b\u9875\u9762\uff0c\u5305\u542b\u6700\u57fa\u672c\u7684\u8bbe\u7f6e \u2014\u2014 \u7aef\u53e3\u53f7\u3001\u662f\u5426\u5141\u8bb8\u5c40\u57df\u7f51\u3001\u8bbe\u7f6e\u7cfb\u7edf\u4ee3\u7406\u3001\u5f00\u673a\u81ea\u542f\u52a8\u7b49\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/switchyomega/clash_for_win.png)\\n\\n- proxies \u4e3a\u4ee3\u7406\u754c\u9762\uff0c\u7528\u6765\u5207\u6362\u8282\u70b9\uff0c\u4ee5\u53ca\u4ee3\u7406\u65b9\u5f0f \u2014\u2014 \u5168\u5c40\u3001\u89c4\u5219\u3001\u76f4\u8fde\u3001\u811a\u672c\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/switchyomega/clash_for_win_proxies.png)\\n\\n- Profiles \u4e3a\u914d\u7f6e\u6587\u4ef6\u754c\u9762\uff0c\u8fde\u63a5\u5230\u670d\u52a1\u5668\u7aef\u5fc5\u5907\u7684\u914d\u7f6e \u2014\u2014 \u5305\u542b\u8ba2\u9605\u5185\u5bb9\u7b49\\n\\n- Logs \u65e5\u5fd7\u754c\u9762\\n\\n- Connections \u94fe\u63a5\u72b6\u6001\u754c\u9762\\n\\n- Setting \u8bbe\u7f6e\u754c\u9762\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u8f6f\u4ef6\u7684\u4e3b\u9898\uff0c\u4ee5\u53ca\u5404\u79cd\u9009\u9879\\n\\n- Feedback \u53cd\u9988\u754c\u9762\\n\\n\u57fa\u4e8e\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u53ef\u4ee5\u9009\u62e9\u4e0d\u540c\u7684\u5ba2\u6237\u7aef\\n\\n#### MacOS\\n- *[**yichengchen/clashX**](https://github.com/yichengchen/clashX)*\\n\\n#### Win/Linux\\n- *[**Fndroid/clash_for_windows_pkg**](https://github.com/Fndroid/clash_for_windows_pkg)*\\n\\n\u867d\u8bf4\u540d\u5b57\u53eb `clash_for_windows_pkg` \u4f46\u5176\u5b9e\u5168\u5e73\u53f0\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u53ea\u9700\u8981\u4e0b\u8f7d\u5bf9\u5e94\u7684\u5185\u5bb9\u5373\u53ef\\n\\n### <Highlight color=\\"#25c2a0\\">SwitchyOmega</Highlight>\\n\\n\u8bf8\u5982 `Chrome`\u3001`Microsoft Edge`\u3001`Firefox` \u7b49\u4e3b\u6d41\u6d4f\u89c8\u5668\uff0c\u90fd\u53ef\u4ee5\u5728\u62d3\u5c55\u5e94\u7528\u5546\u5e97\u627e\u5230\u8fd9\u4e2a\u63d2\u4ef6\\n\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/switchyomega/edge_addons.png)\\n\\n\u5b89\u88c5\u597d\u4e4b\u540e\u7684 SwitchyOmega \u9ed8\u8ba4\u6709\u4e24\u4e2a\u60c5\u666f\u6a21\u5f0f\\n\\n\\n\\n- **proxy \u4ee3\u7406\u6a21\u5f0f**\\n\\n\u6839\u636e\u5ba2\u6237\u7aef\u7684\u914d\u7f6e\uff0c\u4f9d\u6b21\u4fee\u6539 `\u534f\u8bae`\u3001`\u670d\u52a1\u5668\u5730\u5740`\u3001`\u7aef\u53e3`\uff0c\u5e94\u7528\u9009\u9879\u5b8c\u6210\u8bbe\u7f6e\\n\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/switchyomega/switchyomega-proxy.png)\\n\\n- **auto switch \u81ea\u52a8\u5207\u6362\u6a21\u5f0f**\\n\\n\u6709\u65f6\u5019\u4e00\u4e9b\u7f51\u7ad9\u662f\u4e0d\u9700\u8981\u4ee3\u7406\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u7684\uff0c\u800c\u6709\u7684\u53c8\u9700\u8981\u7528\u5230\u4ee3\u7406\uff0c\u9891\u7e41\u7684\u5207\u6362\u6a21\u5f0f\u662f\u4e00\u4ef6\u6bd4\u8f83\u7e41\u7410\u7684\u4e8b\\n\\n\u901a\u8fc7\u89c4\u5219\u5217\u8868\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5bf9\u4e0d\u540c\u57df\u540d\u7684\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\uff0c\u9009\u62e9\u89c4\u5219\u5217\u8868\u8bbe\u7f6e\u4e3a `AutoProxy` \u586b\u5165\u89c4\u5219\u5217\u8868\uff0c\u66f4\u65b0\u60c5\u666f\u6a21\u5f0f\u5373\u53ef\\n\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/switchyomega/switchyomega-auto.png)\\n\\n**\u89c4\u5219\u5217\u8868\u6587\u4ef6\u5730\u5740**\\n``` shell\\nhttps://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt\\n```\\n\\n#### \u4f7f\u7528\\n\\n\u524d\u9762\u5df2\u7ecf\u5c06\u63d2\u4ef6\u914d\u7f6e\u5b8c\u6210\uff0c\u4f7f\u7528\u7684\u65f6\u5019\u53ea\u9700\u8981\u70b9\u51fb\u63d2\u4ef6\u7684\u56fe\u6807\uff0c\u5207\u6362\u81ea\u5df1\u9700\u8981\u4f7f\u7528\u7684\u6a21\u5f0f\u5373\u53ef\\n\\n\u4f1a\u5b58\u5728\u4e00\u4e9b\u7f51\u5740\u6ca1\u6709\u88ab\u5199\u5728\u89c4\u5219\u5217\u8868\u5185\uff0c\u53ef\u4ee5\u624b\u52a8\u8fdb\u884c\u6dfb\u52a0\\n\\n\u4e5f\u53ef\u4ee5\u70b9\u51fb\u56fe\u6807\u8bbe\u7f6e\\n\\n### <Highlight color=\\"#FF7F00\\">\u2728\u914d\u7f6e\u5b8c\u6210\u2728</Highlight>\\n\\n\u81f3\u6b64\u53ef\u4ee5\u5f00\u59cb\u65b9\u4fbf\u7684\u7f51\u9875\u6d4f\u89c8"},{"id":"/start","metadata":{"permalink":"/blog/start","editUrl":"https://github.com/rcxxx/sinnammanyo.cn/tree/master/blog/start.mdx","source":"@site/blog/start.mdx","title":"\u4ece\u96f6\u642d\u5efa\u81ea\u5df1\u7684\u4e2a\u4eba\u7f51\u7ad9","description":"","date":"2022-12-13T00:00:00.000Z","formattedDate":"2022\u5e7412\u670813\u65e5","tags":[{"label":"Docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"\u642d\u5efa","permalink":"/blog/tags/\u642d\u5efa"}],"hasTruncateMarker":true,"authors":[{"name":"CX R","title":" ","url":"https://github.com/rcxxx","imageURL":"https://github.com/rcxxx.png","key":"rcxxx"}],"frontMatter":{"date":"2022-12-13T00:00:00.000Z","authors":"rcxxx","hide_reading_time":true,"title":"\u4ece\u96f6\u642d\u5efa\u81ea\u5df1\u7684\u4e2a\u4eba\u7f51\u7ad9","tags":["Docusaurus","\u642d\u5efa"]},"prevItem":{"title":"Chrome \u6d4f\u89c8\u5668\u63d2\u4ef6 SwitchyOmega \u7684\u4f7f\u7528","permalink":"/blog/2023/02/switchyomage"}},"content":"export const Highlight = ({children, color}) => (\\r\\n  <span\\r\\n    style={{\\r\\n      backgroundColor: color,\\r\\n      borderRadius: \'2px\',\\r\\n      color: \'#fff\',\\r\\n      padding: \'0.2rem\',\\r\\n      borderRadius: \'5px\'\\r\\n    }}>\\r\\n    {children}\\r\\n  </span>\\r\\n);\\r\\n\\r\\n### \u672c\u6587\u57fa\u4e8e <Highlight color=\\"#25c2a0\\">Docusaurus 2</Highlight>\\r\\n- **[Docusaurus](https://docusaurus.io/)**\\r\\n- **[facebook/docusaurus](https://github.com/facebook/docusaurus)**\\r\\n\\r\\n\u8be6\u7ec6\u8e29\u5751\uff0c\u653e\u5fc3\u98df\u7528\\r\\n\\r\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/start-docusaurus/cover.png)\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n## \u51c6\u5907\u5de5\u4f5c\\r\\n\\r\\n:::tip\\r\\n\\r\\n\u5584\u7528\u641c\u7d22\u5f15\u64ce\\r\\n\\r\\n:::\\r\\n\\r\\n### \u914d\u7f6e VSCode & GitBash (windows)\\r\\n\u5b89\u88c5\u4e00\u4e2a\u6587\u6863\u7f16\u8f91\u5668\uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 `VSCode`\\r\\n- **https://code.visualstudio.com/Download**\\r\\n\\r\\n\u5b89\u88c5 git\\r\\n- **https://git-scm.com/downloads**\\r\\n\\r\\n\u53c2\u8003 *https://blog.csdn.net/A_zhiyuan/article/details/116930325* \u4e2d\u7684\u65b9\u6cd5\u5c06 `VSCode` \u7684\u96c6\u6210\u7ec8\u7aef\u8bbe\u7f6e\u4e3a `GitBash`\\r\\n\\r\\n### \u5b89\u88c5 node.js & yarn\\r\\n\\r\\n`Docusaurus` \u662f\u57fa\u4e8e `node.js` \u7684\uff0c\u9700\u8981\u5b89\u88c5 `node.js`\\r\\n\\r\\n- **https://nodejs.org/**\\r\\n\\r\\n\u4f7f\u7528\u5305\u7ba1\u7406\u5668 `yarn` \u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u7ba1\u7406\u4f60\u4e2a\u4eba\u7f51\u7ad9\uff0c\u5efa\u8bae\u5b89\u88c5 `yarn`\\r\\n- **https://yarn.bootcss.com/**\\r\\n\\r\\n\u5b8c\u6210\u8fd9\u4e9b\u4e4b\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u5f00\u59cb\u5728\u672c\u5730\u90e8\u7f72 `Docusaurus` \u7684\u670d\u52a1\\r\\n\\r\\n## \u5b89\u88c5 <Highlight color=\\"#25c2a0\\">Docusaurus</Highlight>\\r\\n\\r\\n\u4f7f\u7528\u5305\u7ba1\u7406\u5668 `yarn` \u53ef\u4ee5\u521d\u59cb\u5316 `Docusaurus` \u9879\u76ee\\r\\n\\r\\n``` bash\\r\\nyarn create docusaurus\\r\\n```\\r\\n\\r\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/start-docusaurus/yarn-create-docusaurus.png)\\r\\n\\r\\n\u521b\u5efa\u6210\u529f\u540e\u4f1a\u6709\u8fd9\u6837\u7684\u8f93\u51fa\\r\\n\\r\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/start-docusaurus/Created-SUCCESS.png)\\r\\n\\r\\n```\\r\\ncd sinnammanyo.cn\\r\\nyarn start\\r\\n```\\r\\n\\r\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/start-docusaurus/yarn-start.png)\\r\\n\\r\\n\u6267\u884c\u540e\u4f1a\u5728\u672c\u5730\u5f00\u542f\u4e00\u4e2a\u7aef\u53e3\uff0c\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee `http://localhost:3000/` \u5373\u53ef\u67e5\u770b\u7ad9\u70b9\u7684\u6e32\u67d3\u7ed3\u679c\\r\\n\\r\\nimport BrowserWindow from \'@site/src/components/BrowserWindow\';\\r\\n\\r\\n<BrowserWindow url=\\"http://localhost:3000\\">\\r\\n\\r\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/start-docusaurus/yarn-start-result.png)\\r\\n\\r\\n</BrowserWindow>\\r\\n\\r\\n\\r\\n## \u914d\u7f6e <Highlight color=\\"#25c2a0\\">Docusaurus</Highlight>\\r\\n\\r\\n\u5b89\u88c5\u5b8c\u6210\u540e\u65b0\u76ee\u5f55\u4f1a\u6709\u5982\u4e0b\u7ed3\u6784\\r\\n```\\r\\nsinnammanyo.cn/\\r\\n\u251c\u2500\u2500 blog/\\r\\n\u2502   \u2514\u2500\u2500 ...\\r\\n\u251c\u2500\u2500 docs/\\r\\n\u2502   \u2514\u2500\u2500 ...\\r\\n\u251c\u2500\u2500 src/\\r\\n\u2502   \u251c\u2500\u2500 css/\\r\\n\u2502   \u2502   \u2514\u2500\u2500 ...\\r\\n\u2502   \u2514\u2500\u2500 pages/\\r\\n\u2502       \u2514\u2500\u2500 ...\\r\\n\u251c\u2500\u2500 static/\\r\\n\u2502   \u2514\u2500\u2500 ...\\r\\n\u251c\u2500\u2500 docusaurus.config.js\\r\\n\u251c\u2500\u2500 package.json\\r\\n\u251c\u2500\u2500 README.md\\r\\n\u251c\u2500\u2500 sidebars.js\\r\\n\u2514\u2500\u2500 yarn.lock\\r\\n```\\r\\n\\r\\n### \u914d\u7f6e\u7ad9\u70b9\u4fe1\u606f\\r\\n`docusaurus.config.js` \u4e2d\u914d\u7f6e\u4e86\u7ad9\u70b9\u5143\u6570\u636e\\r\\n\\r\\n``` js title=\\"docusaurus.config.js\\"\\r\\nconst config = {\\r\\n  // \u57fa\u7840\u914d\u7f6e\\r\\n  title: \'My Site\',                             // \u7ad9\u70b9\u540d\u79f0\\r\\n  tagline: \'Dinosaurs are cool\',                // \u7ad9\u70b9\u63cf\u8ff0\\r\\n  url: \'https://your-docusaurus-test-site.com\', // \u7ad9\u70b9 url\\r\\n  baseUrl: \'/\',                                 // \u7ad9\u70b9\u7684url\u540e\u7f00\\r\\n  onBrokenLinks: \'throw\',\\r\\n  onBrokenMarkdownLinks: \'warn\',\\r\\n  favicon: \'img/favicon.ico\',                   // \u7ad9\u70b9\u7684 logo \u6d4f\u89c8\u5668\u6807\u7b7e\u524d\u9762\u90a3\u4e2a\\r\\n\\r\\n  // \u90e8\u7f72\u65f6\u6240\u9700\u914d\u7f6e\\r\\n  organizationName: \'facebook\',                 // Github \u7528\u6237\u540d\\r\\n  projectName: \'docusaurus\',                    // Github \u4ed3\u5e93\u540d\\r\\n  ...\\r\\n}\\r\\n```\\r\\n\\r\\n\u4ee5\u53ca\u4e3b\u9898\u3001\u63d2\u4ef6\u3001\u9884\u8bbe\u7b49\u914d\u7f6e\uff0c\u53ef\u4ee5\u53c2\u8003 `Docusaurus` \u7684\u5b98\u65b9\u6587\u6863\\r\\n- **https://docusaurus.io/zh-CN/docs/configuration**\\r\\n\\r\\n### \u6587\u6863 & \u535a\u5ba2\\r\\n`Docusaurus` \u5206\u4e3a\u6587\u6863\u6a21\u5f0f\u548c\u535a\u5ba2\u6a21\u5f0f\uff0c\u6700\u57fa\u672c\u7684\u529f\u80fd\u662f\u5c06\u672c\u5730\u7684 `markdown` \u6587\u4ef6\u6e32\u67d3\u4e3a `html` \u6587\u4ef6\\r\\n\\r\\n- `blogs/` \u6587\u4ef6\u5939\u4e3a\u535a\u5ba2 `markdown` \u6587\u4ef6\u7684\u5b58\u653e\u4f4d\u7f6e\\r\\n- `docs/` \u6587\u4ef6\u5939\u4e3a\u6587\u6863\u6587\u4ef6\u5b58\u653e\u4f4d\u7f6e\\r\\n\\r\\n\u4e24\u8005\u533a\u522b\u5728\u4e8e\uff0c\u6587\u6863\u6a21\u5f0f\u6709\u4fa7\u8fb9\u680f\u652f\u6301\uff0c\u9002\u5408\u5bf9\u6587\u6863\u8fdb\u884c\u5c42\u7ea7\u5206\u7c7b\u6574\u7406\uff0c\u800c\u535a\u5ba2\u66f4\u4e13\u6ce8\u4e8e\u5355\u7bc7\u5185\u5bb9\uff0c\u6709\u4f5c\u8005\uff0c\u9605\u8bfb\u65f6\u957f\u7b49\u5143\u7d20\uff0c\u5176\u4f59\u5730\u65b9\u5dee\u522b\u4e0d\u5927\\r\\n\\r\\n### \u9875\u9762\\r\\n`src/pages/` \u4e2d\u7684 `jsx/tsx/mdx` \u6587\u4ef6\u90fd\u4f1a\u88ab\u6e32\u67d3\u6210\u7f51\u7ad9\u7684\u9875\u9762\\r\\n\\r\\n- `src/pages/index.js` \u5c31\u662f\u7f51\u7ad9\u7684\u521d\u59cb\u9875\u9762\uff0c\u901a\u8fc7\u7f16\u8f91 `index.js` \u53ef\u4ee5\u5bf9 Home \u9875\u9762\u8fdb\u884c\u4e2a\u6027\u5316\u7684\u8bbe\u7f6e\\r\\n\\r\\n\u5982\u679c\u4f60\u559c\u6b22\u6211\u7684\u4e3b\u9875\uff0c\u53ef\u4ee5\u5230 [**\u8fd9\u7bc7\u6587\u7ae0**](https://sinnammanyo.cn/docs/site/about-theme) \u770b\u6211\u7684\u8be6\u7ec6\u914d\u7f6e\u8fc7\u7a0b\\r\\n\\r\\n## \u90e8\u7f72 <Highlight color=\\"#25c2a0\\">Docusaurus</Highlight>\\r\\n\u5f53\u4f60\u7684\u7ad9\u70b9\u5728\u672c\u5730\u8c03\u8bd5\u5b8c\u6210\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u5c06\u7ad9\u70b9\u90e8\u7f72\u5230\u4e91\u7aef\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u5728\u7ebf\u8bbf\u95ee\\r\\n\\r\\n`Docusaurus` \u652f\u6301\u7684\u90e8\u7f72\u65b9\u5f0f\u5f88\u591a\uff0c\u53ef\u4ee5\u53c2\u8003\\r\\n- *https://docusaurus.io/zh-CN/docs/deployment*\\r\\n\\r\\n\u8fd9\u91cc\u6211\u9009\u62e9\u5c06\u7ad9\u70b9\u90e8\u7f72\u5230 `GitHub Pages`\\r\\n\\r\\n### \u90e8\u7f72\u5230 GitHub Pages\\r\\n**[`GitHub Pages`](https://pages.github.com/)** \u5bf9\u6240\u6709\u7684\u4ed3\u5e93\u90fd\u514d\u8d39\\r\\n\\r\\n:::note \\r\\n\\r\\n\u5982\u679c\u4f60\u6ca1\u6709 `GitHub` \u8d26\u53f7\uff0c\u5c31\u9700\u8981\u6ce8\u518c\u4e00\u4e2a\uff0c\u7136\u540e\u7b80\u5355\u4e86\u89e3\u4e00\u4e0b `GitHub` \uff0c\u4f8b\u5982\u4ed3\u5e93\uff0c\u5206\u652f\u7b49\u7b49\u77e5\u8bc6\\r\\n\\r\\n- *[GitHub](https://github.com/)*\\r\\n- *[Git\u53caGitHub\u6559\u7a0b](https://www.githubs.cn/post/git-tutorial)*\\r\\n\\r\\n:::\\r\\n\\r\\n\u5bf9\u4e8e\u6bcf\u4e2a GitHub \u7528\u6237\u6765\u8bf4\uff0c\u53eb\u505a `{username}.github.io` \u540d\u79f0\u7684\u4ed3\u5e93\u662f\u7279\u6b8a\u7684\uff0c\u8fd9\u4e2a\u4ed3\u5e93\u7684 `GitHub Pages` \u7684 url \u4e3a **`https://{username}.github.io/`**\\r\\n\\r\\n\u8fd9\u91cc\u7684\u65b9\u6848\u5c06\u4f7f\u7528\u4e24\u4e2a Github \u4ed3\u5e93\u6765\u6267\u884c\u90e8\u7f72\uff0c\u5206\u522b\u4e3a\u5b58\u653e `Docusaurus` \u9879\u76ee\u914d\u7f6e\u3001\u6587\u6863\u7b49\u6587\u4ef6\u7684 **\u6e90\u7801\u4ed3\u5e93** \u4ee5\u53ca\u5b58\u653e\u6e32\u67d3\u540e\u7684\u6240\u6709\u9875\u9762\u6587\u4ef6\u7684 **\u90e8\u7f72\u4ed3\u5e93**\\r\\n\\r\\n\u4ee5\u6211\u7684\u7ad9\u70b9\u4e3a\u4f8b\uff0c\u5206\u522b\u4e3a\\r\\n- \u6e90\u7801\u4ed3\u5e93 **[`rcxxx/sinnammanyo.cn`](https://github.com/rcxxx/sinnammanyo.cn)**\\r\\n- \u90e8\u7f72\u4ed3\u5e93 **[`rcxxx/rcxxx.github.io`](https://github.com/rcxxx/rcxxx.github.io)**\\r\\n\\r\\n\u4f60\u53ef\u4ee5\u5148\u521b\u5efa\u540c\u6837\u7684\u4e24\u4e2a\u4ed3\u5e93\uff0c\u5e76\u6839\u636e\u4f60\u7684\u7ad9\u70b9\u4ee5\u53ca\u7528\u6237\u540d\u6765\u8fdb\u884c\u660e\u660e\uff0c\u4f8b\u5982 `{username}/my-website`\u3001`{username}/{username}.github.io`\uff0c`{username}` \u4e3a\u4f60\u81ea\u5df1\u7684\u7528\u6237\u540d\\r\\n\\r\\n#### \u4fee\u6539 `docusaurus.config.js`\\r\\n``` js title=\\"docusaurus.config.js -- eg.\\"\\r\\nconst config = {\\r\\n  //...\\r\\n  url: \'https://sinnammanyo.cn\',    // \u4f60\u7684\u7f51\u7ad9 URL\\r\\n  baseUrl: \'/\',                     // \u89e3\u6790\u540e\u7684\u5730\u5740 \u5982\u679c\u8bbe\u7f6e\u4e3a /website/ \\r\\n                                    // \u5219 url \u5c06\u89e3\u6790\u4e3a https://sinnammanyo.cn/website/\\r\\n  projectName: \'rcxxx.github.io\',   // username.github.io\\r\\n  organizationName: \'rcxxx\',        // username\\r\\n  trailingSlash: false,\\r\\n  deploymentBranch: \'master\',       // \u90e8\u7f72\u7684\u9ed8\u8ba4\u5206\u652f  \u5982\u679c\u90e8\u7f72\u5230\u540c\u4e00\u4e2a\u4ed3\u5e93\u4e0b\u5219\u53ef\u4e0d\u6307\u5b9a \\r\\n                                    // \u9ed8\u8ba4\u4e3a \'gh-pages\'\\r\\n  //...\\r\\n}\\r\\n```\\r\\n\\r\\n#### deploy\\r\\n\u7f16\u8bd1\u9759\u6001\u6587\u4ef6\\r\\n```\\r\\nyarn build\\r\\n```\\r\\n\\r\\n\u90e8\u7f72\u5230\u8fdc\u7a0b\u4ed3\u5e93\\r\\n``` bash\\r\\nGIT_USER=<GITHUB_USERNAME> yarn deploy\\r\\n# GIT_USER=rcxxx yarn deploy\\r\\n```\\r\\n\\r\\n\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728 `https://{username}.github.io/` \u770b\u5230\u4f60\u90e8\u7f72\u5b8c\u6210\u7684\u7ad9\u70b9\u4e86\\r\\n\\r\\n### \u8fdb\u9636\u90e8\u7f72\\r\\n\u5229\u7528 `GitHub Action` \u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5316\u66f4\u65b0\u90e8\u7f72\\r\\n\\r\\n#### SSH KEY\\r\\n\u7531\u4e8e\u662f\u8de8\u4ed3\u5e93\u90e8\u7f72\uff0c\u9700\u8981\u4f7f\u7528 `SSH` \u5bc6\u94a5\u6765\u901a\u8fc7\u6743\u9650\u68c0\u67e5\\r\\n\\r\\n- \u751f\u6210 `ssh key`\\r\\n``` bash\\r\\nssh-keygen -t rsa -C \\"your_email@example.com\\"\\r\\n```\\r\\n\\r\\n\u6267\u884c\u540e\u4e00\u8def\u9ed8\u8ba4\uff0c\u5c06\u5728\u7528\u6237\u6839\u76ee\u5f55\u751f\u6210 `ssh key`\uff0clinux \u5c06\u4f1a\u751f\u6210\u5728 `~/.ssh/`\uff0c windows \u5c06\u751f\u6210\u5728 `/c/Users/username/.ssh/`\\r\\n\\r\\n- `id_rsa.pub` \u4e3a\u516c\u94a5\\r\\n\\r\\n\u9700\u8981\u6dfb\u52a0\u5230\u6e90\u4ed3\u5e93\u4e2d\uff0c`Setting -> Deploy keys -> Add Deploy key`\\r\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/start-docusaurus/add-id_rsa-pub.png)\\r\\n\\r\\n- `id_rsa` \u4e3a\u79c1\u94a5\\r\\n\\r\\n\u9700\u8981\u6dfb\u52a0\u5230\u90e8\u7f72\u4ed3\u5e93 `github.io` \u4e2d\uff0c`Setting -> Secrets -> Actions -> New repository secret`\\r\\n\\r\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/start-docusaurus/add-id_rsa.png)\\r\\n\\r\\n\u6ce8\u610f\u8fd9\u91cc secret \u7684 Name \u9700\u8981\u8bb0\u4f4f\uff0c\u53ef\u4ee5\u76f4\u63a5\u53d6\u540d\u4e3a `GH_PAGES_DEPLOY`\uff0c\u540e\u7eed\u7684\u81ea\u52a8\u5316\u5de5\u4f5c\u6d41\u4e2d\u5c06\u4f1a\u7528\u5230\u8fd9\u4e2a Name\\r\\n\\r\\n- \u5728\u4f60\u7684\u6e90\u4ed3\u5e93\u4e2d\u521b\u5efa `.github/workflows/deploy.yml` \u5de5\u4f5c\u6d41\u6587\u4ef6\\r\\n\\r\\n```yml title=\\".github/workflows/deploy.yml\\"\\r\\nname: Deploy to GitHub Pages\\r\\n\\r\\non:\\r\\n  pull_request:\\r\\n    branches: [main]\\r\\n  push:\\r\\n    branches: [main]\\r\\n\\r\\njobs:\\r\\n  test-deploy:\\r\\n    if: github.event_name != \'push\'\\r\\n    runs-on: ubuntu-latest\\r\\n    steps:\\r\\n      - uses: actions/checkout@v3\\r\\n      - uses: actions/setup-node@v3\\r\\n        with:\\r\\n          node-version: 18\\r\\n          cache: yarn\\r\\n      - name: Install dependencies\\r\\n        run: yarn install --frozen-lockfile\\r\\n      - name: Test build website\\r\\n        run: yarn build\\r\\n  deploy:\\r\\n    if: github.event_name != \'pull_request\'\\r\\n    runs-on: ubuntu-latest\\r\\n    steps:\\r\\n      - uses: actions/checkout@v3\\r\\n      - uses: actions/setup-node@v3\\r\\n        with:\\r\\n          node-version: 18\\r\\n          cache: yarn\\r\\n      - uses: webfactory/ssh-agent@v0.5.0\\r\\n        with:\\r\\n          ssh-private-key: ${{ secrets.GH_PAGES_DEPLOY }}\\r\\n      - name: Deploy to GitHub Pages\\r\\n        env:\\r\\n          USE_SSH: true\\r\\n        run: |\\r\\n          git config --global user.email \\"actions@github.com\\"   # \u4fee\u6539\u4e3a\u4f60\u7684\u90ae\u7bb1\u5730\u5740\\r\\n          git config --global user.name \\"gh-actions\\"            # \u4fee\u6539\u4e3a\u4f60\u7684\u7528\u6237\u540d\\r\\n          yarn install --frozen-lockfile\\r\\n          yarn deploy\\r\\n```\\r\\n\\r\\n\u4e00\u5207\u5c31\u7eea\u4e4b\u540e\uff0c\u5f53\u4f60\u5411\u6e90\u4ed3\u5e93\u4e2d\u63a8\u9001\u6587\u6863\u7684\u53d8\u66f4\u65f6\uff0c`GitHub Action` \u5c06\u81ea\u52a8\u8bc6\u522b\u5de5\u4f5c\u6d41\uff0c\u5e76\u6267\u884c\u7ad9\u70b9\u7684\u90e8\u7f72\\r\\n\\r\\n### \u81ea\u5b9a\u4e49\u57df\u540d\\r\\n\u524d\u9762\u7684\u64cd\u4f5c\u4e4b\u540e\uff0c\u4f60\u5c06\u5f97\u5230\u7684\u7ad9\u70b9\u4e3a `https://username.github.io/`\\r\\n\\r\\n\u5982\u679c\u60f3\u8981\u4e2a\u6027\u5316\u7684\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u5219\u9700\u8981\u5230\u670d\u52a1\u5546\u8d2d\u4e70\u4e00\u4e2a\uff0c\u7136\u540e\u6dfb\u52a0\u57df\u540d\u89e3\u6790\\r\\n\\r\\n- \u65b0\u5efa `static/CNAME` \u6587\u4ef6\uff0c\u5728\u5176\u4e2d\u586b\u5165\u4f60\u81ea\u5df1\u7684\u57df\u540d\uff0c\u5e76\u4e14\u5728\u5c06\u90e8\u7f72\u4ed3\u5e93\u7684\u9875\u9762\u6620\u5c04\u5230\u81ea\u5df1\u7684\u57df\u540d\\r\\n\\r\\n![](https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/start-docusaurus/custom-domain.png)\\r\\n\\r\\n## <Highlight color=\\"#FF7F00\\">\u2728\u642d\u5efa\u5b8c\u6210\u2728</Highlight>\\r\\n\\r\\n\u81f3\u6b64\u4f60\u7684\u4e2a\u4eba\u7f51\u7ad9\u4ee5\u5df2\u7ecf\u5168\u90e8\u642d\u5efa\u5b8c\u6bd5\uff0c\u5f00\u59cb\u6109\u5feb\u7684\u5185\u5bb9\u521b\u4f5c~~~\\r\\n\\r\\n## \u53c2\u8003\u94fe\u63a5\\r\\n- **[`Docusaurus` \u4e2d\u6587\u6587\u6863](https://docusaurus.io/zh-CN/docs)**"}]}')}}]);