"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[8010],{66462:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>_,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=i(87462),a=(i(67294),i(3905));i(83989);const s={id:"esp32-demo-wifi",title:"",sidebar_label:"Demo Wifi"},r="ESP32 Demo Wi-Fi",p={unversionedId:"devices/esp32/esp32-demo-wifi",id:"devices/esp32/esp32-demo-wifi",title:"",description:"name | version",source:"@site/docs/stack/devices/esp32/esp32-demo-wifi.md",sourceDirName:"devices/esp32",slug:"/devices/esp32/esp32-demo-wifi",permalink:"/stack/devices/esp32/esp32-demo-wifi",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/stack/devices/esp32/esp32-demo-wifi.md",tags:[],version:"current",frontMatter:{id:"esp32-demo-wifi",title:"",sidebar_label:"Demo Wifi"},sidebar:"\ud83d\udda5\ufe0fdevices&system",previous:{title:"freertos event_group",permalink:"/stack/devices/esp32/esp32-demo-freertos-event_group"},next:{title:"system",permalink:"/stack/category/system"}},l={},o=[{value:"ESP32 Wi-Fi Station General Scenario",id:"esp32-wi-fi-station-general-scenario",level:2},{value:"\u521d\u59cb\u5316 NVS \u5b58\u50a8",id:"\u521d\u59cb\u5316-nvs-\u5b58\u50a8",level:3},{value:"Wi-Fi/LwIP \u521d\u59cb\u5316\u9636\u6bb5",id:"wi-filwip-\u521d\u59cb\u5316\u9636\u6bb5",level:3},{value:"Wi-Fi \u914d\u7f6e\u9636\u6bb5",id:"wi-fi-\u914d\u7f6e\u9636\u6bb5",level:3},{value:"Wi-Fi \u542f\u52a8\u9636\u6bb5",id:"wi-fi-\u542f\u52a8\u9636\u6bb5",level:3},{value:"Wi-Fi \u626b\u63cf\u9636\u6bb5",id:"wi-fi-\u626b\u63cf\u9636\u6bb5",level:3},{value:"\u8bbe\u7f6e\u56fd\u5bb6/\u5730\u533a\u4fe1\u606f",id:"\u8bbe\u7f6e\u56fd\u5bb6\u5730\u533a\u4fe1\u606f",level:4},{value:"\u626b\u63cf\uff08\u524d\u7aef\uff09",id:"\u626b\u63cf\u524d\u7aef",level:4},{value:"\u5b9e\u73b0 Wi-Fi \u626b\u63cf\u4ee3\u7801\u5982\u4e0b",id:"\u5b9e\u73b0-wi-fi-\u626b\u63cf\u4ee3\u7801\u5982\u4e0b",level:3},{value:"Wi-Fi \u8fde\u63a5\u9636\u6bb5",id:"wi-fi-\u8fde\u63a5\u9636\u6bb5",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:o};function _(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"esp32-demo-wi-fi"},"ESP32 Demo Wi-Fi"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://releases.ubuntu.com/20.04/"},"Ubuntu 20.04")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CMake"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://cmake.org/"},"3.10"))," \u2265")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ESP-IDF"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/espressif/esp-idf"},"master--v5.1")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ESP-IDF Programming GuideLogo"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/index.html"},"v5.1")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Device"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ESP32-S3-WROOM-1")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521b\u5efa\u7a7a\u9879\u76ee")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6fc0\u6d3b\u73af\u5883")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},". ~/esp/esp-idf/export.sh \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u9879\u76ee")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"idf.py create-project ${project_name}\n")),(0,a.kt)("p",null,"\u5173\u4e8e\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"CMake")," \u7684\u914d\u7f6e\u53ef\u4ee5\u53c2\u7167"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://sinnammanyo.cn/stack/devices/esp32/esp32-idf-Clion-env"},"\u5728 CLion \u4e2d\u914d\u7f6e ESP_CMake \u9879\u76ee")))),(0,a.kt)("h2",{id:"esp32-wi-fi-station-general-scenario"},"ESP32 Wi-Fi Station General Scenario"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316-nvs-\u5b58\u50a8"},"\u521d\u59cb\u5316 NVS \u5b58\u50a8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/wifi.html#wi-fi-nvs-flash"},"Wi-Fi NVS Flash")))),(0,a.kt)("p",null,"\u4f7f\u80fd NVS Flash\uff0c\u4e0b\u4e00\u6b21\u5f00\u673a\u6216\u8005\u662f\u91cd\u542f\u540e\u80fd\u81ea\u52a8\u52a0\u8f7d\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"esp_err_t nvs_flash_init(void)\n")),(0,a.kt)("h3",{id:"wi-filwip-\u521d\u59cb\u5316\u9636\u6bb5"},"Wi-Fi/LwIP \u521d\u59cb\u5316\u9636\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a LwIP \u6838\u5fc3\u4efb\u52a1\uff0c\u5e76\u521d\u59cb\u5316 LwIP \u76f8\u5173\u5de5\u4f5c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"esp_err_t esp_netif_init(void)\n")),(0,a.kt)("p",null,"-\u521b\u5efa\u4e00\u4e2a\u7cfb\u7edf\u4e8b\u4ef6\u4efb\u52a1\uff0c\u5e76\u521d\u59cb\u5316\u5e94\u7528\u7a0b\u5e8f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"esp_err_t esp_event_loop_create_default(void)\n")),(0,a.kt)("p",null,"-\u521b\u5efa\u6709 TCP/IP \u5806\u6808\u7684\u9ed8\u8ba4\u7f51\u7edc\u63a5\u53e3\u5b9e\u4f8b\u7ed1\u5b9a station"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"esp_netif_t* esp_netif_create_default_wifi_sta(void)\n")),(0,a.kt)("p",null,"-\u521b\u5efa Wi-Fi \u9a71\u52a8\u7a0b\u5e8f\u4efb\u52a1\uff0c\u5e76\u521d\u59cb\u5316 Wi-Fi \u9a71\u52a8\u7a0b\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"esp_err_t esp_wifi_init(const wifi_init_config_t *config)\n")),(0,a.kt)("h3",{id:"wi-fi-\u914d\u7f6e\u9636\u6bb5"},"Wi-Fi \u914d\u7f6e\u9636\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06 Wi-Fi \u6a21\u5f0f\u914d\u7f6e\u4e3a station \u6a21\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"esp_err_t esp_wifi_set_mode(wifi_mode_t mode);\n")),(0,a.kt)("h3",{id:"wi-fi-\u542f\u52a8\u9636\u6bb5"},"Wi-Fi \u542f\u52a8\u9636\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8 Wi-Fi \u9a71\u52a8\u7a0b\u5e8f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"esp_err_t esp_wifi_start(void);\n")),(0,a.kt)("h3",{id:"wi-fi-\u626b\u63cf\u9636\u6bb5"},"Wi-Fi \u626b\u63cf\u9636\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/wifi.html#esp32-wi-fi-scan"},"ESP32 Wi-Fi Scan")))),(0,a.kt)("h4",{id:"\u8bbe\u7f6e\u56fd\u5bb6\u5730\u533a\u4fe1\u606f"},"\u8bbe\u7f6e\u56fd\u5bb6/\u5730\u533a\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/wifi.html#wi-fi-country-code"},"Wi-Fi Country Code")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"esp_err_t esp_wifi_set_country(const wifi_country_t *country);\n")),(0,a.kt)("h4",{id:"\u626b\u63cf\u524d\u7aef"},"\u626b\u63cf\uff08\u524d\u7aef\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"esp_err_t esp_wifi_scan_start(const wifi_scan_config_t *config, bool block);\n")),(0,a.kt)("p",null,"\u626b\u63cf\u7ed3\u679c\u901a\u8fc7\u4e24\u4e2a\u63a5\u53e3\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"ap")," \u7684\u6570\u91cf\u4ee5\u53ca\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"esp_err_t esp_wifi_scan_get_ap_num(uint16_t *number);\n\nesp_err_t esp_wifi_scan_get_ap_records(uint16_t *number, wifi_ap_record_t *ap_records);\n")),(0,a.kt)("h3",{id:"\u5b9e\u73b0-wi-fi-\u626b\u63cf\u4ee3\u7801\u5982\u4e0b"},"\u5b9e\u73b0 Wi-Fi \u626b\u63cf\u4ee3\u7801\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <esp_wifi.h>\n#include <string.h>\n\n#include "esp_log.h"\n#include "nvs_flash.h"\n\nvoid app_main(void)\n{\n    ESP_LOGI("WIFI", "0. \u521d\u59cb\u5316 NVS \u5b58\u50a8");\n    /* \u5982\u679c\u4f7f\u80fd Wi-Fi NVS flash\uff0c\n     * \u6240\u6709\u901a\u8fc7 Wi-Fi API \u8bbe\u7f6e\u7684 Wi-Fi \u914d\u7f6e\u90fd\u4f1a\u88ab\u5b58\u50a8\u5230 flash \u4e2d\uff0c\n     * Wi-Fi \u9a71\u52a8\u7a0b\u5e8f\u5728\u4e0b\u6b21\u5f00\u673a\u6216\u91cd\u542f\u65f6\u5c06\u81ea\u52a8\u52a0\u8f7d\u8fd9\u4e9b\u914d\u7f6e\u3002\n     * */\n    nvs_flash_init();\n\n    ESP_LOGI("WIFI", "1. Wi-Fi \u521d\u59cb\u5316\u9636\u6bb5");\n    // \u521b\u5efa\u4e00\u4e2a LwIP \u6838\u5fc3\u4efb\u52a1\uff0c\u5e76\u521d\u59cb\u5316 LwIP \u76f8\u5173\u5de5\u4f5c\n    esp_netif_init();\n    // \u521b\u5efa\u4e00\u4e2a\u7cfb\u7edf\u4e8b\u4ef6\u4efb\u52a1\uff0c\u5e76\u521d\u59cb\u5316\u5e94\u7528\u7a0b\u5e8f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570\n    esp_event_loop_create_default();\n    // \u521b\u5efa\u6709 TCP/IP \u5806\u6808\u7684\u9ed8\u8ba4\u7f51\u7edc\u63a5\u53e3\u5b9e\u4f8b\u7ed1\u5b9a station\n    esp_netif_create_default_wifi_sta();\n    // \u521b\u5efa Wi-Fi \u9a71\u52a8\u7a0b\u5e8f\u4efb\u52a1\uff0c\u5e76\u521d\u59cb\u5316 Wi-Fi \u9a71\u52a8\u7a0b\u5e8f\n    wifi_init_config_t wifi_config = WIFI_INIT_CONFIG_DEFAULT();\n    esp_wifi_init(&wifi_config);\n\n    ESP_LOGI("WIFI", "2. Wi-Fi \u914d\u7f6e\u9636\u6bb5");\n    esp_wifi_set_mode(WIFI_MODE_STA);\n\n    ESP_LOGI("WIFI", "3. Wi-Fi \u542f\u52a8\u9636\u6bb5");\n    esp_wifi_start();\n\n    ESP_LOGI("WIFI", "4. Wi-Fi \u626b\u63cf");\n    // \u8bbe\u7f6e\u56fd\u5bb6/\u5730\u533a\u4fe1\u606f\n    wifi_country_t country_config = {\n        .cc = "CN",\n        .schan = 1,\n        .nchan = 13,\n        .policy = WIFI_COUNTRY_POLICY_AUTO,\n    };\n    esp_wifi_set_country(&country_config);\n\n    wifi_scan_config_t scan_config = {\n        .show_hidden=true\n    };\n    esp_wifi_scan_start(&scan_config, true);\n    uint16_t ap_num = 0;\n    ESP_ERROR_CHECK(esp_wifi_scan_get_ap_num(&ap_num));\n    ESP_LOGI("WIFI", "AP Count: %d", ap_num);\n\n    uint16_t max_aps = 20;\n    wifi_ap_record_t ap_records[max_aps];\n    memset(ap_records, 0, sizeof(ap_records));\n\n    uint16_t aps_count = max_aps;\n    ESP_ERROR_CHECK(esp_wifi_scan_get_ap_records(&aps_count, ap_records));\n\n    ESP_LOGI("WIFI", "AP Count: %d", aps_count);\n    printf("%30s %s %s %s\\n", "SSID", "\u9891\u9053", "\u5f3a\u5ea6", "MAC\u5730\u5740");\n\n    for (int i = 0; i < aps_count; ++i) {\n        printf(\n            "%30s  %3d  %3d  %02X-%02X-%02X-%02X-%02X-%02X\\n",\n            ap_records[i].ssid,\n            ap_records[i].primary,\n            ap_records[i].rssi,\n            ap_records[i].bssid[0],\n            ap_records[i].bssid[1],\n            ap_records[i].bssid[2],\n            ap_records[i].bssid[3],\n            ap_records[i].bssid[4],\n            ap_records[i].bssid[5]\n        );\n    }\n}\n')),(0,a.kt)("p",null,"\u70e7\u5f55\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/esp32/demo-wifi/scan-result.png",alt:null})),(0,a.kt)("h3",{id:"wi-fi-\u8fde\u63a5\u9636\u6bb5"},"Wi-Fi \u8fde\u63a5\u9636\u6bb5"),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.bilibili.com/video/BV16G4y1g72w/?spm_id_from=333.788&vd_source=4cca3a7520260c460d94cf70a3f0a5ba"},"WIFI\u626b\u63cf - \u4e50\u946b ESP32 \u7269\u8054\u7f51\u5f00\u53d1\u6846\u67b6 ESP-IDF \u5f00\u53d1\u5165\u95e8 - \u5b64\u72ec\u7684\u4e8c\u8fdb\u5236\u51fa\u54c1"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.espressif.com/projects/esp-idf/zh_CN/release-v4.4/esp32/api-guides/wifi.html"},"API \u6307\u5357 \xbb Wi-Fi \u9a71\u52a8\u7a0b\u5e8f"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/qq_44711012/article/details/111937684"},"ESP-IDF\u521b\u5efa\u5de5\u7a0b")))))}_.isMDXComponent=!0}}]);