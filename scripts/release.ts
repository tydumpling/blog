import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import fs from 'fs-extra'
import prompts from 'prompts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 检查标签是否存在
function tagExists(version: string) {
  try {
    const result = execSync(`git tag -l "v${version}"`, { stdio: 'pipe' }).toString().trim()
    return result !== ''
  }
  catch {
    return false
  }
}

// 删除已存在的标签
async function deleteExistingTag(version: string) {
  try {
    const { confirmDelete } = await prompts({
      type: 'confirm',
      name: 'confirmDelete',
      message: `标签 v${version} 已存在，是否删除？`,
      initial: false,
    })

    if (confirmDelete) {
      try {
        execSync(`git tag -d "v${version}"`, { stdio: 'inherit' })
        execSync(`git push origin :refs/tags/v${version}`, { stdio: 'inherit' })
      }
      catch (error) {
        // 忽略标签不存在的错误
        return true
      }
      return true
    }
    return false
  }
  catch (error) {
    return false
  }
}

async function release() {
  let oldVersion = ''
  let fullVersion = ''

  try {
    const pkgJson = await fs.readJson('package.json')
    oldVersion = pkgJson.version

    // 1. 选择版本类型
    const { versionType } = await prompts({
      type: 'select',
      name: 'versionType',
      message: '选择版本类型',
      choices: [
        { title: `补丁版本 (${oldVersion} -> ${oldVersion.replace(/\d+$/, m => String(Number(m) + 1))})`, value: 'patch' },
        { title: '次要版本', value: 'minor' },
        { title: '主要版本', value: 'major' },
        { title: '自定义版本', value: 'custom' },
      ],
    })

    if (!versionType) {
      console.log('已取消发布')
      process.exit(0)
    }

    // 2. 处理版本号
    if (versionType === 'custom') {
      const { customVersion } = await prompts({
        type: 'text',
        name: 'customVersion',
        message: '输入版本号:',
        initial: oldVersion,
      })

      const { versionName } = await prompts({
        type: 'text',
        name: 'versionName',
        message: '输入版本名称 (例如: Beta, RC1):',
        initial: '',
      })

      fullVersion = versionName ? `${customVersion}-${versionName}` : customVersion

      // 检查标签是否存在
      if (tagExists(fullVersion)) {
        const deleted = await deleteExistingTag(fullVersion)
        if (!deleted) {
          console.log('已取消发布')
          process.exit(0)
        }
      }

      execSync(`bumpp --no-commit --no-tag --no-push --version ${fullVersion}`, { stdio: 'inherit' })
    }
    else {
      execSync(`bumpp --no-commit --no-tag --no-push ${versionType}`, { stdio: 'inherit' })
      const { version } = await fs.readJson('package.json')
      fullVersion = version
    }

    // 3. 输入发布信息
    const { releaseTitle } = await prompts({
      type: 'text',
      name: 'releaseTitle',
      message: '输入发布标题:',
      initial: `Release v${fullVersion}`,
    })

    const { releaseNotes } = await prompts({
      type: 'text',
      name: 'releaseNotes',
      message: '输入发布说明 (可选，支持多行):',
      initial: '',
    })

    if (!releaseTitle) {
      console.log('已取消发布')
      process.exit(0)
    }

    // 4. Git 操作
    execSync('git add .', { stdio: 'inherit' })

    const commitMessage = releaseNotes
      ? `chore: ${releaseTitle}\n\n${releaseNotes}`
      : `chore: ${releaseTitle}`

    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' })

    // 使用完整版本号创建标签
    execSync(`git tag -a "v${fullVersion}" -m "${releaseTitle}${releaseNotes ? `\n\n${releaseNotes}` : ''}"`, { stdio: 'inherit' })

    // 5. 推送到远程仓库
    try {
      execSync('git push origin main', { stdio: 'inherit' })
      execSync('git push origin --tags', { stdio: 'inherit' })
      console.log(`\n✨ 成功发布 ${releaseTitle}`)
    }
    catch (error) {
      console.log(`
本地发布完成！请手动执行以下命令：
git push origin main
git push origin --tags
      `)
    }
  }
  catch (error) {
    console.error('发布失败:', error)
    if (oldVersion) {
      try {
        await fs.writeJson('package.json', { ...await fs.readJson('package.json'), version: oldVersion }, { spaces: 2 })
        execSync('git reset --hard HEAD~1', { stdio: 'inherit' })
        if (fullVersion && tagExists(fullVersion))
          execSync(`git tag -d "v${fullVersion}"`, { stdio: 'inherit' })

        console.log('成功回滚更改')
      }
      catch (rollbackError) {
        console.error('回滚失败:', rollbackError)
      }
    }
    process.exit(1)
  }
}

release()
