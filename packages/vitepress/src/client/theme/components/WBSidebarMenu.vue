<template>
  <div text="sm" flex="~ col" gap="4">
    <div v-for="group in resolveSidebar" :key="group.text">
      <div v-if="group.items">
        <div p="y-1" color="$wb-color-text-main" select="none">
          {{ group.text }}
        </div>
        <div
          v-for="item in group.items"
          :key="item.text"
          class="group"
          p="y-1"
          flex="~ row"
          items="center"
          gap="1.5 lg:2"
          color="$wb-color-text-secondly hover:$wb-color-text-main"
          cursor="pointer"
          transition="color ease-in duration-200"
          select="none"
          :style="getStyles(item.link)"
          @click="toPage(item.link)"
        >
          <div text="sm">{{ item.text }}</div>
          <div v-if="EXTERNAL_URL_RE.test(item.link)">
            <div w="4" h="4" class="i-heroicons-arrow-up-right-20-solid" />
          </div>
        </div>
      </div>
      <div
        v-else
        :key="group.text"
        class="group"
        flex
        items="center"
        color="$wb-color-text-secondly hover:$wb-color-text-main"
        cursor="pointer"
        transition="color ease-in duration-200"
        select="none"
        :style="getStyles(group.link)"
        @click="toPage(group.link)"
      >
        <div text="sm">{{ group.text }}</div>
        <div v-if="EXTERNAL_URL_RE.test(group.link)">
          <div w="4" h="4" class="i-heroicons-arrow-up-right-20-solid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData, useRoute, useRouter, withBase } from 'vitepress'
import { computed } from 'vue'

const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

const { theme } = useData()
const router = useRouter()
const route = useRoute()

const resolveSidebar = computed(() => {
  if (
    Object.prototype.toString.call(theme.value.sidebar) === '[object Object]'
  ) {
    let result: any = []
    Object.keys(theme.value.sidebar).some(item => {
      if (route.path.includes(withBase(item))) {
        result = theme.value.sidebar[item]
        return true
      }
    })
    return result
  }

  return theme.value.sidebar
})
function getStyles(link: string) {
  const match = route.path === withBase(link)
  if (match) {
    return {
      '--wb-color-text-secondly': 'var(--wb-color-primary)',
      '--wb-color-text-main': 'var(--wb-color-primary)'
    }
  }
  return {}
}

function toPage(link: string) {
  router.go(withBase(link))
}
</script>
