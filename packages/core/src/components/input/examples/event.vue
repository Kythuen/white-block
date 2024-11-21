<template>
  <wb-space vertical>
    <wb-input placeholder="@change" @change="handleChange" />
    <wb-input placeholder="onChange" :on-change="handleChange" />
  </wb-space>
</template>

<script setup lang="ts">
function handleChange(text: string) {
  console.log(text)
}
</script>
