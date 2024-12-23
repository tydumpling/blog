import type { Plugin } from 'vite'
import { replacer } from '../../../scripts/utils'
import { getReadingTime } from './../theme/utils'

export function MarkdownTransform(): Plugin {
  return {
    name: 'tydumpling-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null

      // 排除首页
      const [_name, i] = id.split('/').slice(-2)
      if (_name === 'docs' && i === 'index.md')
        return code

      // 1. 获取页面信息
      const { readTime, words } = getReadingTime(code)
      const pageInfo = `<PageInfo readTime="${readTime}" words="${words}"/>\n\n`
      
      // 2. 检查是否有一级标题并插入 PageInfo
      const hasH1 = /^#\s+[^#\n]+$/m.test(code)
      if (hasH1) {
        // 在第一个一级标题后插入
        code = code.replace(
          /^(#\s+[^#\n]+$\n)/m,
          `$1\n${pageInfo}`
        )
      } else {
        // 在文档开头插入
        code = `${pageInfo}${code}`
      }

      // 3. 处理其他转换
      code = code.replace(/https?:\/\/tydumpling\.cn\//g, '/')
      
      // 处理图片
      const imgRegex = /!\[(.+?)\]\((.+?)\)/g
      let imgMatches = imgRegex.exec(code)
      while (imgMatches) {
        const [text, link] = imgMatches.slice(1)
        code = code.replace(imgMatches[0], `<img src="${link}" alt="${text || 'img'}" />`)
        imgMatches = imgRegex.exec(code)
      }

      // 处理链接
      const linkRegex = /\[(.+?)\]\((.+?)\)/g
      let matches = linkRegex.exec(code)
      while (matches) {
        const [text, link] = matches.slice(1)
        code = code.replace(matches[0], `<CustomLink title="${text}" href="${link}" />`)
        matches = linkRegex.exec(code)
      }

      // 4. 添加页脚
      const { footer } = await getDocsMarkdown()
      code = replacer(code, footer, 'FOOTER', 'tail')

      return code
    },
  }
}

export async function getDocsMarkdown() {
  const ContributorsSection = `\n\n## Contributors\n\n<Contributors/>`
  const CopyRightSection = `\n\n<CopyRight/>\n\n`
  const footer = `${ContributorsSection}${CopyRightSection}`
  return { footer }
}