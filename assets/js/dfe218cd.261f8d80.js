"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[5309],{85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),i=a(67392),s=a(7094),p=a(12466);const m="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:o,values:c,groupId:u,className:k}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:b}=(0,s.U)(),[v,y]=(0,l.useState)(f),_=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=u){const e=w[u];null!=e&&e!==v&&h.some((t=>t.value===e))&&y(e)}const x=e=>{const t=e.currentTarget,a=_.indexOf(t),n=h[a].value;n!==v&&(C(t),y(n),null!=u&&b(u,String(n)))},M=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},k)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>_.push(e),onKeyDown:M,onClick:x},o,{className:(0,r.Z)("tabs__item",d,o?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,o.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},31937:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(45697),r=a.n(l);const o="videoFrame_DuF0";function i(e){let{src:t,bsrc:a}=e;return n.createElement(n.Fragment,null,n.createElement("iframe",{src:t,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:o}))}i.propTypes={src:r().string.isRequired,bsrc:r().string};const s=i},51007:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294);const l="browserWindow_my1Q",r="browserWindowHeader_jXSR",o="buttons_uHc7",i="browserWindowAddressBar_Pd8y",s="dot_giz1",p="browserWindowMenuIcon_Vhuh",m="bar_rrRL",d="browserWindowBody_Idgs";const c=function(e){let{children:t,minHeight:a,url:c}=e;return n.createElement("div",{className:l,style:{minHeight:a}},n.createElement("div",{className:r},n.createElement("div",{className:o},n.createElement("span",{className:s,style:{background:"#f25f58"}}),n.createElement("span",{className:s,style:{background:"#fbbe3c"}}),n.createElement("span",{className:s,style:{background:"#58cb42"}})),n.createElement("div",{className:i},c),n.createElement("div",{className:p},n.createElement("div",null,n.createElement("span",{className:m}),n.createElement("span",{className:m}),n.createElement("span",{className:m})))),n.createElement("div",{className:d},t))}},68963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var n=a(87462),l=(a(67294),a(3905)),r=(a(83989),a(51007)),o=a(31937),i=a(65488),s=a(85162);const p={id:"Cat-food-machine-based-on-MegFLow",title:"\u57fa\u4e8e\u65f7\u89c6\u5f00\u6e90\u6846\u67b6MegFlow\u7684\u732b\u7cae\u673a(1)",sidebar_label:"\u732b\u54aa\u68c0\u6d4b\u4e0e\u7279\u5f81\u63d0\u53d6"},m=void 0,d={unversionedId:"project/studio/\u732b\u7cae\u673a/Cat-food-machine-based-on-MegFLow",id:"project/studio/\u732b\u7cae\u673a/Cat-food-machine-based-on-MegFLow",title:"\u57fa\u4e8e\u65f7\u89c6\u5f00\u6e90\u6846\u67b6MegFlow\u7684\u732b\u7cae\u673a(1)",description:"\u89c6\u9891\u6f14\u793a",source:"@site/docs/docs/project/studio/\u732b\u7cae\u673a/\u57fa\u4e8e\u65f7\u89c6\u5f00\u6e90\u6846\u67b6MegFlow\u7684\u732b\u7cae\u673a_01.md",sourceDirName:"project/studio/\u732b\u7cae\u673a",slug:"/project/studio/\u732b\u7cae\u673a/Cat-food-machine-based-on-MegFLow",permalink:"/docs/project/studio/\u732b\u7cae\u673a/Cat-food-machine-based-on-MegFLow",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/docs/project/studio/\u732b\u7cae\u673a/\u57fa\u4e8e\u65f7\u89c6\u5f00\u6e90\u6846\u67b6MegFlow\u7684\u732b\u7cae\u673a_01.md",tags:[],version:"current",frontMatter:{id:"Cat-food-machine-based-on-MegFLow",title:"\u57fa\u4e8e\u65f7\u89c6\u5f00\u6e90\u6846\u67b6MegFlow\u7684\u732b\u7cae\u673a(1)",sidebar_label:"\u732b\u54aa\u68c0\u6d4b\u4e0e\u7279\u5f81\u63d0\u53d6"},sidebar:"\ud83d\udcafproject",previous:{title:"\u63a7\u5236\u76f8\u673a",permalink:"/docs/project/studio/3D\u6253\u5370\u5ef6\u65f6\u6444\u5f71/gphoto2-get-capture"},next:{title:"\u732b\u54aa\u68c0\u6d4b\u4e0e\u7279\u5f81\u63d0\u53d6",permalink:"/docs/project/studio/\u732b\u7cae\u673a/Cat-food-machine-based-on-MegFLow"}},c={},u=[{value:"\u89c6\u9891\u6f14\u793a",id:"\u89c6\u9891\u6f14\u793a",level:3},{value:"\u9879\u76ee\u5730\u5740",id:"\u9879\u76ee\u5730\u5740",level:3},{value:"<code>MegFlow</code>",id:"megflow",level:2},{value:"\u529f\u80fd\u5b9e\u73b0",id:"\u529f\u80fd\u5b9e\u73b0",level:2},{value:"\u81ea\u5b9a\u4e49\u529f\u80fd\u63d2\u4ef6",id:"\u81ea\u5b9a\u4e49\u529f\u80fd\u63d2\u4ef6",level:3},{value:"\u8bfb\u53d6\u672c\u5730\u89c6\u9891\u6216\u662f\u6444\u50cf\u5934",id:"\u8bfb\u53d6\u672c\u5730\u89c6\u9891\u6216\u662f\u6444\u50cf\u5934",level:4},{value:"YOLOX \u76ee\u6807\u68c0\u6d4b\uff0c\u6807\u8bb0\u51fa\u6240\u6709\u732b\u732b",id:"yolox-\u76ee\u6807\u68c0\u6d4b\u6807\u8bb0\u51fa\u6240\u6709\u732b\u732b",level:4},{value:"\u5bf9\u68c0\u6d4b\u7684\u7ed3\u679c\u6267\u884c\u8ddf\u8e2a\uff0c\u5e76\u5bf9\u8ddf\u8e2a\u7ed3\u679c\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406",id:"\u5bf9\u68c0\u6d4b\u7684\u7ed3\u679c\u6267\u884c\u8ddf\u8e2a\u5e76\u5bf9\u8ddf\u8e2a\u7ed3\u679c\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406",level:4},{value:"Resnet50 \u63d0\u53d6\u7279\u5f81",id:"resnet50-\u63d0\u53d6\u7279\u5f81",level:4},{value:"\u5728\u672c\u5730\u7684 <code>redis</code> \u5b58\u50a8\u4e2d\u641c\u7d22\u7279\u5f81",id:"\u5728\u672c\u5730\u7684-redis-\u5b58\u50a8\u4e2d\u641c\u7d22\u7279\u5f81",level:4},{value:"\u6839\u636e\u7279\u5f81\u7684\u5339\u914d\u7ed3\u679c\u6807\u8bb0\u76f8\u5e94\u7684\u732b\u54aa",id:"\u6839\u636e\u7279\u5f81\u7684\u5339\u914d\u7ed3\u679c\u6807\u8bb0\u76f8\u5e94\u7684\u732b\u54aa",level:4},{value:"\u5c06\u7ed3\u679c\u8fdb\u884c\u53ef\u89c6\u5316",id:"\u5c06\u7ed3\u679c\u8fdb\u884c\u53ef\u89c6\u5316",level:4},{value:"\u4fee\u6539 <code>toml</code> \u6587\u4ef6\u8bbe\u7f6e <code>MegFLow</code> \u7684\u5de5\u4f5c\u56fe",id:"\u4fee\u6539-toml-\u6587\u4ef6\u8bbe\u7f6e-megflow-\u7684\u5de5\u4f5c\u56fe",level:3},{value:"\u8bfb\u53d6\u89c6\u9891\u8fdb\u884c\u6d4b\u8bd5",id:"\u8bfb\u53d6\u89c6\u9891\u8fdb\u884c\u6d4b\u8bd5",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],k={toc:u};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{mdxType:"BrowserWindow"},(0,l.kt)("h3",{id:"\u89c6\u9891\u6f14\u793a"},"\u89c6\u9891\u6f14\u793a"),(0,l.kt)(o.Z,{src:"//player.bilibili.com/player.html?aid=635056677&bvid=BV1Ub4y1v7SE&cid=467195886&page=1",bsrc:"https://www.bilibili.com/video/bv1Ub4y1v7SE",mdxType:"BVideo"}),(0,l.kt)("h3",{id:"\u9879\u76ee\u5730\u5740"},"\u9879\u76ee\u5730\u5740"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders"},"rcxxx/MegFlow \u2014\u2014 cat_feeders")))),(0,l.kt)("p",null,"\u820d\u53cb\u7684\u670b\u53cb\u8981\u628a\u732b\u54aa\u9001\u8fc7\u6765\u5e2e\u5fd9\u7167\u987e\u51e0\u5929\uff0c\u8fd9\u6837\u5bb6\u91cc\u5c31\u4e00\u4e0b\u5b50\u6709\u4e86\u4e24\u53ea\u732b\uff0c\u6295\u5582\u4e24\u53ea\u732b\u54aa\u7684\u5de5\u4f5c\u91cf\u5e76\u4e0d\u662f \u201cx2\u201d \u90a3\u4e48\u7b80\u5355\uff0c\u6240\u8c13\u61d2\u662f\u79d1\u6280\u8fdb\u6b65\u7684\u9636\u68af\uff0c\u56e0\u4e3a\u61d2\uff0c\u6240\u4ee5\u51c6\u5907\u505a\u4e00\u4e2a\u81ea\u52a8\u6295\u5582\u7684\u732b\u7cae\u673a\uff0c\u5e76\u4e0d\u662f\u5b9a\u65f6\u5b9a\u91cf\u7684\u81ea\u52a8\u6295\u5582\uff0c\u90a3\u6837\u8fd8\u9700\u8981\u4e70\u4e00\u4e2a\u732b\u7cae\u673a\uff0c\u5e76\u4e14\u8fd8\u9700\u8981\u7ecf\u5e38\u8bbe\u7f6e\u548c\u4fee\u6539\u732b\u7cae\u673a\u5582\u98df\u7684\u65f6\u95f4\u4ee5\u53ca\u6570\u91cf\uff0c\u5e76\u4e14\u4e24\u53ea\u732b\u7684\u8bdd\uff0c\u5c31\u4f1a\u51fa\u73b0\u66f4\u591a\u7684\u95ee\u9898"),(0,l.kt)("p",null,"\u4e8e\u662f\u6211\u4eec\u51c6\u5907\u505a\u4e00\u4e2a\u80fd\u591f\u77e5\u9053\u7897\u91cc\u8fd8\u6709\u6ca1\u6709\u732b\u7cae\uff0c\u5e76\u4e14\u80fd\u591f\u8ba4\u8bc6\u4e24\u53ea\u732b\u54aa\u5e76\u8fdb\u884c\u5206\u522b\u7684\u81ea\u52a8\u6295\u5582\u7684\u732b\u7cae\u673a\uff0c\u7b80\u5355\u7684\u6267\u884c\u903b\u8f91\u5982\u4e0b"),(0,l.kt)("p",null,"\u5176\u4ed6\u7684\u90fd\u6bd4\u8f83\u597d\u529e\uff0c\u5173\u952e\u662f\u600e\u4e48\u8ba9\u732b\u7cae\u673a\u8ba4\u8bc6\u4e24\u53ea\u732b\uff0c\u6839\u636e\u6700\u521d\u7684\u60f3\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7AI\u7b97\u6cd5\u5bf9\u4e24\u53ea\u732b\u54aa\u8fdb\u884c\u68c0\u6d4b\u548c\u533a\u5206\uff0c\u76f8\u5173\u7684\u5f00\u6e90\u8d44\u6599\u975e\u5e38\u4e30\u5bcc\uff0c\u4e8e\u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"GitHub")," \u91cc\u641c\u7d22\u76f8\u5173\u8d44\u6599\uff0c\u8fd8\u771f\u627e\u5230\u4e86\u4e00\u4e2a\u975e\u5e38\u6613\u7528\u7684\u6846\u67b6\uff0c\u5e76\u4e14\u6709\u4e00\u4e2a\u53eb ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://megflow.readthedocs.io/zh_CN/latest/built-in-applications/cat_finder.html"},(0,l.kt)("inlineCode",{parentName:"a"},"\u732b\u732b\u56f4\u680f")))," \u7684 ",(0,l.kt)("strong",{parentName:"p"},"Demo")," \u53ef\u4ee5\u5b9e\u73b0\u7c7b\u4f3c\u7684\u529f\u80fd"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/MegFlow-Cat_feeder/megflow-wechat.png",alt:null})),(0,l.kt)("p",null,"\u5148\u6765\u4e86\u89e3\u4e00\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"MegFlow")," \u8fd9\u4e2a\u6846\u67b6"),(0,l.kt)("h2",{id:"megflow"},(0,l.kt)("inlineCode",{parentName:"h2"},"MegFlow")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"MegFlow \u63d0\u4f9b\u5feb\u901f\u89c6\u89c9\u5e94\u7528\u843d\u5730\u6d41\u7a0b\uff0c\u6700\u5feb 15 \u5206\u949f\u642d\u5efa\u8d77\u89c6\u9891\u5206\u6790\u670d\u52a1 ...")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/MegEngine/MegFlow"},(0,l.kt)("img",{parentName:"a",src:"https://github.com/MegEngine/MegFlow/raw/master/logo.png",alt:null}))),(0,l.kt)("p",null,"\u6309\u7167 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://megflow.readthedocs.io/zh_CN/latest/how-to-build-and-run/run-in-15-minutes.zh.html"},"\u5b98\u65b9\u6587\u6863"))," \u5b89\u88c5\u8fd0\u884c\u73af\u5883\u540e\uff0c\u8fd0\u884c\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"\u732b\u732b\u56f4\u680f")," \u793a\u4f8b\u7a0b\u5e8f"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/MegFlow-Cat_feeder/MegFLow-demo-display.png",alt:null})),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u80fd\u591f\u6210\u529f\u68c0\u6d4b\u5230\u56fe\u7247\u4e2d\u7684\u732b\u54aa\uff0c\u8fd9\u91cc\u542f\u52a8\u7684\u5176\u5b9e\u662f\u8be5\u9879\u76ee\u91cc\u7684\u4e00\u4e2a\u6ce8\u518c\u670d\u52a1\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"YOLOX")," \u6267\u884c\u76ee\u6807\u68c0\u6d4b\uff0c\u68c0\u6d4b\u56fe\u50cf\u4e2d\u7684\u732b\u54aa"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"Resnet50")," \u5bf9\u732b\u54aa\u7684\u7279\u5f81\u8fdb\u884c\u63d0\u53d6\uff0c\u7136\u540e\u4e0e\u8f93\u5165\u7684\u6807\u7b7e\u5bf9\u5e94\uff08\u4e5f\u5c31\u662f\u732b\u54aa\u7684\u540d\u5b57\uff09\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"redis")," \u8fdb\u884c\u5bf9\u5e94\u7684\u5b58\u50a8\uff0c\u5c06\u4f1a\u5b58\u50a8\u5728\u672c\u5730\uff0c\u540e\u7eed\u7684\u64cd\u4f5c\u5c31\u80fd\u901a\u8fc7\u641c\u7d22\u5b58\u50a8\u8fc7\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u5bf9\u4e0d\u540c\u7684\u732b\u54aa\u8fdb\u884c\u8bc6\u522b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u7684\u4e24\u4e2a\u7f51\u7edc\u6a21\u578b\u90fd\u5df2\u7ecf\u5b9e\u73b0\u4e86\uff0c\u7528\u7684\u662f\u540c\u6837\u4e3a\u65f7\u89c6\u5f00\u6e90\u7684\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/MegEngine/MegEngine"},(0,l.kt)("inlineCode",{parentName:"a"},"MegEngine"))),"\uff0c\u4e0d\u9700\u8981\u81ea\u5df1\u53bb\u642d\u5efa\u4ee5\u53ca\u8bad\u7ec3\uff0c\u7701\u4e86\u4e0d\u5c11\u5de5\u4f5c\u91cf")),(0,l.kt)("p",null,"\u4f46\u662f\u8fd9\u91cc\u8fd8\u6ca1\u6709\u5b9e\u73b0\u6700\u7ec8\u7684\u529f\u80fd\uff0c\u6211\u4eec\u9700\u8981\u7a0d\u5fae\u4fee\u6539\u4e00\u4e0b\u90e8\u5206\u4ee3\u7801\uff0c\u5c06\u68c0\u6d4b\u7684\u670d\u52a1\u5728\u672c\u5730\u8dd1\u8d77\u6765"),(0,l.kt)("h2",{id:"\u529f\u80fd\u5b9e\u73b0"},"\u529f\u80fd\u5b9e\u73b0"),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u529f\u80fd\u63d2\u4ef6"},"\u81ea\u5b9a\u4e49\u529f\u80fd\u63d2\u4ef6"),(0,l.kt)("p",null,"\u8981\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u529f\u80fd\uff0c\u6211\u4eec\u8981\u6839\u636e\u6559\u7a0b\u5199\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Python Plugins"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://megflow.readthedocs.io/zh_CN/latest/how-to-add-my-service/appendix-B-python-plugin.zh.html#python-plugins"},(0,l.kt)("inlineCode",{parentName:"a"},"MegFLow - Python Plugins"))))),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u8981\u5c06\u539f\u672c\u4e0a\u4f20\u56fe\u7247\u6216\u662f\u89c6\u9891\u7684\u670d\u52a1\u66f4\u6539\u4e3a\u672c\u5730\u7684\u76f8\u673a\u8f93\u5165"),(0,l.kt)("h4",{id:"\u8bfb\u53d6\u672c\u5730\u89c6\u9891\u6216\u662f\u6444\u50cf\u5934"},"\u8bfb\u53d6\u672c\u5730\u89c6\u9891\u6216\u662f\u6444\u50cf\u5934"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"cv2")," \u6765\u5b9e\u73b0\u8bfb\u53d6\u672c\u5730 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u89c6\u9891/\u6444\u50cf\u5934")," \u7684\u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/blob/master/flow-python/examples/cat_feeders/camera.py"},(0,l.kt)("inlineCode",{parentName:"a"},"camera.py"))))),(0,l.kt)("admonition",{title:"\ud83d\udcdd",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"MegFlow"))," \u7684\u8282\u70b9\u4e4b\u95f4\uff0c\u6d88\u606f ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"msg"))," \u88ab\u6253\u5305\u6210 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Envelope"))," \u540e\u5728\u8282\u70b9\u4e4b\u95f4\u4f20\u9012"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u5c06 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"camera.py"))," \u4f5c\u4e3a\u6e90\u8282\u70b9\uff0c\u4f1a\u5728\u7b2c\u4e00\u6b21\u53d1\u9001 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Envelope"))," \u540e\uff0c\u63a5\u6536\u540e\u7eed\u7684\u8282\u70b9\u7684\u6570\u636e\u540e\u518d\u8fdb\u884c\u6570\u636e\u7684\u66f4\u65b0"))),(0,l.kt)("h4",{id:"yolox-\u76ee\u6807\u68c0\u6d4b\u6807\u8bb0\u51fa\u6240\u6709\u732b\u732b"},"YOLOX \u76ee\u6807\u68c0\u6d4b\uff0c\u6807\u8bb0\u51fa\u6240\u6709\u732b\u732b"),(0,l.kt)("p",null,"\u8fd9\u91cc\u8981\u7528\u5230\u7684\u6a21\u578b\u7b49\u90fd\u80fd\u5230 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://megflow.readthedocs.io/zh_CN/latest/download-models.zh.html"},(0,l.kt)("inlineCode",{parentName:"a"},"\ud83d\udc49\u6a21\u578b\u4e0b\u8f7d")))," \u627e\u5230\uff0c\u6b64\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Release")," \u4e2d\u4e5f\u4e0a\u4f20\u4e86 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/releases/tag/aarch64-whl"},(0,l.kt)("inlineCode",{parentName:"a"},"\u6a21\u578b\u6587\u4ef6\ud83d\udc49")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders/det.py"},(0,l.kt)("inlineCode",{parentName:"a"},"det.py"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="load model"',title:'"load','model"':!0},"# load detect model and warmup\nself._predictor = PredictorLite(path=args['path'],\n                                confthre=args['conf'],\n                                nmsthre=args['nms'],\n                                test_size=(self._tsize, self._tsize),\n                                device=args['device'],\n                                device_id=args['device_id'])\nwarmup_data = np.zeros((224, 224, 3), dtype=np.uint8)\nself._predictor.inference(warmup_data)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f4d\u4e8e\u6784\u9020\u51fd\u6570\u4e2d\u7684\u6a21\u578b\u52a0\u8f7d\uff0c\u52a0\u8f7d\u6a21\u578b\u4e4b\u540e\u5c06\u8fdb\u884c\u4e00\u6b21\u7c7b\u4f3c\u201c\u70ed\u8eab\u201d\u7684\u65e0\u6548\u68c0\u6d4b\uff0c\u4fdd\u8bc1\u540e\u7eed\u7684\u63a8\u7406\u901f\u5ea6")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6709\u5173 YOLOX \u53ef\u4ee5\u770b\u8fd9\u91cc")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/MegEngine/YOLOX"},"MegEngine/YOLOX")))),(0,l.kt)("h4",{id:"\u5bf9\u68c0\u6d4b\u7684\u7ed3\u679c\u6267\u884c\u8ddf\u8e2a\u5e76\u5bf9\u8ddf\u8e2a\u7ed3\u679c\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406"},"\u5bf9\u68c0\u6d4b\u7684\u7ed3\u679c\u6267\u884c\u8ddf\u8e2a\uff0c\u5e76\u5bf9\u8ddf\u8e2a\u7ed3\u679c\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders/track.py"},(0,l.kt)("inlineCode",{parentName:"a"},"track.py"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"items = msg['items']\n\ntracks, failed_ids = self._tracker.track(items)\nmsg['tracks'] = tracks\nmsg['failed_ids'] = failed_ids\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders/shaper.py"},(0,l.kt)("inlineCode",{parentName:"a"},"shaper.py"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"if 'tracks' in msg:\n    for track in msg['tracks']:\n        tid = track['tid']\n\n        if tid not in self._shaper:\n            ...\n            # save crop to _shaper[tid]\n\nif 'failed_ids' in msg:\n            fids = msg['failed_ids']\n            if len(fids) > 0:\n                for fid in fids:\n                    if fid in self._shaper:\n                        self._shaper.pop(fid)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"track")," \u8282\u70b9\u540e\uff0c\u5c06\u4f1a\u7ed9\u732b\u732b\u751f\u6210\u552f\u4e00\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"ID")," \uff0c\u53ea\u6709\u5728\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"ID")," \u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u65f6\u5019\u624d\u4f1a\u8fdb\u884c\u56fe\u7247\u7684\u88c1\u526a\uff0c\u518d\u505a\u7279\u5f81\u7684\u63d0\u53d6\uff0c\u63d0\u9ad8\u7a0b\u5e8f\u7684\u6548\u7387\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"ID")," \u4e22\u5931\u65f6\u5219\u4f1a\u79fb\u9664\u76f8\u5e94\u7684\u56fe\u7247")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6709\u5173 IOU Tracker \u53ef\u4ee5\u770b\u8fd9\u91cc")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/bochinski/iou-tracker"},"bochinski/iou-tracker")))),(0,l.kt)("h4",{id:"resnet50-\u63d0\u53d6\u7279\u5f81"},"Resnet50 \u63d0\u53d6\u7279\u5f81"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders/reid.py"},(0,l.kt)("inlineCode",{parentName:"a"},"reid.py"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="load model"',title:'"load','model"':!0},"# load ReID model and warmup\nself._model = PredictorLite(path=args['path'],\n                            device=args['device'],\n                            device_id=args['device_id'])\nwarmup_data = np.zeros((224, 224, 3), dtype=np.uint8)\nself._model.inference(warmup_data)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u6a21\u578b\u540e\u540c\u6837\u8fdb\u884c\u4e00\u6b21\u65e0\u6548\u68c0\u6d4b")),(0,l.kt)("h4",{id:"\u5728\u672c\u5730\u7684-redis-\u5b58\u50a8\u4e2d\u641c\u7d22\u7279\u5f81"},"\u5728\u672c\u5730\u7684 ",(0,l.kt)("inlineCode",{parentName:"h4"},"redis")," \u5b58\u50a8\u4e2d\u641c\u7d22\u7279\u5f81"),(0,l.kt)("p",null,"\u4e4b\u524d\u901a\u8fc7\u6ce8\u518c\u670d\u52a1\u53ef\u4ee5\u5c06\u732b\u54aa\u7684\u7279\u5f81\u63d0\u53d6\u5e76\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," \u5b58\u50a8\u5728\u672c\u5730\uff0c\u8fd9\u91cc\u76f4\u63a5\u7528\u63d0\u53d6\u5230\u7684\u7279\u5f81\u8fdb\u884c\u641c\u7d22\uff0c\u5339\u914d\u5bf9\u5e94\u7684\u732b\u54aa\u7684\u540d\u79f0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders/redis_search.py"},(0,l.kt)("inlineCode",{parentName:"a"},"redis_search.py"))))),(0,l.kt)("p",null,"\u7279\u5f81\u5339\u914d\u540e\u5c06\u751f\u6210\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"p"},"track ID")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," \u5e76\u6253\u5305\u8fdb ",(0,l.kt)("inlineCode",{parentName:"p"},"msg['results']")),(0,l.kt)("h4",{id:"\u6839\u636e\u7279\u5f81\u7684\u5339\u914d\u7ed3\u679c\u6807\u8bb0\u76f8\u5e94\u7684\u732b\u54aa"},"\u6839\u636e\u7279\u5f81\u7684\u5339\u914d\u7ed3\u679c\u6807\u8bb0\u76f8\u5e94\u7684\u732b\u54aa"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders/name.py"},(0,l.kt)("inlineCode",{parentName:"a"},"name.py"))))),(0,l.kt)("p",null,"\u539f\u672c\u7684\u6ce8\u518c\u670d\u52a1\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," \u53ea\u80fd\u6709\u4e00\u4e2a\u7279\u5f81\u503c\uff0c\u53ef\u4ee5\u5bf9\u540c\u4e00\u4e2a\u732b\u732b\u6ce8\u518c\u591a\u6b21\u7279\u5f81\uff0c\u80fd\u63d0\u9ad8\u5339\u914d\u7684\u6210\u529f\u7387"),(0,l.kt)("h4",{id:"\u5c06\u7ed3\u679c\u8fdb\u884c\u53ef\u89c6\u5316"},"\u5c06\u7ed3\u679c\u8fdb\u884c\u53ef\u89c6\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders/display.py"},(0,l.kt)("inlineCode",{parentName:"a"},"display.py"))))),(0,l.kt)("h3",{id:"\u4fee\u6539-toml-\u6587\u4ef6\u8bbe\u7f6e-megflow-\u7684\u5de5\u4f5c\u56fe"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"h3"},"toml")," \u6587\u4ef6\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"h3"},"MegFLow")," \u7684\u5de5\u4f5c\u56fe"),(0,l.kt)("p",null,"\u6839\u636e\u6587\u6863\u7684\u6559\u7a0b\uff1a",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://megflow.readthedocs.io/zh_CN/latest/how-to-add-my-service/appendix-A-graph-definition.zh.html"},"HOW TO USE \u2014\u2014 Config"))," \uff0c\u4fee\u6539\u6846\u67b6\u7684\u8ba1\u7b97\u56fe"),(0,l.kt)("p",null,"\u4fee\u6539\u76f8\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"toml")," \u6587\u4ef6\uff0c\u6a21\u578b\u7684\u63a8\u7406\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"CPU")," \u6216\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"GPU")," \uff0c\u6240\u4ee5\u8981\u5199\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"toml")," \u6587\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders/cat_feeder_cpu.toml"},(0,l.kt)("inlineCode",{parentName:"a"},"cat_feeder_cpu.toml")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/rcxxx/MegFlow/tree/master/flow-python/examples/cat_feeders/cat_feeder_gpu.toml"},(0,l.kt)("inlineCode",{parentName:"a"},"cat_feeder_gpu.toml"))))),(0,l.kt)("h3",{id:"\u8bfb\u53d6\u89c6\u9891\u8fdb\u884c\u6d4b\u8bd5"},"\u8bfb\u53d6\u89c6\u9891\u8fdb\u884c\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u8fd9\u91cc\u89c6\u9891\u4ee5\u53ca\u732b\u54aa\u7684\u7279\u5f81\u6ce8\u518c\u6211\u90fd\u4ee5\u53ca\u63d0\u524d\u505a\u4e86"),(0,l.kt)(i.Z,{defaultValue:"cpu",values:[{label:"CPU",value:"cpu"},{label:"GPU",value:"gpu"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"cpu",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd {workspace}/Megflow/flow-python/examples/\nconda activate megflow\nmegflow_run -c cat_feeders/cat_feeder_cpu.toml -p cat_feeders/\n"))),(0,l.kt)(s.Z,{value:"gpu",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd {workspace}/Megflow/flow-python/examples/\nconda activate megflow\nmegflow_run -c cat_feeders/cat_feeder_gpu.toml -p cat_feeders/\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ed3\u679c\u5982\u4e0b\n",(0,l.kt)("img",{parentName:"li",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/MegFlow-Cat_feeder/run-cat_feeder-display.png",alt:null}))),(0,l.kt)("p",null,"\u6210\u529f\u533a\u5206\u51fa\u4e24\u53ea\u732b\u732b\uff0c\u7a0b\u5e8f\u90e8\u5206\u57fa\u672c\u5b8c\u5de5\uff0c\u540e\u7eed\u5c06\u7ee7\u7eed\u589e\u52a0\u6295\u5582\u7b56\u7565\uff0c\u4ee5\u53ca\u8bbe\u7f6e\u76f8\u5173\u53c2\u6570\u7684\u529f\u80fd"),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/MegEngine/MegFlow"},(0,l.kt)("inlineCode",{parentName:"a"},"MegEngine/MegFlow")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/MegEngine/MegEngine"},(0,l.kt)("inlineCode",{parentName:"a"},"MegEngine/MegEngine")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://githubmemory.com/repo/yuenshome/yuenshome.github.io/issues/136"},"MegFlow \u4e4b 15 \u5206\u949f x86 CPU + GPU\u5e73\u53f0\u63a8\u7406\u670d\u52a1\u90e8\u7f72\uff1a\u5728\u7ebf\u89c6\u9891\u6d41\u68c0\u6d4b\u62a5\u8b66")))))}g.isMDXComponent=!0}}]);