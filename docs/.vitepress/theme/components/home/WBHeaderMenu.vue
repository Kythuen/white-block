<template>
  <div text="sm" flex gap="2">
    <div v-for="group in theme.nav" :key="group.text">
      <div v-if="group.items">
        <wb-select
          :options="transformItems(group.items)"
          :popup-props="{ zIndex: 1000 }"
          @change="toPage"
        >
          <template #trigger>
            <div
              color="$wb-color-text-secondly hover:$wb-color-text-main"
              select="none"
            >
              {{ group.text }}
            </div>
          </template>
        </wb-select>
      </div>
      <wb-button
        v-else
        :type="route.path === withBase(group.link) ? 'base' : 'text'"
        :theme="route.path === withBase(group.link) ? 'primary' : 'contrast'"
        @click="toPage(group.link)"
      >
        <div text="sm">{{ group.text }}</div>
        <div v-if="EXTERNAL_URL_RE.test(group.link)">
          <div w="4" h="4" class="i-heroicons-arrow-up-right-20-solid" />
        </div>
      </wb-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  useData,
  useRoute,
  useRouter,
  withBase,
  type DefaultTheme
} from 'vitepress'

const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

const { theme } = useData()
const router = useRouter()
const route = useRoute()

function transformItems(items: DefaultTheme.NavItemWithLink[]) {
  const result: any = []
  items.forEach(i => {
    result.push({ label: i.text, value: i.link })
  })
  return result
}

function toPage(link: string) {
  router.go(withBase(link))
}
</script>
