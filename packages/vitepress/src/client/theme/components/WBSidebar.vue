<template>
  <div
    sticky
    top="$vp-wb-header-height"
    w="60"
    flex="none"
    h="[calc(100vh-var(--vp-wb-header-height))]"
    p="8 l-2 !md:l-6"
    overflow="y-auto"
    class="hidden !xl:block"
  >
    <div h="full" relative>
      <div ref="SidebarMenuTop">
        <slot name="sidebar-top" />
      </div>
      <div flex="1" overflow="y-auto" :style="{ height: menuHeightStyle }">
        <slot name="sidebar-menu">
          <WBSidebarMenu />
        </slot>
      </div>
      <div ref="SidebarMenuBottom">
        <slot name="sidebar-bottom" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WBSidebarMenu from './WBSidebarMenu.vue'
import { ref, onMounted } from 'vue'

const SidebarMenuTop = ref()
const SidebarMenuBottom = ref()

const menuHeightStyle = ref('')

onMounted(() => {
  const topHeight = SidebarMenuTop.value.offsetHeight
  const topMargin = topHeight ? '3rem' : '0'
  const bottomHeight = SidebarMenuBottom.value.offsetHeight
  const bottomMargin = bottomHeight ? '3rem' : '0'

  menuHeightStyle.value = `calc(100% - ${topHeight + bottomHeight}px - ${topMargin} - ${bottomMargin}`
})
</script>
