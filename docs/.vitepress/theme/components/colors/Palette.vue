<template>
  <div flex gap="2">
    <template v-for="item in group" :key="name + item">
      <wb-popup
        trigger="hover"
        arrow
        :content="`--${name}-${item}`"
        :z-index="100"
      >
        <div
          w="16"
          h="9"
          rounded="1"
          ring="px $wb-color-border-soft"
          :style="{
            backgroundColor: variable
              ? `rgb(var(--${name}-${item}))`
              : `var(--${name}-${item})`
          }"
        />
      </wb-popup>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  group: {
    type: Array as PropType<string[] | number[]>,
    required: true
  },
  variable: {
    type: Boolean,
    default: false
  }
})
</script>
