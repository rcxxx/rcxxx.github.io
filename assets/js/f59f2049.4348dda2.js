"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[686],{25312:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=t(87462),l=(t(67294),t(3905));t(83989);const i={id:"cc-generic-and-template-2",title:"\u6cdb\u578b\u7f16\u7a0b\u4e0e\u6a21\u677f",sidebar_label:"\u7c7b\u6a21\u677f"},c=void 0,p={unversionedId:"programming/cc/Object-Oriented/cc-generic-and-template-2",id:"programming/cc/Object-Oriented/cc-generic-and-template-2",title:"\u6cdb\u578b\u7f16\u7a0b\u4e0e\u6a21\u677f",description:"\u7c7b\u6a21\u677f",source:"@site/docs/stack/programming/cc/Object-Oriented/\u6a21\u677f2.md",sourceDirName:"programming/cc/Object-Oriented",slug:"/programming/cc/Object-Oriented/cc-generic-and-template-2",permalink:"/stack/programming/cc/Object-Oriented/cc-generic-and-template-2",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/programming/cc/Object-Oriented/\u6a21\u677f2.md",tags:[],version:"current",frontMatter:{id:"cc-generic-and-template-2",title:"\u6cdb\u578b\u7f16\u7a0b\u4e0e\u6a21\u677f",sidebar_label:"\u7c7b\u6a21\u677f"},sidebar:"\u2328\ufe0fprogramming",previous:{title:"\u51fd\u6570\u6a21\u677f",permalink:"/stack/programming/cc/Object-Oriented/cc-generic-and-template"},next:{title:"\u865a\u51fd\u6570",permalink:"/stack/programming/cc/Object-Oriented/cc-classes-virtual-function"}},r={},m=[{value:"\u7c7b\u6a21\u677f",id:"\u7c7b\u6a21\u677f",level:2},{value:"\u57fa\u7840\u7684\u7c7b\u6a21\u677f",id:"\u57fa\u7840\u7684\u7c7b\u6a21\u677f",level:3},{value:"\u7c7b\u6a21\u677f\u7684\u7279\u5316\u4e0e\u504f\u7279\u5316",id:"\u7c7b\u6a21\u677f\u7684\u7279\u5316\u4e0e\u504f\u7279\u5316",level:3},{value:"\u7c7b\u6a21\u677f\u6210\u5458\u7279\u5316",id:"\u7c7b\u6a21\u677f\u6210\u5458\u7279\u5316",level:3},{value:"\u6a21\u677f\u7c7b\u7684\u7ee7\u627f",id:"\u6a21\u677f\u7c7b\u7684\u7ee7\u627f",level:3}],o={toc:m};function s(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,a.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7c7b\u6a21\u677f"},"\u7c7b\u6a21\u677f"),(0,l.kt)("p",null,"\u7c7b\u6a21\u677f\u4e5f\u662f\u516c\u5171\u903b\u8f91\u7684\u62bd\u8c61\uff0c\u901a\u5e38\u7528\u6765\u4f5c\u4e3a\u5bb9\u5668\uff08\u4f8b\u5982\uff1avector\uff09\u6216\u8005\u884c\u4e3a\u7684\u5c01\u88c5"),(0,l.kt)("h3",{id:"\u57fa\u7840\u7684\u7c7b\u6a21\u677f"},"\u57fa\u7840\u7684\u7c7b\u6a21\u677f"),(0,l.kt)("p",null,"\u7c7b\u6a21\u677f\u7684\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename T> \nclass C {\n    // code\n}\n")),(0,l.kt)("p",null,"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename T>\nclass example {\npublic:\n    //\u6784\u9020\u51fd\u6570\n    example(T a, T b) {\n        this->a = a;\n        this->b = b;\n    }\n    //\u8fd0\u7b97\u7b26\u91cd\u8f7d\n    example<T> operator+(example &e) {\n        example<T> tmp(this->a+e.a, this->b+e.b);\n        return tmp;\n    }       \nprivate:\n    T a;\n    T b;\n}\n\nint main()\n{\n    //\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\u5fc5\u987b\u58f0\u660e\u6a21\u677f\u7c7b\u578b\uff0c\u56e0\u4e3a\u8981\u5206\u914d\u5185\u5bb9\n    example<int> a(10,20);  \n    example<int> b(20,30);\n    example<int> c = a + b;\n    return 0;\n}\n")),(0,l.kt)("h3",{id:"\u7c7b\u6a21\u677f\u7684\u7279\u5316\u4e0e\u504f\u7279\u5316"},"\u7c7b\u6a21\u677f\u7684\u7279\u5316\u4e0e\u504f\u7279\u5316"),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u51fd\u6570\u6a21\u677f\u7684\u91cd\u8f7d\uff0c\u53ef\u4ee5\u901a\u8fc7\u7279\u5316\uff08\u504f\u7279\u5316\uff09\u7c7b\u6a21\u677f\u6765\u5b9e\u73b0\u5bf9\u7279\u6b8a\u9700\u6c42\u7684\u5904\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u6a21\u677f\u7684\u7279\u5316\u4e0e\u504f\u7279\u5316\u9700\u8981\u6a21\u677f\u540d\u79f0\u76f8\u540c\u5e76\u4e14\u7279\u5316\u5217\u8868",(0,l.kt)("inlineCode",{parentName:"li"},"<>"),"\u4e2d\u7684\u53c2\u6570\u4e2a\u6570\u4e0e\u539f\u59cb\u6a21\u677f\u76f8\u5bf9\u5e94"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7c7b\u6a21\u677f\u53ef\u4ee5\u6709\u591a\u4e2a\u7279\u5316\uff0c\u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u5b9e\u4f8b\u5316\u90a3\u4e2a\u6700\u7279\u6b8a\u7684\u7248\u672c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <typeinfo>\ntemplate<typename T> //\u57fa\u672c\u6a21\u677f\nclass C {\npublic:\n    void info() {   \n        // code\n    }\n};\ntemplate<> //\u7279\u5316\nclass C<int> { \npublic:\nvoid info() {\n    // code\n}\n};\ntemplate<typename T> //\u504f\u7279\u5316\nclass C<T*> {\npublic:\nvoid info() {\n    // code\n    }\n};\ntemplate<typename T, typename U> //\u53e6\u5916\u4e00\u79cd\u504f\u7279\u5316\nclass C<T(U)> {\npublic:\n    void info() {\n        // code\n    }\n};\n\nint func(int i) {\n    // code\n}\n\nint main(){\n    C<float> c1;\n    C1.info();     // \u8c03\u7528\u57fa\u7840\u6a21\u677f                \n    C<int> c2;\n    C2.info();     // \u8c03\u7528 int \u7279\u5316\u6a21\u677f\n    C<float*> c3;\n    C3.info();     // \u8c03\u7528 T* \u7279\u5316\u6a21\u677f\n    C<decltype(func)> c4;\n    c4.info();     // \u8c03\u7528\u51fd\u6570\u7279\u5316\u6a21\u677f\n}\n")),(0,l.kt)("h3",{id:"\u7c7b\u6a21\u677f\u6210\u5458\u7279\u5316"},"\u7c7b\u6a21\u677f\u6210\u5458\u7279\u5316"),(0,l.kt)("p",null,"\u9664\u4e86\u53ef\u4ee5\u7279\u5316\u7c7b\u6a21\u677f\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u5bf9\u7c7b\u6a21\u677f\u4e2d\u7684\u6210\u5458\u51fd\u6570\u548c\u666e\u901a\u9759\u6001\u6210\u5458\u53d8\u91cf\u8fdb\u884c\u7279\u5316"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T>  \nclass C {\npublic:\n    void info() {\n        // code\n    }\n    static int value;\n};\n\ntemplate<typename T>\nint C<T>::value = 10;\n\ntemplate<>\nint C<int>::value = 100;    //\u666e\u901a\u9759\u6001\u6210\u5458\u53d8\u91cf\u7684int\u7279\u5316\n\ntemplate<>\nvoid C<int>::info() {    //\u6210\u5458\u51fd\u6570\u7684int\u7279\u5316\n    // code\n}\n")),(0,l.kt)("h3",{id:"\u6a21\u677f\u7c7b\u7684\u7ee7\u627f"},"\u6a21\u677f\u7c7b\u7684\u7ee7\u627f"),(0,l.kt)("p",null,"\u6a21\u677f\u7c7b\u540c\u6837\u53ef\u4ee5\u5b9e\u73b0\u7ee7\u627f"),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7236\u7c7b\u81ea\u5b9a\u4e49\u4e86\u6784\u9020\u51fd\u6570\uff0c\u8bb0\u5f97\u5b50\u7c7b\u8981\u4f7f\u7528\u6784\u9020\u51fd\u6570\u5217\u8868\u6765\u521d\u59cb\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u7ee7\u627f\u7684\u65f6\u5019\uff0c\u5982\u679c\u5b50\u7c7b\u4e0d\u662f\u6a21\u677f\u7c7b\uff0c\u5219\u5fc5\u987b\u6307\u660e\u5f53\u524d\u7684\u7236\u7c7b\u7684\u7c7b\u578b\uff0c\u56e0\u4e3a\u8981\u5206\u914d\u5185\u5b58\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u7ee7\u627f\u7684\u65f6\u5019\uff0c\u5982\u679c\u5b50\u7c7b\u662f\u6a21\u677f\u7c7b\uff0c\u8981\u4e48\u6307\u5b9a\u7236\u7c7b\u7684\u7c7b\u578b\uff0c\u8981\u4e48\u7528\u5b50\u7c7b\u7684\u6cdb\u578b\u6765\u6307\u5b9a\u7236\u7c7b")),(0,l.kt)("p",null,"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename T>\nclass Parent {\npublic:\n    Parent(T p){\n        this->p = p;\n    } \nprivate:\n    T p;\n};\n\n//\u5982\u679c\u5b50\u7c7b\u4e0d\u662f\u6a21\u677f\u7c7b\uff0c\u9700\u8981\u6307\u660e\u7236\u7c7b\u7684\u5177\u4f53\u7c7b\u578b\nclass ChildOne : public Parent<int> {\npublic:\n    ChildOne(int a,int b):Parent(b){\n        this->cone = a;\n    }\nprivate:\n    int cone;\n};\n\n//\u5982\u679c\u5b50\u7c7b\u662f\u6a21\u677f\u7c7b\uff0c\u53ef\u4ee5\u7528\u5b50\u7c7b\u7684\u6cdb\u578b\u6765\u8868\u793a\u7236\u7c7b\ntemplate <typename T>\nclass ChildTwo : public Parent<T> {\npublic:\n    ChildTwo(T a, T b):Parent<T>(b) {\n        this->ctwo = a;\n    }\n    \nprivate:\n    T ctwo;\n};\n    ```\n")))}s.isMDXComponent=!0}}]);