<template>
  <div p="y-3">
    <div w="full" p="y-4">
      <div flex items="center" gap="2">
        <h3
          id="header-top"
          style="margin-top: 0; font-weight: 500; font-size: 1rem"
        >
          header-top
        </h3>
        <wb-toggle v-model="showHeaderTop" size="sm"></wb-toggle>
      </div>
      <div flex items="center" gap="8">
        <div flex items="center" gap="2">
          <h3
            id="header-operation-before"
            style="margin-top: 0; font-weight: 500; font-size: 1rem"
          >
            header-operation-before
          </h3>
          <wb-toggle v-model="showHeaderOperationBefore" size="sm"></wb-toggle>
        </div>
        <div flex items="center" gap="2">
          <h3
            id="header-operation-inside"
            style="margin-top: 0; font-weight: 500; font-size: 1rem"
          >
            header-operation-inside
          </h3>
          <wb-toggle v-model="showHeaderOperationInside" size="sm"></wb-toggle>
        </div>
        <div flex items="center" gap="2">
          <h3
            id="header-operation-after"
            style="margin-top: 0; font-weight: 500; font-size: 1rem"
          >
            header-operation-after
          </h3>
          <wb-toggle v-model="showHeaderOperationAfter" size="sm"></wb-toggle>
        </div>
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
        v-show="showHeaderTop"
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
          <SimpleLayer
            v-show="showHeaderOperationBefore"
            name="header-operation"
            w="8"
            h="6"
          />
          <wb-button size="sm" type="text" theme="contrast">
            <div w="4" h="4" class="i-heroicons-magnifying-glass" />
          </wb-button>
          <SimpleLayer
            v-show="showHeaderOperationInside"
            name="header-operation"
            w="8"
            h="6"
          />
          <wb-button size="sm" type="text" theme="contrast">
            <div w="4" h="4" class="i-heroicons-moon-20-solid" />
          </wb-button>
          <wb-button size="sm" type="text" theme="contrast">
            <div w="4" h="4" class="i-simple-icons-github" />
          </wb-button>
          <SimpleLayer
            v-show="showHeaderOperationAfter"
            name="header-operation"
            w="8"
            h="6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { ref } from 'vue'
import { clickDelegate } from 'white-block'
import SimpleLayer from './SimpleLayer.vue'

const { theme } = useData()

function handleClick(dataset: Record<string, string>) {
  const { value } = dataset
  const el: any = document.querySelector(`.anchor-link a[href="#${value}"]`)
  el.click()
}

const NAV = ['Guide', 'Components', 'Playground', 'Packages']
const showHeaderTop = ref(false)
const showHeaderOperationBefore = ref(false)
const showHeaderOperationInside = ref(false)
const showHeaderOperationAfter = ref(false)
</script>
