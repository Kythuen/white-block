---
title: Deploy
description: Tutorial show how to deploy your document.
---

WhiteBlock Theme base on VitePress, so your documents is a VitePress project.

Reference to [Deploy Your VitePress Site](https://vitepress.dev/guide/deploy) for details.

## Build and Test Locally

:::details Find scripts in `package.json`
```json
"scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  }
```
:::

### Build it
Run build script:
```shell
pnpm build
```

### Preview it
Run build script:
```shell
pnpm preview
```

### Attentions

### Public Base Path

In WhiteBlock Theme, `base` config in VitePress config will be set base on `repo` you input [when create](./guide#quick-start). 

This would be important when you deploy to GitHub Page or etc.

You can find it at `.vitepress/config.ts`. 
```ts {4}
// ...
export default defineConfig({
  // ...
  base: '/vitepress-customize/',
  // ...
})

```