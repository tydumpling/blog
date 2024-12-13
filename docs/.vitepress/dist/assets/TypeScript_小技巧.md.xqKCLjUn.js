import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.DN5Ma_nw.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"TypeScript/小技巧.md","filePath":"learn/TypeScript/小技巧.md","lastUpdated":1733800972000}'),i={name:"TypeScript/小技巧.md"};function l(t,s,c,o,d,r){return e(),a("div",null,s[0]||(s[0]=[p(`<p>如果一个变量要套用另一个函数类型，有一个小技巧，就是使用<code>typeof</code>运算符。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function add(</span></span>
<span class="line"><span>  x:number,</span></span>
<span class="line"><span>  y:number</span></span>
<span class="line"><span>) {</span></span>
<span class="line"><span>  return x + y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const myAdd:typeof add = function (x, y) {</span></span>
<span class="line"><span>  return x + y;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这是一个很有用的技巧，任何需要类型的地方，都可以使用<code>typeof</code>运算符从一个值获取类型。</p><p>函数类型还可以采用对象的写法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let add:{</span></span>
<span class="line"><span>  (x:number, y:number):number</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>add = function (x, y) {</span></span>
<span class="line"><span>  return x + y;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>上面示例中，变量<code>add</code>的类型就写成了一个对象。</p><p>函数类型的对象写法如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  (参数列表): 返回值</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意，这种写法的函数参数与返回值之间，间隔符是冒号<code>:</code>，而不是正常写法的箭头<code>=&gt;</code>，因为这里采用的是对象类型的写法，对象的属性名与属性值之间使用的是冒号。</p><p>这种写法平时很少用，但是非常合适用在一个场合：函数本身存在属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function f(x:number) {</span></span>
<span class="line"><span>  console.log(x);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>f.version = &#39;1.0&#39;;</span></span></code></pre></div><p>上面示例中，函数<code>f()</code>本身还有一个属性<code>version</code>。这时，<code>f</code>完全就是一个对象，类型就要使用对象的写法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let foo: {</span></span>
<span class="line"><span>  (x:number): void;</span></span>
<span class="line"><span>  version: string</span></span>
<span class="line"><span>} = f;</span></span></code></pre></div><p>函数类型也可以使用 Interface 来声明，这种写法就是对象写法的翻版，详见《Interface》一章。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface myfn {</span></span>
<span class="line"><span>  (a:number, b:number): number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var add:myfn = (a, b) =&gt; a + b;</span></span></code></pre></div><p>上面示例中，interface 命令定义了接口<code>myfn</code>，这个接口的类型就是一个用对象表示的函数。</p>`,16)]))}const b=n(i,[["render",l]]);export{h as __pageData,b as default};
