<template>
  <div m="x-4" flex items="start" gap="4">
    <div w="20" h="9" text="md" font="semibold" flex items="center">
      {{ title }}
    </div>
    <div w="full" flex items="center" gap="2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true }
})
</script>
