import{_ as o}from"./chunks/DemoBlock.vue_vue_type_script_setup_true_lang.WZD1lWaO.js";import{_ as r}from"./chunks/CustomUsageBlock.vue_vue_type_script_setup_true_lang.CuGOU5W0.js";import{_ as p}from"./chunks/UsageBlock.vue_vue_type_script_setup_true_lang.DohRiDY1.js";import{_ as g,c,o as f,j as e,G as l,a as n,w as a}from"./chunks/framework.CDmdpyHB.js";import"./chunks/theme.CGtRrSKC.js";const N=JSON.parse(`{"title":"Input","description":"Use to collect user input.","frontmatter":{"component":"input","category":"form","title":"Input","description":"Use to collect user input.","decoration":"/assets/img/components/input.png"},"headers":[],"params":{"coverage":{"statements":"0%","branches":"0%","functions":"0%","lines":"0%"},"api":{"Input":{"en":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Type</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Default</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">Required</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">placeholder</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Placeholder text of input area.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">type</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/input/types.ts\\\\\\">InputType</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'base'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Display style of the input.<br><code>'base' | 'ghost'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">align</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/input/types.ts\\\\\\">InputAlign</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'start'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Content Align.<br><code>'start' | 'center' | 'end'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">shape</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/input/types.ts\\\\\\">InputShape</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'rectangle'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Shape of the input.<br><code>'rectangle' /'round'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">maxLength</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>-1</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Maximum length allowed of input text.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">icon</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Icon slot for the input.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Size of the element.<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">loading</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Loading or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Disable or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">readonly</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Readonly or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">clearable</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Show button to clear input value or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">value</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value of input. Supported <code>v-model</code> and <code>v-model:value</code>.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">modelValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value of input.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">defaultValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Default value of the input.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onChange</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(payload: T) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Event emitted when input value change.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">prefix</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Prefix slot before input.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">suffix</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Suffix slot after input.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Parameters</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">clear</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Clear value action.</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">enter</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Press <code>enter</code> action.</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">blur</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Element blur action.</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">change</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([payload: undefined])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Event emitted when input value change.</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""},"zh":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">类型</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">默认值</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">必传</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">type</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/input/types.ts\\\\\\">InputType</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'base'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">输入框内容部分的样式风格。<br><code>'base' | 'ghost'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">placeholder</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">文本框占位符。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">align</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/input/types.ts\\\\\\">InputAlign</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'start'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">内容对齐方式。<br><code>'start' | 'center' | 'end'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">maxLength</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>-1</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">文本内容限制长度。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">readonly</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否为只读状态。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件尺寸。<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">loading</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否加载中。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否禁用。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">readonly</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否只读。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">clearable</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否显示清空按钮用于清空 input 的值。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">value</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 input 的绑定值。 支持 <code>v-model</code> 和 <code>v-model:value</code> 语法糖。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">modelValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 input 的绑定值。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">defaultValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 input 的默认值。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onChange</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(payload: T) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 input 值改变时触发的事件。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">prefix</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">输入区域的前置插槽。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">suffix</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">输入区域的后置插槽。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">参数</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">change</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([payload: string])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 input 值改变时触发的事件。</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""}}}},"relativePath":"components/input.md","filePath":"components/input.md"}`),u={name:"components/input.md"};function y(x,t,h,m,A,b){const i=p,s=r,d=o;return f(),c("div",null,[t[7]||(t[7]=e("h2",{id:"playground",tabindex:"-1"},[n("Playground "),e("a",{class:"header-anchor",href:"#playground","aria-label":'Permalink to "Playground"'},"​")],-1)),l(i,{component:"input",fileType:"json",options:"%7B%22input%22%3A%5B%7B%22name%22%3A%22placeholder%22%2C%22description%22%3A%22Placeholder%20text%20of%20input%20area.%22%2C%22value%22%3A%22Try%20it%22%7D%2C%7B%22name%22%3A%22icon%22%2C%22description%22%3A%22Icon%20slot%20for%20the%20input.%22%7D%5D%2C%22number%22%3A%5B%7B%22name%22%3A%22maxLength%22%2C%22description%22%3A%22Maximum%20length%20allowed%20of%20input%20text.%22%2C%22value%22%3A-1%7D%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22description%22%3A%22Loading%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22description%22%3A%22Disable%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22readonly%22%2C%22description%22%3A%22Readonly%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22clearable%22%2C%22description%22%3A%22Show%20button%20to%20clear%20%24%7BCOMPONENT_NAME%7D%20value%20or%20not.%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22type%22%2C%22description%22%3A%22Display%20style%20of%20the%20input.%22%2C%22value%22%3A%22base%22%2C%22options%22%3A%5B%22base%22%2C%22ghost%22%5D%7D%2C%7B%22name%22%3A%22align%22%2C%22description%22%3A%22Content%20Align.%22%2C%22value%22%3A%22start%22%2C%22options%22%3A%5B%22start%22%2C%22center%22%2C%22end%22%5D%7D%2C%7B%22name%22%3A%22shape%22%2C%22description%22%3A%22Shape%20of%20the%20input.%22%2C%22value%22%3A%22rectangle%22%2C%22options%22%3A%5B%22rectangle%22%2C%22round%22%5D%7D%2C%7B%22name%22%3A%22size%22%2C%22description%22%3A%22Size%20of%20the%20element.%22%2C%22value%22%3A%22md%22%2C%22options%22%3A%5B%22xs%22%2C%22sm%22%2C%22md%22%2C%22lg%22%2C%22xl%22%5D%7D%5D%7D",data:"%7B%22placeholder%22%3A%22Try%20it%22%7D",source:"",contentHeight:""}),t[8]||(t[8]=e("h2",{id:"properties",tabindex:"-1"},[n("Properties "),e("a",{class:"header-anchor",href:"#properties","aria-label":'Permalink to "Properties"'},"​")],-1)),t[9]||(t[9]=e("h3",{id:"type",tabindex:"-1"},[n("type "),e("a",{class:"header-anchor",href:"#type","aria-label":'Permalink to "type"'},"​")],-1)),t[10]||(t[10]=e("p",null,[n("Use property "),e("code",null,"type"),n(" to control display style of the input.")],-1)),l(s,{component:"input",fileType:"json",fileName:"type",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22type%22%2C%22value%22%3A%22base%22%2C%22options%22%3A%5B%7B%22label%22%3A%22base%22%2C%22value%22%3A%22base%22%7D%2C%7B%22label%22%3A%22ghost%22%2C%22value%22%3A%22ghost%22%7D%5D%7D%5D%7D",items:"%5B%7B%22placeholder%22%3A%22%20type%22%7D%5D",data:"%7B%22loading%22%3Afalse%2C%22disabled%22%3Afalse%2C%22type%22%3A%22base%22%7D",source:"",contentHeight:""},{default:a(()=>t[0]||(t[0]=[e("p",null,"input/examples/type.json",-1)])),_:1}),t[11]||(t[11]=e("h3",{id:"align",tabindex:"-1"},[n("align "),e("a",{class:"header-anchor",href:"#align","aria-label":'Permalink to "align"'},"​")],-1)),t[12]||(t[12]=e("p",null,[n("Use property "),e("code",null,"align"),n(" to control text align in input.")],-1)),l(s,{component:"input",fileType:"json",fileName:"align",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22align%22%2C%22value%22%3A%22start%22%2C%22options%22%3A%5B%7B%22label%22%3A%22start%22%2C%22value%22%3A%22start%22%7D%2C%7B%22label%22%3A%22center%22%2C%22value%22%3A%22center%22%7D%2C%7B%22label%22%3A%22end%22%2C%22value%22%3A%22end%22%7D%5D%7D%5D%7D",items:"%5B%7B%22placeholder%22%3A%22align%22%7D%5D",data:"%7B%22loading%22%3Afalse%2C%22disabled%22%3Afalse%2C%22align%22%3A%22start%22%7D",source:"",contentHeight:""},{default:a(()=>t[1]||(t[1]=[e("p",null,"input/examples/align.json",-1)])),_:1}),t[13]||(t[13]=e("h3",{id:"size",tabindex:"-1"},[n("size "),e("a",{class:"header-anchor",href:"#size","aria-label":'Permalink to "size"'},"​")],-1)),t[14]||(t[14]=e("p",null,[n("For "),e("code",null,"form-type"),n(" elements, use property "),e("code",null,"size"),n(" to set the size of the element.")],-1)),l(d,{description:"",path:"input/examples/size.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-space%20vertical%3E%0A%20%20%20%20%3Cwb-input%20size%3D%22xs%22%20placeholder%3D%22xs%22%20%2F%3E%0A%20%20%20%20%3Cwb-input%20size%3D%22sm%22%20placeholder%3D%22sm%22%20%2F%3E%0A%20%20%20%20%3Cwb-input%20size%3D%22md%22%20placeholder%3D%22md%22%20%2F%3E%0A%20%20%20%20%3Cwb-input%20size%3D%22lg%22%20placeholder%3D%22lg%22%20%2F%3E%0A%20%20%20%20%3Cwb-input%20size%3D%22xl%22%20placeholder%3D%22xl%22%20%2F%3E%0A%20%20%3C%2Fwb-space%3E%0A%3C%2Ftemplate%3E%0A"},{default:a(()=>t[2]||(t[2]=[e("p",null,"input/examples/size.vue",-1)])),_:1}),t[15]||(t[15]=e("h3",{id:"value",tabindex:"-1"},[n("value "),e("a",{class:"header-anchor",href:"#value","aria-label":'Permalink to "value"'},"​")],-1)),t[16]||(t[16]=e("p",null,[n("Use property "),e("code",null,"v-model"),n(" or "),e("code",null,"v-model:value"),n(" to control text value of input.")],-1)),l(d,{description:"",path:"input/examples/value.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-space%20vertical%3E%0A%20%20%20%20%3Cwb-input%20v-model%3D%22inputValue%22%20%2F%3E%0A%20%20%20%20%3Cwb-input%20v-model%3Avalue%3D%22inputValue%22%20%2F%3E%0A%20%20%20%20%3Cwb-button%20block%20%40click%3D%22handleClick%22%3EchangeValue%3C%2Fwb-button%3E%0A%20%20%3C%2Fwb-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20inputValue%20%3D%20ref('')%0Afunction%20handleClick()%20%7B%0A%20%20inputValue.value%20%2B%3D%20'1'%0A%7D%0A%3C%2Fscript%3E%0A"},{default:a(()=>t[3]||(t[3]=[e("p",null,"input/examples/value.vue",-1)])),_:1}),t[17]||(t[17]=e("h2",{id:"slots",tabindex:"-1"},[n("Slots "),e("a",{class:"header-anchor",href:"#slots","aria-label":'Permalink to "Slots"'},"​")],-1)),t[18]||(t[18]=e("p",null,[n("Provide slots "),e("code",null,"prefix"),n(" and "),e("code",null,"suffix"),n(" around the input content.")],-1)),l(d,{description:"",path:"input/examples/slot.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-space%20vertical%3E%0A%20%20%20%20%3Cwb-input%20placeholder%3D%22prefix%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23prefix%3E%0A%20%20%20%20%20%20%20%20%3CSearchIconNode%20%2F%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fwb-input%3E%0A%20%20%20%20%3Cwb-input%20prefix%3D%22pre%22%20placeholder%3D%22prefix%22%20%2F%3E%0A%20%20%20%20%3Cwb-input%20%3Aprefix%3D%22SearchIconNode%22%20placeholder%3D%22prefix%22%3E%0A%20%20%20%20%20%20%3Cspan%3Eprefix%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fwb-input%3E%0A%20%20%20%20%3Cwb-input%20placeholder%3D%22suffix%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%0A%20%20%20%20%20%20%20%20%3CEditIconNode%20%2F%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fwb-input%3E%0A%20%20%20%20%3Cwb-input%20suffix%3D%22suf%22%20placeholder%3D%22suffix%22%20%2F%3E%0A%20%20%20%20%3Cwb-input%20%3Asuffix%3D%22EditIconNode%22%20placeholder%3D%22suffix%22%3E%0A%20%20%20%20%20%20%3Cspan%3Esuffix%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fwb-input%3E%0A%20%20%3C%2Fwb-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22tsx%22%3E%0A%2F%2F%20%40ts-ignore%0Aconst%20SearchIconNode%20%3D%20%3Ci%20class%3D%22i-tdesign%3Asearch%22%20%2F%3E%0A%2F%2F%20%40ts-ignore%0Aconst%20EditIconNode%20%3D%20%3Ci%20class%3D%22i-tdesign%3Aedit%22%20%2F%3E%0A%3C%2Fscript%3E%0A"},{default:a(()=>t[4]||(t[4]=[e("p",null,"input/examples/slot.vue",-1)])),_:1}),t[19]||(t[19]=e("h2",{id:"events",tabindex:"-1"},[n("Events "),e("a",{class:"header-anchor",href:"#events","aria-label":'Permalink to "Events"'},"​")],-1)),t[20]||(t[20]=e("p",null,[n("Event "),e("code",null,"change"),n(" emitted when value change.")],-1)),l(d,{description:"",path:"input/examples/event.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-space%20vertical%3E%0A%20%20%20%20%3Cwb-input%20placeholder%3D%22%40change%22%20%40change%3D%22handleChange%22%20%2F%3E%0A%20%20%20%20%3Cwb-input%20placeholder%3D%22onChange%22%20%3Aon-change%3D%22handleChange%22%20%2F%3E%0A%20%20%3C%2Fwb-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Afunction%20handleChange(text%3A%20string)%20%7B%0A%20%20console.log(text)%0A%7D%0A%3C%2Fscript%3E%0A"},{default:a(()=>t[5]||(t[5]=[e("p",null,"input/examples/event.vue",-1)])),_:1}),t[21]||(t[21]=e("h2",{id:"composables",tabindex:"-1"},[n("Composables "),e("a",{class:"header-anchor",href:"#composables","aria-label":'Permalink to "Composables"'},"​")],-1)),t[22]||(t[22]=e("p",null,[n("You can also use "),e("code",null,"Input"),n(" in a composable manner.")],-1)),l(d,{description:"",path:"input/examples/composables.vue",source:"%3Ctemplate%3E%0A%20%20%3CMyInput%20%40change%3D%22handleChange%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%2F%2F%20%40ts-ignore%0Aimport%20%7B%20useInput%20%7D%20from%20'white-block'%0A%0Aconst%20%7B%20node%3A%20MyInput%2C%20value%20%7D%20%3D%20useInput(%7B%0A%20%20placeholder%3A%20'maxlength%205'%2C%0A%20%20maxLength%3A%205%0A%7D)%0A%0Afunction%20handleChange(text%3A%20string)%20%7B%0A%20%20console.log('change%3A'%2C%20text%2C%20value.value)%0A%7D%0A%3C%2Fscript%3E%0A"},{default:a(()=>t[6]||(t[6]=[e("p",null,"input/examples/composables.vue",-1)])),_:1})])}const w=g(u,[["render",y]]);export{N as __pageData,w as default};
