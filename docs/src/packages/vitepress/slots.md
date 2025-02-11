---
title: Slots
description: '@white-block/vitepress provide several slots for user to custom the theme.'
---

# Document Page
When there is document page with `docs` layout, we provide the slots below.

## Overview
<script setup>
import SlotsOverview from '../../../.vitepress/theme/pages/packages/vitepress/Slots.vue'
import HeaderSlot from '../../../.vitepress/theme/pages/packages/vitepress/HeaderSlot.vue'
import SidebarSlot from '../../../.vitepress/theme/pages/packages/vitepress/SidebarSlot.vue'
import ContentSlot from '../../../.vitepress/theme/pages/packages/vitepress/ContentSlot.vue'
</script>
<SlotsOverview />

## Header

You can use frontmatter `header` to control the header component visible or not.
```md
---
header: false
---
```
<HeaderSlot />

:::tip
- `#header-top`: Usually use for one-time banner on the top of the site.

- `#header-operation-[position]`: 
Sometime you when add the operation button in header.
:::

## Sidebar
<SidebarSlot />

:::tip
`#sidebar-top` & `#sidebar-bottom` usually for ads. 
:::

## Content
The main content area of the page.
<ContentSlot />

## Footer
Usually use for links & copyright information.

<!-- ### HomePage
#### home-top
![home-top](/vitepress/slots/home-top.png)

#### home-content
![home-top](/vitepress/slots/home-content.png) -->