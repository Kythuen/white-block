<template>
  <div
    fixed
    inset="0"
    z="95"
    w="full"
    h="full"
    p="4 t-[calc(var(--vp-wb-header-height)+1rem)]"
    bg="$wb-color-background"
    overflow="y-auto"
  >
    <WBSidebarMenu @change="e => emits('change', e)" />
  </div>
</template>

<script setup lang="ts">
import WBSidebarMenu from './WBSidebarMenu.vue'

const emits = defineEmits(['change'])
</script>
