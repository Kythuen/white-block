---
title: '@white-block/resolver'
description: unplugin-vue-components resolver for WhiteBlock.

---

## Introduction

This is the unplugin-vue-components resolver provide by [WhiteBlock](/).

## Usage

### Installation
First you need to install `unplugin-vue-components` and `@white-block/resolver`.

::: code-group
```sh [pnpm]
$ pnpm add -D unplugin-vue-components @white-block/resolver
```
```sh [npm]
$ npm install -D unplugin-vue-components @white-block/resolver
```
```sh [yarn]
$ yarn add -D unplugin-vue-components @white-block/resolver
```
:::

### Add Configs

Then add the code below into your Vite or Webpack config file.

#### Vite
::: code-group
```ts [vite.config.ts]
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { WhiteBlockResolver } from '@white-block/unplugin-vue-resolver'

export default {
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [WhiteBlockResolver()]
    })
  ]
}
```
:::

#### Webpack
::: code-group
```ts [webpack.config.ts]
const Components = require('unplugin-vue-components/webpack')
const { WhiteBlockResolver } = require('@white-block/resolvers')

module.exports = {
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [
        WhiteBlockResolver()
      ]
    })
  ]
}
```
:::