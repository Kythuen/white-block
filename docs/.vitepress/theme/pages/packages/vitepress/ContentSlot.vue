<template>
  <div p="y-3">
    <div w="full" p="b-4">
      <div flex="~" gap="8">
        <div flex items="center" gap="2">
          <h3
            id="doc-top"
            style="margin-top: 0; font-weight: 500; font-size: 1rem"
          >
            doc-top
          </h3>
          <wb-toggle v-model="showDocTop" size="sm"></wb-toggle>
        </div>
        <div flex items="center" gap="2">
          <h3
            id="doc-bottom"
            style="margin-top: 0; font-weight: 500; font-size: 1rem"
          >
            doc-bottom
          </h3>
          <wb-toggle v-model="showDocBottom" size="sm"></wb-toggle>
        </div>
      </div>
      <div flex="~" gap="8" p="b-4">
        <div flex items="center" gap="2">
          <h3
            id="doc-aside-top"
            style="margin-top: 0; font-weight: 500; font-size: 1rem"
          >
            doc-aside-top
          </h3>
          <wb-toggle v-model="showDocAsideTop" size="sm"></wb-toggle>
        </div>
        <div flex items="center" gap="2">
          <h3
            id="doc-aside-bottom"
            style="margin-top: 0; font-weight: 500; font-size: 1rem"
          >
            doc-aside-bottom
          </h3>
          <wb-toggle v-model="showDocAsideBottom" size="sm"></wb-toggle>
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
      <div w="full" m="x-auto">
        <div w="full" h="full" m="x-auto">
          <Layer
            v-show="showDocTop"
            name="doc-top"
            h="20"
            border="0 b-px solid gray/10"
          />
          <div h="80" flex>
            <Layer name="doc-content" h="80" flex="~ 1" />
            <div w="48" flex="~ col">
              <Layer
                v-show="showDocAsideTop"
                name="doc-aside-top"
                h="10"
                bg="gray/15"
                border="0 l-px solid gray/10"
              />
              <Layer
                name="doc-aside"
                border="0 l-px solid gray/10"
                flex="~ 1"
              />
              <Layer
                v-show="showDocAsideBottom"
                name="doc-aside-bottom"
                h="20"
                bg="gray/15"
                border="0 l-px solid gray/10"
              />
            </div>
          </div>
          <Layer
            v-show="showDocBottom"
            name="doc-bottom"
            h="20"
            border="0 t-px solid gray/10"
          />
        </div>
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

const showDocTop = ref(true)
const showDocBottom = ref(true)
const showDocAsideTop = ref(true)
const showDocAsideBottom = ref(true)
</script>
