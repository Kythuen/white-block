---
title: Customize
description: This tutorial show how to customize the theme.
---

:::info Effect Preview
In this tutorial, let’s add a tab effect for the content at DocumentHeader like [WhiteBlock](/components/button).

![](/vitepress/customize/tab-effect.png)
:::

<!-- TODO: CodeSandbox -->
[Online Demo]()

## Use the Theme

### Create Project
```shell
pnpm init
```

### Initial Document
::: code-group
```shell [pnpm]
pnpm dlx @white-block/vitepress init
```
```shell [npm]
npx @white-block/vitepress init
```
```shell [yarn]
yarn dlx @white-block/vitepress init
```
:::

::: info Data
- title: VitePress
- slogan: WhiteBlock Document Theme for VitePress
- repo: https://github.com/Kythuen/vitepress-customize
:::

::: details Page Preview
![](/vitepress/customize/base.png)
:::

## Extend the Theme
Add a custom layout and change the DocumentHeader component with `doc-top` slot.

### Add Custom Layout

::: code-group
```vue [.vitepress/theme/Layout.vue]
<template>
  <Layout>
    <template #doc-header="{ focus }">
      <WBDocumentHeader>
        <template #doc-header-bottom>
          <div absolute bottom="-6" w="42" h="12">
            <wb-radio-group
              v-model="tab"
              :options="TAB_OPTIONS"
              type="tab"
              theme="contrast"
              size="lg"
              ring="1 inset $wb-color-border"
            />
          </div>
        </template>
      </WBDocumentHeader>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, WBDocumentHeader } from "@white-block/vitepress";
import { ref } from 'vue';

const TAB_OPTIONS = [
  { label: "DEMO", value: "content" },
  { label: "API", value: "api" },
];
const tab = ref('content')
</script>
```
:::

### Replace Default Layout
::: code-group
```ts [.vitepress/theme/index.ts]
// ...
import Layout from './Layout.vue'  // [!code ++]

const theme: Theme = {
  // ...
  Layout,  // [!code ++]
}
// ...
```
:::

::: details Page Preview
![](/vitepress/customize/tabs.png)
:::

### Replace Document Content

Add API sections and switch to target section when tabs change.

::: code-group
```vue [.vitepress/theme/DocumentContent.vue]
<template>
  <!-- Content -->
  <div v-show="tab === 'content'" class="vp-doc-content">
    <Content />
  </div>
  <!-- API -->
  <div v-show="tab === 'api'" relative class="vp-doc-api">
    <div
      w="full"
      h="30"
      m="y-4"
      bg="gray/15"
      rounded="md"
      flex
      items="center"
      justify="center"
    >
      API Section
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tab: { type: String, default: "content" }
})
</script>
```
:::

### Edit Custom Layout

::: code-group
```vue {19-21,28} [.vitepress/theme/Layout.vue]
<template>
  <Layout>
    <template #doc-header="{ focus }">
      <WBDocumentHeader>
        <template #doc-header-bottom>
          <div absolute bottom="-6" w="42" h="12">
            <wb-radio-group
              v-model="tab"
              :options="TAB_OPTIONS"
              type="tab"
              theme="contrast"
              size="lg"
              ring="1 inset $wb-color-border"
            />
          </div>
        </template>
      </WBDocumentHeader>
    </template>
    <template #doc-content>
      <DocumentContent :tab="tab" />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, WBDocumentHeader } from "@white-block/vitepress"
import { ref } from 'vue'
import DocumentContent from "./DocumentContent.vue"

const TAB_OPTIONS = [
  { label: "DEMO", value: "content" },
  { label: "API", value: "api" }
]
const tab = ref('content')
</script>
```
:::

::: details Final Effect Preview
![](/vitepress/customize/api.png)
:::


## Further

There are also other effective ways to customize depend on what you want to do.

### Override CSS Variables
You can override the built-in CSS Variables provided by `VitePress` and `WhiteBlock` or just directly change styles.

::: code-group
```css [.vitepress/theme/style.css]
:root {
  --vp-backdrop-bg-color: #00000066;
}
.dark:root {
  --vp-backdrop-bg-color: #ffffff40;
}

.VPLocalSearchBox {
  background: #00000066;
  .shell {
    margin: 100px auto 64px auto !important;
  }
}
```
:::

### Use Slots

See [Slots](./slots) & [Components](./components)


### Use VitePress Config

To transform while the page compile.

See [Markdown Config](https://vitepress.dev/reference/site-config#markdown) & [transformPageData](https://vitepress.dev/reference/site-config#transformpagedata).

