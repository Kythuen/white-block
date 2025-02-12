---
title: Layouts
description: '@white-block/vitepress provide several layouts.'
---

## Docs Layout

The default layout is `docs` When there is not specify. 

All components are available in this layout.

### Frontmatter
You can use frontmatter to control the visible of them.

```md
---
layout: docs

header: false
footer: false
sidebar: false
document-header: false
document-aside: false
---
```


### Preview
![](/vitepress/preview.png)


## Home Layout

Home page of the document. 

`Header` & `Footer` are available in this layout.

### Frontmatter
You can use frontmatter to control the visible of them.

Reference to [VitePress HomePage](https://vitepress.dev/reference/default-theme-home-page#home-page).

```md
---
layout: home

header: false
footer: false

hero:
  slogan: Intuitive Design for Effortless Development
  intro: Ephemeras is a collection of various types projects, such as websites, npm library & command line tool. You can easily and quickly create a website with this starter.
  actions:
    - theme: default
      text: Get Started
      icon: i-iconamoon:lightning-2-fill
      link: ./guide/
    - theme: contrast
      text: View on GitHub
      icon: i-simple-icons:github
      link: https://github.com/Kythuen/white-block

features:
  title: Start your project with ephemeras
  desc: Ephemeras has adopted popular technologies in the community and summarized various project templates, making it easy for you to quickly start your project development.
  items:
    - icon: 🌟
      title: Popular Technologies
      desc: Keep up with popular technology trends, build your project using Vue, TypeScript, Vite, Unocss etc.
    - icon: 🎯
      title: Focus On Inspiration
      desc: No need to start building frameworks from scratch, saving your time and quickly implement your ideas.
    - icon: 🪄
      title: Been Optimized
      desc: On the basis of popular scaffolding, many optimizations have been made to code structure, linter, bundler, etc.

technologies:
  title: Works with your technologies
  items:
    - title: vue
      icon: i-logos:vue
      link: https://vuejs.org/
    - title: typescript
      icon: i-logos:typescript-icon
      link: https://www.typescriptlang.org/
    - title: unocss
      icon: i-logos:unocss
      link: https://unocss.dev/

started:
  title: Build project faster.
  desc: Quickly implement your ideas with templates and enjoy your coding.
  link: ./guide/
---
```

### Preview
![page](/vitepress/layouts/home.png)


## Empty Layout

Sometime you have some special page in the docs, use `empty` layout.

`Header` & `Footer` are available in this layout.

### Frontmatter
You can use frontmatter to control the visible of them.

```md
---
layout: empty

header: false
footer: false
---
```

### Preview
![empty](/vitepress/layouts/empty.png)
