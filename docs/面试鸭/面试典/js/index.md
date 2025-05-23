# (a==1&&a==2&&a==3)

想要实现 `a==1&&a==2&&a==3` 为 true，可以从下面三种思路下手。

## 对象隐式转换调用 toString

该思路主要使用的是对象在做这种运算符时会做隐式转换，且对象的隐式转换方法 `toString` 与· `valueOf` 中会优先执行 `toString` 。因此把 a 设为一个对象，重写其 `toString` 方法来实现这条表达式。

```js
const a = {
  i: 1,
  toString() {
    return this.i++
  }
}

console.log(a == 1 && a == 2 && a == 3) // true
```

执行 `console.log()` 后会调用 a 对象的 `toString` 方法，方法返回对象的 i 值，其自增运算是在执行后自增。因此

- 第一次比较是 i 为1，第一条符合要求，为 true，比较完后 i 自增，现在为2；
- 然后与第二条比较，相等，为 true，比较完毕后自增，现在值为3；
- 再与第三条作对比，相等。

至此全部比较完毕，结果都是真，因此最后打印 true。

## 数组隐式转换调用 join

与第一条类似，数组在运算的时候，会调用自身的`join`方法进行隐式转换，如下：

```js
console.log([] + []) // 空
console.log([] + 1) // 1
console.log(`${[]}1`)// 1
console.log([] - 1)// -1
console.log([] - '1')// -1
```

因此我们可以通过 `join` 方法下手，代码如下所示：

```js
const a = [1, 2, 3]
a.join = a.shift

console.log(a == 1 && a == 2 && a == 3)
```

这么写可能不是很理解，这个 `shift` 到底是干嘛用的，我们可以改变一下，写成下面这个方法：

```js
const a = [1, 2, 3]
const b = a.shift
a.join = b

console.log(a == 1 && a == 2 && a == 3)
```

`shift` 方法是获取数组第一项数据，并改变原数组。我们用 b 变量接收到 `shift` 获取的数据，然后重写了 a 的 `join` 方法，把获取到的值赋值给他，最后拿去比较。流程如下：

- 数组为 `[1,2,3]` ，`shift` 截取第一项，结果为1，原数组改变为 `[2,3]` 。重写后的 `a.join` 值为1，拿去比较
- 数组为 `[2,3]` ，`shift` 截取第一项，结果为2，原数组改变为 `[3]` 。重写后的 `a.join` 值为2，拿去比较
- 数组为 `[3]` ，`shift` 截取第一项，结果为3，原数组改变为 `[]` 。重写后的 `a.join` 值为3，拿去比较

这样比较下来结果都为 true。

## defineProperty

```js
let val = 0
Object.defineProperty(global, 'a', {
  get() {
    return ++val
  }
})
```

此时调用 a 方法后就会调用其 get 代理，返回 val。val是先自增后参与运算，因此 0 先自增为 1，参与比较；后自增为 2，参与比较；最后自增为 3，参与比较。结果都为 true。

## 拓展

### 对象隐式转换

一般情况下，对象转换时如果转换为字符串时调用 `toString` 方法，如果是转换为数值时则调用 `valueOf` 方法。

```js
const obj = {
  i: 10,
  toString() {
    console.log('toString')
    return this.i
  },
  valueOf() {
    console.log('valueOf')
    return this.i
  }
}
alert(obj)// 10 toString
alert(+obj) // 10 valueOf
alert(`${obj}`) // 10 valueOf
alert(String(obj)) // 10 toString
alert(Number(obj)) // 10  valueOf
alert(obj == '10') // true valueOf
alert(obj === '10') // false
```

特殊的，我们考虑一下只重写`toString` 和只重写`valueOf` 的情况下如何隐式调用。

- 只重写`toString` 

  ```js
  const bb = {
    i: 10,
    toString() {
      console.log('toString')
      return this.i
    }
  }
  
  alert(bb)// 10 toString
  alert(+bb) // 10 toString
  alert(`${bb}`) // 10 toString
  alert(String(bb)) // 10 toString
  alert(Number(bb)) // 10 toString
  alert(bb == '10') // true toString
  ```

  得出结论：重写了`toString` 的情况下，对象转换时会无视 `valueOf` 的存在来进行转换。

- 只重写`valueOf` 

  ```js
  const cc = {
    i: 10,
    valueOf() {
      console.log('valueOf')
      return this.i
    }
  }
  
  alert(cc)// [object Object]
  alert(+cc) // 10 valueOf
  alert(`${cc}`) // 10 valueOf
  alert(String(cc)) // [object Object]
  alert(Number(cc)) // 10 valueOf
  alert(cc == '10') // true valueOf
  ```

  发现字符转换时还是调用了`toString` 。为了证实他是否是通过原型链调用 `Object` 原型上的方法，把原型上的`toString` 置空后再试一次。

  ```js
  Object.prototype.toString = null
  
  const dd = {
    i: 10,
    valueOf() {
      console.log('valueOf')
      return this.i
    }
  }
  
  alert(dd)// 10 valueOf
  alert(+dd) // 10 valueOf
  alert(`${dd}`) // 10 valueOf
  alert(String(dd)) // 10 valueOf
  alert(Number(dd)) // 10 valueOf
  alert(dd == '10') // true valueOf
  ```

  得出结论：只重写了toString，对象转换时会无视valueOf的存在来进行转换。但是，如果只重写了valueOf方法，在要转换为字符串的时候会优先考虑toString方法并会在原型链中去找。在不能调用toString的情况下，只能调用valueOf 方法了。

### 数组隐式转换

数组在做运算的时候，会调用自身的`join`方法进行，隐式转换,可以观察下面的代码，输出的结果是一模一样

```js
console.log([] + []) // 空
console.log([] + 1) // 1
console.log(`${[]}1`)// 1
console.log([] - 1)// -1
console.log([] - '1')// -1

// -----------------------------

console.log([].join() + [].join()) // 空
console.log([].join() + 1) // 1
console.log(`${[].join()}1`) // 1
console.log([].join() - 1)
console.log([].join() - '1')// -1
```

