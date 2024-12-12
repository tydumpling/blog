import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.DN5Ma_nw.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"TypeScript/代码约定.md","filePath":"learn/TypeScript/代码约定.md","lastUpdated":1733800972000}'),l={name:"TypeScript/代码约定.md"};function i(t,s,c,o,r,d){return e(),n("div",null,s[0]||(s[0]=[p(`<ol><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>私有方法的命名通常以 _ 开头  </span></span>
<span class="line"><span>通常接口 类型别名 类 枚举 等定义为大写字母开头的变量 大驼峰写法</span></span>
<span class="line"><span>变量 函数  方法 属性 等命名 用小驼峰写法      类型通常用小驼峰写法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 常量命名全大写：常量的命名通常使用全大写字母，并用下划线分隔单词。例如：MAX_VALUE, PI。 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 类名使用首字母大写的驼峰命名法：类名应该使用首字母大写的驼峰命名法，即每个单词的首字母大写，除了第一个单词外。例如：Person, Car, UserService。 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 方法和函数名使用动词或动词短语：方法和函数的命名应该使用动词或动词短语，以描述其执行的操作。例如：calculateTotal, getUserInfo。 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 变量名使用有意义的描述性名称：变量的命名应该使用有意义的描述性名称，以便其他开发人员能够轻松理解其用途和含义。例如：firstName, totalPrice。</span></span></code></pre></div></li><li><p>接口：定义对象的接口时使用 PascalCase 命名法，并且在接口名前加上 I。</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface IPerson {</span></span>
<span class="line"><span>  firstName: string;</span></span>
<span class="line"><span>  lastName: string;</span></span>
<span class="line"><span>  age?: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const person: IPerson = {</span></span>
<span class="line"><span>  firstName: &#39;John&#39;,</span></span>
<span class="line"><span>  lastName: &#39;Doe&#39;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><ol><li><p>函数：函数名称应使用动词或动词短语，表示它们执行的操作。函数参数应该按以下顺序排列：必需参数首先，其次是可选参数和默认参数，最后是剩余参数。</p></li><li><p>构造函数：定义构造函数时，将属性声明为参数，使用 public 访问修饰符自动创建类属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>class Person {</span></span>
<span class="line"><span>  constructor(public firstName: string, public lastName: string) {}</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ol>`,3)]))}const h=a(l,[["render",i]]);export{g as __pageData,h as default};
