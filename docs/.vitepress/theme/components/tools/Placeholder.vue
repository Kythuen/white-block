<template>
  <div absolute inset="0" w="full" h="full" bg="gray/20" :style="{ opacity }">
    <img v-if="src" w="full" h="auto" :src="src" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: { type: String },
  opacity: { type: Number }
})
</script>
