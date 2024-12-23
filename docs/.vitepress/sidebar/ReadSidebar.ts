/**
 * 阅读模块 ************************************************************
 */
// 阅读数组
const ReadSidebar = [
  {
    text: '📖 阅读',

    items: [
      { text: '✨ 索引', link: '/read/' },
      {
        text: 'Javascript',

        items: [
          {
            text: 'ES6标准入门',

            collapsed: true,
            items: [
              { text: '索引', link: '/read/javascript/ES6标准入门/index' },
              { text: '第一章 ECMAScript6简介', link: '/read/javascript/ES6标准入门/1' },
              { text: '第二章 Let 和 const 命令', link: '/read/javascript/ES6标准入门/2' },
              { text: '第三章 变量的解构赋值', link: '/read/javascript/ES6标准入门/3' },
              { text: '第四章 字符串的扩展', link: '/read/javascript/ES6标准入门/4' },
              { text: '第五章 正则的扩展', link: '/read/javascript/ES6标准入门/5' },
              { text: '第六章 数值的扩展', link: '/read/javascript/ES6标准入门/6' },
              { text: '第七章 函数的扩展', link: '/read/javascript/ES6标准入门/7' },
              { text: '第八章 数组的扩展', link: '/read/javascript/ES6标准入门/8' },
              { text: '第九章 对象的扩展', link: '/read/javascript/ES6标准入门/9' },
              { text: '第十章 Symbol的扩展', link: '/read/javascript/ES6标准入门/10' },
              { text: '第十一章 Set和Map数据结构', link: '/read/javascript/ES6标准入门/11' },
            ],
          },
        ],
      },
      {
        text: 'Vue',

        collapsed: true,
        items: [
          { text: 'Vue.js设计与实现', link: '/read/Vue/Vue.js设计与实现.md' },
        ],
      },
    ],
  },
]
export default ReadSidebar
