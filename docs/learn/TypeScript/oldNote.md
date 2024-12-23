# tsNote



## 使用前置

```
安装TypeScript编译器  typeScript意义类型检查

npm install –g typescript
node自带typeScript  全局安装typeScript
如果想直接 通过ts-node去运行ts文件
//全局安装typescript和ts-node
npm install -g typescript
//npm install -g typescript-node 由于typescript-node不支持更高版本的ts
npm install -g ts-node //typescript@>=2.7

```

## 书写约定

```
通常接口 类型别名 类 枚举 等定义为大写字母开头的变量 大驼峰写法
变量 函数  方法 属性 等命名 用小驼峰写法      类型通常用小驼峰写法
另外 在写接口和类型别名时候通常会加Type
interface Person{}
type  PersonType{}
代码并不是写的约简洁越好
// 健壮性 
// 可维护性
// 代码的可读性
// 代码的可扩展性 
// 可移植性
//对于菜鸟来说 用面向对象的方式更容易达到以上的效果
 封装继承多态
 在用面向对象的思想去 开发项目 的时候尽量让这个类所有 的属性都是私有的让外面不可以访问这个属性 
  封装的概念 在类里面的属性设置成一个 私有的属性只能通过内部的getter和setter等方法的方式去获取和设置不能直接在外面打.调用
  继承的概念 对于重复的代码进行重构 提高复用性  子类可以使用父类的所有属性和方法
  继承的时候如果父类的方法和子类的重名那么子类的方法就会覆盖（重写）父类的方法可以用于父类什么都不写去实现一个继承的方法
  
  多态的概念
  clase Game{
playShout（player：Animal）{
  player.shout（）
}
  }
let game:Game  = new Game()
game.playShout（cat） Cat->Animal向上 转型调用的自己的方法
  比如各种各样的游戏再次定义一个类来管理这些游戏 
  多态的特性 对象可以向上转型 cat dog这些子类可以向上转成animate
  多态最常用的  通过接口去实现一个类型 例如将飞机和鸟公共的方法飞定义成一个接口然后将类型定义成一个接口 interface tofly{
    flay（）：void
  }
将飞机和鸟同时去实现这个接口flay和继承 即
class Bird extends Animal implements tofly
 greet(person:string, date:Date)写类型不是必须的许多情况下typeScript会自动帮我们推断类型
 
```

## 编写优秀通用函数的准则

```
1、可能的情况下,使用类型参数本身,而不是对其进行约束  （类型参数下推）
2、总是尽可能少地使用类型参数  见04-08
3、如果一个类型的参数只出现在个地方,请重新考虑你是否真的需要它
类型参数是关联多个值的类型的 （函数复用思想 入参使用泛型当做未知参数）

回调中的可选参数
当为回调写一个函数类型时,永远不要写一个可选参数,
除非你打算在不传递该参数的情况下调用函数。
编与好的重载
在可能的情况下,总是倾向于使用联合类型的参数而不
是重载参数
```



## tsc命令

```
-  1、解决TS和JS冲突问题
   tsc –-init #生成配置文件 
-  2、自动编译
   tsc --watch 
-  3、发出错误  （出现错误不进行ts-js的编译）
   tsc –noEmitOnError hello.ts 
-  // "strict": true,  关闭严格模式 
-  给定显示类型 
```

## tsconfig配置（tsconfig.json）

```
- 降级编译（将js 6789等等兼容到es5 43 这种就叫降级
降级编译（将js 6789等等兼容到es5 43 这种就叫降级
- TypeScript 提供编译设置`ExactOptionalPropertyTypes`，只要同时打开这个设置和`strictNullChecks`，可选属性就不能设为`undefined`。
// 打开 ExactOptionsPropertyTypes 和 strictNullChecks
const obj: {
  x: number;
  y?: number;
} = { x: 1, y: undefined }; // 报错
- TypeScript 提供了一个`noImplicitThis`编译选项。如果打开了这个设置项，如果`this`的值推断为`any`类型，就会报错。
- 严格模式
/* Type Checking */可配置的开关选项
"strict": true, 
"noImplicitAny": true, 
"strictNullChecks": true,  


在"module": "commonjs" 
   "rootDir": "./src",编译入口文件 
   
   /* Emit */
 "outDir": "./",   ts编译成js输出文件夹
```

