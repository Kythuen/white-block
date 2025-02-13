<template>
  <div
    :data-value="name"
    w="full"
    h="full"
    bg="hover:gray/15"
    flex="~ none"
    items="center"
    justify="center"
    cursor="pointer"
    transition="all duration-300 ease-in"
    v-bind="$attrs"
    class="slots-layer"
  >
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true }
})
</script>
