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
        <!-- <wb-popup :z-index="100">
          <div
            color="$wb-color-text-secondly hover:$wb-color-text-main"
            select="none"
          >
            {{ group.text }}
          </div>
          <template #content>
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
          </template>
        </wb-popup> -->
      </div>
      <!-- <div
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
      </div> -->
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
