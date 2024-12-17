import fg from 'fast-glob'
import { resolve } from 'pathe'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import {
  description,
  githubSourceContentRegex,
  googleFontRegex,
  googleStaticFontRegex,
  jsdelivrCDNRegex,
  name,
} from '../meta'

export const pwa: Partial<VitePWAOptions> = {
  outDir: '../dist',
  registerType: 'autoUpdate',
  base: '/blog/', // 添加这行，匹配你的 base 路径
  includeAssets: ['**/*.{png,svg,gif,ico,txt}'],
  manifest: {
    id: '/blog/', // 修改这行
    name,
    short_name: name,
    description,
    theme_color: '#06f',
    icons: [
      {
        src: '/blog/images/icons/apple-touch-120x120.png', // 添加 /blog 前缀
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: '/blog/images/icons/android-chrome-192x192.png', // 添加 /blog 前缀
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/blog/images/icons/android-chrome-512x512.png', // 添加 /blog 前缀
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  workbox: {
    navigateFallbackDenylist: [/^\/new$/],
    globPatterns: [
      '**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,json,woff,woff2,ttf,eot}'
    ],
    navigateFallback: null,
    runtimeCaching: [
      {
        urlPattern: googleFontRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-font-style-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: googleStaticFontRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: jsdelivrCDNRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'jsdelivr-cdn-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: githubSourceContentRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'githubusercontent-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
    skipWaiting: true,
    clientsClaim: true,
  },
}
