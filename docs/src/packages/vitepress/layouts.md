---
title: Layouts
description: '@white-block/vitepress provide several layouts.'
---

## Docs Layout
```md
---
layout: docs
---
```
The default layout is `docs` When there is not specify. 

### Preview
![](/vitepress/preview.png)


All components are available in this layout.

You can use frontmatter to control the visible of them.
::: code-group
```md [markdown file]
---
header: false
footer: false
sidebar: false
document-header: false
document-aside: false
---
```
:::


## Home Layout

```md
---
layout: home
---
```

### Preview
![page](/vitepress/layouts/home.png)

`Header` & `Footer` are available in this layout.
You can use frontmatter to control the visible of them.
::: code-group
```md [markdown file]
---
header: false
footer: false
---
```
:::

## Empty Layout

Sometime you have some special page in the docs, use `empty` layout.

```md
---
layout: empty
---
```

### Preview
![empty](/vitepress/layouts/empty.png)

`Header` & `Footer` are available in this layout.
You can use frontmatter to control the visible of them.
::: code-group
```md [markdown file]
---
header: false
footer: false
---
```
:::
