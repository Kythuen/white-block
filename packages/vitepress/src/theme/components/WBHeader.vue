<template>
  <header
    sticky
    top="0"
    w="full"
    h="$wb-height-layout-header"
    z="100"
    bg="dark:[rgb(var(--wb-vc-gray-950))]"
    border="0 b-px solid $wb-color-border-soft"
    class="ep-headers"
    overflow="x-hidden"
    @click.stop="
      clickDelegate(
        $event,
        'header-option-item',
        handleMenuOptions,
        hideMenuPanel
      )
    "
  >
    <div
      max-w="lg:400"
      h="full"
      m="x-auto"
      p="x-2 md:x-6 lg:x-6"
      flex="~ row"
      justify="between"
      items="center"
      gap="3"
    >
      <div w="60" flex="none">
        <a
          p="1.5"
          :href="`${localePrefix}/`"
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
            <span>{{ theme.siteTitle }}</span>
          </div v-else>
          <span>{{ site.title }}</span>
        </a>
      </div>
      <div class="hidden !lg:flex" flex="lg:1" justify="center">
        <VPNavBarSearch class="search" absolute translate="x-999" />
        <VPNavBarMenu />
      </div>
      <div flex="lg:none ~ row" items="center" justify="end">
        <slot name="header-operation-before" />
        <wb-button-group allow-types="['WbButton', 'WbPopup']">
          <wb-popup
            trigger="hover"
            placement="bottom"
            content="Search"
            :z-index="100"
          >
            <wb-button key="search" type="text" theme="contrast">
              <div w="5" h="5" class="i-heroicons-magnifying-glass" />
            </wb-button>
          </wb-popup>
          <slot name="header-operation-inside" />
          <wb-popup
            trigger="hover"
            placement="bottom"
            content="Mode"
            :z-index="100"
          >
            <wb-button key="mode" type="text" theme="contrast">
              <div v-if="isDark" w="5" h="5" class="i-heroicons-moon-20-solid" />
              <div v-else w="5" h="5" class="i-heroicons-sun-20-solid" />
            </wb-button>
          </wb-popup>
          <wb-popup
            trigger="hover"
            content="GitHub"
            :z-index="100"
          >
            <wb-button tag="a" type="text" theme="contrast" href="https://github.com/Kythuen/white-block" >
              <div w="5" h="5" class="i-simple-icons-github" />
            </wb-button>
          </wb-popup>
        </wb-button-group>
        <slot name="header-operation-after" />
        <button data-value="menu" class="header-option-item lg:hidden" p="1.5">
          <div
            v-if="!showMenuPanel"
            w="5"
            h="5"
            class="i-heroicons-bars-3-20-solid"
          />
          <div v-else w="5" h="5" class="i-heroicons-x-mark-20-solid" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { clickDelegate } from 'white-block'
import { useData, useRouter, withBase } from 'vitepress'
import VPNavBarMenu from 'vitepress/dist/client/theme-default/components/VPNavBarMenu.vue'
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import { computed, ref } from 'vue'

const emits = defineEmits<{ theme: [visible: boolean] }>()
const { site, isDark, lang, theme } = useData()

const showMenuPanel = ref(false)
function hideMenuPanel() {
  showMenuPanel.value = false
}

const localePrefix = computed(() =>
  lang.value === 'en' ? '' : `/${lang.value}`
)

const router = useRouter()
function handleMenuOptions(dataset: Record<string, string>) {
  const { value } = dataset
  switch (value) {
    case 'mode': {
      isDark.value = !isDark.value
      break
    }
    case 'lang': {
      let targetPath = ''
      const { path } = router.route
      if (path.includes('/zh')) {
        targetPath = path.replace('/zh', '')
      } else {
        const { base } = site.value
        const pure = path.replace(base, '')
        targetPath = `${base}zh/${pure}`
      }
      router.go(targetPath)
      break
    }
    case 'menu': {
      showMenuPanel.value = !showMenuPanel.value
      break
    }
    case 'theme': {
      emits('theme', true)
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
