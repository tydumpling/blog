- 链接跳转md文件
```md
[Getting Started](./help/index) 
```
- 链接到非 VitePress 页面
如果想链接到站点中不是由 VitePress 生成的页面 (外部网页链接)
```md
[Link to pure.html](/pure.html){target="_self"} 使用相对路径并指定目标：
[Link to pure.html](http://yourwebsite.com/pure.html){target="_blank"} 使用完整URL（将在新标签页中打开）：
<a href="/pure.html" target="_self">Link to pure.html</a>  直接使用HTML锚点标签：
```
md 文件中的标题自带锚点属性， 默认会以 标题名称作为锚点的名称

# 自定义锚点名称
```md
语法格式 ： # 标题名称 {#锚点名称}
【注意】 标题不局限于 一级标题，任意级的标题都可以。
例如 ：
# 一级标题 {#header1}
## 二级标题 {#header2}
### 三级标题 {#header3}


使用锚点的语法格式
当前文档内跳转 ：[展示的文案](#锚点的名称)
跨文档的跳转：[展示的文案](目标文档的相对路径#锚点的名称)
锚点的作用就是进行快速的定位，
就像是一个链接，点击一下就跳到了我们想要的位置。
```
## 链接其他文档中的锚点
[跳转到srca/a.md文件的标题](./srca/a#aheader)
[跳转到srca/index.md文件的标题](./srca/#srcaheader)<br>

# 同一个文档内部的跳转
语法格式 ： [展示的文案](#锚点的名称)
例如 ： 上面 helloworld.

```
要为标题指定自定义锚点而不是使用自动生成的锚点，请向标题添加后缀：
# 使用自定义锚点 {#my-anchor}
```
# 使用自定义锚点 {#my-anchor}

# GitHub 风格的表格
```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

# Emoji 🎉
```
:tada: :100:
```
[Emoji列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs){target="_blank"}

# 目录表 (TOC)
```
[[toc]]
```
# 自定义容器
自定义容器可以通过它们的类型、标题和内容来定义。

```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

# 自定义标题

```
::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码
```js
console.log('Hello, VitePress!')
```
:::
```
::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码(这个用的挺多的)
```js
console.log('Hello, VitePress!')
```
:::

# raw 容器
```
::: raw
Wraps in a <div class="vp-raw">
:::
这是一个特殊的容器，可以用来防止与 VitePress 的样式和路由冲突。这在记录组件库时特别有用。可能还想查看 whyframe 以获得更好的隔离。
```

## PostCSS 是一个用于转换 CSS 的工具，可以通过插件来实现各种功能，如自动添加浏览器前缀、转换现代 CSS 语法等。
```
目的
自定义 PostCSS 插件：通过配置 postcss.config.mjs 文件，你可以添加或配置 PostCSS 插件，以满足项目的特定需求。
优化 CSS 输出：例如，自动添加浏览器前缀、压缩 CSS、转换 CSS 变量等。
集成其他工具：与其他构建工具（如 Tailwind CSS、Autoprefixer 等）集成，以增强项目的样式处理能力。
```