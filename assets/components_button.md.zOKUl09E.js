import{_ as c,a as u,j as e,I as n,e as l,$ as d,w as a,p as i,o as b}from"./chunks/framework.uY59_9OQ.js";const D=JSON.parse(`{"title":"Button","description":"Element used to trigger an action.","frontmatter":{"component":"button","category":"form","title":"Button","description":"Element used to trigger an action.","decoration":"/assets/img/components/button.png"},"headers":[],"params":{"coverage":{"statements":"100%","branches":"95.23%","functions":"100%","lines":"100%"},"api":{"Button":{"en":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Type</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Default</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">Required</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">type</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/button/types.ts\\\\\\">ButtonType</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'base'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Display style of the button.<br><code>'base' | 'plain' | 'dashed' | 'outline' | 'ghost' | 'link' | 'text'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">color</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Customize color of the button. Can be <code>named-color</code>, <code>hex</code>, <code>rgb</code>, etc.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">theme</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/button/types.ts\\\\\\">ButtonTheme</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'primary'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Built-in color presets provided for convenient use.<br><code>'primary' | 'success' | 'warning' | 'danger' | 'contrast' | 'default'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">shape</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/button/types.ts\\\\\\">ButtonShape</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'rectangle'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Shape of the button.<br><code>'rectangle' | 'square' | 'round' | 'circle'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">block</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Full width occupied or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">tag</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'button'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">HTML tag of the button element.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Size of the element.<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">loading</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Loading or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Disable or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onClick</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(e: MouseEvent) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Click action.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">default</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Content of the button, same as <code>content</code>.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">content</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Content of the button. Can be <code>text</code>, <code>Slot</code> or <code>VNode</code>.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">prefix</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Prefix slot before button content.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">suffix</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Suffix slot after button content.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Parameters</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">click</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([e: MouseEvent])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Click action.</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""},"zh":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">类型</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">默认值</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">必传</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">type</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/button/types.ts\\\\\\">ButtonType</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'base'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮的显示风格。<br><code>'base' | 'plain' | 'outline' | 'ghost' | 'dashed' | 'link' | 'text'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">color</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮颜色, 支持颜色别名、十六进制、rgb 等。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">theme</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/button/types.ts\\\\\\">ButtonTheme</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'primary'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">预设的常用按钮颜色主题。<br><code>'primary' | 'success' | 'warning' | 'danger' | 'contrast' | 'default'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">shape</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/button/types.ts\\\\\\">ButtonShape</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'rectangle'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮的形状。<br><code>'rectangle' | 'square' | 'round' | 'circle'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">block</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否为块级元素，占满宽度。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">tag</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'button'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">自定义 HTML 标签。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件尺寸。<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">loading</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否加载中。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否禁用。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onClick</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(e: MouseEvent) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">点击事件处理函数, 参数为 <code>MouseEvent</code> 对象。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">default</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮的内容插槽。和 <code>content</code> 插槽一样。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">content</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮的内容插槽. 类型可以是 <code>text</code>, <code>Slot</code> 或 <code>VNode</code>。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">prefix</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮内容的前置插槽。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">suffix</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮内容的后置插槽。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">参数</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">click</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([e: MouseEvent])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">点击事件处理函数。</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""}}}},"relativePath":"components/button.md","filePath":"components/button.md"}`),A={name:"components/button.md"};function C(p,t,g,f,y,m){const r=i("UsageBlock"),s=i("DemoBlock"),o=i("CustomUsageBlock");return b(),u("div",null,[t[11]||(t[11]=e("h2",{id:"playground",tabindex:"-1"},[n("Playground "),e("a",{class:"header-anchor",href:"#playground","aria-label":'Permalink to "Playground"'},"​")],-1)),l(r,{component:"button",fileType:"json",options:"%7B%22input%22%3A%5B%7B%22name%22%3A%22color%22%2C%22description%22%3A%22Customize%20color%20of%20the%20button.%20Can%20be%20%60named-color%60%2C%20%60hex%60%2C%20%60rgb%60%2C%20etc.%22%2C%22value%22%3A%22%22%7D%2C%7B%22name%22%3A%22tag%22%2C%22description%22%3A%22HTML%20tag%20of%20the%20button%20element.%22%2C%22value%22%3A%22button%22%7D%2C%7B%22name%22%3A%22content%22%2C%22description%22%3A%22Content%20of%20the%20button.%20Can%20be%20%60text%60%2C%20%60Slot%60%20or%20%60VNode%60.%22%2C%22value%22%3A%22Try%20it%22%7D%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22block%22%2C%22description%22%3A%22Full%20width%20occupied%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22loading%22%2C%22description%22%3A%22Loading%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22description%22%3A%22Disable%20or%20not.%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22type%22%2C%22description%22%3A%22Display%20style%20of%20the%20button.%22%2C%22value%22%3A%22base%22%2C%22options%22%3A%5B%22base%22%2C%22plain%22%2C%22dashed%22%2C%22outline%22%2C%22ghost%22%2C%22link%22%2C%22text%22%5D%7D%2C%7B%22name%22%3A%22theme%22%2C%22description%22%3A%22Built-in%20color%20presets%20provided%20for%20convenient%20use.%22%2C%22value%22%3A%22primary%22%2C%22options%22%3A%5B%22primary%22%2C%22success%22%2C%22warning%22%2C%22danger%22%2C%22contrast%22%2C%22default%22%5D%7D%2C%7B%22name%22%3A%22shape%22%2C%22description%22%3A%22Shape%20of%20the%20button.%22%2C%22value%22%3A%22rectangle%22%2C%22options%22%3A%5B%22rectangle%22%2C%22square%22%2C%22round%22%2C%22circle%22%5D%7D%2C%7B%22name%22%3A%22size%22%2C%22description%22%3A%22Size%20of%20the%20element.%22%2C%22value%22%3A%22md%22%2C%22options%22%3A%5B%22xs%22%2C%22sm%22%2C%22md%22%2C%22lg%22%2C%22xl%22%5D%7D%5D%7D",data:"%7B%22content%22%3A%22Try%20it%22%7D",source:"",contentHeight:"33.5"}),t[12]||(t[12]=d('<h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="content" tabindex="-1">content <a class="header-anchor" href="#content" aria-label="Permalink to &quot;content&quot;">​</a></h3><p>Use property <code>content</code> to define content of the button. Support <code>text</code> and <code>VNode</code>, also can be a function that return <code>text</code> or <code>VNode</code>.</p>',3)),l(s,{description:"",path:"button/examples/content.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-space%3E%0A%20%20%20%20%3Cwb-button%3Eslot%3C%2Fwb-button%3E%0A%20%20%20%20%3Cwb-button%20type%3D%22plain%22%3E%3Ctemplate%20%23content%3Eslot%3C%2Ftemplate%3E%3C%2Fwb-button%3E%0A%20%20%20%20%3Cwb-button%20content%3D%22content%22%20%2F%3E%0A%20%20%20%20%3Cwb-button%20type%3D%22plain%22%20%3Acontent%3D%22()%20%3D%3E%20'content'%22%20%2F%3E%0A%20%20%20%20%3Cwb-button%20%3Acontent%3D%22ContentNode%22%20%2F%3E%0A%20%20%20%20%3Cwb-button%20type%3D%22plain%22%20%3Acontent%3D%22()%20%3D%3E%20ContentNode%22%20%2F%3E%0A%20%20%3C%2Fwb-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22tsx%22%3E%0Aconst%20ContentNode%20%3D%20%3Cdiv%3Evnode%3C%2Fdiv%3E%0A%3C%2Fscript%3E%0A"},{default:a(()=>t[0]||(t[0]=[e("p",null,"button/examples/content.vue",-1)])),_:1}),t[13]||(t[13]=e("h3",{id:"type",tabindex:"-1"},[n("type "),e("a",{class:"header-anchor",href:"#type","aria-label":'Permalink to "type"'},"​")],-1)),t[14]||(t[14]=e("p",null,[n("Combining use property "),e("code",null,"type"),n(" and "),e("code",null,"theme"),n(" to control the display style of buttons.")],-1)),l(o,{component:"button",fileType:"json",fileName:"type",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22theme%22%2C%22value%22%3A%22primary%22%2C%22options%22%3A%5B%7B%22label%22%3A%22primary%22%2C%22value%22%3A%22primary%22%7D%2C%7B%22label%22%3A%22success%22%2C%22value%22%3A%22success%22%7D%2C%7B%22label%22%3A%22warning%22%2C%22value%22%3A%22warning%22%7D%2C%7B%22label%22%3A%22danger%22%2C%22value%22%3A%22danger%22%7D%2C%7B%22label%22%3A%22contrast%22%2C%22value%22%3A%22contrast%22%7D%2C%7B%22label%22%3A%22default%22%2C%22value%22%3A%22default%22%7D%5D%7D%5D%7D",items:"%5B%7B%22type%22%3A%22base%22%2C%22content%22%3A%22base%22%7D%2C%7B%22type%22%3A%22plain%22%2C%22content%22%3A%22plain%22%7D%2C%7B%22type%22%3A%22dashed%22%2C%22content%22%3A%22dashed%22%7D%2C%7B%22type%22%3A%22outline%22%2C%22content%22%3A%22outline%22%7D%2C%7B%22type%22%3A%22ghost%22%2C%22content%22%3A%22ghost%22%7D%2C%7B%22type%22%3A%22link%22%2C%22content%22%3A%22link%22%7D%2C%7B%22type%22%3A%22text%22%2C%22content%22%3A%22text%22%7D%5D",data:"%7B%22theme%22%3A%22primary%22%2C%22loading%22%3Afalse%2C%22disabled%22%3Afalse%7D",source:"",contentHeight:""},{default:a(()=>t[1]||(t[1]=[e("p",null,"button/examples/type.json",-1)])),_:1}),t[15]||(t[15]=e("h3",{id:"color",tabindex:"-1"},[n("color "),e("a",{class:"header-anchor",href:"#color","aria-label":'Permalink to "color"'},"​")],-1)),t[16]||(t[16]=e("p",null,"You can give your customize color when specific needs, it can also well displayed.",-1)),l(o,{component:"button",fileType:"json",fileName:"color",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22color%22%2C%22value%22%3A%22orange%22%2C%22options%22%3A%5B%7B%22label%22%3A%22orange%22%2C%22value%22%3A%22orange%22%7D%2C%7B%22label%22%3A%22%233b82f6%22%2C%22value%22%3A%22%233b82f6%22%7D%2C%7B%22label%22%3A%22%2384cc16cc%22%2C%22value%22%3A%22%2384cc16cc%22%7D%2C%7B%22label%22%3A%22rgb(192%20132%20252)%22%2C%22value%22%3A%22rgb(192%20132%20252)%22%7D%2C%7B%22label%22%3A%22rgb(6%20182%20212%20%2F%2080%25)%22%2C%22value%22%3A%22rgb(6%20182%20212%20%2F%2080%25)%22%7D%2C%7B%22label%22%3A%22hsl(215.38deg%2C%2016.32%25%2C%2046.86%25)%22%2C%22value%22%3A%22hsl(215.38deg%2C%2016.32%25%2C%2046.86%25)%22%7D%2C%7B%22label%22%3A%22hwb(243.4deg%2C%2027.45%25%2C%2010.2%25)%22%2C%22value%22%3A%22hwb(243.4deg%2C%2027.45%25%2C%2010.2%25)%22%7D%5D%7D%5D%7D",items:"%5B%7B%22type%22%3A%22base%22%2C%22content%22%3A%22base%22%7D%2C%7B%22type%22%3A%22plain%22%2C%22content%22%3A%22plain%22%7D%2C%7B%22type%22%3A%22dashed%22%2C%22content%22%3A%22dashed%22%7D%2C%7B%22type%22%3A%22outline%22%2C%22content%22%3A%22outline%22%7D%2C%7B%22type%22%3A%22ghost%22%2C%22content%22%3A%22ghost%22%7D%2C%7B%22type%22%3A%22link%22%2C%22content%22%3A%22link%22%7D%2C%7B%22type%22%3A%22text%22%2C%22content%22%3A%22text%22%7D%5D",data:"%7B%22color%22%3A%22orange%22%2C%22loading%22%3Afalse%2C%22disabled%22%3Afalse%7D",source:"",contentHeight:""},{default:a(()=>t[2]||(t[2]=[e("p",null,"button/examples/color.json",-1)])),_:1}),t[17]||(t[17]=e("h3",{id:"theme",tabindex:"-1"},[n("theme "),e("a",{class:"header-anchor",href:"#theme","aria-label":'Permalink to "theme"'},"​")],-1)),t[18]||(t[18]=e("p",null,"Built-in color presets provided for commonly used.",-1)),l(o,{component:"button",fileType:"json",fileName:"theme",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22type%22%2C%22value%22%3A%22base%22%2C%22options%22%3A%5B%7B%22label%22%3A%22base%22%2C%22value%22%3A%22base%22%7D%2C%7B%22label%22%3A%22plain%22%2C%22value%22%3A%22plain%22%7D%2C%7B%22label%22%3A%22dashed%22%2C%22value%22%3A%22dashed%22%7D%2C%7B%22label%22%3A%22outline%22%2C%22value%22%3A%22outline%22%7D%2C%7B%22label%22%3A%22ghost%22%2C%22value%22%3A%22ghost%22%7D%2C%7B%22label%22%3A%22link%22%2C%22value%22%3A%22link%22%7D%2C%7B%22label%22%3A%22text%22%2C%22value%22%3A%22text%22%7D%5D%7D%5D%7D",items:"%5B%7B%22theme%22%3A%22primary%22%2C%22content%22%3A%22primary%22%7D%2C%7B%22theme%22%3A%22success%22%2C%22content%22%3A%22success%22%7D%2C%7B%22theme%22%3A%22warning%22%2C%22content%22%3A%22warning%22%7D%2C%7B%22theme%22%3A%22danger%22%2C%22content%22%3A%22danger%22%7D%2C%7B%22theme%22%3A%22contrast%22%2C%22content%22%3A%22contrast%22%7D%2C%7B%22theme%22%3A%22default%22%2C%22content%22%3A%22default%22%7D%5D",data:"%7B%22type%22%3A%22base%22%2C%22loading%22%3Afalse%2C%22disabled%22%3Afalse%7D",source:"",contentHeight:""},{default:a(()=>t[3]||(t[3]=[e("p",null,"button/examples/theme.json",-1)])),_:1}),t[19]||(t[19]=e("h3",{id:"shape",tabindex:"-1"},[n("shape "),e("a",{class:"header-anchor",href:"#shape","aria-label":'Permalink to "shape"'},"​")],-1)),t[20]||(t[20]=e("p",null,"Sometime, you need different shapes.",-1)),l(o,{component:"button",fileType:"json",fileName:"shape",options:"%7B%22input%22%3A%5B%7B%22name%22%3A%22content%22%2C%22value%22%3A%22A%22%7D%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22type%22%2C%22value%22%3A%22base%22%2C%22options%22%3A%5B%7B%22label%22%3A%22base%22%2C%22value%22%3A%22base%22%7D%2C%7B%22label%22%3A%22plain%22%2C%22value%22%3A%22plain%22%7D%2C%7B%22label%22%3A%22dashed%22%2C%22value%22%3A%22dashed%22%7D%2C%7B%22label%22%3A%22outline%22%2C%22value%22%3A%22outline%22%7D%2C%7B%22label%22%3A%22ghost%22%2C%22value%22%3A%22ghost%22%7D%2C%7B%22label%22%3A%22link%22%2C%22value%22%3A%22link%22%7D%2C%7B%22label%22%3A%22text%22%2C%22value%22%3A%22text%22%7D%5D%7D%2C%7B%22name%22%3A%22theme%22%2C%22value%22%3A%22primary%22%2C%22options%22%3A%5B%7B%22label%22%3A%22primary%22%2C%22value%22%3A%22primary%22%7D%2C%7B%22label%22%3A%22success%22%2C%22value%22%3A%22success%22%7D%2C%7B%22label%22%3A%22warning%22%2C%22value%22%3A%22warning%22%7D%2C%7B%22label%22%3A%22danger%22%2C%22value%22%3A%22danger%22%7D%2C%7B%22label%22%3A%22contrast%22%2C%22value%22%3A%22contrast%22%7D%2C%7B%22label%22%3A%22default%22%2C%22value%22%3A%22default%22%7D%5D%7D%5D%7D",items:"%5B%7B%22shape%22%3A%22rectangle%22%2C%22content%22%3A%22A%22%7D%2C%7B%22shape%22%3A%22round%22%2C%22content%22%3A%22B%22%7D%2C%7B%22shape%22%3A%22square%22%2C%22content%22%3A%22C%22%7D%2C%7B%22shape%22%3A%22circle%22%2C%22content%22%3A%22D%22%7D%5D",data:"%7B%22type%22%3A%22base%22%2C%22theme%22%3A%22primary%22%2C%22loading%22%3Afalse%2C%22disabled%22%3Afalse%2C%22content%22%3A%22A%22%7D",source:"",contentHeight:""},{default:a(()=>t[4]||(t[4]=[e("p",null,"button/examples/shape.json",-1)])),_:1}),t[21]||(t[21]=e("h3",{id:"block",tabindex:"-1"},[n("block "),e("a",{class:"header-anchor",href:"#block","aria-label":'Permalink to "block"'},"​")],-1)),t[22]||(t[22]=e("p",null,"Sometime, button should be a block-level element.",-1)),l(o,{component:"button",fileType:"json",fileName:"block",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22block%22%2C%22value%22%3Atrue%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22type%22%2C%22value%22%3A%22base%22%2C%22options%22%3A%5B%7B%22label%22%3A%22base%22%2C%22value%22%3A%22base%22%7D%2C%7B%22label%22%3A%22plain%22%2C%22value%22%3A%22plain%22%7D%2C%7B%22label%22%3A%22dashed%22%2C%22value%22%3A%22dashed%22%7D%2C%7B%22label%22%3A%22outline%22%2C%22value%22%3A%22outline%22%7D%2C%7B%22label%22%3A%22ghost%22%2C%22value%22%3A%22ghost%22%7D%2C%7B%22label%22%3A%22link%22%2C%22value%22%3A%22link%22%7D%2C%7B%22label%22%3A%22text%22%2C%22value%22%3A%22text%22%7D%5D%7D%2C%7B%22name%22%3A%22theme%22%2C%22value%22%3A%22primary%22%2C%22options%22%3A%5B%7B%22label%22%3A%22primary%22%2C%22value%22%3A%22primary%22%7D%2C%7B%22label%22%3A%22success%22%2C%22value%22%3A%22success%22%7D%2C%7B%22label%22%3A%22warning%22%2C%22value%22%3A%22warning%22%7D%2C%7B%22label%22%3A%22danger%22%2C%22value%22%3A%22danger%22%7D%2C%7B%22label%22%3A%22contrast%22%2C%22value%22%3A%22contrast%22%7D%2C%7B%22label%22%3A%22default%22%2C%22value%22%3A%22default%22%7D%5D%7D%5D%7D",items:"%5B%7B%22content%22%3A%22button%22%7D%5D",data:"%7B%22type%22%3A%22base%22%2C%22theme%22%3A%22primary%22%2C%22loading%22%3Afalse%2C%22disabled%22%3Afalse%2C%22block%22%3Atrue%7D",source:"",contentHeight:""},{default:a(()=>t[5]||(t[5]=[e("p",null,"button/examples/block.json",-1)])),_:1}),t[23]||(t[23]=e("h3",{id:"tag",tabindex:"-1"},[n("tag "),e("a",{class:"header-anchor",href:"#tag","aria-label":'Permalink to "tag"'},"​")],-1)),t[24]||(t[24]=e("p",null,"Sometime, button need better semantic HTML tags for accessibility.",-1)),t[25]||(t[25]=e("p",null,"Then you can use the default attributes of the tag you set.",-1)),l(o,{component:"button",fileType:"json",fileName:"tag",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22tag%22%2C%22value%22%3A%22button%22%2C%22options%22%3A%5B%7B%22label%22%3A%22button%22%2C%22value%22%3A%22button%22%7D%2C%7B%22label%22%3A%22div%22%2C%22value%22%3A%22div%22%7D%2C%7B%22label%22%3A%22a%22%2C%22value%22%3A%22a%22%7D%2C%7B%22label%22%3A%22span%22%2C%22value%22%3A%22span%22%7D%5D%7D%2C%7B%22name%22%3A%22theme%22%2C%22value%22%3A%22primary%22%2C%22options%22%3A%5B%7B%22label%22%3A%22primary%22%2C%22value%22%3A%22primary%22%7D%2C%7B%22label%22%3A%22success%22%2C%22value%22%3A%22success%22%7D%2C%7B%22label%22%3A%22warning%22%2C%22value%22%3A%22warning%22%7D%2C%7B%22label%22%3A%22danger%22%2C%22value%22%3A%22danger%22%7D%2C%7B%22label%22%3A%22contrast%22%2C%22value%22%3A%22contrast%22%7D%2C%7B%22label%22%3A%22default%22%2C%22value%22%3A%22default%22%7D%5D%7D%5D%7D",items:"%5B%7B%22type%22%3A%22base%22%2C%22content%22%3A%22base%22%7D%2C%7B%22type%22%3A%22plain%22%2C%22content%22%3A%22plain%22%7D%2C%7B%22type%22%3A%22dashed%22%2C%22content%22%3A%22dashed%22%7D%2C%7B%22type%22%3A%22outline%22%2C%22content%22%3A%22outline%22%7D%2C%7B%22type%22%3A%22ghost%22%2C%22content%22%3A%22ghost%22%7D%2C%7B%22type%22%3A%22link%22%2C%22content%22%3A%22link%22%7D%2C%7B%22type%22%3A%22text%22%2C%22content%22%3A%22text%22%7D%5D",data:"%7B%22tag%22%3A%22button%22%2C%22theme%22%3A%22primary%22%2C%22loading%22%3Afalse%2C%22disabled%22%3Afalse%7D",source:"",contentHeight:""},{default:a(()=>t[6]||(t[6]=[e("p",null,"button/examples/tag.json",-1)])),_:1}),t[26]||(t[26]=d('<h3 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;size&quot;">​</a></h3><p>For <code>form-type</code> elements, use property <code>size</code> to set the size of the element.</p><p>Allow <code>number</code> for pixel value or option in <a href="https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts" target="_blank" rel="noreferrer"><code>ComponentSize</code></a>.</p>',3)),l(s,{description:"",path:"button/examples/size.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-space%20vertical%3E%0A%20%20%20%20%3Cwb-space%20align%3D%22end%22%3E%0A%20%20%20%20%20%20%3Cwb-button%20size%3D%22xl%22%3Exl%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20size%3D%22lg%22%3Elg%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20size%3D%22md%22%3Emd%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20size%3D%22sm%22%3Esm%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20size%3D%22xs%22%3Exs%3C%2Fwb-button%3E%0A%20%20%20%20%3C%2Fwb-space%3E%0A%20%20%20%20%3Cwb-space%20align%3D%22end%22%3E%0A%20%20%20%20%20%20%3Cwb-button%20%3Asize%3D%2248%22%3Exl%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20%3Asize%3D%2240%22%3Elg%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20%3Asize%3D%2232%22%3Emd%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20%3Asize%3D%2224%22%3Esm%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20%3Asize%3D%2218%22%3Exs%3C%2Fwb-button%3E%0A%20%20%20%20%3C%2Fwb-space%3E%0A%20%20%3C%2Fwb-space%3E%0A%3C%2Ftemplate%3E%0A"},{default:a(()=>t[7]||(t[7]=[e("p",null,"button/examples/size.vue",-1)])),_:1}),t[27]||(t[27]=d('<h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><p>Provide slots <code>default</code> and <code>content</code> to define button content.</p><p>And slots <code>prefix</code> and <code>suffix</code> around the button content.</p>',3)),l(s,{description:"",path:"button/examples/slot.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-space%3E%0A%20%20%20%20%3Cwb-button%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23prefix%3E%3Ci%20class%3D%22i-tdesign%3Asearch%22%20%2F%3E%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Cspan%3Eprefix%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%20%20%3Cwb-button%20type%3D%22plain%22%20prefix%3D%22prefix%22%20%2F%3E%0A%20%20%20%20%3Cwb-button%20type%3D%22plain%22%20%3Aprefix%3D%22SearchIconNode%22%3E%0A%20%20%20%20%20%20%3Cspan%3Eprefix%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%20%20%3Cwb-button%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%3Ci%20class%3D%22i-tdesign%3Aedit%22%20%2F%3E%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Cspan%3Esuffix%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%20%20%3Cwb-button%20type%3D%22plain%22%20suffix%3D%22suffix%22%20%2F%3E%0A%20%20%20%20%3Cwb-button%20type%3D%22plain%22%20%3Asuffix%3D%22EditIconNode%22%3E%0A%20%20%20%20%20%20%3Cspan%3Esuffix%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%3C%2Fwb-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22tsx%22%3E%0Aconst%20SearchIconNode%20%3D%20%3Ci%20class%3D%22i-tdesign%3Asearch%22%20%2F%3E%0Aconst%20EditIconNode%20%3D%20%3Ci%20class%3D%22i-tdesign%3Aedit%22%20%2F%3E%0A%3C%2Fscript%3E%0A"},{default:a(()=>t[8]||(t[8]=[e("p",null,"button/examples/slot.vue",-1)])),_:1}),t[28]||(t[28]=e("h2",{id:"events",tabindex:"-1"},[n("Events "),e("a",{class:"header-anchor",href:"#events","aria-label":'Permalink to "Events"'},"​")],-1)),t[29]||(t[29]=e("p",null,[n("Click action emit event "),e("code",null,"click"),n(".")],-1)),l(s,{description:"",path:"button/examples/event.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-space%3E%0A%20%20%20%20%3Cwb-button%20type%3D%22ghost%22%20color%3D%22orange%22%20%40click%3D%22()%20%3D%3E%20clickHandler('')%22%3E%0A%20%20%20%20%20%20%3Cdiv%20w%3D%225%22%20h%3D%225%22%20class%3D%22i-heroicons-sun-20-solid%22%20%2F%3E%0A%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%20%20%3Cwb-button%20type%3D%22ghost%22%20color%3D%22blue%22%20%3Aon-click%3D%22()%20%3D%3E%20clickHandler('dark')%22%3E%0A%20%20%20%20%20%20%3Cdiv%20w%3D%225%22%20h%3D%225%22%20class%3D%22i-heroicons-moon-20-solid%22%20%2F%3E%0A%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%3C%2Fwb-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Afunction%20clickHandler(theme%3A%20string)%20%7B%0A%20%20document.documentElement.setAttribute('class'%2C%20theme)%0A%7D%0A%3C%2Fscript%3E%0A"},{default:a(()=>t[9]||(t[9]=[e("p",null,"button/examples/event.vue",-1)])),_:1}),t[30]||(t[30]=e("h2",{id:"composables",tabindex:"-1"},[n("Composables "),e("a",{class:"header-anchor",href:"#composables","aria-label":'Permalink to "Composables"'},"​")],-1)),t[31]||(t[31]=e("p",null,[n("You can also use "),e("code",null,"Button"),n(" in a composable manner.")],-1)),l(s,{description:"",path:"button/examples/composables.vue",source:"%3Ctemplate%3E%0A%20%20%3CMyButton%20%40click%3D%22handleClick%22%3EuseButton%3C%2FMyButton%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%2F%2F%20%40ts-ignore%0Aimport%20%7B%20useButton%20%7D%20from%20'white-block'%0A%0Aconst%20%7B%20node%3A%20MyButton%20%7D%20%3D%20useButton(%7B%0A%20%20type%3A%20'plain'%0A%7D)%0A%0Afunction%20handleClick(e%3A%20MouseEvent)%20%7B%0A%20%20console.log('click%3A'%2C%20e)%0A%7D%0A%3C%2Fscript%3E%0A"},{default:a(()=>t[10]||(t[10]=[e("p",null,"button/examples/composables.vue",-1)])),_:1})])}const x=c(A,[["render",C]]);export{D as __pageData,x as default};