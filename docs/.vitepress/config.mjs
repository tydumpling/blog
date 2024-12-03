import nav from "./nav.mjs";
import sidebar from "./silber.mjs";
import rewrites from "./rewrites.mjs";
// 'packages/:pkg/src/(.*)': ':pkg/index.md'
//packages这是路径的固定部分，base路径
//:pkg：这是一个动态参数，表示匹配的路径中的一部分可以是任意值，并且这个值会被捕获并命名为 :pkg。例如，如果路径是 packages/vue/src/some-file.md，那么 :pkg 的值就是 vue。
//这是路径的另一个固定部分，表示匹配的路径必须包含 src/。
//.*这是一个正则表达式，表示匹配任意.的文件
import boke from './public/boke.txt';
import gitee from './public/gitee.txt';
import { defineConfig } from "vitepress";
export default defineConfig({
  // 网站标题
  title: 'tydumpling博客',
  // base: '/blog/',
  // 网站描述
  description: 'tydumpling博客',
  // 打包目录
  dest: './dist',
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "./favicon.ico" }],
    ["meta", { property: "og:title", content: "tydumpling博客" }],
    ["meta", { property: "og:site_name", content: "tydumpling博客" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:description", content: "tydumpling技术博客，记录着所学所思所想" }],
    ["meta", { property: "og:keyword", content: "tydumpling,技术博客,博客,前端,js,css,html,react,vue,webpack,vite,git,github,码农,程序员,tydumpling博客" }],
    ["meta", { property: "og:image", content: "./favicon.ico" }],
    ["meta", { property: "og:url", content: "https://duyidao.github.io/" }],
    ["meta", { property: "keyword", content: "tydumpling,技术博客,博客,前端,js,css,html,react,vue,webpack,vite,git,github,码农,程序员,tydumpling博客" }],
    ["meta", { httpEquiv: "Cache-Control", content: "no-cache, no-store, must-revalidate" }],
    ["meta", { httpEquiv: "Pragma", content: "no-cache" }],
    ["meta", { httpEquiv: "Expires", content: "0" }],
  ],
  // 使用插件
  plugins: [
    '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/back-to-top',          // 返回顶部插件
    '@vuepress/medium-zoom',          // 图片预览插件
    '@vuepress/nprogress',        //页面顶部进度条
  ],
  // 文档中的所有 `details` 容器都会显示为`详细信息`。。
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  // 主题配置
  themeConfig: {
    logo: "/favicon.ico",
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: 'last Update', // string | boolean
    siteTitle: "『 tydumpling博客 』",
    outlineTitle: '我是一个目录哦~',
    outline: [0, 6],
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 头部导航栏配置
    nav,
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  
    // 左侧导航栏
    sidebar,
    //社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/duyidao" },
      {
        icon: {
          svg: gitee
        }, link: "https://gitee.com/duyidao"
      },
      {
        icon: {
          svg: boke
        }, link: "https://duyidao.github.io/blogweb/#/"
      },
    ],
    //页脚
    footer: {
      copyright: "Copyright © 2023-present tydumpling",
    },
  },
  rewrites
})
