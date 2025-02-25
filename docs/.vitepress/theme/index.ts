import { inBrowser, useData, useRoute } from 'vitepress'
import type { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'
import mediumZoom from 'medium-zoom'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { registerAnalytics, siteIds, trackPageview } from './plugins/baidutongji'
import googleAnalytics from './plugins/googleAnalytics'
import './styles/main.css'
import './styles/global.css'
import './styles/demo.css'
import './styles/utils.css'
import './styles/vars.css'
import 'uno.css'
import './styles/custom.css'

if (inBrowser)
  import('./plugins/pwa')

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app, router }: EnhanceAppContext) {
    // 方式一：手动注册指定组件
    // app.component('Iframe', components.Iframe)
    // 全局注册所有组件
    //     componentList.forEach(({ name, component }) => {
    //   app.component(name, component)
    // })
    googleAnalytics({
      id: 'G-0F3DLK5BSG',
    })
    if (inBrowser) {
      registerAnalytics(siteIds)

      window.addEventListener('hashchange', () => {
        const { href: url } = window.location
        trackPageview(siteIds, url)
      })

      router.onAfterRouteChanged = (to) => {
        trackPageview(siteIds, to)
      }
    }
  },
  setup() {
    const { frontmatter } = useData()
    const route = useRoute()

    // 评论功能
    giscusTalk({
      repo: 'tydumpling/blog',
      repoId: 'R_kgDONRfAeA',
      categoryId: 'DIC_kwDONRfAeM4CnTxe',
      mapping: 'pathname', // default: `pathname`
      inputPosition: 'top', // default: `top`
      lang: 'zh-CN', // default: `zh-CN`
      lightTheme: 'light', // default: `light`
      darkTheme: 'transparent_dark', // default: `transparent_dark`
      strict: '0', // default: `0`
      reactionsEnabled: '1', // default: `1`
      emitMetadata: '0', // default: `0`
      loading: 'lazy', // default: `lazy`
      crossorigin: 'anonymous', // default: `anonymous`
    }, {
      frontmatter, route,
    },

    true,
    )
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // Should there be a new?
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
}

export default theme
