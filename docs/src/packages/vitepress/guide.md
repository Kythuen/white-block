---
title: '@white-block/vitepress'
description: WhiteBlock document theme for vitepress.
---

WhiteBlock's docs base on vitepress and has many customize ​configurations. We have encapsulated these modifications, and you can use `@white-block/vitepress` to quickly create the docs below.

## Theme Preview
![preview](/vitepress/preview.png)

<!-- [Online Demo](https://kythuen.github.io/white-block/)  -->

## Quick Start

By using command line tool provided, to create your docs with `WhiteBlock` theme is effortless.

::: code-group
<!-- ```sh [pnpm]
pnpm dlx @white-block/vitepress init
``` -->
```sh [npm]
npx @white-block/vitepress init
```
<!-- ```sh [yarn] -->
<!-- yarn dlx @white-block/vitepress init -->
<!-- ``` -->
:::

<!-- TODO: GIF -->
![cli](/vitepress/cli.png)

## Manual Install

### Add Vitepress
::: code-group
```sh [pnpm]
pnpm dlx vitepress init
```
```sh [npm]
npx vitepress init
```
```sh [yarn]
yarn dlx vitepress init
```
:::

### Install Dependencies
::: code-group
```sh [pnpm]
pnpm add @white-block/vitepress unocss vitepress
```
```sh [npm]
npm install @white-block/vitepress unocss vitepress
```
```sh [yarn]
yarn add @white-block/vitepress unocss vitepress
```
:::

### Extend Default Theme

Now you already have a vitepress docs project, do follow steps to take WhiteBlock theme into your docs. 

#### Add Vitepress Theme
::: code-group
```ts [.vitepress/theme.ts]
import 'virtual:uno.css'
import DefaultTheme from 'vitepress/theme'
import { Layout } from '@white-block/vitepress'

export default {
  extends: DefaultTheme,
  Layout
}
```
:::

#### Add Unocss Config
::: code-group
```ts [uno.config.ts]
import { UnocssConfig } from '@white-block/vitepress/unocss'

export default UnocssConfig()

```
:::

#### Add Vite Config
::: code-group
```ts [vite.config.ts]
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UnoCSS()]
})

```
:::

#### Edit vitepress config
::: code-group
```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ...other configs,
  vite: {
    configFile: 'vite.config.ts'
  }
})

```
:::

:::info
Now, the docs is ready.
:::


## What's Next?
Sometime When you want to customize some parts of the docs. There also some ways provided for you to customize in more detailed places.

- Read more about usage of [Default Layout](./default-layout).
- Provided default component and page template, see [Layouts](./layout).
- Further customize the docs with [Slots](./slots).