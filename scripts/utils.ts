import { join, resolve } from 'node:path'
import fs from 'fs-extra'
import Git from 'simple-git'
import { $fetch } from 'ohmyfetch'

/* utils.ts
功能：提供一些通用的工具函数，包括路径处理、文件操作、Git 操作和贡献者更新。

具体函数：

git：初始化 simple - git 实例。
DOCS_URL：定义文档网站的 URL。
DIR_ROOT 和 DIR_SRC：定义项目根目录和文档目录的路径。
replacer：替换代码中的特定部分，支持头部、尾部插入或不插入。
uniq：去重数组。
fetchContributors：异步获取 GitHub 仓库的贡献者列表，排除特定的机器人账户，并添加额外的贡献者。
updateContributors：更新 contributors.json 文件，包含最新的贡献者列表。 */
export const git = Git()

export const DOCS_URL = 'https://chodocs.cn'

export const DIR_ROOT = resolve(__dirname, '..')
export const DIR_SRC = resolve(__dirname, '../docs')

export function replacer(code: string, value: string, key: string, insert: 'head' | 'tail' | 'none' = 'none') {
  const START = `<!--${key}_STARTS-->`
  const END = `<!--${key}_ENDS-->`
  const regex = new RegExp(`${START}[\\s\\S]*?${END}`, 'im')

  const target = value ? `${START}\n${value}\n${END}` : `${START}${END}`

  if (!code.match(regex)) {
    if (insert === 'none')
      return code
    else if (insert === 'head')
      return `${target}\n\n${code}`
    else
      return `${code}\n\n${target}`
  }

  return code.replace(regex, target)
}

export function uniq<T extends any[]>(a: T) {
  return Array.from(new Set(a))
}

async function fetchContributors(page = 1) {
  const additional = ['duoluodexiaoxiaoyuan', 'mengqiuleo', 'isolcat', 'YYHCOPPOLO', 'fyjbts']

  const collaborators: string[] = []
  const data = await $fetch<{ login: string }[]>(`https://api.github.com/repos/chodocs/chodocs/contributors?per_page=100&page=${page}`, {
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  }) || []
  collaborators.push(...data.map(i => i.login))
  if (data.length === 100)
    collaborators.push(...(await fetchContributors(page + 1)))

  return Array.from(new Set([
    ...collaborators.filter(collaborator => !['renovate[bot]', 'dependabot[bot]', 'renovate-bot', 'github-actions[bot]'].includes(collaborator)),
    ...additional,
  ]))
}

export async function updateContributors() {
  const collaborators = await fetchContributors()
  await fs.writeFile(join(DIR_SRC, './contributors.json'), `${JSON.stringify(collaborators, null, 2)}\n`, 'utf8')
}
