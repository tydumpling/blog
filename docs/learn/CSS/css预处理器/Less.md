## 变量@定义

```
@width: 10px;
@height: @width + 10px;
```

#  混合（Mixins）

```
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

使用
.cas a{
.bordered ()
}
```

## 嵌套 （主要使用）



## & 表示当前选择器的父级

```
.clearfix {
  display: block;
  zoom: 1;
  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

##  @规则嵌套和冒泡

> @ 规则（例如 `@media` 或 `@supports`）可以与选择器以相同的方式进行嵌套。@ 规则会被放在前面，同一规则集中的其它元素的相对顺序保持不变。这叫做冒泡（bubbling）。

```
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}

```

编译后

```
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

## calc() 特例

```
@var: 50vh/2;
width: calc(50% + (@var - 20px));  // 结果是 calc(50% + (25vh - 20px))
```

#  转义（~）

```
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
编译为：
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```

less3.5后可简写为

```
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

#  函数

less内置函数（感觉作用不大平时也用不到）详见[Less 函数 ](https://less.bootcss.com/functions/)

#  映射（Maps） 以对象的形式

`#colors() {}`

```
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

输出

```
.button {
  color: blue;
  border: 1px solid green;
}
```

#  作用域（Scope）自底向上以块级逐级寻找对应变量

```
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```

> 注意与 CSS 自定义属性一样，混合（mixin）和变量的定义不必在引用之前事先定义。因此，下面的 Less 代码示例和上面的代码示例是相同的：

```
@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```

# 导入

```
@import "library"; // library.less
@import "typo.css";
```