# 类型约束



```
- 基元类型
string  number  boolean  对于类型常使用小写的

let str: string = 'helo word '
let num: number = 100
let bool: boolean = true
数组类型
type[]  Array<type>  关键字加<>叫做泛型
let arr: number[] = [1,2,34,566,100]限定数组元素每一个都是数值类型的

特殊类型 any  不希望某个特定值导致类型检查错误
any可以赋给任何类型的值   可以被任何访问

类型注释 
let myName: string = "Felixlu";  冒号+类型
只支持这种类型写法 即变量名：变量类型

- 联合类型
let id: number|string|number[]由number和string和number类型的数组组成的类型
但是需要注意的就是需要在调用方法的时候需要这些都有的 如果不一样就需要用到分支去判断

- 类型别名(用名字来代替定义的类型)也可以用接口
语法type 别名  可以是联合基元对象类型等
type Point = {
x： number
y： number
}
type ID = number

type的交叉扩展方式 type Animal = {等号一定要写
x： number
y： number
}
type Bear = Animal &{}

- interface 接口
interface Point = {
x： number
y： number
}
类型别名和接口的区别 type和interface用法很类似
接口是可以扩展的
// 定义重名的接口添加新字段  接口可以通过extends去扩展接口
interface window{
    count:number
}
interface window{
    title:string
}
interface Bear extends Animal

function configure(x: window | 'auto') {}
给定的参数需要和option的结构一样
function configure({
	count:200
})

- 类型断言

typeScript只知道以getElementById将返回某种类型的HTMLelement并不知道具体是哪种类型 但是我们知道myCanvas始终会有HTMLCanvasElement这个类型所以就引入了断言


类型断言会在被编译时删除所以没有与运行断言相关联的运行时检查
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement

const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas')

const x = ('hello' as unknown) as number

类型断言可以帮助我们 在 定义变量这些的时候不知道是什么类型的可以使用断言的方式去写一个unknown而不是写成any 不要 吧ts写成了anyscript

- 文字类型
const在typeScript这种就可以是如何为文字创建类型上了
printText(s: string, alignment: 'left' | 'right' | 'center')
利用了const只能为常量 上述有三个字符串的文字类型即alignmen只能是3个类型的


布尔文字类型
let b1:true = true

当范围太大的时候可以在任意位置添加类型推断来判断我们的类型
文字类型推断
const req = {
  url: 'https://example.com',
  method: 'GET'as 'GET'
}
或者handleRequest(req.url, req.method as 'GET')
或者const req = {} as const这时候req呢吧的属性固定类型了

- null和undefined类型可以直接赋值

- 枚举

只有当你确定了这个是枚举类型所以也不太使用
语法enum Direction{
up=1，  down left right
}
访问 枚举 Direction.up
当我们定义了第一个值的时候 后面的值就依次递增1
- bigint大整数 从es2020引入js			symbol全局唯一引用  （js中通过symbol进行全局引用的）
- 类型缩小 
类型缩小（常用语处理联合类型的变量的场景）instanceof 类型缩小 （判断是否是某个对象类型的实例 类似于typeof）
分配缩小 let x = Math.random() < 0.5 ? 10 : 'hello world'
控制流分析更改类型
例如 example() {
  let x: string | number | boolean

  x = Math.random() < 0.5
  // let x: boolean
  console.log(x)

  if (Math.random() < 0.5) {
    x = 'hello'
    // x: string
    console.log(x)
  } else {
    x = 100
    // x: number
    console.log(x)
  }
//if 语句将example类型覆盖了
  return x
}

let x = example()
x = 'hello'
x = 100
x = true}报错

- 类型谓词
可以直接控制整个代码的类型变化
返回值是一个类型谓词就行了 
语法格式 parameterName is Type  parameterName是函数存在的参数
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}
意思是如果pet里面有swim这个属性返回值就是 fish这个类型 否则就是Boolean这个类型

is 类型谓词
自定义帮助ts收窄变量类型  
可以自定义类型判断方法的类型收窄 主要用法

- void
在js中一个不返还任何值的函数隐含返回 undefined 在ts中 vodi和undefined是不一样的
object  （注意小写）  非基元类型任何引用类型  基元类型 
string number bigint Boolean symbol null  undefined

unknown 比any安全一点做任何事情都是不合法的
never  永远不会被观察到的值 常见的有死循环 抛出一个异常 终止程序的执行 返回值类型就是nerver

- Function 注意大写
全局性的Function类型描述了诸如bind、call、apply和其他存在于JavaScript中所有函数值的属性。它还有一个特殊的属性，即Function类型的值总是可以被调用;这些调用返回any.
- 交叉类型  & 用于 Type   extends 用于interface
主要用于 结合现有的对象类型  主要是type直接&
结合上文可以有如下写法
type  ColorCircle = Circle&Colorful
```

