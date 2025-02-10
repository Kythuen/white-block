---
title: '@white-block/vitepress'
description: WhiteBlock document theme for vitepress.
---

WhiteBlock's docs base on vitepress and has many customize ​configurations. You can use `@white-block/vitepress` to quickly create the docs below.

## Preview
![preview](/vitepress/preview.png)

[Online Demo](https://kythuen.github.io/white-block/) 

## Installation

::: code-group
```sh [pnpm]
pnpm add @white-block/vitepress unocss
```
```sh [npm]
npm install @white-block/vitepress unocss
```
```sh [yarn]
yarn add @white-block/vitepress unocss
```
:::

## Usage

### Extend Default Theme

If you already have a vitepress docs project, do follow steps to take WhiteBlock theme into your docs. 

#### Edit vitepress theme
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

#### Add unocss config
::: code-group
```ts [uno.config.ts]
import { UnocssConfig } from '@white-block/vitepress/unocss'

export default UnocssConfig()

```
:::

#### Add vite config
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

### Create with CLI
Also, you can CLI tool provided, quick create a new vitepress project with WhiteBlock theme.

::: code-group
```sh [pnpm]
pnpm dlx wb-vitepress init
```
```sh [npm]
npx wb-vitepress init
```
```sh [yarn]
yarn dlx wb-vitepress init
```
:::

## Customize 

If `@white-block/vitepress` can meet most of your needs, but you want to customize some parts. There also some ways provided for you to customize your documents in more detailed places.

### Extend Layout

[Layouts](./layout)

### Layout Slots

[Layout Slots](./slots)