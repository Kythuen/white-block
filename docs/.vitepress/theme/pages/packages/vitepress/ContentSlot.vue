<template>
  <div m="y-3" p="4" bg="$wb-color-card">
    <div w="full" m="b-4" flex="~ col" gap="3">
      <div>
        <div m="b-1">Static</div>
        <div flex="~" gap="2">
          <div w="50" flex items="center" gap="2">
            <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
              doc-header
            </div>
            <wb-toggle v-model="showDocHeader" size="sm"></wb-toggle>
          </div>
          <div w="50" flex items="center" gap="2">
            <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
              doc-content
            </div>
            <wb-toggle :value="true" size="sm" readonly></wb-toggle>
          </div>
          <div w="50" flex items="center" gap="2">
            <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
              doc-footer
            </div>
            <wb-toggle v-model="showDocFooter" size="sm"></wb-toggle>
          </div>
        </div>
      </div>
      <div>
        <div m="b-1">Dynamic</div>
        <div flex="~" gap="2">
          <div w="50" flex items="center" gap="2">
            <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
              doc-header-top
            </div>
            <wb-toggle v-model="showDocHeaderTop" size="sm"></wb-toggle>
          </div>
          <div w="50" flex items="center" gap="2">
            <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
              doc-header-bottom
            </div>
            <wb-toggle v-model="showDocHeaderBottom" size="sm"></wb-toggle>
          </div>
        </div>
        <div flex="~" gap="2">
          <div w="50" flex items="center" gap="2">
            <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
              doc-aside-top
            </div>
            <wb-toggle v-model="showDocAsideTop" size="sm"></wb-toggle>
          </div>
          <div w="50" flex items="center" gap="2">
            <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
              doc-aside-bottom
            </div>
            <wb-toggle v-model="showDocAsideBottom" size="sm"></wb-toggle>
          </div>
        </div>
        <div flex="~" gap="2">
          <div w="50" flex items="center" gap="2">
            <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
              doc-footer-top
            </div>
            <wb-toggle v-model="showDocFooterTop" size="sm"></wb-toggle>
          </div>
          <div w="50" flex items="center" gap="2">
            <div style="margin-top: 0; font-weight: 500; font-size: 1rem">
              doc-footer-bottom
            </div>
            <wb-toggle v-model="showDocFooterBottom" size="sm"></wb-toggle>
          </div>
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
          <div>
            <Layer
              v-show="showDocHeaderTop"
              name="doc-header-top"
              h="10"
              bg="gray/15"
              border="0 l-px solid gray/10"
            />
            <Layer
              v-show="showDocHeader"
              name="doc-header"
              h="20"
              border="0 b-px solid gray/10"
            />
            <Layer
              v-show="showDocHeaderBottom"
              name="doc-header-bottom"
              h="10"
              bg="gray/15"
              border="0 l-px solid gray/10"
            />
          </div>
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
          <div>
            <Layer
              v-show="showDocFooterTop"
              name="doc-footer-top"
              h="10"
              bg="gray/15"
              border="0 l-px solid gray/10"
            />
            <Layer
              v-show="showDocFooter"
              name="doc-footer"
              h="20"
              border="0 t-px solid gray/10"
            />
            <Layer
              v-show="showDocFooterBottom"
              name="doc-footer-bottom"
              h="10"
              bg="gray/15"
              border="0 l-px solid gray/10"
            />
          </div>
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

const showDocHeader = ref(true)
const showDocFooter = ref(true)
const showDocAsideTop = ref(false)
const showDocAsideBottom = ref(false)
const showDocHeaderTop = ref(false)
const showDocHeaderBottom = ref(false)
const showDocFooterTop = ref(false)
const showDocFooterBottom = ref(false)
</script>