## 高阶类型约束

```
- 根据索引选中的key的值 决定变量类型 索引访问类型
type Age = Person["age"]
- 条件类型
Atype extends Btype？ TRUEtype ： FALSEtype
- 条件类型约束
type Message<T> = T extends {message:unknow}？ T["message"]:never
- 条件类型内推理
type Message<T> = T extends Array<infer Item>？ Item:T
- 分布式条件类型
当条件类型作用于一个通用类型的时候我们给他一个联合类型就变成了分布式类型了
type ToArray<T> = T extends any? Type[]:never
type StrArrOrNumArr = ToArray<string|number>
- 预定义类型
 function f() {
  return {
    x: 10,
    y: 3
  }
}
type P = ReturnType<typeof f>  p是f的返回值类型
等价于type P = {
  x: number;
  y: number;
}
const p: P = 100

解析typeof f
type FunctionType = () => {
  x: number;
  y: number;
}
ReturnType T 必须是一个函数类型。用于提取函数类型的返回值类型。具体来说，ReturnType<T> 接受一个函数类型 T，并返回该函数的返回值类型。
```



## 特殊符号和关键字

```
？。可选链
readonly 仅读（类成员）
interface 接口
interfaceA extends interfaceB 
is 类型谓词
自定义帮助ts收窄变量类型  
可以自定义类型判断方法的类型收窄 主要用法

! 非空断言 （断言为非null和undefined）
this(this指针) 在ts中可以把this当中参数使用（js不行）

... 展开运算符
keyof类型操作符(类型推断)

& 用于 Type 交叉类型
infer关键字
infer可以在extends的条件语句中推断待推断的类型
- 使用infer来推断函数的返回值类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type func = () => number;
type variable = string;
type funcReturnType = ReturnType<func>; // funcReturnType 类型为 number
type varReturnType = ReturnType<variable>; // varReturnType 类型为 any
在这个例子中，`infer R`代表待推断的返回值类型，如果`T`是一个函数，则返回函数的返回值，否则返回`any`
- infer解包
infer的作用不止是推断返回值，还可以解包，我觉得这是比较常用的
假如想在获取数组里的元素类型，在不会infer之前我是这样做的
type Ids = number[];
type Names = string[];
type Unpacked<T> = T extends Names ? string : T extends Ids ? number : T;
type idType = Unpacked<Ids>; // idType 类型为 number
type nameType = Unpacked<Names>; // nameType 类型为string
写了20多行，就为了获取一堆各种不同类型的数组里的元素类型，然而如果使用`infer`来解包，会变得十分简单

type Unpacked<T> = T extends (infer R)[] ? R : T;
这里T extends (infer R)[] ? R : T的意思是，如果T是某个待推断类型的数组，则返回推断的类型，否则返回T
type idType = Unpacked<Ids>; // idType 类型为 number
type nameType = Unpacked<Names>; // nameType 类型为string
再比如，想要获取一个Promise<xxx>类型中的xxx类型，在不使用infer的情况下我想不到何解
type Response = Promise<number[]>;
type Unpacked<T> = T extends Promise<infer R> ? R : T;
type resType = Unpacked<Response>; // resType 类型为number[]

- 同一个类型变量在推断的值有多种情况的时候会推断为联合类型，针对这个特性，很方便的可以将元组转为联合类型
type ElementOf<T> = T extends (infer R)[] ? R : never;
type TTuple = [string, number]; [string, number]是类型数组
type Union = ElementOf<TTuple>; // Union 类型为 string | number
ElementOf<T> 是一个条件类型，用于从数组中提取元素类型

- implement关键字
implement关键字必须对接口进行实现 实现多个用逗号分开
extends继承的关键字  具有所有其父类的属性和方法
继承后基类（父类）和派生类（子类）的初始化关系
```



