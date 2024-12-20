import { version } from '../../package.json'

// base info
export const name = 'tydumpling'
export const site = 'https://tydumpling.cn/'
export const logo = 'https://tydumpling.cn/tydumpling-logo.svg'
export const keywords = '前端专栏、学习路线、面试手册、知识体系、前端面试、前端算法、编程学习、bilibili、vitepress、随笔、资源导航、知识星球、tydumpling、React、Vue、Next.js、思维导图、coding、github'
export const description = '前端内容网站，学习路线、知识体系，跟随前沿技术，深广度学习，React 与 Vue 生态。'
export const BASE = 'blog'
// social link
export const bilibili = 'https://space.bilibili.com/201738571'
export const github = 'https://github.com/tydumpling/tydumpling'

// docs version
export const docsVersion = version

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')
