---
title: Components
description: The built-in components provided.
---

## WBHeader

![](/vitepress/components/wb-header.png)

```ts
import { WBHeader, WBHeaderNav } from '@white-block/vitepress'
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
--vp-wb-header-height: 4rem;

```

## WBSidebar

![](/vitepress/components/wb-sidebar.png)

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


## WBDocument

![](/vitepress/components/wb-document.png)

This section contain areas: **doc-top**, **doc-aside** and **doc-bottom**.
Use frontmatter to control visible of the component.
```md
---
document-header: false
document-aside: false
---

```ts
import { WBDocumentHeader, WBDocumentContent, WBDocumentAside, WBDocumentAside } from '@white-block/vitepress'
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

### Document Content

Main content of the page. Default is `<Content />`, which is the parser result of the markdown file.

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


## WBFooter

![](/vitepress/components/wb-footer.png)

Use frontmatter to control visible of the component.
```md
---
footer: false
---
```

```ts
import { WBFooter } from '@white-block/vitepress'
```

Footer get data from vitepress themeConfig. 

> See [themeConfig sidebar](https://vitepress.dev/reference/default-theme-sidebar#sidebar) declaration in vitepress.

::: code-group
```ts [.vitepress/config.ts]
themeConfig: {
  footer: {
    message:
      'Released under the <a href="https://github.com/Kythuen/white-block/blob/main/LICENSE">MIT License</a>.',
    copyright:
      'Copyright © 2023-present <a href="https://github.com/Kythuen">Kythuen</a>. All rights reserved.'
  }
}
```
:::

### Slots

This component also provide slots for customize.
- footer-top
- footer-bottom

See [Slots of Footer](./slots#footer) for detail.


## WBHome

![](/vitepress/components/wb-home.png)

```ts
import { WBHome } from '@white-block/vitepress'
```

See [Usage of WBHome](./layouts#home-layout)