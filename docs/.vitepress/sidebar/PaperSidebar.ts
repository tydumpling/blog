// 知乎日报的数组
const PaperSidebar = [
  {
    text: '📰 知乎日报',
    collapsible: true,
    items: [
      {
        text: 'React版',
        collapsible: true,
        items: [
          { text: '项目初始化', link: '/myself/知乎日报/react版/' },
          {
            text: '路由配置',
            link: '/myself/知乎日报/react版/router',
          },
          {
            text: '仓库配置',
            link: '/myself/知乎日报/react版/redux',
          },
          { text: '接口配置', link: '/myself/知乎日报/react版/api' },
          { text: '组件配置', link: '/myself/知乎日报/react版/组件' },
        ],
      },
      {
        text: 'Vue3+TS版',
        collapsible: true,
        items: [],
      },
      { text: '🗑 返回', link: '/myself/' },
    ],
  },
]
export default PaperSidebar
