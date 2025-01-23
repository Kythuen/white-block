<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    sticky
    top="-6 !md:-8"
    z="80"
    bg="[rgb(var(--wb-vc-background)/85%)]"
    backdrop="blur"
    border="0 b-px solid $wb-color-border dark:$wb-color-border"
  >
    <div relative w="full" h="38 !md:50" m="x-auto" p="3 md:6 lg:8">
      <div v-if="focus" h="12 md:18" m="t-21 md:t-19" flex items="center">
        <h1 text="6 md:7 lg:7" leading="relaxed" fw="extrabold">
          {{ frontmatter.title }}
        </h1>
      </div>
      <div v-else h="full">
        <div w="full lg:70%" flex="~ col" gap="2 md:4 lg:5">
          <h1 text="6 md:8 lg:10" leading="relaxed" fw="extrabold">
            {{ frontmatter.title }}
          </h1>
          <p
            color="$wb-color-text-4"
            text="line-clamp-2"
            style="margin: 0"
            v-html="frontmatter.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

defineProps({
  focus: { type: Boolean, default: false }
})

const { frontmatter } = useData()
</script>
