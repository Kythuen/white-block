<template>
  <footer relative w="full" p="6 y-8" flex="~ wrap">
    <Placeholder :src="withBase('/assets/tmp/footer.png')" :opacity="1" />
    <div w="lg:63" flex="~ col" gap="2">
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
          <p text="md white">WhiteBlock</p>
        </div>
      </a>
      <div text="sm white">Intuitive Design for Effortless Development</div>
      <div text="xs">© 2023-2025 Kythuen</div>
      <div w="48" h="12" bg="gray/10" rounded="2"></div>
      <div
        w="48"
        h="8"
        text="sm"
        p="x-2"
        bg="gray/20"
        rounded="full"
        flex
        items="center"
        gap="2"
      >
        <div text="4 green" i="heroicons-check-circle-20-solid"></div>
        All services are online
      </div>
    </div>
    <div w="full" h="50" flex="~ 1">
      <div v-for="group in LINKS" :key="group.title" flex="~ col 1" gap="2">
        <div m="b-4" text="md white" font="bold">{{ group.title }}</div>
        <div
          v-for="item in group.items"
          :key="item.title"
          text="sm"
          flex="~ col"
          gap="2"
        >
          <div>{{ item.title }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import { computed, ref } from 'vue'
import { clickDelegate } from 'white-block'
import WBHeaderMenu from './WBHeaderMenu.vue'

const { site, isDark, lang, theme, frontmatter } = useData()
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
    title: '产品',
    items: [
      { title: '更新进度', value: '/guide/' },
      { title: '价格与计划', value: '/guide/overview' },
      { title: '助手市场', value: '/guide/overview' },
      { title: '插件市场', value: '/guide/overview' },
      { title: '社区版', value: '/guide/colors' }
    ]
  },
  {
    title: '产品',
    items: [
      { title: '更新进度', value: '/guide/' },
      { title: '价格与计划', value: '/guide/overview' },
      { title: '助手市场', value: '/guide/overview' },
      { title: '插件市场', value: '/guide/overview' },
      { title: '社区版', value: '/guide/colors' }
    ]
  },
  {
    title: '产品',
    items: [
      { title: '更新进度', value: '/guide/' },
      { title: '价格与计划', value: '/guide/overview' },
      { title: '助手市场', value: '/guide/overview' },
      { title: '插件市场', value: '/guide/overview' },
      { title: '社区版', value: '/guide/colors' }
    ]
  },
  {
    title: '产品',
    items: [
      { title: '更新进度', value: '/guide/' },
      { title: '价格与计划', value: '/guide/overview' },
      { title: '助手市场', value: '/guide/overview' },
      { title: '插件市场', value: '/guide/overview' },
      { title: '社区版', value: '/guide/colors' }
    ]
  }
]
</script>
