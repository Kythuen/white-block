---
title: Components
description: The built-in components provided.
---

## Header

```ts
import { WBHeader } from '@white-block/vitepress'
```

This section contain areas: **logo**, **menu** and **operation**.

Use frontmatter to control visible of the component.
```md
---
header: false
---
```

:::tip
This component is available in all layouts. 
:::

### Logo

Logo area get configs from vitepress themeConfig.

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

### Navigation

Navigation area get configs from vitepress themeConfig.

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


### Operation

Operation area has `search` & `github` operations which get from vitepress themeConfig.

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

### Slots

This component also provide slots for customize.
- header-top
- header-operation-before
- header-operation-inside
- header-operation-after

See [Slots of Header](./slots#header) for detail.

### CSS Variables
Here is the css variables defined, you can use them to do customize.

```css
--wb-layout-height-header: 4rem;

```

## Sidebar

This section contain areas: **sidebar-top**, **sidebar-menu** and **sidebar-bottom**.

Use frontmatter to control visible of the component.
```md
---
sidebar: false
---
```

```ts
import { WBSidebar, WBSidebarMenu } from '@white-block/vitepress'
```


### Menu

Sidebar menu get data from vitepress themeConfig. 

> See [themeConfig sidebar](https://vitepress.dev/reference/default-theme-sidebar#sidebar) declaration in vitepress.

::: code-group
```ts [.vitepress/config.ts]
themeConfig: {
  sidebar: [
    { 
      text: 'Guides', items: [
        { text: 'Getting Started', link: '/packages/vitepress/guide' },
        { text: 'Layouts', link: '/packages/vitepress/layouts' },
        { text: 'Components', link: '/packages/vitepress/components' },
        { text: 'Slots', link: '/packages/vitepress/slots' },
        { text: 'Customize', link: '/packages/vitepress/customize' }
      ] 
    },
    { 
      text: 'Others', items: [
        { text: 'Changelogs', link: '/packages/vitepress/changelogs' },
        { text: 'Q & A', link: '/packages/vitepress/qa' }
      ]
    }
  ]
}
```
:::

### Slots

This component also provide slots for customize.
- sidebar-top
- sidebar-bottom

See [Slots of Sidebar](./slots#sidebar) for detail.


## Document

This section contain areas: **doc-top**, **doc-aside** and **doc-bottom**.
Use frontmatter to control visible of the component.
```md
---
document-header: false
document-aside: false
---

```ts
import { WBDocumentHeader, WBDocumentAside, WBDocumentAside } from '@white-block/vitepress'
```

### Document Header

Show main title & description of the page which will sticky and show title only while page scroll down.

Get data from frontmatter:
```md [xxx.md]
---
title: '@white-block/vitepress'
description: WhiteBlock document theme for vitepress.
---
```

### Document Aside
Document aside get headers of this page.

:::warning
Only headers under div `.vp-doc-content`, and both have id defined & childNode will be show in aside.
:::

### Slots

This component also provide slots for customize.
- doc-top
- doc-bottom
- doc-aside-top
- doc-aside-bottom

See [Slots of Content](./slots#content) for detail.

## Home
```ts
import { WBHome } from '@white-block/vitepress'
```
### Preview
![](/vitepress/components/wb-home.png)

<!-- TODO: Usage -->