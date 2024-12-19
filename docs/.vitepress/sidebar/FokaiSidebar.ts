// 佛开的数组
const FokaiSidebar = [
  {
    text: '🎞️ 佛开',
    collapsible: true,
    items: [
      {
        text: '🖥 平台',
        collapsible: true,
        items: [
          { text: '💡 介绍', link: '/baidu/fokai/platform/index' },
          { text: '👣 组件', link: '/baidu/fokai/platform/component' },
          { text: '⏭️ 3d跳转', link: '/baidu/fokai/platform/3d跳转' },
        ],
      },
      {
        text: '💡 LED大屏',
        collapsible: true,
        items: [
          { text: '💡 介绍', link: '/baidu/fokai/LED/index' },
          { text: '🟥 样式', link: '/baidu/fokai/LED/style' },
          { text: '🛑 覆盖物', link: '/baidu/fokai/LED/overlay' },
          { text: '💻 Ws', link: '/baidu/fokai/LED/ws' },
          { text: '📦 打包', link: '/baidu/fokai/LED/build' },
        ],
      },
      { text: '🗑 返回', link: '/baidu/' },
    ],
  },
]
export default FokaiSidebar
