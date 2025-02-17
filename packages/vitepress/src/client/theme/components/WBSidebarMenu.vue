<template>
  <div
    text="3.5"
    flex="~ col"
    gap="5"
    @click="clickDelegate($event, 'menu-item', handleMenuClick)"
  >
    <div
      v-for="group in resolveSidebar"
      :key="group.text"
      p="b-4 last:b-0"
      border="0 b-px last:b-0 solid $wb-color-border"
    >
      <div v-if="group.items">
        <div
          text="4"
          p="y-1"
          color="$wb-color-text-active"
          font="bold"
          select="none"
        >
          {{ group.text }}
        </div>
        <div
          v-for="item in group.items"
          :key="item.text"
          :data-value="item.link"
          class="group menu-item"
          p="y-1"
          flex="~ row"
          items="center"
          gap="1.5 lg:2"
          color="$wb-color-text hover:$wb-color-text-main"
          cursor="pointer"
          transition="color ease-in duration-200"
          select="none"
          :style="getStyles(item.link)"
        >
          <div>{{ item.text }}</div>
          <div v-if="EXTERNAL_URL_RE.test(item.link)">
            <div w="4" h="4" class="i-heroicons-arrow-up-right-20-solid" />
          </div>
        </div>
      </div>
      <div
        v-else
        :key="group.text"
        :data-value="group.link"
        class="group menu-item"
        flex
        items="center"
        color="$wb-color-text hover:$wb-color-text-main"
        cursor="pointer"
        transition="color ease-in duration-200"
        select="none"
        :style="getStyles(group.link)"
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
import { clickDelegate } from 'white-block'
import { computed } from 'vue'

const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i
const emits = defineEmits(['change'])

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
  const match = route.path === withBase(link) + '/'
  if (match) {
    return {
      '--wb-color-text': 'var(--wb-color-primary)',
      '--wb-color-text-main': 'var(--wb-color-primary)'
    }
  }
  return {}
}

function handleMenuClick(dataset: Record<string, string>) {
  const { value } = dataset
  router.go(withBase(value))
  emits('change', withBase(value))
}
</script>
