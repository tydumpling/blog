// 这段代码是在注册 Service Worker，这是 PWA 的核心组件之一。immediate: true 表示立即注册 Service Worker，不需要等待用户交互。
import { registerSW } from 'virtual:pwa-register'

/** @see https://vite-plugin-pwa.netlify.app/guide/auto-update.html#ssr-ssg */
registerSW({ immediate: true })
