<template>
  <div
    w="full"
    p="y-10"
    rounded="md"
    ring="px $wb-color-border-soft"
    flex="~ col"
    items="center"
    gap="8"
  >
    <div flex="~ col" gap="4">
      <div
        v-for="item in group"
        :key="name + item"
        w="50"
        h="6"
        flex
        items="center"
        justify="start"
        gap="2"
      >
        <wb-popup
          trigger="hover"
          arrow
          :content="`--${name}-${item}`"
          :z-index="100"
        >
          <div
            w="3"
            h="3"
            rounded="full"
            :style="{
              backgroundColor: variable
                ? `rgb(var(--${name}-${item}))`
                : `var(--${name}-${item})`
            }"
          ></div>
        </wb-popup>
        <div
          w="50"
          border="0 b-px solid"
          :style="{
            borderColor: variable
              ? `rgb(var(--${name}-${item}))`
              : `var(--${name}-${item})`
          }"
        />
      </div>
    </div>
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
