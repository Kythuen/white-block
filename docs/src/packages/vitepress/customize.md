---
title: Customize
description: Tutorial show how to advance customize the theme.
---

:::info
In this tutorial, let’s add a tab effect for the content at DocumentHeader like [WhiteBlock component](/components/button).

![](/vitepress/customize/tab-effect.png)
:::

<!-- TODO: CodeSandbox -->
[Online Demo]()

## Prepare

### Create Project
```shell
pnpm init
```

### Initial Document
```shell
npx @white-block/vitepress init
```

## Import the Theme
::: code-group
```ts [.vitepress/theme/index.ts]
import { Theme as WBTheme } from '@white-block/vitepress'
import 'uno.css'
import type { Theme } from 'vitepress'

const theme: Theme = {
  extends: WBTheme
}

export default theme
```
:::


## Extend the Theme
Add a custom layout and change the DocumentHeader component with `doc-top` slot.


### Add Custom Layout

::: code-group
```vue [.vitepress/theme/Layout.vue]
<template>
  <Layout>
    <template #doc-top="{ focus, tab, setTab }">
      <WBDocumentHeader>
        <template #doc-header-bottom>
          <div absolute bottom="-6" w="42" h="12">
            <wb-radio-group
              :value="tab"
              :options="TAB_OPTIONS"
              type="tab"
              theme="white"
              size="lg"
              ring="1 inset $wb-color-border"
              @change="setTab"
            />
          </div>
        </template>
      </WBDocumentHeader>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { WBDocumentHeader } from '@white-block/vitepress'

const TAB_OPTIONS = [
  { label: 'DEMO', value: 'content' },
  { label: 'API', value: 'api' }
]
</script>

```
:::

### Add New DocumentHeader
::: code-group
```vue [.vitepress/theme/DocumentHeader.vue]
<template>
  <div
    sticky
    top="-6 !md:-18"
    z="80"
    bg="$wb-color-background"
    border="0 b-px solid $wb-color-border"
  >
    <div relative w="full" h="38 !md:60" m="x-auto" p="3 md:6 lg:8">
      <div v-if="focus" h="12 md:18" m="t-21 md:t-29" flex items="center">
        <h1
          text="$wb-color-text-main 6 md:7 lg:7"
          leading="relaxed"
          font="extrabold"
        >
          {{ frontmatter.title }}
        </h1>
      </div>
      <div v-else h="full">
        <div w="full lg:70%" flex="~ col">
          <div v-if="frontmatter.component" m="b-4">
            <div class="!md:hidden">
              <img
                :src="`https://img.shields.io/badge/coverages-${coverageData.statements?.value}%25-${coverageData.statements?.color}`"
              />
            </div>
            <div gap="2" op="dark:85" class="hidden !md:flex">
              <img
                v-for="item in coverageData"
                :key="item.type"
                :src="`https://img.shields.io/badge/coverages:%20${item.type}-${item.value}%25-${item.color}`"
              />
            </div>
          </div>
          <h1
            text="$wb-color-text-main 6 md:8 lg:10"
            leading="relaxed"
            fw="extrabold"
          >
            {{ frontmatter.title }}
          </h1>
          <p
            color="$wb-color-text"
            text="line-clamp-2"
            m="t-2 md:t-4 lg:t-5"
            v-html="frontmatter.description"
          />
        </div>
      </div>
      <div
        v-if="frontmatter?.component"
        absolute
        bottom="-6"
        w="42"
        class="hidden !md:block"
      >
        <wb-radio-group
          :value="tab"
          :options="TAB_OPTIONS"
          type="tab"
          theme="white"
          size="lg"
          ring="1 inset $wb-color-border"
          @change="setTab"
        />
      </div>
      <div
        v-if="frontmatter.component"
        absolute
        right="8"
        bottom="8"
        class="vp-raw hidden !md:block"
      >
        <wb-button-group w="72" theme="emphasize">
          <wb-button
            v-for="item in ISSUE_BUTTONS"
            :key="item.value"
            :href="`https://github.com/Kythuen/white-block/issues/${item.href}`"
            type="plain"
            theme="default"
            tag="a"
            target="_blank"
          >
            <template #prefix> <i :class="item.icon" /></template>
            {{ issueData.open }} {{ item.value }}
          </wb-button>
        </wb-button-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useData, useRoute } from 'vitepress'
import { ref, watch } from 'vue'

defineProps({
  focus: { type: Boolean, default: false },
  tab: {
    type: String,
    default: 'content'
  },
  setTab: {
    type: Function,
    default: () => {}
  }
})

const TAB_OPTIONS = [
  { label: 'DEMO', value: 'content' },
  { label: 'API', value: 'api' }
]

const { page, frontmatter } = useData()
// const { hash } = window.location

const componentName = frontmatter.value.component
const issueData = ref({ open: 0, closed: 0 })
const ISSUE_BUTTONS = [
  { label: 'Add', value: 'add', icon: 'i-tdesign-add', href: 'new/choose' },
  {
    label: 'Open',
    value: 'open',
    icon: 'i-tdesign-error-circle',
    href: `?q=is:issue+is:open+${componentName}`
  },
  {
    label: 'Closed',
    value: 'closed',
    icon: 'i-tdesign-check',
    href: `?q=is:issue+is:closed+${componentName}`
  }
]
const URL = 'https://api.github.com/search/issues'
async function getIssueData(type: 'open' | 'closed') {
  if (process.env.NODE_ENV !== 'production') return
  const q = `is:issue is:${type} ${componentName} repo:Kythuen/white-block`
  const { data } = await axios.get(URL, { params: { q } })
  if (data) {
    issueData.value[type] = data.items.length
  }
}

const coverageData: any = ref({})
const colorMap: any = { 0: 'red', 70: 'yellow', 90: 'green' }
async function getCoverageData() {
  const { coverage } = page.value.params || {}
  const result: any = {}
  for (const item in coverage) {
    const data = coverage[item]
    const value = parseFloat(data)
    const range =
      Object.keys(colorMap).find(key => value <= parseFloat(key)) || 90
    result[item] = {
      type: item,
      value,
      color: colorMap[range]
    }
  }
  coverageData.value = result
}

const currentRoute = useRoute()
watch(
  () => currentRoute.path,
  () => {
    if (frontmatter.value.component) {
      getIssueData('open')
      // getIssueData('closed')
      getCoverageData()
    }
  },
  { immediate: true }
)
</script>

```
:::

### Replace Default Layout
::: code-group
```ts [.vitepress/theme/index.ts]
// ...
import Layout from './Layout.vue'

const theme: Theme = {
  // ...
  Layout,
}
// ...
```
:::




## Others

### Override CSS Variables
You can also 
```css
.vp-code-group .tabs label:only-of-type {
  &::after {
    display: none;
  }
}
.VPLocalSearchBox {
  background: #00000066;
}
:root {
  --vp-local-search-bg: var(--wb-color-layer);
  --vp-c-divider: var(--wb-color-border-comp);
}

.dark:root {
  --vp-local-search-bg: var(--wb-color-popup);
}
```

### Advance

For more customize or further handle of markdown.

You can use [markdown](https://vitepress.dev/reference/site-config#markdown), [transformPageData](https://vitepress.dev/reference/site-config#transformpagedata) options in vitepress configs.

