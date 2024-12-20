import { join, resolve } from 'node:path'
import matter from 'gray-matter'
import fg from 'fast-glob'
import fs from 'fs-extra'
import { BASE } from '../../meta'

export interface Options {
  base: string
  title?: string
  collapsed?: boolean
}

export const DIR_ROOT = resolve(__dirname, '../../../../')
export const DIR_SRC = resolve(DIR_ROOT, 'docs')

export function fastGlobSync(type: string, dir: string, ignore: string[] = []) {
  const files = fg.sync('**/*.md', { // 修改这里，使用 **/*.md 匹配所有 md 文件
    onlyFiles: type === 'file',
    cwd: dir,
    ignore: [
      '_*',
      'dist',
      'node_modules',
      ...ignore,
    ],
  })
  files.sort()
  return files
}

function getMdTitle(filePath: string): string {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const { data, content: mdContent } = matter(content)

    // 优先使用 frontmatter 中的 title
    if (data.title)
      return data.title

    // 其次查找第一个 h1 标题
    const titleMatch = mdContent.match(/^#\s+(.*)$/m)
    if (titleMatch)
      return titleMatch[1].trim()

    // 最后使用文件名
    return filePath.split('/').pop()?.replace('.md', '') || ''
  }
  catch (e) {
    console.error(`Error reading file: ${filePath}`, e)
    return ''
  }
}
// 路径生成
function getSidebar(dir: string, title: string | undefined) {
  const curDir = resolve(DIR_SRC, dir)
  const files = fastGlobSync('file', curDir)

  const items = files.map((file) => {
    const fullPath = resolve(curDir, file)
    // 使用实际的文件路径
    const relativePath = join('/', dir, file)

    return {
      text: getMdTitle(fullPath),
      link: relativePath.replace(/\.md$/, ''),
      collapsed: false,
    }
  })
  return [{
    text: title || dir.split('/').pop() || '',
    items,
    collapsed: false,
  }]
}
export default (options: Options) => {
  try {
    // 简化路径处理
    const relativePath = options.base.replace(/^\//, '').replace(/\/$/, '')
    const sidebar = getSidebar(relativePath, options.title)
    return sidebar
  }
  catch (e) {
    return []
  }
}
