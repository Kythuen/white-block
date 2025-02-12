<template>
  <div w="full" h="full">
    <div id="DocumentHeaderIndicator" w="full" h="0" />
    <slot
      v-if="frontmatterField(frontmatter, 'doc-header')"
      name="doc-header"
      :focus="isFocusMode"
      :tab="currentTab"
      :set-tab="setCurrentTab"
    >
      <WBDocumentHeader :focus="isFocusMode">
        <template #doc-header-top>
          <slot name="doc-header-top" />
        </template>
        <template #doc-header-bottom>
          <slot name="doc-header-bottom" />
        </template>
      </WBDocumentHeader>
    </slot>
    <div
      w="full"
      m="x-auto"
      p="3 b-20 md:8 md-x-10"
      flex
      gap="8"
      class="vp-doc"
    >
      <!-- TODO: take a check -->
      <div
        w="full"
        max-w="xl:220"
        :m="frontmatterField(frontmatter, 'sidebar') ? '' : 'x-auto'"
      >
        <div class="vp-doc-content">
          <slot name="doc-content" :tab="currentTab">
            <Content />
          </slot>
        </div>
        <slot
          name="doc-footer"
          :focus="isFocusMode"
          :tab="currentTab"
          :set-tab="setCurrentTab"
        />
      </div>
      <slot name="doc-aside">
        <WBDocumentAside
          v-if="frontmatterField(frontmatter, 'doc-aside')"
          :focus="isFocusMode"
          :tab="currentTab"
        >
          <template #document-aside-top>
            <slot name="doc-aside-top" />
          </template>
          <template #document-aside-bottom>
            <slot name="doc-aside-bottom" />
          </template>
        </WBDocumentAside>
      </slot>
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
