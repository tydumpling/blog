import{_ as i,c as a,a2 as n,o as e}from"./chunks/framework.DN5Ma_nw.js";const c=JSON.parse('{"title":"打包","description":"","frontmatter":{},"headers":[],"relativePath":"baidu/fokai/LED/build.md","filePath":"project/baidu/fokai/LED/build.md","lastUpdated":1733132188000}'),t={name:"baidu/fokai/LED/build.md"};function p(l,s,h,k,d,o){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h1><p>在项目的最后，需要打包项目做部署处理。运维说需要该项目的路由。路由在 <code>vite.config.js</code> 文件内处理。通过设置 <code>base</code> 定义路由。</p><p>为了后续开发和打包方便，把路由定义在 <code>.env.production</code> 中。</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>VITE_BASE_URL = /output</span></span></code></pre></div><p>Vue3 项目是用的 <code>vite</code> 创建，因此无法直接在 <code>defineConfig</code> 中获取到 <code>import.meta.env</code> ，还需要 <code>loadEnv</code> 获取。</p><p>最终代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig, loadEnv } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(({</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loadEnv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mode, process.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        base: env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VITE_BASE_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,7)]))}const E=i(t,[["render",p]]);export{c as __pageData,E as default};
