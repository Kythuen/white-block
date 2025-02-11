<template>
  <div p="y-3">
    <div w="full">
      <div flex="~" gap="8" p="b-4">
        <div flex items="center" gap="2">
          <h3
            id="sidebar-top"
            style="margin-top: 0; font-weight: 500; font-size: 1rem"
          >
            sidebar-top
          </h3>
          <wb-toggle v-model="showSidebarTop" size="sm"></wb-toggle>
        </div>
        <div flex items="center" gap="2">
          <h3
            id="sidebar-bottom"
            style="margin-top: 0; font-weight: 500; font-size: 1rem"
          >
            sidebar-bottom
          </h3>
          <wb-toggle v-model="showSidebarBottom" size="sm"></wb-toggle>
        </div>
      </div>
    </div>
    <div
      w="50"
      ring="px $wb-color-border-dinky"
      rounded="md"
      text="sm"
      @click="clickDelegate($event, 'slots-layer', handleClick)"
    >
      <div w="50" m="x-auto" p="2">
        <Layer v-show="showSidebarTop" name="sidebar-top" h="15" bg="gray/15" />
        <div p="1">
          <div
            v-for="group in MENU"
            :key="group.name"
            p="y-2"
            border="0 b-px last:b-0 solid gray/15"
          >
            <div
              h="8"
              p="x-2"
              bg="hover:gray/10"
              rounded="sm"
              text="white"
              font="bold"
              flex
              items="center"
            >
              {{ group.name }}
            </div>
            <div
              v-for="item in group.items"
              :key="item"
              h="8"
              p="x-2"
              bg="hover:gray/10"
              rounded="sm"
              flex
              items="center"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <Layer
          v-show="showSidebarBottom"
          name="sidebar-bottom"
          h="40"
          bg="gray/15"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { clickDelegate } from 'white-block'
import Layer from './Layer.vue'

function handleClick(dataset: Record<string, string>) {
  const { value } = dataset
  const el: any = document.querySelector(`.anchor-link a[href="#${value}"]`)
  el.click()
}

const MENU = [
  {
    name: 'Guide',
    items: ['Getting Started', 'Slots', 'Customize']
  },
  {
    name: 'Others',
    items: ['Changelogs', 'Q&A']
  }
]
const showSidebarTop = ref(false)
const showSidebarBottom = ref(false)
</script>
