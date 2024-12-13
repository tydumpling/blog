import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.DN5Ma_nw.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"TypeScript/constructor.md","filePath":"learn/TypeScript/constructor.md","lastUpdated":1733800972000}'),l={name:"TypeScript/constructor.md"};function c(o,s,i,t,r,d){return e(),a("div",null,s[0]||(s[0]=[p(`<p><code>constructor</code> 方法是 TypeScript 中类的构造函数，主要作用是在创建类的实例时进行初始化操作，例如初始化类的属性、执行其他必要的操作等。 在 TypeScript 中， <code>constructor</code> 方法的使用场景非常广泛，常见的使用场景包括： 1. 初始化类的属性：在 <code>constructor</code> 方法中，可以为类的属性赋初值，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Person {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  age: number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(name: string, age: number) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>    this.age = age;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const person = new Person(&#39;Tom&#39;, 18);</span></span>
<span class="line"><span>console.log(person.name); // 输出：Tom</span></span>
<span class="line"><span>console.log(person.age); // 输出：18</span></span></code></pre></div><ol start="2"><li>执行其他必要的操作：在 <code>constructor</code> 方法中，还可以执行其他必要的操作，例如连接数据库、初始化一些全局变量等。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Database {</span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    // 连接数据库</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class App {</span></span>
<span class="line"><span>  db: Database;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    this.db = new Database();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>子类继承父类时进行初始化：当子类继承父类时，可以在子类的 <code>constructor</code> 方法中调用父类的 <code>constructor</code> 方法进行初始化操作。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(name: string) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Cat extends Animal {</span></span>
<span class="line"><span>  age: number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(name: string, age: number) {</span></span>
<span class="line"><span>    super(name); // 调用父类的 constructor 方法进行初始化</span></span>
<span class="line"><span>    this.age = age;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const cat = new Cat(&#39;Tom&#39;, 3);</span></span>
<span class="line"><span>console.log(cat.name); // 输出：Tom</span></span>
<span class="line"><span>console.log(cat.age); // 输出：3</span></span></code></pre></div><p>总之， <code>constructor</code> 方法是 TypeScript 类的构造函数，主要作用是在创建类的实例时进行初始化操作，使用场景非常广泛。</p><h2 id="super关键字" tabindex="-1">super关键字 <a class="header-anchor" href="#super关键字" aria-label="Permalink to &quot;super关键字&quot;">​</a></h2><p>在 TypeScript 中，可以使用 <code>super</code> 关键字来调用父类的属性和方法。 <code>super</code> 关键字可以在子类中使用，用于访问父类的属性和方法。 在子类的构造函数中，可以使用 <code>super</code> 关键字调用父类的构造函数，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>   constructor(name: string) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>   sayHello() {</span></span>
<span class="line"><span>    console.log(\`Hello, my name is \${this.name}\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> class Cat extends Animal {</span></span>
<span class="line"><span>  age: number;</span></span>
<span class="line"><span>   constructor(name: string, age: number) {</span></span>
<span class="line"><span>    super(name); // 调用父类的 constructor 方法进行初始化</span></span>
<span class="line"><span>    this.age = age;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>   sayHello() {</span></span>
<span class="line"><span>    super.sayHello(); // 调用父类的 sayHello 方法</span></span>
<span class="line"><span>    console.log(\`I am \${this.age} years old\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> const cat = new Cat(&#39;Tom&#39;, 3);</span></span>
<span class="line"><span>cat.sayHello();</span></span></code></pre></div><p>在上面的例子中， <code>Cat</code> 类继承自 <code>Animal</code> 类，使用 <code>super</code> 关键字调用父类的构造函数进行初始化操作。在 <code>Cat</code> 类中，重写了 <code>sayHello</code> 方法，并使用 <code>super</code> 关键字调用父类的 <code>sayHello</code> 方法。 除了在构造函数中使用 <code>super</code> 关键字外，还可以在普通方法中使用 <code>super</code> 关键字调用父类的方法，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>   constructor(name: string) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>   sayHello() {</span></span>
<span class="line"><span>    console.log(\`Hello, my name is \${this.name}\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> class Cat extends Animal {</span></span>
<span class="line"><span>  age: number;</span></span>
<span class="line"><span>   constructor(name: string, age: number) {</span></span>
<span class="line"><span>    super(name); // 调用父类的 constructor 方法进行初始化</span></span>
<span class="line"><span>    this.age = age;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>   sayHello() {</span></span>
<span class="line"><span>    super.sayHello(); // 调用父类的 sayHello 方法</span></span>
<span class="line"><span>    console.log(\`I am \${this.age} years old\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>   run() {</span></span>
<span class="line"><span>    console.log(\`\${this.name} is running\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>   catchMouse() {</span></span>
<span class="line"><span>    super.run(); // 调用父类的 run 方法</span></span>
<span class="line"><span>    console.log(\`\${this.name} is catching mouse\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> const cat = new Cat(&#39;Tom&#39;, 3);</span></span>
<span class="line"><span>cat.catchMouse();</span></span></code></pre></div><p>在上面的例子中， <code>Cat</code> 类中新增了一个 <code>run</code> 方法，并在 <code>catchMouse</code> 方法中使用 <code>super</code> 关键字调用父类的 <code>run</code> 方法。 总之， <code>super</code> 关键字可以在子类中使用，用于访问父类的属性和方法，可以在构造函数和普通方法中使用。</p>`,13)]))}const g=n(l,[["render",c]]);export{m as __pageData,g as default};
