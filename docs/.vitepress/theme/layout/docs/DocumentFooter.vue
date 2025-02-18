<template>
  <footer
    relative
    w="full"
    m="t-8"
    p="6 t-16 b-8"
    border="0 t-px solid $wb-color-border"
  >
    <div flex="~ wrap" gap="8" justify="center !md:start">
      <div w="lg:80" flex="~ col" gap="3" items="center !md:start">
        <a
          :href="withBase(`${localePrefix}/`)"
          un-text="lg $wb-color-text-main"
          font="bold"
          flex="~ row"
          items="center"
        >
          <div flex items="center">
            <img
              w="auto"
              h="7"
              m="r-2"
              :src="
                withBase(
                  (isDark ? theme.logo?.dark : theme.logo?.light) ?? theme.logo
                )
              "
              filter=" drop-shadow-sm"
              alt="logo"
            />
            <p text="md $wb-color-text" font="extrabold">WhiteBlock</p>
          </div>
        </a>
        <div text="sm $wb-color-text">
          Intuitive Design for Effortless Development
        </div>
        <div p="y-1" text="5" flex gap="3">
          <a
            v-for="item in SOCIALS"
            :key="item.name"
            :href="item.link"
            target="__blank"
            un-text="hover:$wb-color-text"
            flex="~ col"
            gap="2"
          >
            <div m="1" :class="item.icon"></div>
          </a>
        </div>
      </div>
      <div class="hidden !md:flex" w="full" h="40" flex="1">
        <div v-for="group in LINKS" :key="group.title" flex="~ col 1" gap="2">
          <div m="b-4" text="md $wb-color-text" font="bold">
            {{ group.title }}
          </div>
          <a
            v-for="item in group.items"
            :key="item.title"
            :href="withBase(item.value)"
            target="__blank"
            un-text="sm $wb-color-text-secondly hover:$wb-color-text-active"
            flex
            items="center"
            gap="2"
          >
            <div>{{ item.title }}</div>
            <div v-if="EXTERNAL_URL_RE.test(item.value)">
              <div w="4" h="4" class="i-heroicons-arrow-up-right-20-solid" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div text="sm $wb-color-text-secondly center">
      Copyright © 2024 Kythuen. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'

const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

const { isDark, lang, theme } = useData()
const localePrefix = computed(() =>
  lang.value === 'en' ? '' : `/${lang.value}`
)

const LINKS = [
  {
    title: 'Guide',
    items: [
      { title: 'Getting Started', value: '/guide/' },
      { title: 'Overview', value: '/guide/overview' },
      { title: 'Colors', value: '/guide/colors' }
    ]
  },
  {
    title: 'Roadmap',
    items: [
      { title: 'Changelog', value: '/changelog' },
      { title: 'Plan', value: '/plan' }
    ]
  },
  {
    title: 'Packages',
    items: [
      { title: 'Resolver', value: '/packages/resolver/' },
      { title: 'Types', value: '/packages/types/' },
      { title: 'Vitepress', value: '/packages/vitepress' }
    ]
  },
  {
    title: 'Tools',
    items: [
      {
        title: 'Playground',
        value: import.meta.env.DEV
          ? 'http://localhost:28802'
          : 'https://kythuen.github.io/white-block/playground'
      },
      {
        title: 'VSCode Plugin',
        value:
          'https://marketplace.visualstudio.com/items?itemName=Kythuen.white-block-vscode'
      },
      { title: 'CLI', value: '/packages/cli' }
    ]
  },
  {
    title: 'Contact',
    items: [
      { title: 'About Us', value: 'https://github.com/Kythuen' },
      { title: 'Contact', value: 'mailto:616332192@qq.com' }
    ]
  }
]
const SOCIALS = [
  {
    name: 'github',
    icon: 'i-simple-icons:github',
    link: 'https://github.com/Kythuen/white-block'
  },
  {
    name: 'discord',
    icon: 'i-simple-icons:discord',
    link: 'https://discord.gg/SYJT65pk'
  },
  {
    name: 'juejin',
    icon: 'i-simple-icons:juejin',
    link: 'https://juejin.cn/user/413072101742743'
  }
]
</script>
