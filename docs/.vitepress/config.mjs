import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { generateSitemap as sitemap } from 'sitemap-ts'
import nav from './vitepressConfig/nav'
import sidebar from './sidebar/index'
import rewrites from './vitepressConfig/rewrites'
import { pwa } from './plugins/pwa'
import { genFeed } from './plugins/genFeed'
import head from './vitepressConfig/head'

// 'packages/:pkg/src/(.*)': ':pkg/index.md'
// packages这是路径的固定部分，base路径
// :pkg：这是一个动态参数，表示匹配的路径中的一部分可以是任意值，并且这个值会被捕获并命名为 :pkg。例如，如果路径是 packages/vue/src/some-file.md，那么 :pkg 的值就是 vue。
// 这是路径的另一个固定部分，表示匹配的路径必须包含 src/。
// .*这是一个正则表达式，表示匹配任意.的文件
import socialLinks from './vitepressConfig/link.ts'

export default withPwa(defineConfig({
  pwa,
  // 网站标题
  title: 'tydumpling博客',
  base: '/blog/',
  // 网站描述
  description: 'tydumpling博客',
  // 打包目录
  // dest: './dist',
  head,
  async buildEnd(siteConfig) {
    await sitemap({ hostname: 'https://tydumpling.cn/' })
    await genFeed(siteConfig)
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 排除 vue 相关模块
            if (id.includes('node_modules') && !id.includes('vue'))
              return 'vendor'
          },
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    ssr: {
      // 添加 SSR 外部化配置
      noExternal: ['mark.js', 'vue'],
    },
    optimizeDeps: {
      // 包含需要预构建的依赖
      include: ['vue'],
    },
  },
  // 使用插件
  plugins: [
    '@vuepress/active-header-links', // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/back-to-top', // 返回顶部插件
    '@vuepress/medium-zoom', // 图片预览插件
    '@vuepress/nprogress', // 页面顶部进度条
  ],
  // 忽略死链检查（指向一个不存在页面或资源）
  ignoreDeadLinks: true,

  markdown: {
    // lineNumbers:true, //代码快是否启动行号
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 启用或禁用代码标签页功能Markdown 文件中创建带有标页的代码块。
    codeTabs: true,
    // 文档中的所有 `details` 容器都会显示为`详细信息`。。

    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },
  // 主题配置
  themeConfig: {
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    editLink: {
      pattern: 'https://github.com/tydumpling/blog/main/docs/:path',
      text: '在github上编辑',
    },
    // 首页标题图标
    logo: '/favicon.ico',
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示每一页的底部
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
        locale: 'zh-CN',
      },
    },
    siteTitle: '『 tydumpling博客 』',
    outlineTitle: '导航~',
    outline: [0, 6],
    // 启用页面丝滑滚动
    smoothScroll: true,
    // 头部导航栏配置
    nav,
    // 设置搜索框的样式
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },

    // 左侧导航栏
    sidebar,
    // 社交链接
    socialLinks,
    // 页脚
    footer: {
      copyright: 'Copyright © 2023-present tydumpling',
    },
  },
  rewrites,
}))
