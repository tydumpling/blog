import { description, keywords, name, site } from '../meta'

const head = [
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
  ['meta', { name: 'keywords', content: keywords }],
  ['meta', { name: 'author', content: 'Yuan Tang' }],
  ['meta', { property: 'og:type', content: 'article' }],
  ['meta', { name: 'application-name', content: name }],
  ['meta', { name: 'apple-mobile-web-app-title', content: name }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
  ['link', { rel: 'shortcut icon', href: '/blog/favicon.ico' }],
  ['link', { rel: 'icon', href: '/blog/favicon.ico' }],
  ['link', { rel: 'icon', type: 'image/x-icon', href: '/blog/favicon.ico' }],
  ['link', { rel: 'mask-icon', href: '/blog/favicon.png', color: '#06f' }],
  ['meta', { name: 'theme-color', content: '#06f' }],

  ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/icons/apple-touch-icon.png' }],

  // webfont
  ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
  ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
  // og
  ['meta', { property: 'og:description', content: description }],
  ['meta', { property: 'og:url', content: site }],
  ['meta', { property: 'og:locale', content: 'zh_CN' }],
  // analytics
  ['script', { 'async': '', 'defer': '', 'data-website-id': `${process.env.UMAMI_WEBSITE_ID || ''}`, 'src': `${process.env.UMAMI_ENDPOINT || ''}` }],
  ['link', { rel: 'manifest', href: '/blog/manifest.webmanifest' }],
  ['meta', { name: 'theme-color', content: '#06f' }],
  ['link', { rel: 'apple-touch-icon', href: '/blog/images/icons/apple-touch-120x120.png' }],
]
export default head
