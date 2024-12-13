import{_ as e,c as t,a2 as o,o as r}from"./chunks/framework.DN5Ma_nw.js";const m=JSON.parse('{"title":"平台端","description":"","frontmatter":{},"headers":[],"relativePath":"baidu/fokai/platform/index.md","filePath":"project/baidu/fokai/platform/index.md","lastUpdated":1733132188000}'),d={name:"baidu/fokai/platform/index.md"};function i(n,a,p,c,l,s){return r(),t("div",null,a[0]||(a[0]=[o('<h1 id="平台端" tabindex="-1">平台端 <a class="header-anchor" href="#平台端" aria-label="Permalink to &quot;平台端&quot;">​</a></h1><p>佛开平台端项目我主要负责设备设施和结构物监测两个模块的开发，其中，主要的工作量为参与公共组件的封装与维护、实现客户的需求等。</p><h2 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h2><p>下面是设备管理模块的效果展示，由于客户需求该项目是要放到 16080 * 1080 的屏幕上，所以界面进行了适配。在 Mac 上缩放到对应比例的情况下会有一定字体大小问题，这是正常现象，效果如下图所示：</p><p><img src="https://pic.imgdb.cn/item/6709eadbd29ded1a8c5e9360.png" alt="平台端效果" loading="lazy"></p><h2 id="需求评审" tabindex="-1">需求评审 <a class="header-anchor" href="#需求评审" aria-label="Permalink to &quot;需求评审&quot;">​</a></h2><p>在一开始的需求评审中，客户明确要求要能够放到 他们的大屏上展示，他们的大屏为 16080 * 1080。</p><p>在最开始如何适配大屏前端、产品、UI在评审会议上作了讨论，最后确定UI不强行拉长地图模块的宽高比例，而是把地图固定在屏幕中间，两个放上数据面板，背景加上黑色到透明色的过渡效果；前端采用 rem 单位布局。</p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>整个佛开模块中，设备设施和结构物监测不是很重点的模块，因此UI设计出图比较靠后，拿到UI图后对比前面其他已经出好了的模块设计图，发现有几个地方可以 <code>copy</code> 过来作公共组件使用，如：<code>echart</code> 、导航跳转等。</p><p>根据主管说的在图层项目代码仓库新建一个分支进行开发。</p>',11)]))}const f=e(d,[["render",i]]);export{m as __pageData,f as default};
