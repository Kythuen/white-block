<template>
  <div p="y-3">
    <div w="full" p="y-4">
      <div flex items="center" gap="2">
        <h3
          id="home-top"
          style="margin-top: 0; font-weight: 500; font-size: 1rem"
        >
          home-top
        </h3>
        <wb-toggle v-model="showHomeTop" size="sm"></wb-toggle>
      </div>
    </div>
    <div
      w="full"
      ring="px $wb-color-border-dinky"
      rounded="md"
      text="sm"
      @click="clickDelegate($event, 'slots-layer', handleClick)"
    >
      <img
        v-show="showHomeTop"
        w="full"
        :src="withBase('/vitepress/slots/header-top-banner.png')"
        h="10"
      />
      <!-- <Layer  name="header-top" /> -->
      <div w="90%" h="12" m="x-auto" flex>
        <div w="1/6" flex items="center" color="white">
          <img
            w="auto"
            h="5"
            m="r-2"
            :src="withBase(theme.logo)"
            filter=" drop-shadow-sm"
            alt="logo"
          />
          <span font="extrabold">WhiteBlock</span>
        </div>
        <div w="4/6" flex items="center" justify="center" gap="1">
          <wb-button
            v-for="item in NAV"
            :key="item"
            size="sm"
            type="ghost"
            theme="contrast"
          >
            <div text="sm">{{ item }}</div>
          </wb-button>
        </div>
        <div w="1/6" flex items="center" justify="end">
          <wb-button size="sm" type="text" theme="contrast">
            <div w="4" h="4" class="i-heroicons-magnifying-glass" />
          </wb-button>
          <wb-button size="sm" type="text" theme="contrast">
            <div w="4" h="4" class="i-heroicons-moon-20-solid" />
          </wb-button>
          <wb-button size="sm" type="text" theme="contrast">
            <div w="4" h="4" class="i-simple-icons-github" />
          </wb-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { ref } from 'vue'
import { clickDelegate } from 'white-block'

const { theme } = useData()

function handleClick(dataset: Record<string, string>) {
  const { value } = dataset
  const el: any = document.querySelector(`.anchor-link a[href="#${value}"]`)
  el.click()
}

const NAV = ['Guide', 'Components', 'Playground', 'Packages']
const showHomeTop = ref(false)
</script>
