import { resolve } from 'node:path'
import { createRequire } from 'node:module'
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// 自动注册组件
import Components from 'unplugin-vue-components/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

const require = createRequire(import.meta.url)

export default defineConfig(async () => {
  return <UserConfig>{
    base: '/blog/', // 添加 base 配置
    server: {
      hmr: {
        overlay: false,
      },
      fs: {
        allow: [
          resolve(__dirname, '..'),
        ],
      },
    },
    plugins: [
      // custom
      MarkdownTransform(),
      // plugins
      Components({
        // 自动注册这里指定了只扫描这个目录
        dirs: resolve(__dirname, '.vitepress/theme/components'), // 确保路径正确
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          IconsResolver({
            componentPrefix: '',
          }),
        ],
        dts: './.vitepress/components.d.ts',
        transformer: 'vue3',
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        defaultStyle: 'display: inline-block',
      }),
      UnoCSS(),
    ],
    css: {
      postcss: {
        plugins: [
          require('postcss-nested'),
        ],
      },
    },
  }
})
