---
title: Guide
description: This page show you how to use markdown.
---

Due to WhiteBlock Theme is base on VitePress, [Markdown Extensions](https://vitepress.dev/guide/markdown) provided by VitePress can be used. 

## Examples

### Code Blocks

#### Base
````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

```js
export default {
  name: 'MyComponent',
  // ...
}
```

#### Highlighted
````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

#### Diff
````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```
````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

### Code Groups
````
::: code-group
```sh [pnpm]
pnpm dlx @white-block/vitepress init
```
```sh [npm]
npx @white-block/vitepress init
```
```sh [yarn]
yarn dlx @white-block/vitepress init
```
:::
````
::: code-group
```sh [pnpm]
pnpm dlx @white-block/vitepress init
```
```sh [npm]
npx @white-block/vitepress init
```
```sh [yarn]
yarn dlx @white-block/vitepress init
```
:::

### TOC
```md
[[toc]]
```
[[toc]]

### Custom Containers
```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::


For more usage, see [Markdown Extensions](https://vitepress.dev/guide/markdown) provided by VitePress can be used. 