<template>
  <div max-w="lg:360" m="x-auto" p="y-16 x-4 md:x-8" flex="~ col" gap="6">
    <div w="80%" m="x-auto" p="t-16" flex="~ col" items="center">
      <h2
        w="xl:200"
        m="t-0 b-2em"
        text="8 md:10 xl:12 center white"
        font="bold italic leading-[1.2]"
        gap="x-1em"
      >
        Powering your Application Development with WhiteBlock
      </h2>
      <Net />
    </div>
    <div w="95% lg:80%" m="x-auto t-6" style="--wb-color-primary: #ffffff">
      <wb-input w="full" size="lg" placeholder="Search a package">
        <template #suffix>
          <wb-button h="full" theme="contrast">Search</wb-button>
        </template>
      </wb-input>
    </div>
    <div w="95% lg:80%" m="x-auto t-6">
      <div p="y-4" grid="~ cols-1 md:cols-2 lg:cols-3" gap="4">
        <BlurCard v-for="item in PACKAGES" :key="item.title" :data="item" />
      </div>
      <!-- <h2>Recently</h2> -->
      <!-- <h2>Explore All</h2> -->
      <!-- <div
        grid="~ cols-12"
        gap="6"
        @click="clickDelegate($event, 'pkg-item', toPage)"
      >
        <div
          v-for="item in PACKAGES"
          :key="item.name"
          :data-value="`/${item.link}`"
          p="4"
          rounded="1.5"
          ring="1 $wb-color-border-soft"
          bg="#111111 hover:$wb-color-background"
          grid="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
          flex="~ col"
          gap="3"
          cursor="pointer"
          shadow="inset white/10 sm"
          class="pkg-item"
        >
          <div flex items="center" gap="3">
            <div w="10" h="10" p="1" rounded="1" bg="white/10">
              <img h="full" :src="withBase(`/logos/${item.link}.svg`)" alt="" />
            </div>
            <div text="lg" color="$wb-color-text-main">{{ item.name }}</div>
          </div>
          <div flex="1" color="$wb-color-text-disabled">
            {{ item.description || 'Not Found' }}
          </div>
          <div flex="~" gap="3">
            <div w="5" h="5" class="i-simple-icons-npm"></div>
            <div w="5" h="5" class="i-simple-icons-github"></div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase, useRouter } from 'vitepress'
// import { clickDelegate } from 'white-block'
import Net from './Net.vue'

const PACKAGES = [
  {
    title: '@white-block/resolve',
    desc: 'unplugin-vue-components resolver for WhiteBlock.',
    link: '/packages/vitepress',
    authorLink: 'https://github.com/Kythuen',
    author: 'Kythuen',
    img: withBase('/assets/img/packages/unplugin.png'),
    tags: ['unplugin-vue-components', 'resolver']
  },
  {
    title: '@white-block/types',
    desc: 'A tool to resolve types for WhiteBlock components.',
    link: '/packages/vitepress',
    authorLink: 'https://github.com/Kythuen',
    author: 'Kythuen',
    img: withBase('/assets/img/packages/typescript.png'),
    tags: ['API', 'AST']
  },
  {
    title: '@white-block/vitepress',
    desc: 'WhiteBlock document theme for vitepress.',
    link: '/packages/vitepress',
    authorLink: 'https://github.com/Kythuen',
    author: 'Kythuen',
    img: withBase('/assets/img/packages/vitepress.svg'),
    tags: ['theme', 'vitepress']
  }
]

// const router = useRouter()
// function toPage(dataset: Record<string, string>) {
//   const { value } = dataset
//   router.go(withBase(value))
// }
</script>
