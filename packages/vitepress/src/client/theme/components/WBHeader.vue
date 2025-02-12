<template>
  <header
    sticky
    inset="0"
    w="full"
    z="100"
    bg="$wb-color-background"
    border="0 b-px solid $wb-color-border"
    @click.stop="
      clickDelegate($event, 'wb-button', handleMenuOptions, hideMenuPanel)
    "
  >
    <div v-if="$slots['header-top']">
      <slot name="header-top" />
    </div>
    <div v-else-if="frontmatter.layout === 'home'">
      <slot name="home-top" />
    </div>
    <div
      max-w="full lg:360"
      h="$vp-wb-header-height"
      m="x-auto"
      p="x-2 !md:x-6 !lg:x-6"
      flex="~ row"
      justify="between"
      items="center"
      gap="3"
    >
      <div max-w="60" flex="1">
        <a
          p="1.5"
          :href="withBase(`${localePrefix}/`)"
          un-text="lg $wb-color-text-main"
          font="extrabold"
          flex="~ row"
          items="center"
        >
          <div v-if="theme.logo" flex items="center">
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
            <span>{{ theme.siteTitle }}</span>
          </div>
          <span v-else>{{ site.title }}</span>
        </a>
      </div>
      <div class="hidden !lg:flex" flex="lg:1" justify="center">
        <slot name="header-nav">
          <WBHeaderNav />
        </slot>
      </div>
      <div min-w="60" flex="lg:none ~ row" items="center" justify="end">
        <slot name="header-operation-before" />
        <VPNavBarSearch class="search" absolute translate="x-999" />
        <WBIconButton
          name="search"
          icon="i-heroicons-magnifying-glass"
          tip="Search"
        />
        <slot name="header-operation-inside" />
        <WBIconButton
          name="mode"
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          tip="Mode"
        />
        <template
          v-for="item in site.themeConfig.socialLinks || []"
          :key="item.icon"
        >
          <WBIconButton
            :name="item.icon"
            :icon="SOCIALS[item.icon].icon"
            :tip="SOCIALS[item.icon].title"
            tag="a"
            target="__blank"
            :href="item.link"
          />
        </template>
        <slot name="header-operation-after" />
        <div class="header-option-item lg:hidden">
          <WBIconButton
            name="menu"
            :icon="
              showMenuPanel
                ? 'i-heroicons-x-mark-20-solid'
                : 'i-heroicons-bars-3-20-solid'
            "
            tip="Menu"
          />
        </div>
      </div>
    </div>
    <div v-if="$slots['header-bottom']">
      <slot name="header-bottom" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import { computed, ref } from 'vue'
import { clickDelegate } from 'white-block'
import WBHeaderNav from './WBHeaderNav.vue'

const { site, isDark, lang, theme, frontmatter } = useData()

const SOCIALS: any = {
  github: { icon: 'i-simple-icons-github', title: 'GitHub' },
  twitter: { icon: 'i-simple-icons-x', title: 'Twitter' },
  discord: { icon: 'i-simple-icons-discord', title: 'Discord' }
}

const showMenuPanel = ref(false)
function hideMenuPanel() {
  showMenuPanel.value = false
}

const localePrefix = computed(() =>
  lang.value === 'en' ? '' : `/${lang.value}`
)

function handleMenuOptions(dataset: Record<string, string>) {
  const { value } = dataset
  switch (value) {
    case 'mode': {
      isDark.value = !isDark.value
      break
    }
    case 'menu': {
      showMenuPanel.value = !showMenuPanel.value
      break
    }
    case 'search': {
      ;(
        document.querySelector('.DocSearch-Button') as HTMLButtonElement
      )?.click()
      break
    }
  }
}
</script>
