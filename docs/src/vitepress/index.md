---
title: File System
description: Supset of node:fs/promise that provided more convenient features.

layout: page
logo: /vitepress/logo.svg 
slogan: WhiteBlock style documentation for vitepress
link: /vitepress/detail
shell: pnpm install @ephemeras/fs
---

<!-- <p align="center" style="margin-top: 4rem">
  <img width="120" src="/fs.svg" alt="@ephemeras/fs"/>
</p>
<h3 align="center">Make development easier and more efficient
</h3>

![](https://img.shields.io/codecov/c/github/Kythuen/ephemeras?flag=fs) -->

## Introduce
![Graph](https://picsum.photos/1200/200/?random)

## Usage
### unixPath
<FunctionBlock
  :options="{
    desc: 'Determine path exists or not.',
    type: '(path: string): Promise<boolean>',
    params: [
      {
        name: 'path',
        type: 'string',
        desc: 'The path you want to determine.'
      },
      {
        name: 'path',
        type: 'string',
        desc: 'The path you want to determine.'
      }
    ],
    returns: 'Unix format path.'
  }"
/>

Example
```ts
unixPath('abc/ab/c')        //--> 'abc/ab/c'
unixPath('abc\\ab\\c')      //--> 'abc/ab/c'
```

:::tip
Some special tip
:::