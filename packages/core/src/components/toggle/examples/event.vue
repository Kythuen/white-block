<template>
  <wb-space>
    <wb-toggle @change="handleChange" />
    <wb-toggle :on-change="handleChange" />
  </wb-space>
</template>

<script setup lang="ts">
function handleChange(val: boolean) {
  console.log(val)
}
</script>
