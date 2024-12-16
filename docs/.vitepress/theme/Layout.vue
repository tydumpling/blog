<!-- <script setup>
import { usePageFrontmatter } from '@vuepress/client'
import DefaultThemeLayout from 'vitepress/theme'

const frontmatter = usePageFrontmatter()
const customLastUpdatedText = '最后更新时间' // 自定义的文字
</script>

<template>
  <DefaultThemeLayout>
    <template #doc-after>
      <div v-if="frontmatter.lastUpdated" class="custom-last-updated">
        {{ customLastUpdatedText }}: {{ frontmatter.lastUpdated }}
      </div>
    </template>
  </DefaultThemeLayout>
</template>

<style scoped>
.custom-last-updated {
    margin-top: 20px;
    font-size: 0.9em;
    color: #666;
}
</style> -->
