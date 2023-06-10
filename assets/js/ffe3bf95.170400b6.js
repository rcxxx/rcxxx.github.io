"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[139],{85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),l=n(67294),r=n(86010),o=n(12466),p=n(16550),i=n(91980),u=n(67392),c=n(50012);function s(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,p.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[o,p]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=k({queryString:n,groupId:a}),[s,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),N=(()=>{const e=i??s;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{N&&p(N)}),[N]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);p(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var N=n(72389);const h="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:p,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==p&&(s(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,r.Z)("tabs__item",v,o?.className,{"tabs__item--active":p===t})}),n??t)})))}function C(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function f(e){const t=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h)},l.createElement(b,(0,a.Z)({},e,t)),l.createElement(C,(0,a.Z)({},e,t)))}function _(e){const t=(0,N.Z)();return l.createElement(f,(0,a.Z)({key:String(t)},e))}},56641:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>m,assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var a=n(87462),l=(n(67294),n(3905)),r=(n(83989),n(74866)),o=n(85162);const p={authors:"rcxxx",hide_reading_time:!0,title:"OpenCV \u6e90\u7801\u7f16\u8bd1\u5168\u603b\u7ed3",tags:["OpenCV","OpenCV-Contrib","CUDA","CUDNN"]},i=void 0,u={permalink:"/blog/2023/03/windows-opencv-contrib-cuda",editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/blog/2023/03/windows-opencv-contrib-cuda.mdx",source:"@site/blog/2023/03/windows-opencv-contrib-cuda.mdx",title:"OpenCV \u6e90\u7801\u7f16\u8bd1\u5168\u603b\u7ed3",description:"OpenCV \u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u8ba1\u7b97\u673a\u89c6\u89c9\u7684\u5f00\u6e90\u5e93\uff0c\u5b9e\u73b0\u4e86\u5f88\u591a\u56fe\u50cf\u5904\u7406\u548c\u8ba1\u7b97\u673a\u89c6\u89c9\u65b9\u9762\u7684\u901a\u7528\u7b97\u6cd5",date:"2023-06-10T06:47:53.000Z",formattedDate:"2023\u5e746\u670810\u65e5",tags:[{label:"OpenCV",permalink:"/blog/tags/open-cv"},{label:"OpenCV-Contrib",permalink:"/blog/tags/open-cv-contrib"},{label:"CUDA",permalink:"/blog/tags/cuda"},{label:"CUDNN",permalink:"/blog/tags/cudnn"}],hasTruncateMarker:!0,authors:[{name:"CX R",title:" ",url:"https://github.com/rcxxx",imageURL:"https://github.com/rcxxx.png",key:"rcxxx"}],frontMatter:{authors:"rcxxx",hide_reading_time:!0,title:"OpenCV \u6e90\u7801\u7f16\u8bd1\u5168\u603b\u7ed3",tags:["OpenCV","OpenCV-Contrib","CUDA","CUDNN"]},prevItem:{title:"Chrome \u6d4f\u89c8\u5668\u63d2\u4ef6 SwitchyOmega \u7684\u4f7f\u7528",permalink:"/blog/2023/02/switchyomage"},nextItem:{title:"Microsoft Edge \u5b9e\u7528\u63d2\u4ef6\u6c47\u603b",permalink:"/blog/2023/04/microsoftedge-addons"}},c={authorsImageUrls:[void 0]},s=[{value:"Windows",id:"windows",level:2},{value:"\u5b89\u88c5 CUDA/CUDNN",id:"\u5b89\u88c5-cudacudnn",level:3},{value:"\u4e0b\u8f7d CUDA \u79bb\u7ebf\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d-cuda-\u79bb\u7ebf\u5b89\u88c5\u5305",level:4},{value:"\u4e0b\u8f7d CUDNN \u6587\u4ef6\u538b\u7f29\u5305",id:"\u4e0b\u8f7d-cudnn-\u6587\u4ef6\u538b\u7f29\u5305",level:4},{value:"\u9a8c\u8bc1 CUDA &amp; CUDNN \u5b89\u88c5",id:"\u9a8c\u8bc1-cuda--cudnn-\u5b89\u88c5",level:4},{value:"\u83b7\u53d6\u6e90\u7801",id:"\u83b7\u53d6\u6e90\u7801",level:3},{value:"\u914d\u7f6e CMake \u9879\u76ee",id:"\u914d\u7f6e-cmake-\u9879\u76ee",level:3},{value:"\u8bbe\u7f6e CMake \u6784\u5efa\u9009\u9879",id:"\u8bbe\u7f6e-cmake-\u6784\u5efa\u9009\u9879",level:3},{value:"Visual Studio \u6267\u884c\u7f16\u8bd1",id:"visual-studio-\u6267\u884c\u7f16\u8bd1",level:3},{value:"Linux",id:"linux",level:2},{value:"\u83b7\u53d6 <strong><code>OpenCV</code></strong> \u6e90\u7801",id:"\u83b7\u53d6-opencv-\u6e90\u7801",level:3},{value:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56",id:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:3},{value:"\u6d4b\u8bd5\u5b89\u88c5",id:"\u6d4b\u8bd5\u5b89\u88c5",level:3},{value:"\u6d4b\u8bd5 opencv-python \u5b89\u88c5",id:"\u6d4b\u8bd5-opencv-python-\u5b89\u88c5",level:3}],m=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem",borderRadius:"5px"}},t)},d={toc:s,Highlight:m};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OpenCV")," \u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u8ba1\u7b97\u673a\u89c6\u89c9\u7684\u5f00\u6e90\u5e93\uff0c\u5b9e\u73b0\u4e86\u5f88\u591a\u56fe\u50cf\u5904\u7406\u548c\u8ba1\u7b97\u673a\u89c6\u89c9\u65b9\u9762\u7684\u901a\u7528\u7b97\u6cd5"),(0,l.kt)("p",null,"\u5b98\u7f51\u867d\u7136\u63d0\u4f9b\u4e86\u9884\u7f16\u8bd1\u597d\u7684\u6587\u4ef6\uff0c\u4f46\u662f\u60f3\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"contrib")," \u62d3\u5c55\u6a21\u5757\u6216\u8005\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"CUDA")," \u7684 GPU \u652f\u6301\uff0c\u5c31\u9700\u8981\u4ece\u6e90\u7801\u7f16\u8bd1"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/opencv-cover-eye.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#windows"},(0,l.kt)(m,{color:"#25c2a0",mdxType:"Highlight"},"Windows\u7bc7")))," ==== ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#linux"},(0,l.kt)(m,{color:"#25c2a0",mdxType:"Highlight"},"Linux\u7bc7")))),(0,l.kt)("h2",{id:"windows"},"Windows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8f6f\u4ef6\u7248\u672c")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Windows 10 22H2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CMake-GUI"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://cmake.org/"},"v3.24.3")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenCV"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/opencv/opencv/releases/tag/4.7.0"},"v4.7.0")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenCV-Contrib"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/opencv/opencv_contrib/releases/tag/4.7.0"},"v4.7.0")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Visual Studio"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://visualstudio.microsoft.com/zh-hans/vs/"},"2022")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(\u53ef\u9009)CUDA"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://developer.nvidia.com/cuda-12-0-0-download-archive"},"v12.0")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(\u53ef\u9009)CUDNN"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://developer.nvidia.com/cudnn"},"v8.8.1")))))),(0,l.kt)("h3",{id:"\u5b89\u88c5-cudacudnn"},"\u5b89\u88c5 CUDA/CUDNN"),(0,l.kt)("p",null,"\u8fd9\u4e00\u6b65\u4ec5\u9488\u5bf9\u6709 NVIDIA GPU \u7684\u8bbe\u5907\uff0c\u4e0d\u9700\u8981\u5219\u8df3\u8f6c\u5230 ",(0,l.kt)("a",{parentName:"p",href:"#%E8%8E%B7%E5%8F%96%E6%BA%90%E7%A0%81"},"\u83b7\u53d6\u6e90\u7801")),(0,l.kt)("h4",{id:"\u4e0b\u8f7d-cuda-\u79bb\u7ebf\u5b89\u88c5\u5305"},"\u4e0b\u8f7d ",(0,l.kt)("a",{parentName:"h4",href:"https://developer.nvidia.com/cuda-12-0-0-download-archive"},"CUDA \u79bb\u7ebf\u5b89\u88c5\u5305")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/CUDA-download.png",alt:null})),(0,l.kt)("p",null,"\u9009\u62e9\u89e3\u538b\u76ee\u5f55\uff0c\u89e3\u538b\u5b8c\u6210\u540e\u5f00\u59cb\u5b89\u88c5\uff0c\u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\u4e3a "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v12.0"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"v12.0")," \u4e3a\u4f60\u6240\u9009\u7684 CUDA \u7248\u672c")),(0,l.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e CUDA \u76ee\u5f55\u4f1a\u88ab\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\uff0c\u5982\u679c\u6ca1\u6709\u88ab\u6dfb\u52a0\uff0c\u624b\u52a8\u6dfb\u52a0\u5230\u7cfb\u7edf path \u53d8\u91cf\u4e2d"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/CUDA-env-path.png",alt:null}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/CUDA-env-path-2.png",alt:null})),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"cmd")," \u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"nvcc -V")," \u67e5\u770b CUDA \u7248\u672c\u4fe1\u606f\uff0c\u9a8c\u8bc1\u5b89\u88c5"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/nvcc-V.png",alt:null})),(0,l.kt)("h4",{id:"\u4e0b\u8f7d-cudnn-\u6587\u4ef6\u538b\u7f29\u5305"},"\u4e0b\u8f7d ",(0,l.kt)("a",{parentName:"h4",href:"https://developer.nvidia.com/cudnn"},"CUDNN \u6587\u4ef6\u538b\u7f29\u5305")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/CUDNN-download.png",alt:null})),(0,l.kt)("p",null,"\u89e3\u538b\u540e\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/cudnn-unzip.png",alt:null})),(0,l.kt)("p",null,"\u5c06\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"LICENSE")," \u5916\u7684\u6587\u4ef6\u5168\u90fd\u590d\u5236\u5230 CUDA \u7684\u5b89\u88c5\u8def\u5f84\u4e0b\uff0c\u5982\u679c\u662f\u9ed8\u8ba4\u5b89\u88c5\u4f4d\u7f6e\uff0c\u5219\u4e3a\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v12.0"))),(0,l.kt)("h4",{id:"\u9a8c\u8bc1-cuda--cudnn-\u5b89\u88c5"},"\u9a8c\u8bc1 CUDA & CUDNN \u5b89\u88c5"),(0,l.kt)("p",null,"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"cmd")," \u8fdb\u5165 CUDA \u5b89\u88c5\u76ee\u5f55\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"extras\\demo_suite")," \u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"cd C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v12.0\\extras\\demo_suite\n")),(0,l.kt)("p",null,"\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"bandwidthTest.exe")," \u8fdb\u884c\u9a8c\u8bc1"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/bandwidthTest.png",alt:null})),(0,l.kt)("p",null,"\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"deviceQuery.exe")," \u8fdb\u884c\u9a8c\u8bc1"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/deviceQuery.png",alt:null})),(0,l.kt)("p",null,"\u90fd\u8f93\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"Result = PASS")," \u5219\u5b89\u88c5\u5b8c\u6210"),(0,l.kt)("h3",{id:"\u83b7\u53d6\u6e90\u7801"},"\u83b7\u53d6\u6e90\u7801"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenCV"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/opencv/opencv/releases/tag/4.7.0"},"v4.7.0")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenCV-Contrib"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/opencv/opencv_contrib/releases/tag/4.7.0"},"v4.7.0")))))),(0,l.kt)("p",null,"\u89e3\u538b\u540e\u653e\u5728\u540c\u4e00\u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u6587\u4ef6\u5939"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/get-soure.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build")," \u6587\u4ef6\u5939\u7528\u6765\u5b58\u653e\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u4efb\u610f\u547d\u540d")),(0,l.kt)("h3",{id:"\u914d\u7f6e-cmake-\u9879\u76ee"},"\u914d\u7f6e CMake \u9879\u76ee"),(0,l.kt)("p",null,"\u6253\u5f00 CMake-GUI \u5206\u522b\u586b\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u6587\u4ef6\u5939\u8def\u5f84\u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv-4.7.0")," \u6e90\u7801\u8def\u5f84"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/build-path.png",alt:null})),(0,l.kt)("p",null,"\u7136\u540e\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"Configure")," \u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u7248\u672c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/Cmake-Configure.png",alt:null})),(0,l.kt)("p",null,"\u4f1a\u51fa\u73b0\u7c7b\u4f3c\u5982\u4e0b\u7684\u7ea2\u8272\u63d0\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/Cmake-Configure-error.png",alt:null})),(0,l.kt)("p",null,"\u539f\u56e0\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"CMake")," \u5728\u914d\u7f6e\u65f6\u4f1a\u9700\u8981\u4e0b\u8f7d\u4e00\u4e9b\u4f9d\u8d56\uff0c\u4f46\u662f\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\uff0c\u5bfc\u81f4\u4f9d\u8d56\u65e0\u6cd5\u4e0b\u8f7d\uff0c\u6839\u636e\u63d0\u793a\uff0c\u53ef\u4ee5\u770b\u5230\u94fe\u63a5\u4e0d\u5230\u7684\u7f51\u5740\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"=======================================================================\n  Couldn't download files from the Internet.\n  Please check the Internet access on this host.\n=======================================================================\n\nCMake Warning at cmake/OpenCVDownload.cmake:248 (message):\n  IPPICV: Download failed: 6;\"Couldn't resolve host name\"\n\n  For details please refer to the download log file:\n\n  E:/workspace/temp/build/CMakeDownloadLog.txt\n\nCall Stack (most recent call first):\n  3rdparty/ippicv/ippicv.cmake:37 (ocv_download)\n  cmake/OpenCVFindIPP.cmake:259 (download_ippicv)\n  cmake/OpenCVFindLibsPerf.cmake:12 (include)\n  CMakeLists.txt:750 (include)\n")),(0,l.kt)("p",null,"\u6839\u636e\u8f93\u51fa\u4fe1\u606f\uff0c\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv-4.7.0\\3rdparty\\ippicv\\ippicv.cmake")," \u6587\u4ef6\u4f4d\u7f6e"),(0,l.kt)("p",null,"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"https://raw.githubusercontent.com/opencv/opencv_3rdparty/${IPPICV_COMMIT}/ippicv/")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"raw.githubusercontent.com")),(0,l.kt)("p",null,"\u5c06 url \u4fee\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"https://raw.fastgit.org/opencv/opencv_3rdparty/${IPPICV_COMMIT}/ippicv/")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0b\u9762\u4e24\u4e2a\u6587\u4ef6\u52a0\u901fCDN\u53ef\u9009"),(0,l.kt)("blockquote",{parentName:"admonition"},(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"https://gitmirror.com/raw.html"},"Github RAW \u52a0\u901f\u670d\u52a1"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"http://fastgit.org/"},"Fast Git"))))),(0,l.kt)("p",{parentName:"admonition"},"1 \u4e2d\u4e0d\u652f\u6301 .(zip|rar|7z|apk|ipa|exe|msi|m3u|m3u8|mp4|mp3) \u7b49\u6587\u4ef6\u7c7b\u578b\u7684\u52a0\u901f")),(0,l.kt)("p",null,"\u518d\u6b21 ",(0,l.kt)("inlineCode",{parentName:"p"},"Configure")," \u53d1\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"ippicv")," \u4e0b\u8f7d\u6210\u529f"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/ippicv-download.png",alt:null})),(0,l.kt)("p",null,"\u4f46\u662f\u4f9d\u7136\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},'FFMPEG: Download failed: 6;"Couldn\'t resolve host name"')," \u7684\u9519\u8bef\u63d0\u793a\uff0c\u6309\u524d\u9762\u7684\u65b9\u5f0f\u4fee\u6539 url \u540e\u7ee7\u7eed ",(0,l.kt)("inlineCode",{parentName:"p"},"Configure")),(0,l.kt)("p",null,"\u9519\u8bef\u4fe1\u606f\u5168\u90e8\u6e05\u9664\u540e\u5c06\u51fa\u73b0"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/Configure-done.png",alt:null})),(0,l.kt)("h3",{id:"\u8bbe\u7f6e-cmake-\u6784\u5efa\u9009\u9879"},"\u8bbe\u7f6e CMake \u6784\u5efa\u9009\u9879"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u5b8c\u8bbe\u7f6e\u540e\u90fd\u91cd\u65b0 ",(0,l.kt)("inlineCode",{parentName:"strong"},"Configure"))),(0,l.kt)("p",null,"\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenCV-Contrib")," \u8def\u5f84"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OPENCV_EXTRA_MODULES_PATH")," \u586b\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"opencv_contrib-4.7.0/modules")," \u8def\u5f84")),(0,l.kt)("p",null,"\u540c\u6837\u51fa\u73b0\u4e00\u4e9b\u6587\u4ef6\u4e0b\u8f7d\u5931\u8d25\u7684\u8b66\u544a\uff0c\u6309\u7167\u4e4b\u524d\u7684\u65b9\u5f0f\uff0c\u4fee\u6539 url \u6e05\u9664\u5168\u90e8\u8b66\u544a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(m,{color:"#FFA500",mdxType:"Highlight"},"[\u53ef\u9009]")," \u5f00\u542f CUDA \u652f\u6301")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/with-CUDA.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(m,{color:"#FFA500",mdxType:"Highlight"},"[\u53ef\u9009]")," \u7f16\u8bd1 CUDA \u652f\u6301\u7684 Python \u5305")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/blog/opencv-contirb-cuda/with-Python.png",alt:null})),(0,l.kt)("p",null,"\u5982\u679c\u542f\u7528\u4e86 anaconda \u73af\u5883\uff0c\u5219\u9700\u8981\u5c06\u5bf9\u5e94\u7684 python lib \u8def\u5f84\u8bbe\u7f6e\u4e3a\u6b63\u786e\u7684\u8def\u5f84"),(0,l.kt)("h3",{id:"visual-studio-\u6267\u884c\u7f16\u8bd1"},"Visual Studio \u6267\u884c\u7f16\u8bd1"),(0,l.kt)("h2",{id:"linux"},"Linux"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8f6f\u4ef6\u7248\u672c")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Ubuntu 20.04.5 LTS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CMake-GUI"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://cmake.org/"},"v3.24.3")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenCV"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/opencv/opencv/releases/tag/4.7.0"},"v4.7.0")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OpenCV-Contrib"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/opencv/opencv_contrib/releases/tag/4.7.0"},"v4.7.0")))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/opencv/opencv_extra/releases/tag/4.7.0"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"opencv_extra-4.7.0"))),"\nVisual Studio | ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://visualstudio.microsoft.com/zh-hans/vs/"},"2022")),"\n(\u53ef\u9009)CUDA | ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://developer.nvidia.com/cuda-12-0-0-download-archive"},"v12.0")),"\n(\u53ef\u9009)CUDNN | ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://developer.nvidia.com/cudnn"},"v8.8.1")))),(0,l.kt)("h3",{id:"\u83b7\u53d6-opencv-\u6e90\u7801"},"\u83b7\u53d6 ",(0,l.kt)("strong",{parentName:"h3"},(0,l.kt)("inlineCode",{parentName:"strong"},"OpenCV"))," \u6e90\u7801"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/opencv/opencv/releases/tag/4.7.0"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"opencv-4.7.0")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/opencv/opencv_contrib/releases/tag/4.7.0"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"opencv_contrib-4.7.0")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/opencv/opencv_extra/releases/tag/4.7.0"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"opencv_extra-4.7.0"))))),(0,l.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\u89e3\u538b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tar zxvf opencv-4.7.0.tar.gz ~/workspace/opencv/4.7.0/\ntar zxvf opencv_contrib-4.7.0.tar.gz ~/workspace/opencv/4.7.0/\ntar zxvf opencv_extra-4.7.0.tar.gz ~/workspace/opencv/4.7.0/\n")),(0,l.kt)("h3",{id:"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"},"\u5b89\u88c5\u5404\u79cd\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install \\\nbuild-essential \\\ncmake \\\ngit \\\nlibgtk2.0-dev \\\npkg-config \\\nlibavcodec-dev \\\nlibavformat-dev \\\nlibswscale-dev \\\nlibtbb2 \\\nlibtbb-dev \\\nlibjpeg-dev \\\nlibpng-dev \\\nlibtiff-dev \\\nlibdc1394-22 \\\nlibglew-dev \\\nzlib1g-dev \\\nlibavutil-dev \\\nlibpostproc-dev \\\nlibeigen3-dev \\\nlibopenexr-dev \\\nlibwebp-dev \\\nlibgtk-3-dev \\\nqtbase5-dev \\\nlibgstreamer1.0-dev \\\nlibgstreamer-plugins-base1.0-dev\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"libjasper-dev")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo add-apt-repository "deb http://security.ubuntu.com/ubuntu xenial-security main"\nsudo apt update\nsudo apt install libjasper-dev\n')),(0,l.kt)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,l.kt)("p",null,"\u65b0\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"build/")," \u76ee\u5f55\u5b58\u653e\u7f16\u8bd1\u751f\u6210\u7684\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/workspace/opencv/4.7.0/;mkdir build;cd build\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)(m,{color:"#FFA500",mdxType:"Highlight"},"[\u53ef\u9009]"))," \u914d\u7f6e\u5e76\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"makefile")," \u8fc7\u7a0b\u4e2d\u4f1a\u4e0b\u8f7d\u4e00\u4e9b\u4f9d\u8d56\u5185\u5bb9\uff0c\u5efa\u8bae\u5f00\u542f\u7f51\u7edc\u4ee3\u7406")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export http_proxy=socks5://127.0.0.1:7890;export https_proxy=socks5://127.0.0.1:7890;export all_proxy=socks5://127.0.0.1:7890\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)(m,{color:"#FFA500",mdxType:"Highlight"},"[\u53ef\u9009]"))," \u5982\u679c\u4f60\u7684 Python \u73af\u5883\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Anaconda")," \u6216\u8005\u662f\u5176\u4ed6\u7684 python \u73af\u5883\u7ba1\u7406\u5e94\u7528\uff0c\u8bb0\u5f97\u542f\u7528\u4f60\u7684\u865a\u62df\u73af\u5883\uff0c\u8fd9\u91cc\u4f1a\u914d\u7f6e python \u5305\u7684\u8def\u5f84\uff0c\u7f16\u8bd1\u652f\u6301 CUDA \u7684 opencv-python \u7248\u672c")),(0,l.kt)(r.Z,{defaultValue:"gpu",values:[{label:"\u4ec5CPU",value:"cpu"},{label:"GPU\u652f\u6301",value:"gpu"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"cpu",mdxType:"TabItem"},(0,l.kt)("p",null,"\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake")," \u53c2\u6570\uff0c\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv_extra")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv_contrib")," \u7684\u8def\u5f84"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cmake -DCMAKE_BUILD_TYPE=Release \\\n    -DCMAKE_INSTALL_PREFIX=/usr/local \\\n    -DOPENCV_GENERATE_PKGCONFIG=YES \\\n    -DWITH_QT=ON \\\n    -DWITH_OPENGL=ON \\\n    -DWITH_TBB=ON \\\n    -DWITH_GTK=ON \\\n    -DBUILD_opencv_python2=OFF \\\n    -DBUILD_opencv_python3=OFF \\\n    -DINSTALL_TESTS=ON \\\n    -DOPENCV_TEST_DATA_PATH=../opencv_extra-4.7.0/testdata \\\n    -DOPENCV_EXTRA_MODULES_PATH=../opencv_contrib-4.7.0/modules \\\n    ../opencv-4.7.0\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u9009\u62e9\u4e0d\u7f16\u8bd1 ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv-python")," \u5305\uff0cCPU \u7248\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv-python")," \u76f4\u63a5 pip \u5b89\u88c5\u5373\u53ef")),(0,l.kt)(o.Z,{value:"gpu",mdxType:"TabItem"},(0,l.kt)("p",null,"\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake")," \u53c2\u6570\uff0c\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv_extra")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"opencv_contrib")," \u7684\u8def\u5f84"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cmake -DCMAKE_BUILD_TYPE=Release \\\n    -DCMAKE_INSTALL_PREFIX=/usr/local \\\n    -DOPENCV_GENERATE_PKGCONFIG=YES \\\n    -DWITH_QT=ON \\\n    -DWITH_OPENGL=ON \\\n    -DWITH_TBB=ON \\\n    -DWITH_OPENCL=ON \\\n    -DWITH_FFMPEG=ON \\\n    -DWITH_CUDA=ON \\\n    -DOPENCV_DNN_CUDA=ON \\\n    -DCUDA_ARCH_BIN=5.0,5.2,6.0,6.1,7.0,7.5,8.0,8.6,8.9,9.0 \\\n    -DENABLE_FAST_MATH=ON \\\n    -DCUDA_FAST_MATH=ON \\\n    -DWITH_CUBLAS=ON \\\n    -DWITH_GTK=ON \\\n    -DCUDA_TOOLKIT_ROOT_DIR=/usr/local/cuda \\\n    -DCUDA_ARCH_PTX="" \\\n    -DINSTALL_TESTS=ON \\\n    -DBUILD_WITH_DEBUG_INFO=ON \\\n    -DBUILD_opencv_python3=ON \\\n    -DPYTHON3_NUMPY_INCLUDE_DIRS=$(python3 -c "import numpy; print(numpy.get_include())") \\\n    -DPYTHON3_PACKAGES_PATH=$(python3 -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())") \\\n    -DPYTHON3_LIBRARY=$(python3 -c "from distutils.sysconfig import get_config_var;from os.path import dirname,join ; print(join(dirname(get_config_var(\'LIBPC\')),get_config_var(\'LDLIBRARY\')))") \\\n    -DOPENCV_TEST_DATA_PATH=../opencv_extra-4.7.0/testdata \\\n    -DOPENCV_EXTRA_MODULES_PATH=../opencv_contrib-4.7.0/modules \\\n    ../opencv-4.7.0\n')))),(0,l.kt)("p",null,"\u751f\u6210\u5b8c\u4e4b\u540e\u5f00\u59cb\u7f16\u8bd1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NUM_CPU=$(nproc)\nmake -j$(($NUM_CPU - 1))\n")),(0,l.kt)("p",null,"\u7b49\u5f85\u7f16\u8bd1\u5b8c\u6210\u540e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo make install\n")),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u5b89\u88c5"},"\u6d4b\u8bd5\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pkg-config --libs opencv4\n")),(0,l.kt)("h3",{id:"\u6d4b\u8bd5-opencv-python-\u5b89\u88c5"},"\u6d4b\u8bd5 opencv-python \u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'python -c "import cv2;print(cv2.getBuildInformation())"\n')))}k.isMDXComponent=!0}}]);