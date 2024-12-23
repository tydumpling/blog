import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { generateSitemap as sitemap } from 'sitemap-ts'
import type { HeadConfig } from 'vitepress'
import { description, github, name } from './meta'
import nav from './vitepressConfig/nav'
import sidebar from './sidebar/index'
import rewrites from './vitepressConfig/rewrites'
import { pwa } from './plugins/pwa'
import { genFeed } from './plugins/genFeed'
import head from './vitepressConfig/head'
import socialLinks from './vitepressConfig/link'

import algolia from './vitepressConfig/algolia'

export default withPwa(defineConfig({
  pwa,
  // outDir: '../dist',
  title: name,
  description,
  appearance: 'dark',
  lastUpdated: true,
  useWebFonts: false,
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
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
  markdown: {
    // lineNumbers:true, //代码快是否启动行号
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 启用或禁用代码标签页功能Markdown 文件中创建带有标页的代码块。
    // codeTabs: true,
    // 文档中的所有 `details` 容器都会显示为`详细信息`。。

    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },
  themeConfig: {
    logo: './chodocs-logo.svg',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '最后一次更新于',
    footer: {
      message: `用心去做高质量的专业前端内容网站，欢迎 <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">star ⭐</a> 让更多人发现`,
      copyright: `<a target="_blank" href="${github}/blob/main/LICENSE">MIT License</a> | 版权所有 © 2022-${new Date().getFullYear()} <a target="_blank" href="${github}">Chocolate and ChoDocs contributors</a>`,
    },
    nav,
    // algolia搜索
    search: {
      provider: 'algolia',
      options: algolia,
    },
    sidebar,
    socialLinks,
  },
  head: head as HeadConfig[],
  async buildEnd(siteConfig) {
    await sitemap({ hostname: 'https://chodocs.cn/' })
    await genFeed(siteConfig)
  },
  rewrites,
}))
