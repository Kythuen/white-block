---
title: Layout
description: '@white-block/vitepress provide several layout.'
---

## Layout

### Default Layout

![](/vitepress/preview.png)

### Components

You can use frontmatter to control the visible of the components.
::: code-group
```md [markdown file]
---
header: false
sidebar: false
document-header: false
document-aside: false
---
```
:::

#### header
![](/vitepress/components/header.png)

#### sidebar
![](/vitepress/components/sidebar.png)

#### document-header
![](/vitepress/components/document-header.png)

#### document-aside
![](/vitepress/components/document-aside.png)


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
