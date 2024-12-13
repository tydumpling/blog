import{_ as s,c as a,a2 as p,o as e}from"./chunks/framework.DN5Ma_nw.js";const b=JSON.parse('{"title":"类型","description":"","frontmatter":{},"headers":[],"relativePath":"TypeScript/bl-ts.md","filePath":"learn/TypeScript/bl-ts.md","lastUpdated":1733990973000}'),l={name:"TypeScript/bl-ts.md"};function i(t,n,c,r,o,u){return e(),a("div",null,n[0]||(n[0]=[p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>可以如下的写法</span></span>
<span class="line"><span>let num:number = NaN /Infinity /进制数</span></span>
<span class="line"><span>let str:string = \`\${num}\`</span></span>
<span class="line"><span>let n:null = null</span></span>
<span class="line"><span>let v1:viod= null</span></span>
<span class="line"><span>let v2:viod = undefined</span></span>
<span class="line"><span>关闭严格模式</span></span>
<span class="line"><span>可以支持穿插赋值</span></span>
<span class="line"><span>n=a  </span></span>
<span class="line"><span>a=n</span></span></code></pre></div><h1 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h1><h2 id="类型权重" tabindex="-1">类型权重 <a class="header-anchor" href="#类型权重" aria-label="Permalink to &quot;类型权重&quot;">​</a></h2><ol><li>top type 顶级类型 any know</li><li>Object</li><li>Number String Boolean 实例类型</li><li>number string boolean</li><li>never 权重最小</li></ol><p>包含关系和类型赋值关系</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a: Object = {}</span></span>
<span class="line"><span>let b: string = &#39;null&#39;</span></span>
<span class="line"><span>a = b</span></span>
<span class="line"><span>a = false </span></span>
<span class="line"><span>a = Symbol(1) 等等都是可以的</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">unkonw 需要注意的</p><p>unkonw只能赋值给自身或者any</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let tydumpling:unknow = {帅:true，open：（）=&gt; 123}</span></span>
<span class="line"><span>tydumpliing.帅  tydumpling，open（） //会爆红 即unknow是无法读取属性的  方法也是不可调用的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果不知道变量是什么类型的优先失业unknow类型 因为更加安全</span></span></code></pre></div></div><h2 id="object类型" tabindex="-1">Object类型 <a class="header-anchor" href="#object类型" aria-label="Permalink to &quot;Object类型&quot;">​</a></h2><p>原型链中顶级类型对应Object 或者function Object类型包含所有对象和原始 类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a: Object = 123</span></span>
<span class="line"><span>let b: Object = &#39;123&#39;</span></span>
<span class="line"><span>let c: Object = {}</span></span>
<span class="line"><span>let d: Object = ()=&gt;123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//理解成一个包含所有类型的Object继续</span></span></code></pre></div><h2 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-label="Permalink to &quot;object&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a: object = {}</span></span>
<span class="line"><span>let b: object = &#39;1212&#39; // 错误</span></span>
<span class="line"><span>// 常用于泛型约束 代表一个非原始的类型（引用类型  function Array object）</span></span></code></pre></div><h2 id="字面量模式" tabindex="-1">{} 字面量模式 <a class="header-anchor" href="#字面量模式" aria-label="Permalink to &quot;{} 字面量模式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a:{}  = 123</span></span>
<span class="line"><span>let b:{} = &#39;asdas&#39; </span></span>
<span class="line"><span>// new Object 可以理解为 new Object 也是除了顶级类型的所有类型的上层</span></span>
<span class="line"><span>a.age = 12 //false</span></span>
<span class="line"><span>// 虽然可以赋值任意类型但是 是没办法修改的</span></span></code></pre></div><h2 id="接口和对象类型-interface" tabindex="-1">接口和对象类型 interface <a class="header-anchor" href="#接口和对象类型-interface" aria-label="Permalink to &quot;接口和对象类型 interface&quot;">​</a></h2><p>主要用于定义对象匹配关系 并且有第一个字母大写代码约束</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface IUser {</span></span>
<span class="line"><span>  id: number;</span></span>
<span class="line"><span>   name?: string; // optional</span></span>
<span class="line"><span>  email: string;</span></span>
<span class="line"><span>  phone: string;</span></span>
<span class="line"><span>readonly  func: function;</span></span>
<span class="line"><span>readonly  id: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//   age 是强校验的</span></span>
<span class="line"><span>// name ？:可选的可以没有</span></span>
<span class="line"><span>//  func 是只读的不可修改  常用于函数  id</span></span>
<span class="line"><span>let a:IUser = {id:1,name:&quot;&quot;,email:&quot;&quot;,phone:&quot;&quot;,website:&quot;&quot;}</span></span>
<span class="line"><span>// 1.遇到重名的interface会被并集重合</span></span>
<span class="line"><span>interface IUser {</span></span>
<span class="line"><span>  address: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let b:IUser = {id:1,name:&quot;阿萨德&quot;</span></span>
<span class="line"><span>    ,email:&quot;&quot;,phone:&quot;&quot;,website:&quot;&quot;,address:&quot;&quot;} </span></span>
<span class="line"><span>// ！注意如果同时定义了数字索引签名和其他属性或方法数字索引签名需要定义在最后面例如</span></span>
<span class="line"><span>// 索引签名  常用于假设接口返回很多个字段的场景我只定义了其中的几个需要的情况  </span></span>
<span class="line"><span>interface Person {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  age: number;</span></span>
<span class="line"><span>  [propName: string]: any;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let p: Person = {</span></span>
<span class="line"><span>  name: &quot;zhangsan&quot;,</span></span>
<span class="line"><span>  age: 12,</span></span>
<span class="line"><span>  sex: &quot;男&quot;,</span></span>
<span class="line"><span>  address: &quot;深圳&quot;,</span></span>
<span class="line"><span>  getName() {</span></span>
<span class="line"><span>    return this.name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface IUser {</span></span>
<span class="line"><span>  id: number;</span></span>
<span class="line"><span>  name?: string; //</span></span>
<span class="line"><span>  email: string;</span></span>
<span class="line"><span>  password: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 接口继承extends 相对于重名合并</span></span>
<span class="line"><span>interface IUser2 extends IUser {</span></span>
<span class="line"><span>    age: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 继承多个</span></span>
<span class="line"><span>interface IUser3 extends IUser, IUser2 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 定义函数类型</span></span>
<span class="line"><span>type Fn = (a: number, b: number) =&gt; number;</span></span>
<span class="line"><span>// interface定义函数类型</span></span>
<span class="line"><span>interface Fn2 {</span></span>
<span class="line"><span>  (a: number, b: number): number;</span></span>
<span class="line"><span>   // 拆解 是一个函数 （）  函数的返回值是数组元素都是number （）：number[] 参数是name(name:string):number[]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="数组类型" tabindex="-1">数组类型 <a class="header-anchor" href="#数组类型" aria-label="Permalink to &quot;数组类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// number []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr:number[] = [1, 2, 3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Array&lt;number&gt;  数组的普通类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let b:Array&lt;number&gt; = [1, 2, 3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Arr {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[index:number]: string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let c:Arr = [&#39;a&#39;,&#39;b&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义对象数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Arr2{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  number:string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let d: Arr2[] = [{ number: &#39;1&#39; }, { number: &#39;2&#39; }] </span></span>
<span class="line"><span>// 定义二维数组</span></span>
<span class="line"><span>number[][] === Array&lt;Array&lt;number&gt;&gt;</span></span>
<span class="line"><span>let e:number[][] = [[1, 2], [3, 4]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数组元素多类型 =&gt; 元组</span></span>
<span class="line"><span>let TTuple: [number,string]= [1, &#39;2&#39;]  常用是直接any[]   TTuple:any</span></span>
<span class="line"><span>function getArr(...args:number[]){</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function getArr(...args:any[]){</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function getArr(...args: number[]) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 函数两个参数 args  arguments </span></span>
<span class="line"><span>    // 当你在函数参数列表中使用 ...args 时，TypeScript 会自动将传入的所有参数收集到一个数组中，并将其赋值给 args。</span></span>
<span class="line"><span>    //arguments 是一个类数组对象，它具有 length 属性和通过索引访问元素的能力，但它没有数组原型上的方法</span></span>
<span class="line"><span>    let a: IArguments = arguments</span></span>
<span class="line"><span>    console.log(args,a,a.length)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>getArr(1, 2, 3)</span></span></code></pre></div>`,19)]))}const g=s(l,[["render",i]]);export{b as __pageData,g as default};
