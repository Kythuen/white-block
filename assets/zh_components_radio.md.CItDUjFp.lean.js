import{_ as r,a as c,j as e,I as n,e as l,w as o,$ as g,p as a,o as y}from"./chunks/framework.uY59_9OQ.js";const b=JSON.parse(`{"title":"单选按钮","description":"从多个选项中选择一个","frontmatter":{"component":"radio","category":"Form","title":"单选按钮","description":"从多个选项中选择一个","decoration":"/assets/img/components/radio.png"},"headers":[],"params":{"coverage":{"statements":"0%","branches":"0%","functions":"0%","lines":"0%"},"api":{"Radio":{"en":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Type</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Default</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">Required</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">color</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Customize color of the radio. Can be <code>named-color</code>, <code>hex</code>, <code>rgb</code>, etc.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">theme</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/radio/types.ts\\\\\\">RadioTheme</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'primary'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Built-in color presets provided for convenient use.<br><code>'primary' | 'success' | 'warning' | 'danger' | 'white' | 'default'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Size of the element.<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Disable or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">readonly</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Readonly or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">clearable</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Show button to clear radio value or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">value</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value of radio. Supported <code>v-model</code> and <code>v-model:value</code>.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">modelValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value of radio.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">defaultValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Default value of the radio.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onClick</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(e: boolean) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Click action.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onChange</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(payload: T) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Event emitted when radio value change.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">default</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Content of the radio, same as <code>content</code>.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">content</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Content of the radio.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Parameters</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">click</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([e: boolean])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Click action.</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">change</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([payload: undefined])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Event emitted when radio value change.</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""}}}},"relativePath":"zh/components/radio.md","filePath":"zh/components/radio.md"}`),f={name:"zh/components/radio.md"};function p(m,t,u,x,h,C){const d=a("UsageBlock"),s=a("CustomUsageBlock"),i=a("DemoBlock");return y(),c("div",null,[t[2]||(t[2]=e("h2",{id:"演示",tabindex:"-1"},[n("演示 "),e("a",{class:"header-anchor",href:"#演示","aria-label":'Permalink to "演示"'},"​")],-1)),l(d,{component:"radio",fileType:"json",options:"%7B%22input%22%3A%5B%7B%22name%22%3A%22color%22%2C%22description%22%3A%22Customize%20color%20of%20the%20radio.%20Can%20be%20%60named-color%60%2C%20%60hex%60%2C%20%60rgb%60%2C%20etc.%22%2C%22value%22%3A%22%22%7D%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22disabled%22%2C%22description%22%3A%22Disable%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22readonly%22%2C%22description%22%3A%22Readonly%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22clearable%22%2C%22description%22%3A%22Show%20button%20to%20clear%20%24%7BCOMPONENT_NAME%7D%20value%20or%20not.%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22theme%22%2C%22description%22%3A%22Built-in%20color%20presets%20provided%20for%20convenient%20use.%22%2C%22value%22%3A%22primary%22%2C%22options%22%3A%5B%22primary%22%2C%22success%22%2C%22warning%22%2C%22danger%22%2C%22white%22%2C%22default%22%5D%7D%2C%7B%22name%22%3A%22size%22%2C%22description%22%3A%22Size%20of%20the%20element.%22%2C%22value%22%3A%22md%22%2C%22options%22%3A%5B%22xs%22%2C%22sm%22%2C%22md%22%2C%22lg%22%2C%22xl%22%5D%7D%5D%7D",data:"%7B%22content%22%3A%22Try%20it%22%7D",source:"",contentHeight:""}),t[3]||(t[3]=e("h2",{id:"组件属性",tabindex:"-1"},[n("组件属性 "),e("a",{class:"header-anchor",href:"#组件属性","aria-label":'Permalink to "组件属性"'},"​")],-1)),t[4]||(t[4]=e("h3",{id:"type-类型",tabindex:"-1"},[n("type 类型 "),e("a",{class:"header-anchor",href:"#type-类型","aria-label":'Permalink to "type 类型"'},"​")],-1)),t[5]||(t[5]=e("p",null,[n("结合使用属性 "),e("code",null,"type"),n(" 和 "),e("code",null,"theme"),n(" 来控制 "),e("code",null,"Radio"),n(" 的显示样式。")],-1)),l(s,{component:"radio",fileType:"json",fileName:"type",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22theme%22%2C%22value%22%3A%22primary%22%2C%22options%22%3A%5B%7B%22label%22%3A%22primary%22%2C%22value%22%3A%22primary%22%7D%2C%7B%22label%22%3A%22success%22%2C%22value%22%3A%22success%22%7D%2C%7B%22label%22%3A%22warning%22%2C%22value%22%3A%22warning%22%7D%2C%7B%22label%22%3A%22danger%22%2C%22value%22%3A%22danger%22%7D%2C%7B%22label%22%3A%22white%22%2C%22value%22%3A%22white%22%7D%2C%7B%22label%22%3A%22default%22%2C%22value%22%3A%22default%22%7D%5D%7D%5D%7D",items:"%5B%7B%22type%22%3A%22base%22%2C%22content%22%3A%22base%22%7D%2C%7B%22type%22%3A%22plain%22%2C%22content%22%3A%22plain%22%7D%2C%7B%22type%22%3A%22dashed%22%2C%22content%22%3A%22dashed%22%7D%2C%7B%22type%22%3A%22outline%22%2C%22content%22%3A%22outline%22%7D%2C%7B%22type%22%3A%22ghost%22%2C%22content%22%3A%22ghost%22%7D%2C%7B%22type%22%3A%22link%22%2C%22content%22%3A%22link%22%7D%2C%7B%22type%22%3A%22text%22%2C%22content%22%3A%22text%22%7D%5D",data:"%7B%22theme%22%3A%22primary%22%2C%22loading%22%3Afalse%2C%22disabled%22%3Afalse%7D",source:"",contentHeight:""},{default:o(()=>t[0]||(t[0]=[e("p",null,"radio/examples/type.json",-1)])),_:1}),t[6]||(t[6]=g('<h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>点击操作发出事件 <code>click</code>.</p><h2 id="composables" tabindex="-1">Composables <a class="header-anchor" href="#composables" aria-label="Permalink to &quot;Composables&quot;">​</a></h2><p>您也可以用组合式的方式使用 <code>Radio</code>。</p>',5)),l(i,{description:"",path:"radio/examples/composables.vue",source:"%3Ctemplate%3E%0A%20%20%3CMyRadio%20%40click%3D%22handleClick%22%3E%20button%20%3C%2FMyRadio%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%2F%2F%20%40ts-ignore%0Aimport%20%7B%20useRadio%20%7D%20from%20'white-block'%0A%0Aconst%20%7B%20node%3A%20MyRadio%20%7D%20%3D%20useRadio(%7B%0A%20%20type%3A%20'plain'%0A%7D)%0A%0Afunction%20handleClick(e%3A%20MouseEvent)%20%7B%0A%20%20console.log('click%3A'%2C%20e)%0A%7D%0A%3C%2Fscript%3E%0A"},{default:o(()=>t[1]||(t[1]=[e("p",null,"radio/examples/composables.vue",-1)])),_:1})])}const D=r(f,[["render",p]]);export{b as __pageData,D as default};