<template>
  <div max-w="lg:360" m="x-auto" p="y-16 x-4 md:x-8" flex="~ col" gap="6">
    <div w="80%" m="x-auto" p="t-16" flex="~ col" items="center">
      <h2
        w="xl:200"
        m="t-0 b-2em"
        text="8 md:10 xl:12 center $wb-color-text-main"
        font="bold italic leading-[1.2]"
        gap="x-1em"
      >
        Powering your Application Development with WhiteBlock
      </h2>
      <Net />
    </div>
    <div w="95% lg:80%" m="x-auto t-6" style="--wb-color-primary: #ffffff">
      <wb-input
        v-model="filterKeyword"
        w="full"
        size="lg"
        placeholder="Search a package"
        @change="filterPackages"
      >
        <template #suffix>
          <wb-button h="full" theme="contrast" @click="filterPackages">
            Search
          </wb-button>
        </template>
      </wb-input>
    </div>
    <div w="95% lg:80%" m="x-auto t-6">
      <div p="y-4" grid="~ cols-1 md:cols-2 lg:cols-3" gap="4">
        <BlurCard
          v-for="item in resolvePackages"
          :key="item.title"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
import { ref, shallowRef } from 'vue'
import Net from './Net.vue'

const PACKAGES = [
  {
    title: '@white-block/vitepress',
    desc: 'WhiteBlock document theme for VitePress.',
    link: withBase('/packages/vitepress/guide'),
    authorLink: 'https://github.com/Kythuen',
    author: 'Kythuen',
    img: withBase('/assets/img/packages/vitepress.webp'),
    tags: ['theme', 'VitePress']
  },
  {
    title: '@white-block/resolver',
    desc: 'unplugin-vue-components resolver for WhiteBlock.',
    link: withBase('/packages/resolver/'),
    authorLink: 'https://github.com/Kythuen',
    author: 'Kythuen',
    img: withBase('/assets/img/packages/unplugin.png'),
    tags: ['unplugin-vue-components', 'resolver']
  },
  {
    title: '@white-block/types',
    desc: 'Tools to resolve types for WhiteBlock components',
    link: withBase('/packages/types/'),
    authorLink: 'https://github.com/Kythuen',
    author: 'Kythuen',
    img: withBase('/assets/img/packages/typescript.png'),
    tags: ['API', 'AST']
  },
  {
    title: '@white-block/awesome',
    desc: 'Awesome components for WhiteBlock.',
    link: withBase('/packages/awesome/'),
    authorLink: 'https://github.com/Kythuen',
    author: 'Kythuen',
    img: withBase('/assets/img/packages/awesome.webp'),
    tags: ['components']
  }
]

const resolvePackages = shallowRef(PACKAGES)
const filterKeyword = ref('')
function filterPackages() {
  resolvePackages.value = PACKAGES.filter(i =>
    i.title.includes(filterKeyword.value)
  )
}
</script>
