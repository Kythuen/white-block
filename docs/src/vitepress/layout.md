---
title: Layout
description: '@white-block/vitepress provide several layout.'
---

## Layout

### Default Layout

![](/vitepress/preview.png)

#### Components

You can use frontmatter to control the visible of the components.
- sidebar
- document-header
- document-aside

::: code-group
```md [markdown file]
---
sidebar: false
document-header: false
document-aside: false
---
```
:::

### Home

### Page

![page](/vitepress/layout_page.png)

### Empty

![empty](/vitepress/layout_empty.png)


## Layout CSS Variables

Here is the css variables defined, you can use them to do customize.

```css
--wb-layout-height-header: 4rem;
--wb-layout-width-aside: 13rem;
--wb-layout-max-width-content: 66rem;

```
