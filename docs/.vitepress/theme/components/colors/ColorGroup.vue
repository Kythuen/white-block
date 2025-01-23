<template>
  <div flex="~ wrap lg:nowrap" items="start" gap="4">
    <div w="16" h="9" text="lg" font="semibold" flex items="center">
      {{ title }}
    </div>
    <div w="full" flex="1" items="center" gap="2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true }
})
</script>
