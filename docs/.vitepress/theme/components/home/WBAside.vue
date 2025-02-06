<template>
  <div w="8" h="64" rounded="2">
    <div
      v-for="item in ANCHORS"
      :key="item.name"
      w="8"
      h="8"
      bg="hover:gray/10"
      rounded="2"
      flex
      justify="center"
      items="center"
      class="group"
    >
      <div
        w="1"
        h="1"
        rounded="full"
        bg="$wb-color-text-secondly group-hover:$wb-color-text-active"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ANCHORS = [
  { name: 'home', anchor: '/' },
  { name: 'overview', anchor: '/' },
  { name: 'roadmap', anchor: '/' },
  { name: 'faq', anchor: '/' }
]
</script>
