<template>
  <div
    sticky
    top="-6 !md:-18"
    z="80"
    bg="$wb-color-background"
    border="0 b-px solid $wb-color-border"
  >
    <div relative w="full" h="38 !md:60" m="x-auto" p="3 md:6 lg:8">
      <slot name="doc-header-top" :focus="focus" />
      <div v-if="focus" h="12 md:18" m="t-21 md:t-24" flex items="center">
        <h1
          text="$wb-color-text-main 6 md:7 lg:7"
          leading="relaxed"
          font="extrabold"
        >
          {{ frontmatter.title }}
        </h1>
      </div>
      <div v-else h="full" flex="~ md:none col" justify="center">
        <div w="full lg:70%" flex="~ col">
          <h1
            text="$wb-color-text-main 6 md:8 lg:10"
            leading="relaxed"
            fw="extrabold"
          >
            {{ frontmatter.title }}
          </h1>
          <p
            color="$wb-color-text"
            text="line-clamp-2"
            m="t-2 md:t-4 lg:t-5"
            v-html="frontmatter.description"
          />
        </div>
      </div>
      <slot name="doc-header-bottom" :focus="focus" />
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
