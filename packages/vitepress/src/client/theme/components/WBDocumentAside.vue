<template>
  <div
    sticky
    top="[calc(var(--vp-wb-header-height)+8.5rem)]"
    w="52"
    flex="none col"
    :h="
      focus
        ? '[calc(100vh-var(--vp-wb-header-height)-10.5rem)]'
        : '[calc(100vh-var(--vp-wb-header-height)-23rem)]'
    "
    class="hidden !lg:flex vp-raw"
  >
    <div
      h="full"
      flex="1"
      overflow="y-auto"
      :style="{ height: menuHeightStyle }"
    >
      <slot name="document-aside-menu">
        <WBDocumentAsideMenu v-bind="props" />
      </slot>
    </div>
    <div ref="AsideMenuBottom">
      <slot name="document-aside-bottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import WBDocumentAsideMenu from './WBDocumentAsideMenu.vue'
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  focus: { type: Boolean, default: false },
  tab: { type: String, default: 'content' }
})

const AsideMenuBottom = ref()
const menuHeightStyle = ref('')

function getMenuHeight() {
  const bottomHeight = AsideMenuBottom.value.offsetHeight
  const bottomMargin = bottomHeight ? '1rem' : '0'
  return `calc(100% - ${bottomHeight}px - ${bottomMargin})`
}

onMounted(() => {
  menuHeightStyle.value = getMenuHeight()
  watch(
    () => props.tab,
    () => {
      menuHeightStyle.value = getMenuHeight()
    }
  )
})
</script>
