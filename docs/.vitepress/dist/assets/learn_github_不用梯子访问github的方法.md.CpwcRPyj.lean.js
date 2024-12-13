import{_ as i,c as a,a2 as t,o as n}from"./chunks/framework.DN5Ma_nw.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"learn/github/不用梯子访问github的方法.md","filePath":"learn/github/不用梯子访问github的方法.md","lastUpdated":1733800972000}'),h={name:"learn/github/不用梯子访问github的方法.md"};function l(e,s,p,k,o,r){return n(),a("div",null,s[0]||(s[0]=[t(`<h2 id="一、介绍" tabindex="-1">一、介绍 <a class="header-anchor" href="#一、介绍" aria-label="Permalink to &quot;一、介绍&quot;">​</a></h2><p>对 GitHub ：访问慢、图片加载不出来问题。</p><p><strong>本项目无需安装任何程序，仅需 5 分钟。</strong></p><p>通过修改本地 hosts 文件，试图解决：</p><ul><li>GitHub 访问速度慢的问题</li><li>GitHub 项目中的图片显示不出的问题</li></ul><p>让你&quot;爱&quot;上 GitHub。</p><h2 id="二、使用方法" tabindex="-1">二、使用方法 <a class="header-anchor" href="#二、使用方法" aria-label="Permalink to &quot;二、使用方法&quot;">​</a></h2><p>下面的地址无需访问 GitHub 即可获取到最新的 hosts 内容：</p><ul><li>文件：<code>https://raw.hellogithub.com/hosts</code></li><li>JSON：<code>https://raw.hellogithub.com/hosts.json</code></li></ul><h3 id="_2-1-手动方式" tabindex="-1">2.1 手动方式 <a class="header-anchor" href="#_2-1-手动方式" aria-label="Permalink to &quot;2.1 手动方式&quot;">​</a></h3><h4 id="_2-1-1-复制下面的内容" tabindex="-1">2.1.1 复制下面的内容 <a class="header-anchor" href="#_2-1-1-复制下面的内容" aria-label="Permalink to &quot;2.1.1 复制下面的内容&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># GitHub520 Host Start</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.114.25</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 alive.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.114.5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  api.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.110.153</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               assets-cdn.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               avatars.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               avatars0.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.110.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               avatars1.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.110.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               avatars2.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               avatars3.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.110.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               avatars4.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               avatars5.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               camo.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.114.22</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 central.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.110.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               cloud.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.114.9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  codeload.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.114.22</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 collector.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.110.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               desktop.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               favicons.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.112.3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  gist.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">54.231.161.249</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                github-cloud.s3.amazonaws.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">52.217.121.193</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                github-com.s3.amazonaws.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">52.217.123.241</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                github-production-release-asset-2e65be.s3.amazonaws.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">52.216.36.89</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  github-production-repository-file-5c1aeb.s3.amazonaws.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.5.8.222</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                     github-production-user-asset-6210df.s3.amazonaws.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">192.0.66.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    github.blog</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.112.3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.112.18</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 github.community</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.111.154</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               github.githubassets.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">151.101.193.194</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               github.global.ssl.fastly.net</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.110.153</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               github.io</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               github.map.fastly.net</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.110.153</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               githubstatus.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.112.25</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 live.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               media.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               objects.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">13.107.42.16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  pipelines.actions.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               raw.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               user-images.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.114.22</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 education.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               private-user-images.githubusercontent.com</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Update time: 2024-12-06T10:32:34+08:00</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Update url: https://raw.hellogithub.com/hosts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Star me: https://github.com/521xueweihan/GitHub520</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># GitHub520 Host End</span></span></code></pre></div><p>该内容会自动定时更新， 数据更新时间：2024-12-06T10:32:34+08:00</p><h4 id="_2-1-2-修改-hosts-文件" tabindex="-1">2.1.2 修改 hosts 文件 <a class="header-anchor" href="#_2-1-2-修改-hosts-文件" aria-label="Permalink to &quot;2.1.2 修改 hosts 文件&quot;">​</a></h4><p>hosts 文件在每个系统的位置不一，详情如下：</p><ul><li>Windows 系统：<code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></li><li>Linux 系统：<code>/etc/hosts</code></li><li>Mac（苹果电脑）系统：<code>/etc/hosts</code></li><li>Android（安卓）系统：<code>/system/etc/hosts</code></li><li>iPhone（iOS）系统：<code>/etc/hosts</code></li></ul><p>修改方法，把第一步的内容复制到文本末尾：</p><ol><li>Windows 使用记事本。</li><li>Linux、Mac 使用 Root 权限：<code>sudo vi /etc/hosts</code>。</li><li>iPhone、iPad 须越狱、Android 必须要 root。</li></ol><h4 id="_2-1-3-激活生效" tabindex="-1">2.1.3 激活生效 <a class="header-anchor" href="#_2-1-3-激活生效" aria-label="Permalink to &quot;2.1.3 激活生效&quot;">​</a></h4><p>大部分情况下是直接生效，如未生效可尝试下面的办法，刷新 DNS：</p><ol><li><p>Windows：在 CMD 窗口输入：<code>ipconfig /flushdns</code></p></li><li><p>Linux 命令：<code>sudo nscd restart</code>，如报错则须安装：<code>sudo apt install nscd</code> 或 <code>sudo /etc/init.d/nscd restart</code></p></li><li><p>Mac 命令：<code>sudo killall -HUP mDNSResponder</code></p></li></ol><p><strong>Tips：</strong> 上述方法无效可以尝试重启机器。</p><h3 id="_2-2-自动方式-switchhosts" tabindex="-1">2.2 自动方式（SwitchHosts） <a class="header-anchor" href="#_2-2-自动方式-switchhosts" aria-label="Permalink to &quot;2.2 自动方式（SwitchHosts）&quot;">​</a></h3><p><strong>Tip</strong>：推荐 <a href="https://github.com/oldj/SwitchHosts" target="_blank" rel="noreferrer">SwitchHosts</a> 工具管理 hosts</p><p>以 SwitchHosts 为例，看一下怎么使用的，配置参考下面：</p><ul><li><p>Hosts 类型: <code>Remote</code></p></li><li><p>Hosts 标题: 随意</p></li><li><p>URL: <code>https://raw.hellogithub.com/hosts</code></p></li><li><p>自动刷新: 最好选 <code>1 小时</code></p></li></ul><p>如图：</p><p><img src="https://github.com/521xueweihan/GitHub520/raw/main/img/switch-hosts.png" alt="img" loading="lazy"></p><p>这样每次 hosts 有更新都能及时进行更新，免去手动更新。</p><h3 id="_2-3-一行命令" tabindex="-1">2.3 一行命令 <a class="header-anchor" href="#_2-3-一行命令" aria-label="Permalink to &quot;2.3 一行命令&quot;">​</a></h3><h4 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h4><p>使用命令需要安装<a href="https://gitforwindows.org/" target="_blank" rel="noreferrer">git bash</a> 复制以下命令保存到本地命名为<strong>fetch_github_hosts</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_hosts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mktemp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/hostsXXX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hosts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/c/Windows/System32/drivers/etc/hosts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://raw.hellogithub.com/hosts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">reg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/# GitHub520 Host Start/,/# Github520 Host End/d&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$reg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $hosts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$_hosts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$_hosts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$_hosts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$hosts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$_hosts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><p>在<strong>CMD</strong>中执行以下命令，执行前需要替换<strong>git-bash.exe</strong>和<strong>fetch_github_hosts</strong>为你本地的路径，注意前者为windows路径格式后者为shell路径格式</p><p><code>&quot;C:\\Program Files\\Git\\git-bash.exe&quot; -c &quot;/c/Users/XXX/fetch_github_hosts&quot;</code></p><p>可以将上述命令添加到windows的task schedular（任务计划程序）中以定时执行</p><h4 id="gnu-ubuntu-centos-fedora" tabindex="-1">GNU（Ubuntu/CentOS/Fedora） <a class="header-anchor" href="#gnu-ubuntu-centos-fedora" aria-label="Permalink to &quot;GNU（Ubuntu/CentOS/Fedora）&quot;">​</a></h4><p><code>sudo sh -c &#39;sed -i &quot;/# GitHub520 Host Start/Q&quot; /etc/hosts &amp;&amp; curl https://raw.hellogithub.com/hosts &gt;&gt; /etc/hosts&#39;</code></p><h4 id="bsd-macos" tabindex="-1">BSD/macOS <a class="header-anchor" href="#bsd-macos" aria-label="Permalink to &quot;BSD/macOS&quot;">​</a></h4><p><code>sudo sed -i &quot;&quot; &quot;/# GitHub520 Host Start/,/# Github520 Host End/d&quot; /etc/hosts &amp;&amp; curl https://raw.hellogithub.com/hosts | sudo tee -a /etc/hosts</code></p><p>将上面的命令添加到 cron，可定时执行。使用前确保 GitHub520 内容在该文件最后部分。</p><p><strong>在 Docker 中运行，若遇到 <code>Device or resource busy</code> 错误，可使用以下命令执行</strong></p><p><code>cp /etc/hosts ~/hosts.new &amp;&amp; sed -i &quot;/# GitHub520 Host Start/Q&quot; ~/hosts.new &amp;&amp; curl https://raw.hellogithub.com/hosts &gt;&gt; ~/hosts.new &amp;&amp; cp -f ~/hosts.new /etc/hosts</code></p>`,43)]))}const F=i(h,[["render",l]]);export{c as __pageData,F as default};
