<template>
  <div
    m="y-3"
    p="4"
    ring="px $wb-color-border-dinky"
    rounded="md"
    bg="$wb-color-card"
  >
    <div w="full" p="y-4">
      <div flex items="center" gap="2">
        <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
          header-nav
        </div>
        <wb-toggle v-model="showHeaderNav" size="sm"></wb-toggle>
      </div>
      <div flex items="center" gap="8">
        <div flex items="center" gap="2">
          <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
            header-top
          </div>
          <wb-toggle v-model="showHeaderTop" size="sm"></wb-toggle>
        </div>
        <div flex items="center" gap="2">
          <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
            header-bottom
          </div>
          <wb-toggle v-model="showHeaderBottom" size="sm"></wb-toggle>
        </div>
      </div>
      <div flex items="center" gap="8">
        <div flex items="center" gap="2">
          <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
            header-operation-before
          </div>
          <wb-toggle v-model="showHeaderOperationBefore" size="sm"></wb-toggle>
        </div>
        <div flex items="center" gap="2">
          <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
            header-operation-inside
          </div>
          <wb-toggle v-model="showHeaderOperationInside" size="sm"></wb-toggle>
        </div>
        <div flex items="center" gap="2">
          <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
            header-operation-after
          </div>
          <wb-toggle v-model="showHeaderOperationAfter" size="sm"></wb-toggle>
        </div>
      </div>
    </div>
    <div w="full" ring="px $wb-color-border-dinky" rounded="md" text="sm">
      <img
        v-show="showHeaderTop"
        w="full"
        :src="withBase('/vitepress/slots/header-top-banner.png')"
        h="10"
      />
      <div w="90%" h="12" m="x-auto" flex>
        <div w="1/6" flex="~ grow-1 shrink-0" items="center" color="white">
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
        <div
          v-show="showHeaderNav"
          w="4/6"
          flex
          items="center"
          justify="center"
          gap="1"
        >
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
        <div w="1/6" flex="~ grow-1 shrink-0" items="center" justify="end">
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
      <SimpleLayer
        v-show="showHeaderBottom"
        name="header-bottom"
        w="full"
        h="6"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { ref } from 'vue'
import SimpleLayer from './SimpleLayer.vue'

const { theme } = useData()

const NAV = ['Guide', 'Components', 'Playground', 'Packages']
const showHeaderNav = ref(false)
const showHeaderTop = ref(false)
const showHeaderBottom = ref(false)
const showHeaderOperationBefore = ref(false)
const showHeaderOperationInside = ref(false)
const showHeaderOperationAfter = ref(false)
</script>
