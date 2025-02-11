<template>
  <div
    w="full"
    aspect-ratio="16/9"
    ring="px $wb-color-border-dinky"
    rounded="md"
    text="sm"
    overflow-y-auto
    @click="clickDelegate($event, 'slots-layer', handleClick)"
  >
    <div sticky inset="0">
      <Layer
        name="header"
        h="10"
        backdrop="blur-lg"
        border="0 b-px solid gray/10"
      />
    </div>
    <div w="full" h="[calc(100%-2.5rem)]">
      <div w="80%" h="full" m="x-auto" flex>
        <Layer name="sidebar" w="28" border="0 r-px solid gray/10" />
        <div w="full" h="full" m="x-auto" flex items="center" justify="center">
          <div w="full" h="full" m="x-auto">
            <Layer name="doc-top" h="18" border="0 b-px solid gray/10" />
            <div h="[calc(100%-9rem)]" flex>
              <Layer name="doc-content" h="full" flex="~ 1" />
              <Layer name="doc-aside" w="25" border="0 l-px solid gray/10" />
            </div>
            <Layer name="doc-bottom" h="18" border="0 t-px solid gray/10" />
          </div>
        </div>
      </div>
    </div>
    <Layer name="footer" h="20" border="0 t-px solid gray/10" />
  </div>
</template>

<script setup lang="ts">
import Layer from './Layer.vue'
import { clickDelegate } from 'white-block'

function handleClick(dataset: Record<string, string>) {
  const { value } = dataset
  const el: any = document.querySelector(`.anchor-link a[href="#${value}"]`)
  el.click()
}
</script>
