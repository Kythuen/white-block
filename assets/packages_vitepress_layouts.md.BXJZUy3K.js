import{_ as a}from"./chunks/preview.BtdpoaPi.js";import{_ as i,c as e,o as n,ar as t}from"./chunks/framework.CDmdpyHB.js";const l="/white-block/vitepress/layouts/home.png",p="/white-block/vitepress/layouts/empty.png",u=JSON.parse('{"title":"Layouts","description":"@white-block/vitepress provide several layouts.","frontmatter":{"title":"Layouts","description":"@white-block/vitepress provide several layouts."},"headers":[],"params":{"coverage":null,"api":{}},"relativePath":"packages/vitepress/layouts.md","filePath":"packages/vitepress/layouts.md"}'),h={name:"packages/vitepress/layouts.md"};function o(r,s,k,c,E,d){return n(),e("div",null,s[0]||(s[0]=[t(`<h2 id="docs-layout" tabindex="-1">Docs Layout <a class="header-anchor" href="#docs-layout" aria-label="Permalink to &quot;Docs Layout&quot;">​</a></h2><p>The default layout is <code>docs</code> When there is not specify.</p><p>All components are available in this layout.</p><h3 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;Frontmatter&quot;">​</a></h3><p>You can use frontmatter to control the visible of them.</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout: docs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">header: false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">footer: false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sidebar: false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document-header: false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document-aside: false</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div><h3 id="preview" tabindex="-1">Preview <a class="header-anchor" href="#preview" aria-label="Permalink to &quot;Preview&quot;">​</a></h3><p><img src="`+a+`" alt=""></p><h2 id="home-layout" tabindex="-1">Home Layout <a class="header-anchor" href="#home-layout" aria-label="Permalink to &quot;Home Layout&quot;">​</a></h2><p>Home page of the document.</p><p><code>Header</code> &amp; <code>Footer</code> are available in this layout.</p><h3 id="frontmatter-1" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter-1" aria-label="Permalink to &quot;Frontmatter&quot;">​</a></h3><p>You can use frontmatter to control the visible of them.</p><p>Reference to <a href="https://vitepress.dev/reference/default-theme-home-page#home-page" target="_blank" rel="noreferrer">VitePress HomePage</a>.</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout: home</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">header: false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">footer: false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hero:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  slogan: Intuitive Design for Effortless Development</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  intro: Ephemeras is a collection of various types projects, such as websites, npm library &amp; command line tool. You can easily and quickly create a website with this starter.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  actions:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - theme: default</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      text: Get Started</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      icon: i-iconamoon:lightning-2-fill</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      link: ./guide/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - theme: contrast</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      text: View on GitHub</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      icon: i-simple-icons:github</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      link: https://github.com/Kythuen/white-block</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">features:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: Start your project with ephemeras</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  desc: Ephemeras has adopted popular technologies in the community and summarized various project templates, making it easy for you to quickly start your project development.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  items:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - icon: 🌟</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      title: Popular Technologies</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      desc: Keep up with popular technology trends, build your project using Vue, TypeScript, Vite, Unocss etc.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - icon: 🎯</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      title: Focus On Inspiration</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      desc: No need to start building frameworks from scratch, saving your time and quickly implement your ideas.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - icon: 🪄</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      title: Been Optimized</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      desc: On the basis of popular scaffolding, many optimizations have been made to code structure, linter, bundler, etc.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">technologies:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: Works with your technologies</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  items:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - title: vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      icon: i-logos:vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      link: https://vuejs.org/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - title: typescript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      icon: i-logos:typescript-icon</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      link: https://www.typescriptlang.org/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - title: unocss</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      icon: i-logos:unocss</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      link: https://unocss.dev/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">started:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: Build project faster.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  desc: Quickly implement your ideas with templates and enjoy your coding.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  link: ./guide/</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div><h3 id="preview-1" tabindex="-1">Preview <a class="header-anchor" href="#preview-1" aria-label="Permalink to &quot;Preview&quot;">​</a></h3><p><img src="`+l+`" alt="page"></p><h2 id="empty-layout" tabindex="-1">Empty Layout <a class="header-anchor" href="#empty-layout" aria-label="Permalink to &quot;Empty Layout&quot;">​</a></h2><p>Sometime you have some special page in the docs, use <code>empty</code> layout.</p><p><code>Header</code> &amp; <code>Footer</code> are available in this layout.</p><h3 id="frontmatter-2" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter-2" aria-label="Permalink to &quot;Frontmatter&quot;">​</a></h3><p>You can use frontmatter to control the visible of them.</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layout: empty</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">header: false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">footer: false</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div><h3 id="preview-2" tabindex="-1">Preview <a class="header-anchor" href="#preview-2" aria-label="Permalink to &quot;Preview&quot;">​</a></h3><p><img src="`+p+'" alt="empty"></p>',25)]))}const m=i(h,[["render",o]]);export{u as __pageData,m as default};
