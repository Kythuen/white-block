---
title: Slots
description: '@white-block/vitepress provide several slots for user to custom the theme.'
---

# Default Layout
When there is document page with `docs` layout, we provide the slots below.

## Overview
<script setup>
import SlotsOverview from '../../../.vitepress/theme/pages/packages/vitepress/Slots.vue'
import HeaderSlot from '../../../.vitepress/theme/pages/packages/vitepress/HeaderSlot.vue'
import SidebarSlot from '../../../.vitepress/theme/pages/packages/vitepress/SidebarSlot.vue'
import ContentSlot from '../../../.vitepress/theme/pages/packages/vitepress/ContentSlot.vue'
import HomeHeaderSlot from '../../../.vitepress/theme/pages/packages/vitepress/HomeHeaderSlot.vue'
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

### Dynamic Slots

#### header-top
Usually use for one-time banner on the top of the site.

#### header-bottom
Usually use for important notice above content area.

#### header-operation

Sometime you when add the operation button in header. 
- `#header-operation-before`
- `#header-operation-inside`
- `#header-operation-after`. 

### Static Slots

#### header-nav

When built-in navigation not meet your needs. We provide slot of navigation area for you to customize.

Default component is [WBHeaderNav](./components#navigation).

## Sidebar

You can use frontmatter `sidebar` to control the header component visible or not.
```md
---
sidebar: false
---
```

<SidebarSlot />

### Dynamic Slots

#### sidebar-top
Usually use for main Ads or main content.

#### sidebar-bottom
Usually use for Ads.

### Static Slots

#### sidebar-menu

When built-in sidebar menu not meet your needs. We provide slot of navigation area for you to customize.

Default component is [WBSidebarMenu](./components#menu).

## Document Content

The main content area of the page.

You can use frontmatter to control the header component visible or not.
```md
---
doc-header: false
doc-footer: false
---
```

<ContentSlot />

### Dynamic Slots

#### doc-header-top
Content above the document header.

#### doc-header-bottom
Content below the document header.

#### doc-aside-top
Content above the document aside.

#### doc-aside-bottom
Content below the document aside.

#### doc-footer-top
Content above the document footer.

#### doc-footer-bottom
Content below the document footer.

### Static Slots

#### doc-header

When built-in document header not meet your needs. We provide slot of navigation area for you to customize.

Default component is [WBDocumentHeader](./components#document-header).

#### doc-content

When built-in document content not meet your needs. We provide slot of navigation area for you to customize.

Default component is `<Content />` provided by vitepress.


#### doc-aside

When built-in document header not meet your needs. We provide slot of navigation area for you to customize.

Default component is [WBDocumentAside](./components#document-aside).

## Footer

Usually use for links & copyright information.

### Dynamic Slots

#### footer-top
Content above the layout footer.

#### footer-bottom
Content below the layout footer.

### Static Slots

#### footer

When built-in document header not meet your needs. We provide slot of navigation area for you to customize.

Default component is [WBFooter](./components#footer).

## Aside
Usually for isolated aside bar at right of the page.

### Dynamic Slots

#### aside
Aside slot default to a empty area.


# Home Layout

## Header

You can use frontmatter `header` to control the header component visible or not.
```md
---
header: false
---
```
<HomeHeaderSlot />

:::tip
`#home-top` only show in `home` layout and have less priority than `#header-top`.
:::

## Content

### home-content
Use to customize you home page.

Default component is [WBHome](./components#home).
