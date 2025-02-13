<template>
  <footer relative w="full" p="y-8" border="0 t-px solid $wb-color-border">
    <slot name="footer-top" />
    <div text="sm $wb-color-text-secondly " flex="~ col" items="center" gap="2">
      <div v-if="theme.footer?.message" v-html="theme.footer.message" />
      <div v-if="theme.footer?.copyright" v-html="theme.footer.copyright" />
    </div>
    <slot name="footer-bottom" />
  </footer>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

const { theme } = useData()
</script>