## 签名

```
_ 函数签名
函数类型表达式语法不允许申明属性 想用属性来描述可调用的对象 可以在一个对象类型中写个调用签名
想要函数有属性
type DescribableFunction = {
  description: string   定义一个属性 
  (someArg: number): boolean   定义函数 注意=》要写成：  ！！！！！
}
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6))
}

function fn1(n: number) {
  console.log(n)
  return true
}
fn1.description = 'hello'
doSomething(fn1) 使用

interface CallOrConstructor {
   (n?:number):number  //定义一个普通函数
}
//   调用签名的一种方式

- 构造签名

type SomeConstructor = {
  new (s: string): Ctor
}  调用构造签名加个new 就是构造签名


type SomeConstructor = {
 new (s: string): Ctor  在构造签名的时候 不写new就是调用属性在签名 否则是构造在前
}

function fn(ctor: SomeConstructor) {
 ctor('hello') 报错
 new  ctor('hello') 构造在前
}

- 索引签名
语法
interface StringArray {
  [index: number]: string  属性名是个number类型 整个的值是string类型（数组里面元素的类型）
  定义了一个数字索引签名表示该类型可以通过数字索引来访问属性 ：后面的string表示通过数字索引访问的属性值的类型
} 
使用const myArray: StringArray = ['a', 'b']
const secondItem = myArray[0]

！注意如果同时定义了数字索引签名和其他属性或方法数字索引签名需要定义在最后面例如
interface Example {
foo：string
bar（）：void
[index:number]:string
}
例二

interface Example2 {
[key:string]:string
}

---------------------------索引访问类型
对象的索引定义类型
 type Person = {
  age: number,
  name: string,
  alive: boolean
}

type Age = Person['age']  ===>number类型
type I = Person['age'|name]  ===>number和string的联合类型  等价于
type I = Person[keyof Person]  


写法三 
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 }
]

// type Person = { name: string, age: number } ↓
type Person = typeof MyArray[number]

```

## 泛型

```
- 应用场景 定义函数 接口或者类的时候不预先指定具体类型而是在使用的时候再指定类型
function longest<标识符>(a: Type, b: Type) 标识符写什么都可以 
泛型 两个值之间存在的对应关系
输入类型与输出类型 有关 或者两种输入的类型以某种方式关联
const re:any = print(123) string类型来接受number类型的返回值 ts并不会报错  泛型就是为了解决这样的问题的
为了解决输入输出要一致的问题

<T 一般写T  可以写默认类型 T=number>
相当于定义几个参数 去打一个框架 预设值参数的类型 在具体使用的时候再具体指定类型
泛型就是类型参数化（可重用） 可以使我们可以创建可适用于多种类型的组件 函数 类 等

- 处理多个函数
function swap<T，U>（tuple：[T,U]）
retuurn [tunple[1],tumple[2]]

- 泛型约束
例如 泛型是T 但是不知道T是否有length这个属性 需要保证他有
通过extends 去约束这个泛型 
interface leng{
length：number
}
使用 <T extends leng>  也可以直接写<T  extends {length:string}>  {}其实是一种限制即T必须要有length


function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {

let x = {
  a: 1, 
  b: 2,

}

getProperty(x, 'a')
getProperty(x, 'm') 报错 类型m的参数function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2)
}
const arr = combine(["string"], [1, 2, 3])type以及被类型推断了直接这样写会报错 下面是强制转换指定类型一般只在入参写
const arr = combine<string | number>(["string"], [1, 2, 3])
console.log(arr)不能赋值给类型 a|b的参数

- 指定类型参数
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2)
}
const arr = combine(["string"], [1, 2, 3])type以及被类型推断了直接这样写会报错 下面是强制转换指定类型一般只在入参写
const arr = combine<string | number>(["string"], [1, 2, 3])
console.log(arr)

- 泛型类型
function identity<Type>(arg: Type): Type {
  return arg
}

let myIdentity: <Type>(arg: Type) => Type = identity
let myIdentity: { <Type>(arg: Type): Type } = identity 
key  value的形式



泛型接口
interface GenericIdentityFn {
  <Type>(arg: Type): Type
}
let myIdentity: GenericIdentityFn = identity


泛型中使用类类型
function create<Type>(c: { new (): Type }): Type {
  return new c()
}
```

