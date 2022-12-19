"use strict";(self.webpackChunksinnammanyo_cn=self.webpackChunksinnammanyo_cn||[]).push([[6556],{86914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(87462),s=(t(67294),t(3905));t(83989);const r={id:"about-theme",title:"\u4e2a\u6027\u5316 Docusaurus \u4e3b\u9898\u914d\u7f6e",sidebar_label:"\u4e3b\u9898\u914d\u7f6e"},i=void 0,o={unversionedId:"site/about-theme",id:"site/about-theme",title:"\u4e2a\u6027\u5316 Docusaurus \u4e3b\u9898\u914d\u7f6e",description:"\u914d\u7f6e\u7ad9\u70b9\u4fe1\u606f",source:"@site/docs/docs/site/about-theme.md",sourceDirName:"site",slug:"/site/about-theme",permalink:"/docs/site/about-theme",draft:!1,editUrl:"https://github.com/rcxxx/sinnammanyo.cn/tree/master/docs/docs/site/about-theme.md",tags:[],version:"current",frontMatter:{id:"about-theme",title:"\u4e2a\u6027\u5316 Docusaurus \u4e3b\u9898\u914d\u7f6e",sidebar_label:"\u4e3b\u9898\u914d\u7f6e"},sidebar:"\ud83d\udea9site",previous:{title:"\u90e8\u7f72",permalink:"/docs/site/about-deploy"},next:{title:"\u7f16\u8f91\u6587\u6863",permalink:"/docs/site/about-write"}},l={},u=[{value:"\u914d\u7f6e\u7ad9\u70b9\u4fe1\u606f",id:"\u914d\u7f6e\u7ad9\u70b9\u4fe1\u606f",level:3},{value:"\u6587\u6863\u5f52\u6863",id:"\u6587\u6863\u5f52\u6863",level:4},{value:"\u4fee\u6539\u4e3b\u9875\u9762",id:"\u4fee\u6539\u4e3b\u9875\u9762",level:3},{value:"Swizzle \u7ec4\u4ef6",id:"swizzle-\u7ec4\u4ef6",level:3},{value:"DocItem",id:"docitem",level:4}],c={toc:u};function m(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u914d\u7f6e\u7ad9\u70b9\u4fe1\u606f"},"\u914d\u7f6e\u7ad9\u70b9\u4fe1\u606f"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"docusaurus.config.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n// Note: type annotations allow type checking and IDEs autocompletion\n\nconst lightCodeTheme = require('prism-react-renderer/themes/github');\nconst darkCodeTheme = require('prism-react-renderer/themes/dracula');\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  title: \"Rcxxx's Personal Site\",\n  tagline: '',\n  onBrokenLinks: 'throw',\n  onBrokenMarkdownLinks: 'warn',\n  favicon: 'img/icons/game.png',\n  url: 'https://sinnammanyo.cn',\n  baseUrl: '/',\n  trailingSlash: false,\n  // GitHub pages deployment config.\n  // If you aren't using GitHub pages, you don't need these.\n  organizationName: 'rcxxx', // Usually your GitHub org/user name.\n  projectName: 'rcxxx.github.io', // Usually your repo name.\n  deploymentBranch: 'master',\n  // Even if you don't use internalization, you can use this field to set useful\n  // metadata like html lang. For example, if your site is Chinese, you may want\n  // to replace \"en\" with \"zh-Hans\".\n  i18n: {\n    defaultLocale: 'zh-Hans',\n    locales: ['zh-Hans'],\n  },\n\n  presets: [\n    [\n      'classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: {\n        path: 'docs/docs',\n          sidebarPath: require.resolve('./sidebars/sidebars.js'),\n          remarkPlugins: [[require('remark-math'),{ strict: false }], require('mdx-mermaid')],\n          rehypePlugins: [require('rehype-katex')],\n          // Please change this to your repo.\n          // Remove this to remove the \"edit this page\" links.\n          editUrl:\n            'https://github.com/rcxxx/sinnammanyo.cn/tree/master',\n        },\n        blog: {\n          showReadingTime: true,\n          readingTime: ({content, frontMatter, defaultReadingTime}) =>\n            frontMatter.hide_reading_time\n              ? undefined\n              : defaultReadingTime({content}),\n          remarkPlugins: [[require('remark-math'),{ strict: false }], require('mdx-mermaid')],\n          rehypePlugins: [require('rehype-katex')],\n          postsPerPage: 'ALL',\n          blogSidebarCount: 'ALL',\n          blogSidebarTitle: '\ud83d\udd16\u6240\u6709\u6587\u7ae0',\n          editUrl:\n            'https://github.com/rcxxx/sinnammanyo.cn/tree/master',\n        },\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      }),\n    ],\n  ],\n  stylesheets: [\n    {\n      href: '/katex/katex.min.css',\n      type: 'text/css',\n      crossorigin: 'anonymous',\n    },\n  ],\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        id: 'notes',\n        path: 'docs/notes',\n        routeBasePath: 'notes',\n        sidebarPath: require.resolve('./sidebars/sidebars_notes.js'),\n        editUrl:\n        'https://github.com/rcxxx/sinnammanyo.cn/tree/master',\n      },\n    ],\n        [\n      '@docusaurus/plugin-content-docs',\n      {\n        id: 'stack',\n        path: 'docs/stack',\n        routeBasePath: 'stack',\n        sidebarPath: require.resolve('./sidebars/sidebars_stack.js'),\n        remarkPlugins: [[require('remark-math'),{ strict: false }], require('mdx-mermaid')],\n        rehypePlugins: [require('rehype-katex')],\n        editUrl:\n        'https://github.com/rcxxx/sinnammanyo.cn/tree/master',\n      },\n    ],\n  ],\n\n  themeConfig:\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    ({\n      colorMode: {\n        defaultMode: 'light',\n      },\n      navbar: {\n        title: 'Home',\n        logo: {\n          alt: 'My Site Logo',\n          src: 'img/icons/rikka_ssss_pixel_art.png',\n        },\n        items: [\n          {\n            to: '/blog', \n            label: 'Blog', \n            position: 'left'},\n          {\n            type: 'dropdown',\n            to: '/docs',\n            label: '\ud83d\udef8 Stack',\n            position: 'left',\n            items: [\n              {label: '\ud83d\udd0c Devices', to:'stack/category/devices'},\n              {label: '\ud83d\udcbd System', to:'stack/category/devices'},\n              {label: '\u2328\ufe0f Programming', to:'stack/category/C-C_plus_plus'},\n              {label: '\ud83d\udc40 CV & Robot', to:'stack/category/OpenCV'},\n              {label: '\ud83e\udde0 ML & DL', to:'stack/category/ml-dl'},\n              {label: '\ud83d\udd29 Handmade', to:'stack/category/Fusion 360'},\n            ],\n          },\n          {\n            type: 'dropdown',\n            label: '\u2712\ufe0f Notes',\n            position: 'left',\n            items: [\n              {label: '\ud83d\udcda \u8bfb\u4e66\u7b14\u8bb0', to:'notes/'},\n            //   {label: '\u270f\ufe0f \u968f\u7b14', to:'ReadingNote/'},\n            ],\n          },\n          {\n            to: 'docs/category/just-paly',\n            position: 'right',\n            className: 'heafer-life-icon',\n            \n          },\n          {\n            to: 'docs/category/studio',\n            position: 'right',\n            className: 'heafer-studio-icon'\n          },\n          {\n            href: 'https://github.com/rcxxx/sinnammanyo.cn',\n            position: 'right',\n            className: 'header-github-link',\n          },\n        ],\n      },\n      docs: {\n        sidebar: {\n          hideable: true,\n          autoCollapseCategories: true,\n        },\n      },\n      footer: {\n        style: 'dark',\n        links: [\n          {\n            title: 'More',\n            items: [\n              {\n                label: 'My GitHub',\n                href: 'https://github.com/rcxxx',\n              },              \n            ],\n          },\n        ],\n        copyright: `Copyright \xa9 ${new Date().getFullYear()} \ud83c\udf08RCXXX. Built with Docusaurus.`,\n      },\n      prism: {\n        theme: lightCodeTheme,\n        darkTheme: darkCodeTheme,\n      },\n    }),\n};\n\nmodule.exports = config;\n"))),(0,s.kt)("p",null,"\u914d\u7f6e\u53c2\u8003\u4e86\u8fd9\u4e9b\u6587\u6863"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("a",{parentName:"em",href:"https://docusaurus.io/zh-CN/docs/configuration"},"\u914d\u7f6e"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("a",{parentName:"em",href:"https://docusaurus.io/zh-CN/docs/docs-multi-instance"},"\u6587\u6863\u591a\u5b9e\u4f8b"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("a",{parentName:"em",href:"https://docusaurus.io/zh-CN/docs/sidebar"},"\u4fa7\u8fb9\u680f"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("a",{parentName:"em",href:"https://docusaurus.io/zh-CN/docs/markdown-features/math-equations"},"\u6570\u5b66\u516c\u5f0f")))),(0,s.kt)("h4",{id:"\u6587\u6863\u5f52\u6863"},"\u6587\u6863\u5f52\u6863"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/screenshot/site/docs-struct.png",alt:null})),(0,s.kt)("p",null,"\u6587\u6863\u5206\u4e3a\u4e09\u4e2a\u5b9e\u4f8b"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u6280\u672f\u6808\u6587\u6863"),(0,s.kt)("li",{parentName:"ol"},"\u7b14\u8bb0\u6587\u6863"),(0,s.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u6587\u6863")),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \u4ee5\u63d2\u4ef6\u5f62\u5f0f\u914d\u7f6e\uff0c\u65b9\u4fbf\u6587\u6863\u6587\u4ef6\u5939\u5206\u7c7b"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"docusaurus.config.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// ...\nplugins: [\n[\n    '@docusaurus/plugin-content-docs',\n    {\n        id: 'notes',\n        path: 'docs/notes',\n        routeBasePath: 'notes',\n        sidebarPath: require.resolve('./sidebars/sidebars_notes.js'),\n        },\n    ],\n    [\n        '@docusaurus/plugin-content-docs',\n        {\n        id: 'stack',\n        path: 'docs/stack',\n        routeBasePath: 'stack',\n        sidebarPath: require.resolve('./sidebars/sidebars_stack.js'),\n        },\n    ],\n],\n// ...\n"))),(0,s.kt)("h3",{id:"\u4fee\u6539\u4e3b\u9875\u9762"},"\u4fee\u6539\u4e3b\u9875\u9762"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"/src/pages/index.js")," \u5c06\u88ab\u6e32\u67d3\u4e3a\u4e3b\u9875\u9762\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5c06\u4e3b\u9875\u9762\u5220\u9664\uff0c\u4f7f\u5176\u53d8\u4e3a\u6587\u6863\u9875\u6216\u8005\u535a\u5ba2\u5217\u8868\u9875"),(0,s.kt)("p",null,"\u6211\u5bf9 ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js")," \u7684\u4fee\u6539\u4e3b\u8981\u5206\u4e3a\u4e00\u4e0b\u51e0\u4e2a\u90e8\u5206"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5bfc\u822a\u680f\u90e8\u5206\uff0c\u5bf9\u6587\u6863\u7684\u5206\u7c7b\u6574\u7406\uff0c\u65b9\u4fbf\u8df3\u8f6c"),(0,s.kt)("li",{parentName:"ul"},"\u7f51\u7ad9\u6807\u9898\u90e8\u5206\uff0c\u4f5c\u7b80\u5355\u7684\u81ea\u6211\u4ecb\u7ecd"),(0,s.kt)("li",{parentName:"ul"},"\u793e\u4ea4\u9014\u5f84\u90e8\u5206\uff0c\u6e38\u620f\u673a\u6837\u5f0f\u7684\u5c0f\u7ec4\u4ef6\uff0c\u5305\u542b\u4e00\u4e9b\u793e\u4ea4\u4fe1\u606f",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"GameBoy \u6837\u5f0f\u5361\u7247\u7ec4\u4ef6\u5b9e\u73b0")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("del",{parentName:"li"},"\u6700\u65b0\u89c6\u9891\uff0c\u5728\u89c6\u9891\u5e73\u53f0\u53d1\u5e03\u7684\u6700\u65b0\u89c6\u9891")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("del",{parentName:"li"},"\u6700\u65b0\u9879\u76ee\uff0c\u6700\u65b0\u5b8c\u6210\u7684\u9879\u76ee"))),(0,s.kt)("h3",{id:"swizzle-\u7ec4\u4ef6"},"Swizzle \u7ec4\u4ef6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("a",{parentName:"em",href:"https://docusaurus.io/zh-CN/docs/swizzling"},"Swizzle")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u91cd\u5199\u7ec4\u4ef6")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle @docusaurus/theme-classic [\u7ec4\u4ef6\u540d] -- --eject\n")),(0,s.kt)("p",null,"\u53ef\u4ee5\u4ece\u672c\u5730\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules/@docusaurus/theme-classic/src/theme/")," \u8def\u5f84\u4e2d\u76f4\u63a5\u590d\u5236\u76f8\u5e94\u7ec4\u4ef6"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u62d3\u5c55\u7ec4\u5efa")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run swizzle @docusaurus/theme-classic [\u7ec4\u4ef6\u540d] -- --wrap\n")),(0,s.kt)("p",null,"\u5c06\u4f1a\u751f\u6210\u4e00\u4e2a\u5e26 ",(0,s.kt)("inlineCode",{parentName:"p"},"Wrapper")," \u540e\u7f00\u7684\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5728\u539f\u5148\u7ec4\u5efa\u7684\u5185\u5bb9\u4e0a\u8fdb\u884c\u62d3\u5c55"),(0,s.kt)("h4",{id:"docitem"},"DocItem"))}m.isMDXComponent=!0}}]);