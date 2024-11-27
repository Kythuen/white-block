<template>
  <div w="full" h="full">
    <div id="DocumentHeaderIndicator" w="full" h="0" />
    <slot
      v-if="frontmatterField(frontmatter, 'document-header')"
      name="document-header"
      :focus="isFocusMode"
      :tab="currentTab"
      :set-tab="setCurrentTab"
    >
      <WBDocumentHeader :focus="isFocusMode" />
    </slot>
    <div
      w="full"
      m="x-auto"
      p="3 b-20 md:8 md-x-10"
      flex
      gap="8"
      class="vp-doc"
    >
      <div
        max-w="xl:264"
        w="full"
        :m="frontmatterField(frontmatter, 'sidebar') ? '' : 'x-auto'"
      >
        <slot name="document-content" :tab="currentTab">
          <div class="vp-doc-content">
            <Content />
          </div>
        </slot>
        <slot
          name="document-bottom"
          :focus="isFocusMode"
          :tab="currentTab"
          :set-tab="setCurrentTab"
        />
      </div>
      <WBDocumentAside
        v-if="frontmatterField(frontmatter, 'document-aside')"
        :focus="isFocusMode"
        :tab="currentTab"
      >
        <template #document-aside-bottom>
          <slot name="document-aside-bottom" />
        </template>
      </WBDocumentAside>
    </div>
  </div>
</template>

<script setup lang="ts">
import WBDocumentAside from './WBDocumentAside.vue'
import WBDocumentHeader from './WBDocumentHeader.vue'
import { useRoute, useData } from 'vitepress'
import { watch } from 'vue'
import { useIntersectionObserver, useState } from 'white-block'
import { frontmatterField } from '../../utils'

const { frontmatter } = useData()

const { visible: isFocusMode } = useIntersectionObserver(
  '#layoutRoot',
  '#DocumentHeaderIndicator'
)

const [currentTab, setCurrentTab] = useState<string>('content')

const currentRoute = useRoute()
watch(
  () => currentRoute.path,
  () => {
    const { hash } = window.location
    const urlTabValue = hash && /#API.+/.test(hash) ? 'api' : 'content'
    setCurrentTab(urlTabValue)
  },
  { immediate: true }
)
</script>
