<template>
  <div flex items="start" gap="4">
    <div w="20" h="9" text="sm" flex items="center">{{ title }}</div>
    <div w="full" flex items="center" gap="2">
      <slot>
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
            ></div>
          </wb-popup>
        </template>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
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
