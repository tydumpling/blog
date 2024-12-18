import { execSync } from 'node:child_process'
import fs from 'fs-extra'

async function release() {
  try {
    const { version: oldVersion } = await fs.readJson('package.json')

    execSync('bumpp --no-commit --no-tag --no-push', { stdio: 'inherit' })

    const { version } = await fs.readJson('package.json')

    if (oldVersion === version) {
      console.log('Release canceled')
      process.exit()
    }

    execSync('git add .', { stdio: 'inherit' })
    execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' })
    execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' })
    execSync('git push --follow-tags', { stdio: 'inherit' })

    console.log(`Successfully released version ${version}`)
  }
  catch (error) {
    console.error('Release failed:', error)
    process.exit(1)
  }
}

release()
