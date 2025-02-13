<template>
  <div
    :data-value="name"
    w="full"
    h="full"
    class="slots-layer"
    rounded="sm"
    bg="gray/20"
    transition="all duration-300 ease-in"
  />
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true }
})
</script>
