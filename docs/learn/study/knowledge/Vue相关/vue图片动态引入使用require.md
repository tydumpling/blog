# Vue图片动态引入使用require

在 `vue` 项目中有一个场景：后端返回了一个数组对象，对象中有一个 `cover` 字段作为图片显示。当该字段为空时则显示默认图片。咋一看很简单，使用一个三元表达式或者或运算的短路想法，例如：

```vue
<img :src="cover ? cover : '../../assets/img/logo.png'" />
```

运行项目时发现动态获取的静态图片无效果显示。

网上对此的解答也很多，千篇一律都是说在vue中动态的引入图片需要使用 `require` 来编译静态资源路径获取资源进行渲染，如果不加上的话则被当做静态资源处理。

只是，又产生了几个疑问：
- 什么是静态资源什么是动态资源
- 为什么没有动态获取的静态资源图片能够渲染，而动态获取的不成功
- require编译做了什么操作

现在回过头来看刚刚找到的解释，感觉好像说了什么，但是又一头雾水。

## 静态资源与动态资源
何谓静态资源？一般客户端发送请求到 `web` 服务器，`web` 服务器从内存在取到相应的文件，返回给客户端，客户端解析并渲染显示出来。

何谓动态资源？一般客户端请求的动态资源，先将请求交于 `web` 容器，`web` 容器连接数据库，数据库处理数据之后，将内容交给 `web` 服务器，`web` 服务器返回给客户端解析渲染处理。

在 `vue` 项目中，静态资源即放在 `assets` 等文件夹内的图片、视频、`iconfont` 字体文件等；动态资源则是通过接口请求获取到的数据。

## 资源渲染
关于第二个问题，首先需要先搞清楚浏览器是怎么运行一个 `vue` 项目的。

众所周知，浏览器只认识 `htnl` 、 `css` 、 `js` 文件，并不认识 `.vue` 文件，而浏览器运行vue项目实际上是先将vue项目进行打包，把每个vue文件打包成一个个css、html与js文件，最后再到浏览器中运行。

因此，如果是动态获取的静态资源不加 `require` ，最终打包的效果如下所示：
```html
<img :src="'../../assets/img/logo.png'" />

<!----------------------------------------->

<img src="../assets/logo.png" alt="logo">
```
可以看出，动态添加的src最终会编译成一个静态的字符串地址。程序运行的时候，会按照这个地址去项目目录中引入资源。而去项目目录中引入资源的这种方式，就是将该资源当成了静态资源。

那为什么不通过动态获取的静态图片能够编译成功呢？重复静态获取一张图片再试一次，打包后效果如下：
```html
<img src="../../assets/img/logo.png" />

<!----------------------------------------->

<img src="/img/logo.6c137b82.png">
<!--或者-->
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/.....">
```
可以发现，使用静态的地址去引入一张图片，图片的路径和图片的名称已经发生了改变，并且编译后过后的静态地址是可以成功的引入资源的。这是因为，在默认情况下，src目录下面的所有文件都会被打包，src下面的图片也会被打包在新的文件夹下并生成新的文件名。编译过后的静态地址引入的是打包过后的图片地址，从而可以正确的引用资源。

因此第二个问题也有了解答：因为动态的添加的src编译过后的地址，与图片资源编译过后的资源地址不一致， 导致无法正确的引入资源。
```
编译过后的src地址：../../assets/logo.png
编译过后的图片资源地址：/img/logo.6c137b82.png
```

## require执行
什么是 `require` ？是一个 `node` 方法，用于引入模块，`JSON` 或本地文件。

《资源渲染》最后的示例代码中编译后的场景分为两种，一种是 `img` 文件夹下的图片路径，一种是 `base64` ，为什么会产生这种差异？

vue最终是通过webpack打包，并且会在 `webpack` 配置文件中编写一系列打包规则。而 `webpack` 中的打包规则，针对的其实是一个一个模块，换而言之 `webpack` 只会对模块进行打包。

当我们使用 `require` 方法引入一张图片的时候，`webpack` 会将这张图片当成一个模块，并根据配置文件中的规则进行打包。我们可以将 `require` 当成一个桥梁，使用了 `require` 方法引入的资源，该资源就会当成模块并根据配置文件进行打包，并返回最终的打包结果。

因此 `require` 打包执行了什么操作？

1. 如果这张图片小于项目中设置的资源限制大小，则会返回图片的`base64` 插入到 `require` 方法的调用处
2. 如果这张图片大于项目中设置的资源限制大小，则会将这个图片编译成一个新的图片资源。`require` 方法返回新的图片资源路径及文件名

因此编译过后的文件地址和被编译过后的资源文件地址不一致，从而无法正确引入资源。而使用 `require`，返回的就是资源文件被编译后的文件地址，从而可以正确的引入资源。

## 题外话

1. 静态的引入一张图片，没有使用 `require` ，为什么返回的依然是编译过后的文件地址？

   在 `webpack` 编译的 `vue` 文件的时候，遇见src等属性会默认的使用 `require` 引入资源路径。引用 `vue-cli` 官方的一段原话

   > 当你在 `JavaScript`、`CSS` 或 `*.vue` 文件中使用相对路径 (必须以 . 开头) 引用一个静态资源时，该资源将会被包含进入 `webpack` 的依赖图中。在其编译过程中，所有诸如 `<img src="...">`、`background: url(...)` 和 `CSS @import` 的资源 `URL` 都会被解析为一个模块依赖。
   >
   > 例如，`url(./image.png)` 会被翻译为 `require('./image.png')`，而：
   >
   > ```html
   > <img src="./image.png">
   > ```
   >
   > 将会被编译到：
   >
   > ```js
   > h('img', { attrs: { src: require('./image.png') } })
   > ```
   >
   > 态引入一张图片的时候，src后面的属性值，实际上是一个变量。`webpack` 会根据 `v-bind` 指令去解析src后面的属性值。并不会通过 `reuqire` 引入资源路径。因此需要手动的添加 `require` 。

2. 如果是 `vite` 创建的项目，以下几种情况可满足自动转换路径：

   1. `css` 的静态路径
   2. `img` 的 `src` 
   3. `import()` 语句
   4. `URL` 

## 业务复现

如何实现鼠标切换图片的显示（图片放在 `src/assets` 文件夹下）？

根据前面的知识积累，可以很快得出直接修改路径是没有效果的，如下：

```js
const path = ref('')
function changeImgFn(e) {
  path.value = `./assets/${e}.jpg`
}
```

由于打包后的图片路径与其不相符，最终图片无法渲染。

方法一：可以采用 `import()` 方法，代码如下：

```js
const path = ref('')
function changeImgFn(e) {
  import(`./assets/${e}.jpg`).then((res) => {
    console.log(res)
    	path.value = res.default
  })
}
```

该方法回调参数拿到的数据如下图所示：

![打印结果](https://pic.imgdb.cn/item/652e9cfbc458853aef0d1417.jpg)

但是这个方法有一个缺点，它会生成一些 `js` 文件，如果不希望这些文件生成，这个方法不可用。

![生成的js文件](https://pic.imgdb.cn/item/652e9c60c458853aef0bb8b8.jpg)

方法二：通过 JavaScript 内置对象 URL 生成地址，需要传入两个参数，参数一为图片相等路径，参数二是相对的对象。代码如下：

```js
const path = ref('')
function changeImgFn(e) {
  const url = new URL(`./assets/${e}.jpg`, import.meta.url)
  console.log(url)
}
```

打印结果如下所示：

![打印结果](https://pic.imgdb.cn/item/652e9eb2c458853aef10f254.jpg)