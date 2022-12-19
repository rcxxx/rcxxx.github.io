"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[8786],{57924:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=e(87462),a=(e(67294),e(3905));e(83989);const c={id:"cc-11-new-for",title:"C++11 for\u5faa\u73af\u65b0\u7528\u6cd5",sidebar_label:"\u5faa\u73af"},o=void 0,i={unversionedId:"programming/cc/11/cc-11-new-for",id:"programming/cc/11/cc-11-new-for",title:"C++11 for\u5faa\u73af\u65b0\u7528\u6cd5",description:"C++11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af",source:"@site/docs/stack/programming/cc/11/cc11\u5faa\u73af.md",sourceDirName:"programming/cc/11",slug:"/programming/cc/11/cc-11-new-for",permalink:"/stack/programming/cc/11/cc-11-new-for",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/programming/cc/11/cc11\u5faa\u73af.md",tags:[],version:"current",frontMatter:{id:"cc-11-new-for",title:"C++11 for\u5faa\u73af\u65b0\u7528\u6cd5",sidebar_label:"\u5faa\u73af"},sidebar:"\u2328\ufe0fprogramming",previous:{title:"\u6a21\u677f\u522b\u540d",permalink:"/stack/programming/cc/11/cc-11-using"},next:{title:"\u667a\u80fd\u6307\u9488",permalink:"/stack/programming/cc/11/cc-11-auto-ptr"}},l={},p=[{value:"C++11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af",id:"c11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af",level:2},{value:"std::for_each\u65b9\u6cd5",id:"stdfor_each\u65b9\u6cd5",level:2}],s={toc:p};function m(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,r.Z)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"c11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af"},"C++11\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af"),(0,a.kt)("p",null,"\u5173\u4e8efor\u5faa\u73af\u6211\u4eec\u5df2\u7ecf\u5f88\u719f\u6089\u4e86\uff0c\u5047\u8bbe\u8981\u904d\u5386\u4e00\u4e2a\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int arr[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\nfor (int i = 0; i < 10; i++) {\n    std::cout << arr[i];\n}\n")),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u904d\u5386\u4e00\u4e2a\u5bb9\u5668\u7c7b\u65f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> v {1,2,3,4,5,6,7,8,9,10};\nfor (std::vector<int>::iterator i = v.begin(); i != v.end(); i++) {\n    std::cout << *i;\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u7ed9for\u5faa\u73af\u6307\u5b9a\u5f00\u59cb\u503c\u4ee5\u53ca\u7ed3\u675f\u6761\u4ef6\uff0cC++11\u4e2d\u5f15\u5165\u4e86\u4e00\u79cd\u65b0\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4e0d\u9700\u8981\u660e\u786e\u7ed9\u51fa\u5f00\u59cb\u548c\u7ed3\u675f\u6761\u4ef6\u7684\u65b0\u8bed\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u8303\u56f4\u7684for\u5faa\u73af")),(0,a.kt)("p",null,"\u53ef\u4ee5\u5c06\u4e0a\u9762\u7684\u4e24\u4e2a\u5faa\u73af\u6539\u5199\u6210\u8fd9\u6837"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int arr[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\nfor (auto i : arr) {\n    std::cout << i;\n}\n\nstd::vector<int> v {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nfor (auto i : v) {\n    std::cout << i;\n}\n")),(0,a.kt)("p",null,"\u6539\u5199\u540e\u4ee3\u7801\u7b80\u6d01\u4e86\u5f88\u591a\uff0c\u53ef\u8bfb\u6027\u6709\u4e86\u4e00\u5b9a\u7684\u63d0\u9ad8"),(0,a.kt)("p",null,"\u4f46\u662f\u8fd9\u6837\u64cd\u4f5c\u7684\u904d\u5386\u662f\u53ea\u8bfb\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0d\u53ef\u4ee5\u4fee\u6539\u6570\u7ec4\u6216\u662f\u5bb9\u5668\u4e2d\u7684\u503c\uff0c\u5982\u679c\u9700\u8981\u5bf9\u503c\u8fdb\u884c\u4fee\u6539\uff0c\u9700\u8981\u5c06\u904d\u5386\u65f6\u7684\u53d8\u91cf\u58f0\u660e\u4e3a\u5f15\u7528\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> v {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nfor (auto i : v) {\n    std::cout << i++;\n}\n")),(0,a.kt)("h2",{id:"stdfor_each\u65b9\u6cd5"},"std::for_each\u65b9\u6cd5"),(0,a.kt)("p",null,"\u6539\u5199\u4e0a\u9762\u7684\u4e24\u4e2a\u5faa\u73af\u7ed3\u6784\uff0c\u540c\u6837\u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"STL"),"\u6807\u51c6\u5e93\u4e2d\u63d0\u4f9b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"for_each"),"\u65b9\u6cd5\u5b9e\u73b0"),(0,a.kt)("p",null,"\u9700\u8981\u5305\u542b\u5934\u6587\u4ef6 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"#include<algorithm>"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void func(int n) {\n    std::cout << n ;\n}\nstd::vector<int> v {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nstd::for_each(v.begin(), v.end(), func});\n")))}m.isMDXComponent=!0}}]);