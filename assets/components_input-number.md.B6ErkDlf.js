import{_ as l,a as d,j as e,I as a,e as s,$ as i,p as o,o as r}from"./chunks/framework.uY59_9OQ.js";const h=JSON.parse(`{"title":"InputNumber","description":"Use for collect user input.","frontmatter":{"component":"input-number","category":"Form","title":"InputNumber","description":"Use for collect user input.","decoration":"/assets/img/components/input-number.png"},"headers":[],"params":{"coverage":{"statements":"0%","branches":"0%","functions":"0%","lines":"0%"},"api":{"InputNumber":{"en":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Type</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Default</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">Required</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">type</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/input-number/types.ts\\\\\\">InputNumberType</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'base'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Display style of the input.<br><code>'base' | 'ghost'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">theme</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/input-number/types.ts\\\\\\">InputNumberTheme</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'inner'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Operation buttons display style of the input-number.<br><code>'side' | 'inner'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">placeholder</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Placeholder text of input area.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">align</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/input-number/types.ts\\\\\\">InputNumberAlign</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'start'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Content Align.<br><code>'start' | 'center' | 'end'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">max</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Maximum value.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">min</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Minimum value.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">step</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>1</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value change step when click buttons.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">decimal</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>0</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Decimal places to retaine.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">separator</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Enable thousands separator or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">format</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Function to customize the value display in input area.<br><code>(value: number, toFixedValue?: string) =&gt; string</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">readonly</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Readonly or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Size of the element.<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">loading</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Loading or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Disable or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">readonly</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Readonly or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">clearable</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Show button to clear input-number value or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">value</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value of input-number. Supported <code>v-model</code> and <code>v-model:value</code>.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">modelValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value of input-number.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">defaultValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Default value of the input-number.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onChange</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(payload: T) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Event emitted when input-number value change.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">prefix</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Prefix slot before input content.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">suffix</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Suffix slot after input content.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Parameters</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">click</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([e: MouseEvent])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Click action.</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">change</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([payload: undefined])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Event emitted when input-number value change.</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""},"zh":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">类型</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">默认值</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">必传</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件尺寸。<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">loading</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否加载中。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否禁用。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">readonly</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否只读。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">clearable</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否显示清空按钮用于清空 input-number 的值。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">value</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 input-number 的绑定值。 支持 <code>v-model</code> 和 <code>v-model:value</code> 语法糖。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">modelValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 input-number 的绑定值。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">defaultValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 input-number 的默认值。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onClick</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(e: MouseEvent) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">点击事件处理函数, 参数为 <code>MouseEvent</code> 对象。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onChange</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(payload: T) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 input-number 值改变时触发的事件。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">default</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮的内容插槽。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">参数</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">click</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([e: MouseEvent])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">点击时触发, 参数为 <code>MouseEvent</code> 对象。</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">change</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([payload: undefined])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 input-number 值改变时触发的事件。</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""}}}},"relativePath":"components/input-number.md","filePath":"components/input-number.md"}`),c={name:"components/input-number.md"};function g(y,t,f,x,u,p){const n=o("UsageBlock");return r(),d("div",null,[t[0]||(t[0]=e("h2",{id:"playground",tabindex:"-1"},[a("Playground "),e("a",{class:"header-anchor",href:"#playground","aria-label":'Permalink to "Playground"'},"​")],-1)),s(n,{component:"input-number",fileType:"json",options:"%7B%22input%22%3A%5B%7B%22name%22%3A%22placeholder%22%2C%22description%22%3A%22Placeholder%20text%20of%20input%20area.%22%2C%22value%22%3A%22%22%7D%5D%2C%22number%22%3A%5B%7B%22name%22%3A%22max%22%2C%22description%22%3A%22Maximum%20value.%22%7D%2C%7B%22name%22%3A%22min%22%2C%22description%22%3A%22Minimum%20value.%22%7D%2C%7B%22name%22%3A%22step%22%2C%22description%22%3A%22Value%20change%20step%20when%20click%20buttons.%22%2C%22value%22%3A1%7D%2C%7B%22name%22%3A%22decimal%22%2C%22description%22%3A%22Decimal%20places%20to%20retaine.%22%2C%22value%22%3A0%7D%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22separator%22%2C%22description%22%3A%22Enable%20thousands%20separator%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22readonly%22%2C%22description%22%3A%22Readonly%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22loading%22%2C%22description%22%3A%22Loading%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22description%22%3A%22Disable%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22clearable%22%2C%22description%22%3A%22Show%20button%20to%20clear%20%24%7BCOMPONENT_NAME%7D%20value%20or%20not.%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22type%22%2C%22description%22%3A%22Display%20style%20of%20the%20input.%22%2C%22value%22%3A%22base%22%2C%22options%22%3A%5B%22base%22%2C%22ghost%22%5D%7D%2C%7B%22name%22%3A%22theme%22%2C%22description%22%3A%22Operation%20buttons%20display%20style%20of%20the%20input-number.%22%2C%22value%22%3A%22inner%22%2C%22options%22%3A%5B%22side%22%2C%22inner%22%5D%7D%2C%7B%22name%22%3A%22align%22%2C%22description%22%3A%22Content%20Align.%22%2C%22value%22%3A%22start%22%2C%22options%22%3A%5B%22start%22%2C%22center%22%2C%22end%22%5D%7D%2C%7B%22name%22%3A%22size%22%2C%22description%22%3A%22Size%20of%20the%20element.%22%2C%22value%22%3A%22md%22%2C%22options%22%3A%5B%22xs%22%2C%22sm%22%2C%22md%22%2C%22lg%22%2C%22xl%22%5D%7D%5D%7D",data:"%7B%22content%22%3A%22Try%20it%22%7D",source:"",contentHeight:""}),t[1]||(t[1]=i('<h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>Use property <code>type</code> to control the display style of <code>InputNumber</code>.</p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><h2 id="composables" tabindex="-1">Composables <a class="header-anchor" href="#composables" aria-label="Permalink to &quot;Composables&quot;">​</a></h2><p>You can also use <code>InputNumber</code> in a composable manner.</p>',7))])}const b=l(c,[["render",g]]);export{h as __pageData,b as default};