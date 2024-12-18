import { execSync } from 'node:child_process'
import { readJSONSync } from 'fs-extra'
import { updateContributors } from './utils'

/* release.ts
功能：自动化发布流程，包括版本升级、贡献者更新、Git 提交和打标签。

具体步骤：

读取旧版本号：从 package.json 中读取当前版本号。
版本升级：使用 bumpp 工具升级版本号，但不进行 Git 提交、打标签或推送。
比较版本号：如果版本号未发生变化，则取消发布流程并退出。
更新贡献者：调用 updateContributors 函数更新贡献者列表。
Git 操作：
添加所有更改到暂存区。
提交更改，提交信息为 "chore: release v{version}"。
打标签，标签信息为 "v{version}"。 */
const { version: oldVersion } = readJSONSync('package.json')

execSync('bumpp --no-commit --no-tag --no-push', { stdio: 'inherit' })

const { version } = readJSONSync('package.json')

if (oldVersion === version) {
  console.log('canceled')
  process.exit()
}

updateContributors()

execSync('git add .', { stdio: 'inherit' })

execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' })
execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' })
