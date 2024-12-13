import{_ as a,c as i,a2 as e,o as t}from"./chunks/framework.DN5Ma_nw.js";const u=JSON.parse('{"title":"打包","description":"","frontmatter":{},"headers":[],"relativePath":"myself/小兔鲜/inuni/build.md","filePath":"project/myself/小兔鲜/inuni/build.md","lastUpdated":1733132188000}'),l={name:"myself/小兔鲜/inuni/build.md"};function p(n,s,d,o,c,h){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h1><h2 id="微信小程序打包" tabindex="-1">微信小程序打包 <a class="header-anchor" href="#微信小程序打包" aria-label="Permalink to &quot;微信小程序打包&quot;">​</a></h2><p>微信小程序打包流程如下：</p><ol><li><p>命令行输入打包命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm build:mp-weixin</span></span></code></pre></div></li><li><p>微信开发工具导入打包好的文件，打包好的文件在 <code>dist/build/mp-weixin</code> 文件夹内</p></li><li><p>上传到微信开发平台中，提交审核即可</p></li></ol><h2 id="网页打包" tabindex="-1">网页打包 <a class="header-anchor" href="#网页打包" aria-label="Permalink to &quot;网页打包&quot;">​</a></h2><p>网页 H5 打包流程如下：</p><ol><li><p>命令行输入打包命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm build:h5</span></span></code></pre></div></li><li><p>打包好后的文件在 <code>dist/build/h5</code> 文件夹下，放到服务器中即可</p></li></ol><p>注意：</p><p>在之前实现登录功能时使用到手机号快捷登录，可在 H5 网页端无法使用该功能。解决方法为通过条件编译，让不同的端项目使用不同的方法。</p><ul><li><p><code>template</code> 中：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- ifdef H5 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- enddef --&gt;</span></span></code></pre></div></li><li><p><code>script</code> 中：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ifdef H5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// enddef</span></span></code></pre></div></li><li><p><code>style</code> 中：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* #ifdef H5 */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* #endif */</span></span></code></pre></div></li></ul>`,10)]))}const b=a(l,[["render",p]]);export{u as __pageData,b as default};
