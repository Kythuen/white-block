<template>
  <div flex="~ col" gap="8">
    <div v-for="item in page.changelogs" :key="item.date" flex gap="8">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="item.content"></div>
      <div
        :id="item.date"
        w="52"
        h="10"
        text="md right $wb-color-text-secondly"
        font="leading-10"
      >
        <div>{{ item.date }}</div>
        <span p="x-1.5" text="sm">v1.0.0</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

const { page }: any = useData()
</script>