## 一些场景

```
- 函数重载
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
函数如何调用
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
函数的实现 注意只能写1个或者3个函数

- 接口重名=>接口交集


```

## 注释

```
*  @param {Array<any> | null} crsTransform - 表示二维仿射变换矩阵的六个数字的数组。
*  @param {Number | null} scall
```

## 类

![局部截取_20241223_110729](https://cdn.jsdelivr.net/gh/tydumpling/Picgo/img20241223110738228.png)

```
构造函数不能有类型参数 构造函数不能有返回类型注释比如constructor：什么的
在 TypeScript 中，构造函数可以通过参数来接收外部传递进来的值，这些参数的类型和数量是可以在构造函数定义时确定的。因此，如果你想要在构造函数中定义类型参数，可以使用泛型参数，例如：
class MyClass<T> {
  constructor(public value: T) {}
}
这里的 T 就是一个类型参数，表示在实例化这个类时，可以传递不同类型的值作为 value 属性的值。而如果你使用 constructor(x: number, y: number) 的方式来定义构造函数，则表示这个类只接受两个 number 类型的参数，而不是使用泛型来接受任意类型的参数。

需要注意的是，如果你使用了泛型类型参数，那么在使用这个类时，需要为这个类型参数传递一个具体的类型。例如：const myInstance = new MyClass<string>("hello");

- getters 和setters 访问器 （存取器类里面特殊的方法）

```

![img](https://cdn.nlark.com/yuque/0/2023/png/34630532/1682651209974-21b2042b-86dc-445c-91c5-8c4a60bc6d84.png)

```
直接通过类似于一个属性名的方法去使用 赋值（设置）就调用set方法 例如object.name（读取）调用get方法

上述分别使用get和set修饰 get可以通过返回应该值来获取这个值 注意get和set修饰的方法必须相同
let c: C = new C() 不能使用c.length（）去调用而是帮他当做属性访问就行
console.log(c.length) 这个就是get
c.length = 100 这个就是set
c.length = 'hello'
右侧是ts的几个规则另外如果自己设置相关类型的话get的参数的类型必须是set参数类型的子类型例如
get size(): number {
    return this._size
  }
  set size(value: string | number | boolean) {
  let num = Number(value)
```

### public protected private

![image-20230628160138626](https://gitee.com/tytangyuan/chartbed/raw/master/img/image-20230628160138626.png)

### static 静态 

static定义的属性和方法不需要进行实例化可以直接通过类名访问（相对于暴露出去的全局类）

![image-20230628160714940](https://gitee.com/tytangyuan/chartbed/raw/master/img/image-20230628160714940.png)

![image-20230628160824969](https://gitee.com/tytangyuan/chartbed/raw/master/img/image-20230628160824969.png)

```
这样的区块表示static{} 可以访问类的内部通过#定义的私有的属性和变量
static区块就是我想只在类的内部调用并且可以直接通过类名去调用就可以写static区块了
```

### 基于类型守卫的this

![image-20230628172835091](https://gitee.com/tytangyuan/chartbed/raw/master/img/image-20230628172835091.png)

### construct参数属性（简化了 在类里面额外定义变量注意的是即使是public也需要写）

![image-20230628173158204](https://gitee.com/tytangyuan/chartbed/raw/master/img/image-20230628173158204.png)

## es模块化

![使用default导出的可以使用一个别名去替代导出 而使用export的需要指定结构出来](https://cdn.jsdelivr.net/gh/tydumpling/Picgo/img20241223111912998.png)

![img](https://raw.githubusercontent.com/tydumplings/imgbed/main/image-20230629135127014.png)

>  可以使用*****导出所有的东西 使用*导出的  如果要使用default的话 可以用 math.default去替代