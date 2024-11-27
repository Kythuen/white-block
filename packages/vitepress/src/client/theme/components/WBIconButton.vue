<template>
  <wb-popup trigger="hover" placement="bottom" :content="tip" :z-index="100">
    <wb-button :data-value="name" type="text" theme="contrast" v-bind="$attrs">
      <div w="5" h="5" :class="icon" />
    </wb-button>
  </wb-popup>
</template>

<script setup lang="ts">
defineProps({
  tip: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>
