/**
 * 自动生成 VitePress 侧边栏配置
 * @format
 */
import fs from 'node:fs'
import path from 'node:path'
import type { DefaultTheme } from 'vitepress'

/**
 * 获取 Markdown 文件的标题
 * @param filePath - Markdown 文件的路径
 * @returns 返回文件的标题，优先使用 frontmatter 中的 title，否则使用文件名
 */
function getMarkdownTitle(filePath: string): string {
  const content = fs.readFileSync(filePath, 'utf-8')
  // 匹配 frontmatter 中的 title 字段
  const match = content.match(/title:\s*(.*)/)
  return match ? match[1] : path.basename(filePath, '.md')
}

/**
 * 生成侧边栏配置
 * @param dir - 文档目录的路径
 * @param preferredOrder - 文件夹的首选排序顺序
 * @returns 返回 VitePress 侧边栏配置数组
 */
export function generateSidebar(dir: string, preferredOrder: string[]): DefaultTheme.SidebarItem[] {
  const sidebar: DefaultTheme.SidebarItem[] = []

  // 检查目录是否存在
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`)
    return sidebar
  }

  // 获取并排序文件夹
  const folders = fs
    .readdirSync(dir, { withFileTypes: true })
    // 只获取文件夹，排除 images 目录
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'images')
    // 根据 preferredOrder 数组排序
    .sort((a, b) => {
      const indexA = preferredOrder.indexOf(a.name)
      const indexB = preferredOrder.indexOf(b.name)

      // 如果都不在 preferredOrder 中，按字母顺序排序
      if (indexA === -1 && indexB === -1)
        return a.name.localeCompare(b.name)
      // 如果都在 preferredOrder 中，按其中的顺序排序
      else if (indexA !== -1 && indexB !== -1)
        return indexA - indexB
      // 如果只有一个在 preferredOrder 中，将其排在前面
      else
        return indexA === -1 ? 1 : -1
    })

  // 处理每个文件夹
  folders.forEach((folder) => {
    const folderPath = path.join(dir, folder.name)
    // 获取文件夹中的所有 Markdown 文件
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.md'))

    // 获取文档根目录名
    const path2 = dir.split('/').slice(-1)[0]

    // 处理文件夹中的每个文件
    const items = files.map((file) => {
      const filePath = path.join(folderPath, file)
      const title = getMarkdownTitle(filePath)
      // 生成文件链接
      return { text: title, link: `/${path2}/${folder.name}/${file}` }
    })

    // 添加到侧边栏配置
    sidebar.push({
      text: folder.name,
      items,
    })
  })

  return sidebar
}
