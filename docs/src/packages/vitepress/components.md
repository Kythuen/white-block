---
title: Components
description: The build-in components provided.
---

## Header

```ts
import { WBHeader } from '@white-block/vitepress'
```

This component contain sections: **logo**, **menu** and **operation**.

Use frontmatter to control visible of the component.
```md
---
header: false
---
```

:::tip
This component is available in all layouts. 
:::

### Logo Section

Logo section get configs from vitepress themeConfig.

Prioritize using icons corresponding to the theme. If there are no icons, only text will be displayed.

::: code-group
```ts [.vitepress/config.ts]
themeConfig: {
  siteTitle: 'WhiteBlock',

  // logo: { light: '/logo_light.svg', dark: '/logo.svg' }
  logo: '/logo.svg',
}
```
:::

> See [themeConfig logo](https://vitepress.dev/reference/default-theme-config#logo) declaration in vitepress.

### Navigation Section

Navigation section get configs from vitepress themeConfig.

::: code-group
```ts [.vitepress/config.ts]
themeConfig: {
  nav: [
    { text: 'Guide', link: '/guide' },
    { text: 'Components', link: '/guide/overview' },
    { text: 'Playground', link: '/playground' },
    { text: 'Packages', link: '/packages' }
  ]
}
```
:::


> See [themeConfig nav](https://vitepress.dev/reference/default-theme-config#nav) declaration in vitepress.


### Operation Section

Operation section has `search` & `github` operations which get from vitepress themeConfig.

- Default use [local-search](https://vitepress.dev/reference/default-theme-search#local-search).

- Support social icons: `github`, `x`, `discord`.

::: code-group
```ts [.vitepress/config.ts]
themeConfig: {
  socialLinks: [
    { icon: 'github', link: 'https://github.com/Kythuen/white-block' }
  ]
}
```
:::


## Sidebar

```ts
import { WBSidebar, WBSidebarMenu } from '@white-block/vitepress'
```