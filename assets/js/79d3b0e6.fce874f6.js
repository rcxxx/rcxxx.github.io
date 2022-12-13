"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[1361],{85162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),l=t(86010);const r="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(87462),l=t(67294),r=t(86010),i=t(72389),s=t(67392),o=t(7094),u=t(12466);const m="tabList__CuJ",p="tabItem_LNqP";function c(e){const{lazy:a,block:t,defaultValue:i,values:c,groupId:d,className:k}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??b.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),h=(0,s.l)(g,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===i?i:i??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,o.U)(),[f,T]=(0,l.useState)(N),y=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=d){const e=v[d];null!=e&&e!==f&&g.some((a=>a.value===e))&&T(e)}const C=e=>{const a=e.currentTarget,t=y.indexOf(a),n=g[t].value;n!==f&&(x(a),T(n),null!=d&&w(d,String(n)))},E=e=>{let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;a=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;a=y[t]??y[y.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},k)},g.map((e=>{let{value:a,label:t,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:f===a?0:-1,"aria-selected":f===a,key:a,ref:e=>y.push(e),onKeyDown:E,onClick:C},i,{className:(0,r.Z)("tabs__item",p,i?.className,{"tabs__item--active":f===a})}),t??a)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==f})))))}function d(e){const a=(0,i.Z)();return l.createElement(c,(0,n.Z)({key:String(a)},e))}},31937:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),l=t(45697),r=t.n(l);const i="videoFrame_DuF0";function s(e){let{src:a,bsrc:t}=e;return n.createElement(n.Fragment,null,n.createElement("iframe",{src:a,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:i}))}s.propTypes={src:r().string.isRequired,bsrc:r().string};const o=s},51007:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(67294);const l="browserWindow_my1Q",r="browserWindowHeader_jXSR",i="buttons_uHc7",s="browserWindowAddressBar_Pd8y",o="dot_giz1",u="browserWindowMenuIcon_Vhuh",m="bar_rrRL",p="browserWindowBody_Idgs";const c=function(e){let{children:a,minHeight:t,url:c}=e;return n.createElement("div",{className:l,style:{minHeight:t}},n.createElement("div",{className:r},n.createElement("div",{className:i},n.createElement("span",{className:o,style:{background:"#f25f58"}}),n.createElement("span",{className:o,style:{background:"#fbbe3c"}}),n.createElement("span",{className:o,style:{background:"#58cb42"}})),n.createElement("div",{className:s},c),n.createElement("div",{className:u},n.createElement("div",null,n.createElement("span",{className:m}),n.createElement("span",{className:m}),n.createElement("span",{className:m})))),n.createElement("div",{className:p},a))}},5296:(e,a,t)=>{t.r(a),t.d(a,{Highlight:()=>d,assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>k});var n=t(87462),l=(t(67294),t(3905)),r=(t(83989),t(65488)),i=t(85162),s=t(51007),o=t(31937);const u={id:"about-write",title:"\u98ce\u683c\u6307\u5317",sidebar_label:"\u7f16\u8f91"},m="Docusaurus \u98ce\u683c\u6307\u5317",p={unversionedId:"site/about-write",id:"site/about-write",title:"\u98ce\u683c\u6307\u5317",description:"- \u8be6\u89c1\u8fd9\u7bc7\u5b98\u7f51\u6587\u6863\u2014\u2014 \u82f1\u6587",source:"@site/docs/site/about-write.md",sourceDirName:"site",slug:"/site/about-write",permalink:"/docs/site/about-write",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/site/about-write.md",tags:[],version:"current",frontMatter:{id:"about-write",title:"\u98ce\u683c\u6307\u5317",sidebar_label:"\u7f16\u8f91"},sidebar:"\ud83d\udea9site",previous:{title:"\u90e8\u7f72",permalink:"/docs/site/about-deploy"}},c={},d=e=>{let{children:a,color:t}=e;return(0,l.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},a)},k=[{value:"Code",id:"code",level:2},{value:"MDX",id:"mdx",level:2},{value:"Code Tabs",id:"code-tabs",level:3},{value:"BrowserWindow",id:"browserwindow",level:2},{value:"\u8fd9\u91cc\u662f\u5185\u5bb9",id:"\u8fd9\u91cc\u662f\u5185\u5bb9",level:2},{value:"\u5185\u5d4c Bilibili \u89c6\u9891",id:"\u5185\u5d4c-bilibili-\u89c6\u9891",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],b={Highlight:d,toc:k};function g(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"docusaurus-\u98ce\u683c\u6307\u5317"},"Docusaurus \u98ce\u683c\u6307\u5317"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8be6\u89c1\u8fd9\u7bc7",(0,l.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/markdown-features"},"\u5b98\u7f51\u6587\u6863"),"\u2014\u2014 \u82f1\u6587"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u8bed\u6cd5\u4e0e ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"markdown"))," \u76f8\u4f3c"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4e0b\u9762\u7684\u5185\u5bb9\u4e5f\u77e5\u8bc6\u4e00\u4e9b\u81ea\u5df1\u7684\u603b\u7ed3\uff0c\u4e0e\u6587\u6863\u4e2d\u6ca1\u6709\u533a\u522b")),(0,l.kt)("h2",{id:"code"},"Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7801\u7247\u6bb5\u9ad8\u4eae\uff0c\u8bed\u6cd5\u5982\u4e0b",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"    ```js {2}\n    function highlightMe() {\n    console.log('This line can be highlighted!');\n    }\n    ```\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6548\u679c",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"function highlightMe() {\nconsole.log('This line can be highlighted!');\n}\n"))),(0,l.kt)("li",{parentName:"ul"},"\u60f3\u9ad8\u4eae\u591a\u884c\u53ef\u5c06 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"{2}"))," \u6539\u4e3a ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"{1-3}")),"\uff0c\u5373\u53ef\u591a\u884c\u9ad8\u4eae")))),(0,l.kt)("h2",{id:"mdx"},"MDX"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"MDX"))," \u662f\u4e00\u79cd\u53ef\u7f16\u8f91\u7684\u683c\u5f0f\uff0c\u53ef\u4ee5\u5728 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Markdown"))," \u6587\u6863\u4e2d\u65e0\u7f1d\u7f16\u5199 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"JSX"))),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u67e5\u770b\u8fd9\u7bc7",(0,l.kt)("a",{parentName:"li",href:"https://mdxjs.com/"},"\u6587\u6863\ud83d\udc48"),"\uff0c\u4e5f\u53ef\u4ee5\u5728 ",(0,l.kt)("strong",{parentName:"li"},"YouTube")," \u89c2\u770b\u76f8\u5173",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=d2sQiI5NFAM&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u"},"\u89c6\u9891\ud83d\udcf7")),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u7b80\u5355\u7684\u793a\u4f8b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Markdown"))," \u6dfb\u52a0\u5982\u4e0b\u8bed\u53e5",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => ( <span style={{\n    backgroundColor: color,\n    borderRadius: '2px',\n    color: '#fff',\n    padding: '0.2rem',\n    }}>{children}</span> );\n"))),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u65f6\u5982\u4e0b",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-md"},'<Highlight color="#25c2a0">Docusaurus green</Highlight>\n')))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6700\u7ec8\u6548\u679c\ud83d\udc49",(0,l.kt)(d,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green"),"\ud83d\udc48")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tabs"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u52a0\u5165\u5982\u4e0b\u5185\u5bb9"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-md"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\ndefaultValue=\"apple\"\nvalues={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n]}>\n<TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n<TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n<TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6548\u679c\ud83d\udc47"))))),(0,l.kt)(r.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,l.kt)(i.Z,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,l.kt)(i.Z,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,l.kt)("h3",{id:"code-tabs"},"Code Tabs"),(0,l.kt)(r.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,l.kt)(i.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"def hello_world():\n  print 'Hello, world!'\n"))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n')))),(0,l.kt)("h2",{id:"browserwindow"},"BrowserWindow"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5173\u7ec4\u4ef6\u4f4d\u4e8e ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/personal-site/tree/master/src/components/BrowserWindow"},(0,l.kt)("inlineCode",{parentName:"a"},"@site/src/components/BrowserWindow")))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003\u81ea\u5b98\u65b9\u7ad9\u70b9\u6e90\u7801"),(0,l.kt)("li",{parentName:"ul"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"import BrowserWindow from '@site/src/components/BrowserWindow';\n\n<BrowserWindow minHeight={240} url=\"http://localhost:3000\">\n\n# \u8fd9\u662f\u4e00\u4e2a\u6d4f\u89c8\u5668\u7a97\u53e3\n\n\n</BrowserWindow>\n")),(0,l.kt)(s.Z,{minHeight:240,url:"http://localhost:3000",mdxType:"BrowserWindow"},(0,l.kt)("h1",{id:"\u8fd9\u662f\u4e00\u4e2a\u6d4f\u89c8\u5668\u7a97\u53e3"},"\u8fd9\u662f\u4e00\u4e2a\u6d4f\u89c8\u5668\u7a97\u53e3"),(0,l.kt)("h2",{id:"\u8fd9\u91cc\u662f\u5185\u5bb9"},"\u8fd9\u91cc\u662f\u5185\u5bb9")),(0,l.kt)("h2",{id:"\u5185\u5d4c-bilibili-\u89c6\u9891"},"\u5185\u5d4c Bilibili \u89c6\u9891"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5173\u7ec4\u4ef6\u4f4d\u4e8e ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/personal-site/tree/master/src/components/BVideo"},(0,l.kt)("inlineCode",{parentName:"a"},"@site/src/components/BVideo")))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003\u81ea ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://zxuqian.cn/"},(0,l.kt)("inlineCode",{parentName:"a"},"https://zxuqian.cn/"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'import BVideo from "@site/src/components/BVideo";\n\n<BVideo src="" bsrc=""/>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src")," \u4e2d\u653e ",(0,l.kt)("inlineCode",{parentName:"li"},"Bilibili")," \u5206\u4eab\u89c6\u9891\u7684\u5d4c\u5165\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bsrc")," \u4e2d\u653e\u89c6\u9891\u7684\u7f51\u9875 ",(0,l.kt)("inlineCode",{parentName:"li"},"url"))),(0,l.kt)(s.Z,{mdxType:"BrowserWindow"},(0,l.kt)(o.Z,{src:"https://www.bilibili.com/bangumi/play/ep374668?from=search&seid=5105236372748998047&spm_id_from=333.337.0.0",bsrc:"https://www.bilibili.com/bangumi/play/ep374668?from=search&seid=5105236372748998047&spm_id_from=333.337.0.0",mdxType:"BVideo"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6211\u4e24\u4e2a\u90fd\u653e\u4e86\u7f51\u9875\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"url")," \u6548\u679c\u5c31\u6ca1\u90a3\u4e48\u597d\u4e86\xb7\xb7\xb7\xb7\xb7\xb7")),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://www.docusaurus.cn/docs/markdown-features"},"Markdown Features")))))}g.isMDXComponent=!0}}]);