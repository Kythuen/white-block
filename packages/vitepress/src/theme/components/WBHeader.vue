<template>
  <header
    sticky
    top="0"
    w="full"
    z="100"
    bg="dark:[rgb(var(--wb-vc-gray-950))]"
    border="0 b-px solid $wb-color-border-soft"
    class="ep-headers"
    overflow="hidden"
    @click.stop="
      clickDelegate($event, 'wb-button', handleMenuOptions, hideMenuPanel)
    "
  >
    <div v-if="$slots.headerTop">
      <slot name="header-top" />
    </div>
    <div v-else-if="frontmatter.layout === 'home'">
      <slot name="home-top" />
    </div>
    <div
      max-w="lg:400"
      h="$wb-height-layout-header"
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
          un-text="4"
          font="semibold"
          flex="~ row"
          items="center"
        >
          <div v-if="theme.logo" flex items="center">
            <img
              w="auto"
              h="6"
              m="r-2"
              :src="
                withBase(
                  (isDark ? theme.logo?.dark : theme.logo?.light) ?? theme.logo
                )
              "
              filter=" drop-shadow-sm"
              alt="logo"
            />
            <span>{{ site.title }}</span>
          </div>
          <span v-else>{{ site.title }}</span>
        </a>
      </div>
      <div class="hidden !lg:flex" flex="lg:1" justify="center">
        <VPNavBarSearch class="search" absolute translate="x-999" />
        <VPNavBarMenu />
      </div>
      <div min-w="60" flex="lg:none ~ row" items="center" justify="end">
        <slot name="header-operation-before" />
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
        <WBIconButton
          name="gitHub"
          icon="i-simple-icons-github"
          tip="GitHub"
          tag="a"
          target="__blank"
          href="https://github.com/Kythuen/white-block"
        />
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
  </header>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import VPNavBarMenu from 'vitepress/dist/client/theme-default/components/VPNavBarMenu.vue'
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import { computed, ref } from 'vue'
import { clickDelegate } from 'white-block'

const { site, isDark, lang, theme, frontmatter } = useData()

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
