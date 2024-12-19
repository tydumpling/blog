---
layout: home

title: tydumplingDocs
titleTemplate: 蒸蒸日上~

hero:
  name: tydumplingDocs
  text: "Front-end learning"
  tagline: |
    🔥 谦谨行事方能多吉少恙。
  # 首页图标
  image:
    src: /logo.png
    alt: logo
  actions:
    - theme: brand
      text: 前端知识
      link: /CSS/
    - theme: alt
      text: 项目总结
      link: /project/
    - theme: alt
      text: 关于
      link: /about/
    - theme: brand
      text: tydumpling小站
      link: https://tydumpling.github.io/blog/#/

features:
  - icon: 📕
    title: 学习之旅
    details: 自学成果
    link: /CSS/
  - icon: ⚡
    title: 项目之旅
    details: 项目总结
    link: /project/index
  - icon:  ⌛
    title: 博客部署
    details: 从0到1部署博客
    link: /vitePress/index
  - icon:  🎉
    title: 开发帮助
    details: 开发与学习时有用的帮助
    link: /help/index
  - icon:  📖
    title: 阅读之旅
    details: 书籍是人类进步的阶梯，读本好书吧
    link: /read/index
  - icon:  🎫
    title:  面经
    details: 面经
    link: /面试鸭/面试典/js/(a==1&&a==2&&a==3)
  - icon:  📘
    title: tydumpling小站
    details: tydumpling博客效果展示，功能实现，不容错过
    link: https://tydumpling.github.io/blogweb/#/
  - icon:  🎈️
    title: 持续更新中~
    details: 尽情期待~

---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import { icons } from './socialIcons';

const members = [
  {
    avatar: 'https://www.github.com/tydumpling.png',
    name: 'Yuan tang',
    title: '谦谨行事',
    desc: 'FE Developer<br/>Creator @ <a href="https://github.com/tydumpling/blog" target="_blank">tydumpling</a>',
    links: [
      { icon: 'github', link: 'https://github.com/tydumpling' },
      {
       icon: { svg: icons.bilibili } ,link: "https://space.bilibili.com/201738571",
      },
      // { icon: 'youtube', link: 'https://www.youtube.com/@tydumpling'},
    ]
  },
  {
    avatar: 'https://www.github.com/tydumplings.png',
    name: 'tydumplings',
    title: '热爱学习',
      desc: 'FE Developer<br/>Creator @ <a href="https://github.com/tydumpling/blog" target="_blank">tydumpling</a>',
    links: [
      { icon: 'github', link: 'https://github.com/tydumplings' },
      {
       icon: { svg: icons.bilibili } ,link: "https://space.bilibili.com/201738571",
      },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      核心成员介绍
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<HomeContributors/>