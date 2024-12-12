import{_ as a,c as n,a2 as i,o as p}from"./chunks/framework.DN5Ma_nw.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"TypeScript/函数珂里化.md","filePath":"learn/TypeScript/函数珂里化.md","lastUpdated":1733800972000}'),e={name:"TypeScript/函数珂里化.md"};function l(t,s,h,c,k,d){return p(),n("div",null,s[0]||(s[0]=[i(`<h3 id="type-类型别名-和interface-接口-对象可以做什么的-的区别" tabindex="-1">type 类型别名 和interface 接口（ 对象可以做什么的 ）的区别 <a class="header-anchor" href="#type-类型别名-和interface-接口-对象可以做什么的-的区别" aria-label="Permalink to &quot;type  类型别名 和interface 接口（ 对象可以做什么的 ）的区别&quot;">​</a></h3><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">interface通过 继承来扩展 type通过</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">来扩展</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">接口可以（同名接口）自动合并，而类型别名不行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">能用 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的地方就用 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，否则用 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，其实这个解释官方说的也比较明确，这样使用的原因是因为更贴合 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">JavaScript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 对象的工作方式，再清晰一些，如果我们是定义一个 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，那么最好是使用 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 去做类型声明，什么时候用 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 呢，当定义一个 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的时候，用 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 会更好一些：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OOP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的理念中，接口反映的是协议，它约束了一类相似的”东西“都应该具有的属性，毫无疑问，除非明确是 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的场景，否则都应该用 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，因为在大多数的场景下我们使用 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 去定义了类型而非接口，当一个接口需要被实现的时候才可以被定义为 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">接口存在的意义是为了解耦</span></span></code></pre></div><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用  type ： </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 当你需要定义联合类型、交叉类型、元组类型或其他复杂类型时， type  更适合。例如，你可以使用  type  定义一个联合类型： </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 当你需要为已有类型起一个新的别名时， type  更合适。例如，你可以使用  type  定义一个别名来表示一个函数类型： </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyFunction</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 当你需要使用类型操作符（Type Operators）时，如  keyof 、 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 、 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  等， type  更适合。例如，你可以使用  type  和  keyof  来定义一个新的类型： type MyKeys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> keyof MyType;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ： </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- 当你需要描述一个对象的形状和结构时， </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  更适合。例如，你可以使用  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  定义一个对象类型： </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyInterface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 当你需要定义一个类或对象的实现时， </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  更合适。例如，你可以使用  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  定义一个类的实现： </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyImplementation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SomeClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 当你需要扩展或实现一个已有的接口时， </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  更适合。例如，你可以使用  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  扩展一个已有的接口： </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyInterface</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SomeOtherInterface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span></code></pre></div><h3 id="public-static-protected-private" tabindex="-1">public static protected private <a class="header-anchor" href="#public-static-protected-private" aria-label="Permalink to &quot;public  static protected private&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public：默认的访问修饰符，表示属性或方法是公共的，可以在类内部和外部访问。</span></span>
<span class="line"><span>protected：表示属性或方法是受保护的，只能在类内部和子类中访问，外部不能访问。</span></span>
<span class="line"><span>private：表示属性或方法是私有的，只能在类内部访问，外部和子类都不能访问。</span></span>
<span class="line"><span>同时，static 修饰符用于定义类的静态属性和方法，它们不依赖于类的实例化对象，而是直接通过类名来调用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，public static 表示静态属性或方法是公共的，protected static 表示静态属性或方法是受保护的，private static 表示静态属性或方法是私有的。</span></span></code></pre></div><p>private protected（不可以在外部调用可以被继承）</p><p>抽象类 abstract 不允许被实例化 new</p><p>抽象类 中的抽象方法必须被子类实现 不然会报错</p><p><code>static</code>关键字用于定义静态方法或静态属性。静态方法和属性是与类关联的，而不是与类的实例对象关联的，因此可以通过类本身来调用这些方法或属性，而不需要先创建类的实例对象。</p><p>静态方法和属性可以用于实现与类相关的全局操作或<a href="https://www.zhihu.com/search?q=%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2936901216%7D" target="_blank" rel="noreferrer">全局变量</a>，或者用于封装一些工具函数或工具属性。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Check</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num：</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	isShowCheck</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">		isShowCheck</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	)</span></span></code></pre></div><p>定义在constructor中的isShowCheck被称为构造函数参数属性，它是在创建类的实例时动态传入的。而定义在constructor外部的isShowCheck被称为实例属性，它是类的实例化后固定的属性。</p><p>在类的内部，两者的访问方式是一样的。但在类的外部，实例属性可以被直接访问，而构造函数参数属性必须通过类的实例传入。举个例子：、</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> check1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Check</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(check1.isShowCheck); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> check2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Check</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(check2.isShowCheck); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出true</span></span></code></pre></div><p>isShowCheck是属于实例对象的，因为每个实例对象都有自己的isShowCheck属性，可以通过实例对象来访问和修改它。而num是属于类本身的，它是一个静态属性，只有一个副本，被所有实例对象所共享，可以通过类名直接访问和修改。例如可以通过Check.num来访问和修改它，而不能通过实例对象来访问和修改它。</p><h2 id="type和interface的区别和主要场景" tabindex="-1">type和interface的区别和主要场景 <a class="header-anchor" href="#type和interface的区别和主要场景" aria-label="Permalink to &quot;type和interface的区别和主要场景&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TypeScript中的 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 和 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 都是用来描述数据类型的语法，它们有很多相似之处，但也有不同之处。 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是一种定义对象类型的语法，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  它通常用于描述一个对象的属性和方法。例如：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sayHello</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">type 是一种定义类型别名的语法，它通常用于定义复杂的数据类型，例如联合类型、交叉类型、元组类型等。例如：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sayHello</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">两者的主要区别在于： </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 可以被继承和实现，而 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不行。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 只能定义对象类型，而 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 可以定义任何类型。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 可以定义重载方法，而 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不行。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4.  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 可以使用联合类型、交叉类型、元组类型等高级类型，而 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不行。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 两者的主要使用场景也不一样： </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 1. 当您需要描述一个对象类型时，使用 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2. 当您需要定义复杂的数据类型时，使用 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 。 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 总之， </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 和 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 都是非常有用的语法，您可以根据具体的需求选择使用哪种。</span></span></code></pre></div><h2 id="装饰器" tabindex="-1">装饰器 <a class="header-anchor" href="#装饰器" aria-label="Permalink to &quot;装饰器&quot;">​</a></h2><p>在 TypeScript 中，装饰器是一种特殊类型的声明，它可以附加到类、方法、属性或参数上，以扩展它们的行为或添加元数据。装饰器使用 <code>@</code> 符号来表示，并放置在被修饰的声明之前。 让我们通过一个示例来理解装饰器的作用。假设我们有一个 <code>Person</code> 类，我们希望在实例化对象之前，自动为其添加一个日志记录的功能。我们可以使用装饰器来实现这个需求。 首先，我们定义一个装饰器函数，它接收一个目标对象作为参数，并在该对象的构造函数上添加一个新的方法：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addLogging</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> originalConstructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 创建一个新的构造函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> newConstructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Creating new instance...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> originalConstructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 复制原始构造函数的原型</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  newConstructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> originalConstructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newConstructor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">然后，我们可以将装饰器应用到  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Person\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  类上：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@addLogging</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Person constructor called.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>现在，当我们实例化 <code>Person</code> 类时，装饰器会自动添加日志记录的功能：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const person = new Person(&#39;John&#39;);</span></span>
<span class="line"><span>// 输出:</span></span>
<span class="line"><span>// Creating new instance...</span></span>
<span class="line"><span>// Person constructor called.</span></span></code></pre></div><p>通过使用装饰器，我们成功地扩展了 <code>Person</code> 类的行为，而无需修改原始类的代码。 这只是装饰器的一个简单示例，实际上装饰器可以用于更多复杂的场景，例如身份验证、性能测量等。装饰器为我们提供了一种灵活且可重用的方式来修改或扩展类及其成员的行为。</p><p><strong>装饰器是在编译期间发生的，这个时候类的实例还没有生成，因此装饰器无法直接对类的实例进行修改。但是可以间接的通过修改类的原型影响实例</strong></p><p>这样的修饰器意义不大，我们要应对更多的情况，因此可以给修饰器加上参数，或者叫做<code> 注解</code></p><blockquote><p>addLogging求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入</p></blockquote><p><strong>属性装饰器</strong></p><ol><li>属性装饰器表达式会在运行时当做函数被调用，有两个参数</li><li>第一个参数： 对于静态成员来说是 构造函数； 对于实例成员来说是原型对象; 第二个参数： 当前属性的名称</li></ol><h2 id="函数柯里化" tabindex="-1">函数柯里化 <a class="header-anchor" href="#函数柯里化" aria-label="Permalink to &quot;函数柯里化&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>函数柯里化是一种将接受多个参数的函数转换为接受一个参数的函数序列的过程。通过柯里化，我们可以将一个函数拆分为多个单参数函数，每个函数都返回一个新函数，直到最后一个函数返回最终结果。 </span></span>
<span class="line"><span>柯里化的优点之一是它可以帮助我们创建更具可复用性和灵活性的函数。通过柯里化，我们可以部分应用函数，即提供部分参数来创建一个新的函数。这使得我们可以轻松地创建具有默认参数的函数，或者只提供一部分参数，以后再提供剩余的参数。 </span></span>
<span class="line"><span>让我们通过一个简单的例子来理解柯里化的概念：</span></span>
<span class="line"><span>function add(a) {</span></span>
<span class="line"><span>  return function(b) {</span></span>
<span class="line"><span>    return a + b;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const add5 = add(5); // 部分应用函数，创建一个新函数 add5  function(b) {</span></span>
<span class="line"><span>    return a + b;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>console.log(add5(3)); // 输出: 8</span></span>
<span class="line"><span>console.log(add5(7)); // 输出: 12</span></span>
<span class="line"><span>在上面的例子中，我们定义了一个  add  函数，它接受一个参数  a ，并返回一个新的函数，该函数接受参数  b ，并返回  a + b  的结果。通过调用  add(5) ，我们部分应用了函数，创建了一个新函数  add5 ，它接受一个参数  b ，并返回  5 + b  的结果。通过调用  add5(3)  和  add5(7) ，我们可以得到不同的结果，这是因为  add5  保留了  add  函数中的参数  a  的值。 </span></span>
<span class="line"><span>柯里化是一种强大的技术，它可以帮助我们简化函数的编写和使用，提高代码的可读性和可维护性。它在函数式编程中被广泛使用，并在许多编程语言中得到支持。</span></span></code></pre></div><h2 id="元组和类型别名" tabindex="-1">元组和类型别名 <a class="header-anchor" href="#元组和类型别名" aria-label="Permalink to &quot;元组和类型别名&quot;">​</a></h2><p>元组类型是一种特殊的数组类型，它定义了一个固定长度和固定类型的数组。在上述例子中， <code>Color</code> 是一个元组类型，包含两个元素，第一个元素是布尔类型，第二个元素是字符串类型。 与类型别名的区别在于，元组类型是用于定义具有固定长度和固定类型的数组结构，而类型别名是用于给类型起一个新的名字。类型别名可以用于任何类型，包括基本类型、复杂类型、联合类型等，而元组类型只适用于数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type Point = {</span></span>
<span class="line"><span>  x: number;</span></span>
<span class="line"><span>  y: number;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Color = [boolean, string];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const point: Point = {</span></span>
<span class="line"><span>  x: 10,</span></span>
<span class="line"><span>  y: 20</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const color: Color = [true, &quot;red&quot;];</span></span></code></pre></div><p>在上述示例中， <code>Point</code> 是一个类型别名，用于定义一个具有 <code>x</code> 和 <code>y</code> 属性的对象类型。而 <code>Color</code> 是一个元组类型，用于定义一个包含布尔值和字符串的固定长度数组。</p><h2 id="类型操作符" tabindex="-1">类型操作符 <a class="header-anchor" href="#类型操作符" aria-label="Permalink to &quot;类型操作符&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>类型操作符是 TypeScript 中的一些关键字或运算符，用于对类型进行操作和转换。以下是一些常见的类型操作符及其使用方法：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  \`typeof\` ：用于获取一个值的类型。例如， \`typeof x\`  返回变量  \`x\`  的类型。</span></span>
<span class="line"><span>const x = 5;</span></span>
<span class="line"><span>   const typeOfX: typeof x = &quot;number&quot;; // 类型为 &quot;number&quot;</span></span>
<span class="line"><span>2.  \`keyof\` ：用于获取一个类型的所有属性名组成的联合类型。例如， \`keyof T\`  返回类型  \`T\`  的所有属性名的联合类型。</span></span>
<span class="line"><span>interface Person {</span></span>
<span class="line"><span>     name: string;</span></span>
<span class="line"><span>     age: number;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   type PersonKeys = keyof Person; // 类型为 &quot;name&quot; | &quot;age&quot;</span></span>
<span class="line"><span>3.  \`in\` ：用于遍历一个联合类型的所有成员。可以与 \`keyof\` 一起使用，用于遍历类型的所有属性。</span></span>
<span class="line"><span>type Fruit = &quot;apple&quot; | &quot;banana&quot; | &quot;orange&quot;;</span></span>
<span class="line"><span>   type FruitProps = { [P in Fruit]: number }; // 类型为 { apple: number, banana: number, orange: number }</span></span>
<span class="line"><span>4.  \`extends\` ：用于泛型约束，表示一个类型必须是另一个类型的子类型。</span></span>
<span class="line"><span>interface Animal {</span></span>
<span class="line"><span>     name: string;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   interface Dog extends Animal {</span></span>
<span class="line"><span>     breed: string;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   function printName&lt;T extends Animal&gt;(animal: T): void {</span></span>
<span class="line"><span>     console.log(animal.name);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   const dog: Dog = { name: &quot;Buddy&quot;, breed: &quot;Labrador&quot; };</span></span>
<span class="line"><span>   printName(dog); // 输出: &quot;Buddy&quot;</span></span>
<span class="line"><span>这些是 TypeScript 中常见的类型操作符，它们可以用于对类型进行操作、转换和约束，帮助我们更好地定义和使用类型。根据具体的需求，选择适合的类型操作符来实现所需的功能。</span></span></code></pre></div><h2 id="函数方面" tabindex="-1">函数方面 <a class="header-anchor" href="#函数方面" aria-label="Permalink to &quot;函数方面&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>具有默认值的参数如果不位于参数列表的末尾，调用时不能省略，如果要触发默认值，必须显式传入undefined。</span></span>
<span class="line"><span>function add(</span></span>
<span class="line"><span>  x:number = 0,</span></span>
<span class="line"><span>  y:number</span></span>
<span class="line"><span>) {</span></span>
<span class="line"><span>  return x + y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>add(1) // 报错</span></span>
<span class="line"><span>add(undefined, 1) // 正确</span></span></code></pre></div><h2 id="函数重载" tabindex="-1">函数重载 <a class="header-anchor" href="#函数重载" aria-label="Permalink to &quot;函数重载&quot;">​</a></h2><p>函数重载是指在编程中可以定义多个同名函数，但这些函数的参数类型、参数个数或者返回值类型不同。通过函数重载，可以根据不同的参数类型或个数来调用不同的函数实现特定的功能。</p><p>关于函数重载，必须要把精确的定义放在前面，最后函数实现时，需要使用 <code>|</code>操作符或者<code>?</code>操作符，把所有可能的输入类型全部包含进去，以具体实现。如下例子1 和 例子3</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface User {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  age: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare function test(para: User | number, flag?: boolean): number;</span></span></code></pre></div><p>在这个 test 函数里，我们的本意可能是当传入参数 para 是 User 时，不传 flag，当传入 para 是 number 时，传入 flag。TypeScript 并不知道这些，当你传入 para 为 User 时，flag 同样允许你传入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const user = {</span></span>
<span class="line"><span>  name: &#39;Jack&#39;,</span></span>
<span class="line"><span>  age: 666</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 没有报错，但是与想法违背</span></span>
<span class="line"><span>const res = test(user, false);</span></span></code></pre></div><p>使用函数重载能帮助我们实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface User {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  age: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare function test(para: User): number;</span></span>
<span class="line"><span>declare function test(para: number, flag: boolean): number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const user = {</span></span>
<span class="line"><span>  name: &#39;Jack&#39;,</span></span>
<span class="line"><span>  age: 666</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// bingo</span></span>
<span class="line"><span>// Error: 参数不匹配</span></span>
<span class="line"><span>const res = test(user, false);</span></span></code></pre></div><h2 id="declare-关键字" tabindex="-1">declare 关键字 <a class="header-anchor" href="#declare-关键字" aria-label="Permalink to &quot;declare  关键字&quot;">​</a></h2><p><code>declare</code> 关键字在 TypeScript 中用于声明全局变量、全局函数、全局对象、类或模块等的类型，以告诉编译器某个标识符是已经存在的，而不需要进行实际的定义或实现。</p><p>使用 <code>declare</code> 关键字可以让 TypeScript 在编译时不对这些标识符进行类型检查或编译，而是假设它们已经存在，并且可以在运行时被正确引用。这在与其他 JavaScript 库或框架进行集成时非常有用，因为这些库或框架的类型定义可能不在当前的 TypeScript 项目中。</p><p>下面是一些使用 <code>declare</code> 关键字的示例：</p><ol><li><p>声明全局变量： declare const myVar: number; 这个声明告诉编译器，在运行时会有一个名为 <code>myVar</code> 的全局变量，类型为 <code>number</code> 。</p></li><li><p>声明全局函数： declare function myFunc(a: number, b: number): number; 这个声明告诉编译器，在运行时会有一个名为 <code>myFunc</code> 的全局函数，接受两个 <code>number</code> 类型的参数，并返回一个 <code>number</code> 类型的值。</p></li><li><p>声明全局对象： declare namespace myNamespace { function myFunc(a: number): void; const myVar: string; } 这个声明告诉编译器，在运行时会有一个名为 <code>myNamespace</code> 的全局对象，其中包含一个名为 <code>myFunc</code> 的函数和一个名为 <code>myVar</code> 的常量。</p></li></ol><p>通过使用 <code>declare</code> 关键字，我们可以在 TypeScript 项目中使用外部的 JavaScript 库或框架，并为它们提供类型定义，以获得更好的类型检查和开发体验。</p><h2 id="interface-继承-type" tabindex="-1">interface 继承 type <a class="header-anchor" href="#interface-继承-type" aria-label="Permalink to &quot;interface 继承 type&quot;">​</a></h2><p>interface 可以继承<code>type</code>命令定义的对象类型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type Country = {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  capital: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface CountryWithPop extends Country {</span></span>
<span class="line"><span>  population: number;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面示例中，<code>CountryWithPop</code>继承了<code>type</code>命令定义的<code>Country</code>对象，并且新增了一个<code>population</code>属性。</p><p>注意，如果<code>type</code>命令定义的类型不是对象，interface 就无法继承。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface 接口或 type 别名，可以用对象的形式，为 class 指定一组检查条件。然后，类使用 implements 关键字，表示当前类满足这些外部类型条件的限制。</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class A {</span></span>
<span class="line"><span>  private x = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = new A();</span></span>
<span class="line"><span>a[&#39;x&#39;] // 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (&#39;x&#39; in a) { // 正确</span></span>
<span class="line"><span>  //</span></span></code></pre></div><p>上面示例中，<code>A</code>类的属性<code>x</code>是私有属性，但是实例使用方括号，就可以读取这个属性，或者使用<code>in</code>运算符检查这个属性是否存在，都可以正确执行。</p><p>由于<code>private</code>存在这些问题，加上它是 ES2022 标准发布前出台的，而 ES2022 引入了自己的私有成员写法<code>#propName</code>。因此建议不使用<code>private</code>，改用 ES2022 的写法，获得真正意义的私有成员。</p><h2 id="抽象类" tabindex="-1">抽象类 <a class="header-anchor" href="#抽象类" aria-label="Permalink to &quot;抽象类&quot;">​</a></h2><p>typeScript 允许在类的定义前面，加上关键字<code>abstract</code>，表示该类不能被实例化，只能当作其他类的模板。这种类就叫做“抽象类”（abstract class）。</p><p>。如果抽象类的方法前面加上<code>abstract</code>，就表明子类必须给出该方法的实现。</p><p>抽象类<code>A</code>定义了抽象属性<code>foo</code>，子类<code>B</code>必须实现这个属性，否则会报错。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>这里有几个注意点。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（1）抽象成员只能存在于抽象类，不能存在于普通类。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）抽象成员不能有具体实现的代码。也就是说，已经实现好的成员前面不能加abstract关键字。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（3）抽象成员前也不能有private修饰符，否则无法在子类中实现该成员。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（4）一个子类最多只能继承一个抽象类。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>总之，抽象类的作用是，确保各种相关的子类都拥有跟基类相同的接口，可以看作是模板。其中的抽象成员都是必须由子类实现的成员，非抽象成员则表示基类已经实现的、由所有子类共享的成员。</span></span></code></pre></div><h2 id="as-const" tabindex="-1">as const <a class="header-anchor" href="#as-const" aria-label="Permalink to &quot;as const&quot;">​</a></h2><p>如果没有声明变量类型，let 命令声明的变量，会被类型推断为 TypeScript 内置的基本类型之一；const 命令声明的变量，则被推断为值类型常量。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 类型推断为基本类型 string</span></span>
<span class="line"><span>let s1 = &#39;JavaScript&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 类型推断为字符串 “JavaScript”</span></span>
<span class="line"><span>const s2 = &#39;JavaScript&#39;;</span></span></code></pre></div><p>上面示例中，变量<code>s1</code>的类型被推断为<code>string</code>，变量<code>s2</code>的类型推断为值类型<code>JavaScript</code>。后者是前者的子类型，相当于 const 命令有更强的限定作用，可以缩小变量的类型范围。</p><p>有些时候，let 变量会出现一些意想不到的报错，变更成 const 变量就能消除报错。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let s = &#39;JavaScript&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Lang =</span></span>
<span class="line"><span>  |&#39;JavaScript&#39;</span></span>
<span class="line"><span>  |&#39;TypeScript&#39;</span></span>
<span class="line"><span>  |&#39;Python&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function setLang(language:Lang) {</span></span>
<span class="line"><span>  /* ... */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setLang(s); // 报错</span></span></code></pre></div><p>上面示例中，最后一行报错，原因是函数<code>setLang()</code>的参数<code>language</code>类型是<code>Lang</code>，这是一个联合类型。但是，传入的字符串<code>s</code>的类型被推断为<code>string</code>，属于<code>Lang</code>的父类型。父类型不能替代子类型，导致报错。</p><p>下面是数组的例子。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// a1 的类型推断为 number[]</span></span>
<span class="line"><span>const a1 = [1, 2, 3];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// a2 的类型推断为 readonly [1, 2, 3]</span></span>
<span class="line"><span>const a2 = [1, 2, 3] as const;</span></span></code></pre></div><p>上面示例中，数组字面量使用<code>as const</code>断言后，类型推断就变成了只读元组。</p><p>由于<code>as const</code>会将数组变成只读元组，所以很适合用于函数的 rest 参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function add(x:number, y:number) {</span></span>
<span class="line"><span>  return x + y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const nums = [1, 2];</span></span>
<span class="line"><span>const total = add(...nums); // 报错</span></span></code></pre></div><p>上面示例中，变量<code>nums</code>的类型推断为<code>number[]</code>，导致使用扩展运算符<code>...</code>传入函数<code>add()</code>会报错，因为<code>add()</code>只能接受两个参数，而<code>...nums</code>并不能保证参数的个数。</p><p>事实上，对于固定参数个数的函数，如果传入的参数包含扩展运算符，那么扩展运算符只能用于元组。只有当函数定义使用了 rest 参数，扩展运算符才能用于数组。</p><p>解决方法就是使用<code>as const</code>断言，将数组变成元组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const nums = [1, 2] as const;</span></span>
<span class="line"><span>const total = add(...nums); // 正确</span></span></code></pre></div><p>上面示例中，使用<code>as const</code>断言后，变量<code>nums</code>的类型会被推断为<code>readonly [1, 2]</code>，使用扩展运算符展开后，正好符合函数<code>add()</code>的参数类型。</p><h2 id="断言函数" tabindex="-1">断言函数 <a class="header-anchor" href="#断言函数" aria-label="Permalink to &quot;断言函数&quot;">​</a></h2><p>为了更清晰地表达断言函数，TypeScript 3.7 引入了新的类型写法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function isString(value:unknown):asserts value is string {</span></span>
<span class="line"><span>  if (typeof value !== &#39;string&#39;)</span></span>
<span class="line"><span>    throw new Error(&#39;Not a string&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面示例中，函数<code>isString()</code>的返回值类型写成<code>asserts value is string</code>，其中<code>asserts</code>和<code>is</code>都是关键词，<code>value</code>是函数的参数名，<code>string</code>是函数参数的预期类型。它的意思是，该函数用来断言参数<code>value</code>的类型是<code>string</code>，如果达不到要求，程序就会在这里中断。</p><h2 id="declare" tabindex="-1">declare <a class="header-anchor" href="#declare" aria-label="Permalink to &quot;declare&quot;">​</a></h2><p>如果要为 JavaScript 引擎的原生对象添加属性和方法，可以使用<code>declare global {}</code>语法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare global {</span></span>
<span class="line"><span>  interface String {</span></span>
<span class="line"><span>    toSmallString(): string;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String.prototype.toSmallString = ():string =&gt; {</span></span>
<span class="line"><span>  // 具体实现</span></span>
<span class="line"><span>  return &#39;&#39;;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>上面示例中，为 JavaScript 原生的<code>String</code>对象添加了<code>toSmallString()</code>方法。declare global 给出这个新增方法的类型描述。</p><p>这个示例第一行的空导出语句<code>export {}</code>，作用是强制编译器将这个脚本当作模块处理。这是因为<code>declare global</code>必须用在模块里面。</p><p>下面的示例是为 window 对象添加一个属性<code>myAppConfig</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare global {</span></span>
<span class="line"><span>  interface window {</span></span>
<span class="line"><span>    myAppConfig:object;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const config = window.myAppConfig;</span></span></code></pre></div><p>declare global 只能扩充现有对象的类型描述，不能增加新的顶层类型。</p><h2 id="和-readonly" tabindex="-1">+- ？和+-readonly <a class="header-anchor" href="#和-readonly" aria-label="Permalink to &quot;+- ？和+-readonly&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type Mutable&lt;Obj&gt; = {</span></span>
<span class="line"><span>  -readonly [Prop in keyof Obj]: Obj[Prop];</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 用法</span></span>
<span class="line"><span>type MyObj = {</span></span>
<span class="line"><span>  readonly foo: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 等于 { foo: number; }</span></span>
<span class="line"><span>type NewObj = Mutable&lt;MyObj&gt;;</span></span></code></pre></div><p>上面示例中，<code>[Prop in keyof Obj]</code>是<code>Obj</code>类型的所有属性名，<code>-readonly</code>表示去除这些属性的只读特性。对应地，还有<code>+readonly</code>的写法，表示添加只读属性设置。</p><p>下面的例子是让可选属性变成必有的属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type Concrete&lt;Obj&gt; = {</span></span>
<span class="line"><span>  [Prop in keyof Obj]-?: Obj[Prop];</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 用法</span></span>
<span class="line"><span>type MyObj = {</span></span>
<span class="line"><span>  foo?: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 等于 { foo: number; }</span></span>
<span class="line"><span>type NewObj = Concrete&lt;MyObj&gt;;</span></span></code></pre></div><p>上面示例中，<code>[Prop in keyof Obj]</code>后面的<code>-?</code>表示去除可选属性设置。对应地，还有<code>+?</code>的写法，表示添加可选属性设置。</p><h2 id="映射改名" tabindex="-1">映射改名 <a class="header-anchor" href="#映射改名" aria-label="Permalink to &quot;映射改名&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type A = {</span></span>
<span class="line"><span>  foo: number;</span></span>
<span class="line"><span>  bar: number;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type B = {</span></span>
<span class="line"><span>  [p in keyof A as \`\${p}ID\`]: number;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 等同于</span></span>
<span class="line"><span>type B = {</span></span>
<span class="line"><span>  fooID: number;</span></span>
<span class="line"><span>  barID: number;</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="jsdoc" tabindex="-1">jsdoc <a class="header-anchor" href="#jsdoc" aria-label="Permalink to &quot;jsdoc&quot;">​</a></h2><p><code>@param</code>命令用于定义函数参数的类型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @param {string}  x</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function foo(x) {}</span></span></code></pre></div><p>如果是可选参数，需要将参数名放在方括号<code>[]</code>里面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @param {string}  [x]</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function foo(x) {}</span></span></code></pre></div><p>方括号里面，还可以指定参数默认值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @param {string} [x=&quot;bar&quot;]</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function foo(x) {}</span></span></code></pre></div><p>上面示例中，参数<code>x</code>的默认值是字符串<code>bar</code>。</p>`,111)]))}const g=a(e,[["render",l]]);export{o as __pageData,g as default};
