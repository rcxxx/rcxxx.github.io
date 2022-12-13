"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[3169],{85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),p=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:o,values:c,groupId:d,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[f,x]=(0,r.useState)(b),_=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=d){const e=v[d];null!=e&&e!==f&&k.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,a=_.indexOf(t),n=k[a].value;n!==f&&(w(t),x(n),null!=d&&N(d,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>_.push(e),onKeyDown:P,onClick:T},o,{className:(0,l.Z)("tabs__item",m,o?.className,{"tabs__item--active":f===t})}),a??t)}))),t?(0,r.cloneElement)(y.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function d(e){const t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},3940:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=(a(83989),a(65488)),o=a(85162);const i={id:"python-serial",title:"Python \u4e32\u53e3\u5e93 pyserial",sidebar_label:"pyserial"},s=void 0,p={unversionedId:"computer/programming/py/python-serial",id:"computer/programming/py/python-serial",title:"Python \u4e32\u53e3\u5e93 pyserial",description:"Python Serial Port Extension for Win32, OSX, Linux, BSD, Jython, IronPython ...",source:"@site/docs/computer/programming/py/py-serial.md",sourceDirName:"computer/programming/py",slug:"/computer/programming/py/python-serial",permalink:"/docs/computer/programming/py/python-serial",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/computer/programming/py/py-serial.md",tags:[],version:"current",frontMatter:{id:"python-serial",title:"Python \u4e32\u53e3\u5e93 pyserial",sidebar_label:"pyserial"},sidebar:"\u2328\ufe0fprogramming",previous:{title:"Python",permalink:"/docs/category/py"},next:{title:"\u5b9a\u65f6\u4efb\u52a1",permalink:"/docs/computer/programming/py/python-\u5b9a\u65f6\u4efb\u52a1\u5b9e\u73b0"}},u={},m=[{value:"\u5b89\u88c5 <code>pyserial</code>",id:"\u5b89\u88c5-pyserial",level:2},{value:"\u7b80\u5355\u4f7f\u7528",id:"\u7b80\u5355\u4f7f\u7528",level:2},{value:"Hex to int",id:"hex-to-int",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Python Serial Port Extension for Win32, OSX, Linux, BSD, Jython, IronPython ..."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://pypi.org/project/pyserial/"},"pyserial project - pyserial \xb7 PyPI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://pythonhosted.org/pyserial/"},"documentation"))))),(0,r.kt)("h2",{id:"\u5b89\u88c5-pyserial"},"\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"h2"},"pyserial")),(0,r.kt)(l.Z,{defaultValue:"pip",values:[{label:"pip",value:"pip"},{label:"conda",value:"conda"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"pip",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pyserial\n"))),(0,r.kt)(o.Z,{value:"conda",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"conda install -c conda-forge pyserial\n")))),(0,r.kt)("h2",{id:"\u7b80\u5355\u4f7f\u7528"},"\u7b80\u5355\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f00\u542f\u4e32\u53e3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import serial\n\n_ser = serial.Serial(port="/dev/ttyACM0", baudrate=115200, timeout=0.01)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63a5\u6536\u4e32\u53e3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"str_read = _ser.read(6).hex()\n# 6 \u8bfb\u53d6\u516d\u4e2a\u5b57\u8282\n# .hex() \u5341\u516d\u8fdb\u5236\u8bfb\u53d6\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d1\u9001\u4e32\u53e3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"str_write = 'write_str'\n_ser.write(str_write)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5173\u95ed\u4e32\u53e3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"_ser.close()\n")),(0,r.kt)("h2",{id:"hex-to-int"},"Hex to int"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"16\u8fdb\u5236\u8f6c\u4e3aint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"hex_input  = 'C0A80026'\noutput_list = []\nfor i in range(0,len(hex_input),2)\n    output_list.append(int(hex_input[i:i+2], 16))\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/7595148/python-converting-hex-to-int-char"},"Python - Converting Hex to INT/CHAR"))),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://pythonhosted.org/pyserial/"},"documentation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://pypi.org/project/pyserial/"},"pyserial project - pyserial \xb7 PyPI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://stackoverflow.com/questions/12090503/listing-available-com-ports-with-python"},"Listing available com ports with Python")))))}d.isMDXComponent=!0}}]);