"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[6611],{26102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var a=n(87462),s=(n(67294),n(3905));n(83989);const p={id:"esp32-idf-Clion-env",title:"",sidebar_label:"esp32-idf & Clion"},l=void 0,i={unversionedId:"devices/esp32/esp32-idf-Clion-env",id:"devices/esp32/esp32-idf-Clion-env",title:"",description:"\u5728 CLion \u4e2d\u914d\u7f6e ESP_CMake \u9879\u76ee",source:"@site/docs/stack/devices/esp32/esp32-idf-Clion-env.md",sourceDirName:"devices/esp32",slug:"/devices/esp32/esp32-idf-Clion-env",permalink:"/stack/devices/esp32/esp32-idf-Clion-env",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/devices/esp32/esp32-idf-Clion-env.md",tags:[],version:"current",frontMatter:{id:"esp32-idf-Clion-env",title:"",sidebar_label:"esp32-idf & Clion"},sidebar:"\ud83d\udda5\ufe0fdevices&system",previous:{title:"Install MegFlow && MegEngine",permalink:"/stack/devices/nvidia/jeston-nano/jetson-nano-megflow-megengine"},next:{title:"Demo Blink",permalink:"/stack/devices/esp32/esp32-demo-blink"}},r={},o=[{value:"\u5728 CLion \u4e2d\u914d\u7f6e ESP_CMake \u9879\u76ee",id:"\u5728-clion-\u4e2d\u914d\u7f6e-esp_cmake-\u9879\u76ee",level:2},{value:"\u5b89\u88c5 ESP-IDF",id:"\u5b89\u88c5-esp-idf",level:3},{value:"Linux",id:"linux",level:4},{value:"\u914d\u7f6e CLion",id:"\u914d\u7f6e-clion",level:3},{value:"\u4fee\u6539 CMakeLists.txt",id:"\u4fee\u6539-cmakeliststxt",level:4},{value:"\u6dfb\u52a0 IDF_PATH \u73af\u5883\u53d8\u91cf",id:"\u6dfb\u52a0-idf_path-\u73af\u5883\u53d8\u91cf",level:4},{value:"\u4fee\u6539 gcc\u3001g++\u8def\u5f84",id:"\u4fee\u6539-gccg\u8def\u5f84",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],k={toc:o};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u5728-clion-\u4e2d\u914d\u7f6e-esp_cmake-\u9879\u76ee"},"\u5728 CLion \u4e2d\u914d\u7f6e ESP_CMake \u9879\u76ee"),(0,s.kt)("h3",{id:"\u5b89\u88c5-esp-idf"},"\u5b89\u88c5 ESP-IDF"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Github\u5730\u5740 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/espressif/esp-idf"},(0,s.kt)("inlineCode",{parentName:"a"},"espressif/esp-idf"))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Gitee\u5730\u5740 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://gitee.com/EspressifSystems/esp-idf"},(0,s.kt)("inlineCode",{parentName:"a"},"\u4e50\u946b\u5f00\u6e90/esp-idf"))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u6587\u6863\u5730\u5740 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://www.jetbrains.com/help/clion/esp-idf.html#prepare"},(0,s.kt)("inlineCode",{parentName:"a"},"ESP-IDF \u5feb\u901f\u5165\u95e8")))))),(0,s.kt)("h4",{id:"linux"},"Linux"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u4f9d\u8d56")," - \u8fd9\u91cc\u4f7f\u7528\u7684\u7cfb\u7edf\u7248\u672c\u662f ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://releases.ubuntu.com/20.04/"},(0,s.kt)("inlineCode",{parentName:"a"},"Ubuntu20.04")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install git wget flex bison gperf python3 python3-venv python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d ESP-IDF")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/workspace/esp\ncd ~/workspace/esp\ngit clone --recursive https://github.com/espressif/esp-idf.git\n# clone \u6307\u5b9a\u7248\u672c\n# git clone -b v4.4 --recursive https://github.com/espressif/esp-idf.git esp-idf-v4.4\n")),(0,s.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5230 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/espressif/esp-idf/tags"},(0,s.kt)("inlineCode",{parentName:"a"},"espressif/esp-idf Tags")))," \u4e0b\u8f7d\u6240\u9700\u7248\u672c\u4e4b\u540e\u89e3\u538b"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u6267\u884c\u5b89\u88c5\u811a\u672c")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/workspace/esp/esp-idf-v4.4\nexport IDF_GITHUB_ASSETS="dl.espressif.com/github_assets"\n./install.sh esp32\n# \u5b89\u88c5\u6240\u6709\u82af\u7247\u7684\u652f\u6301\n# ./install.sh\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u73af\u5883\u53d8\u91cf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"./export.sh\n")),(0,s.kt)("p",null,"\u8fd9\u6837\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u53ea\u4f1a\u9488\u5bf9\u5f53\u524d\u7ec8\u7aef\u751f\u6548"),(0,s.kt)("h3",{id:"\u914d\u7f6e-clion"},"\u914d\u7f6e CLion"),(0,s.kt)("p",null,"\u5148\u4ece ESP-IDF \u7684\u76ee\u5f55\u4e2d\u590d\u5236\u4e00\u4e0b example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cp -r ~/workspace/esp//esp-idf-v4.4/examples/get-started/hello_world .\n")),(0,s.kt)("p",null,"\u7136\u540e\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"CLion")," \u4e2d\u6253\u5f00 ",(0,s.kt)("inlineCode",{parentName:"p"},"hellow_world")," \u9879\u76ee"),(0,s.kt)("h4",{id:"\u4fee\u6539-cmakeliststxt"},"\u4fee\u6539 CMakeLists.txt"),(0,s.kt)("p",null,"\u8fd9\u4e2a\u9879\u76ee\u662f\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"CMake")," \u6765\u6784\u5efa\u7684\uff0c\u53ef\u4ee5\u770b\u5230\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," \u5185\u5bb9\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cmake"},"cmake_minimum_required(VERSION 3.5)\n\ninclude($ENV{IDF_PATH}/tools/cmake/project.cmake)\nproject(hello_world)\n")),(0,s.kt)("p",null,"\u7531\u4e8e\u8fd9\u91cc\u5e76\u4e0d\u65b9\u4fbf\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"export.sh")," \u5f00\u542f\u865a\u62df\u73af\u5883\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbe\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"python")," \u53ef\u6267\u884c\u6587\u4ef6\u7684\u4f4d\u7f6e\uff0c\u5185\u5bb9\u4fee\u6539\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cmake"},'cmake_minimum_required(VERSION 3.5)\n\nset(PYTHON "$HOME/.espressif/python_env/idf4.4_py3.8_env/bin/python")\ninclude($ENV{IDF_PATH}/tools/cmake/project.cmake)\nproject(hello_world)\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6839\u636e\u81ea\u5df1 ",(0,s.kt)("inlineCode",{parentName:"li"},"IDF")," \u7684\u5b89\u88c5\u60c5\u51b5\uff0c\u53ef\u80fd\u9700\u8981\u4fee\u6539\u8def\u5f84")),(0,s.kt)("h4",{id:"\u6dfb\u52a0-idf_path-\u73af\u5883\u53d8\u91cf"},"\u6dfb\u52a0 IDF_PATH \u73af\u5883\u53d8\u91cf"),(0,s.kt)("p",null,"\u6253\u5f00 ",(0,s.kt)("inlineCode",{parentName:"p"},"CLion")," ",(0,s.kt)("strong",{parentName:"p"},"\u6587\u4ef6 -> \u8bbe\u7f6e -> \u6784\u5efa\u3001\u6267\u884c\u3001\u90e8\u7f72")),(0,s.kt)("p",null,"\u6253\u5f00 ",(0,s.kt)("inlineCode",{parentName:"p"},"CMake")," \u8bbe\u7f6e\u6dfb\u52a0\u73af\u5883\u53d8\u91cf"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/esp32/esp-idf-clion/ESP_IDF_CLion_CMake_env_value.png",alt:null})),(0,s.kt)("p",null,"\u5c06 ",(0,s.kt)("inlineCode",{parentName:"p"},"ESP_IDF")," \u5b89\u88c5\u7684\u8def\u5f84\u8bbe\u7f6e\u4e3a\u6dfb\u52a0\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"IDF_PATH")," \u73af\u5883\u53d8\u91cf"),(0,s.kt)("h4",{id:"\u4fee\u6539-gccg\u8def\u5f84"},"\u4fee\u6539 gcc\u3001g++\u8def\u5f84"),(0,s.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u5982\u679c CMake \u62a5\u9519"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/esp32/esp-idf-clion/cmake_error_gcc.png",alt:null})),(0,s.kt)("p",null,"\u8fdb\u5165 ",(0,s.kt)("inlineCode",{parentName:"p"},"ESP_IDF")," \u5b89\u88c5\u8def\u5f84\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"tools/cmake/toolchain-esp32.cmake")," \u7684\u76ee\u5f55\u4e0b"),(0,s.kt)("p",null,"\u6309\u7167\u4f60\u6240\u4f7f\u7528\u5f00\u53d1\u677f\u7684\u578b\u53f7\u4fee\u6539\u5bf9\u5e94\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"toolchain-esp32.cmake"),"\uff0c\u5c06\u5176\u4e2d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"xtensa-esp32-elf-gcc")," \u4e09\u6761 ",(0,s.kt)("inlineCode",{parentName:"p"},"set()")," \u4fee\u6539\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cmake"},"set(CMAKE_C_COMPILER $ENV{HOME}/.espressif/tools/xtensa-esp32-elf/esp-2021r2-8.4.0/xtensa-esp32-elf/bin/xtensa-esp32-elf-gcc)\nset(CMAKE_CXX_COMPILER $ENV{HOME}/.espressif/tools/xtensa-esp32-elf/esp-2021r2-8.4.0/xtensa-esp32-elf/bin/xtensa-esp32-elf-g++)\nset(CMAKE_ASM_COMPILER $ENV{HOME}/.espressif/tools/xtensa-esp32-elf/esp-2021r2-8.4.0/xtensa-esp32-elf/bin/xtensa-esp32-elf-gcc)\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8def\u5f84\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u8def\u5f84\u8bbe\u7f6e\uff0c\u4f4d\u7f6e\u5e94\u8be5\u90fd\u4e00\u6837")),(0,s.kt)("p",null,"\u5982\u679c\u914d\u7f6e\u65e0\u8bef\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"CMake")," \u5c06\u4f1a\u8f93\u51fa "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"-- Configuring done\n-- Generating done\n-- Build files have been written to: ...\n")),(0,s.kt)("p",null,"\u4f7f\u7528\u5feb\u6377\u952e ",(0,s.kt)("inlineCode",{parentName:"p"},"ctrl + F9")," \u5373\u53ef\u7f16\u8bd1\u9879\u76ee"),(0,s.kt)("p",null,"\u4fee\u6539\u7f16\u8bd1\u9009\u9879\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"flash")," \u76f4\u63a5\u70e7\u5f55\u7a0b\u5e8f"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/esp32/esp-idf-clion/flash.png",alt:null})),(0,s.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://www.jetbrains.com/help/clion/esp-idf.html"},"CLion-Doc-ESP-IDF"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/espressif/esp-idf"},"espressif/esp-idf"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://gitee.com/EspressifSystems/esp-idf"},"\u4e50\u946b\u5f00\u6e90/esp-idf")))))}m.isMDXComponent=!0}}]);