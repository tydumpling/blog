// 前端正则表达式数组
const RegSidebar = [
  {
    text: '正则',

    items: [
      {
        text: '知识点',

        items: [
          { text: '正则表达式', link: '/Reg/knowledge/index' },
          { text: '元子字符', link: '/Reg/knowledge/元子字符' },
          { text: '模式修饰', link: '/Reg/knowledge/模式修饰' },
          { text: '原子', link: '/Reg/knowledge/原子' },
          { text: '匹配', link: '/Reg/knowledge/匹配' },
          { text: '方法', link: '/Reg/knowledge/方法' },
        ],
      },
      {
        text: '实操演练',

        items: [
          {
            text: '运用前瞻实现密码强度检测',
            link: '/Reg/do/运用前瞻实现密码强度检测',
          },
        ],
      },
      {
        text: '潜在BUG',

        items: [
          { text: '正则中的lastIndex', link: '/Reg/BUG/lastIndex' },
        ],
      },
    ],
  },
]
export default RegSidebar
