<template>
  <ClientOnly>
    <Suspense>
      <div w="full" h="screen" flex>
        <div
          id="layoutRoot"
          w="full"
          h="screen"
          bg="dark:[rgb(var(--wb-vc-gray-950))]"
          class="scrollable-main"
        >
          <WBHeader>
            <template #home-top>
              <slot name="home-top" />
            </template>
            <template #header-top>
              <slot name="header-top" />
            </template>
            <template #header-operation-before>
              <slot name="header-operation-before" />
            </template>
            <template #header-operation-inside>
              <slot name="header-operation-inside" />
            </template>
            <template #header-operation-after>
              <slot name="header-operation-after" />
            </template>
          </WBHeader>
          <div
            w="full"
            min-h="[calc(100vh-var(--wb-height-layout-header)-1px)]"
            class="content"
          >
            <NotFound v-if="pageData.isNotFound" />
            <template v-else-if="frontmatter.layout === 'home'">
              <slot name="home-content">
                <WBHome />
              </slot>
            </template>
            <div v-else max-w="lg:400" h="full" m="x-auto" flex>
              <WBSidebar>
                <template #sidebar-top>
                  <slot name="sidebar-top" />
                </template>
                <template #sidebar-bottom>
                  <slot name="sidebar-bottom" />
                </template>
              </WBSidebar>
              <WBDocument>
                <template #document-header="payload">
                  <slot name="document-header" v-bind="payload" />
                </template>
                <template #document-content="payload">
                  <slot name="document-content" v-bind="payload" />
                </template>
                <template #document-bottom="payload">
                  <slot name="document-bottom" v-bind="payload" />
                </template>
                <template #document-aside-menu="payload">
                  <slot name="document-aside-menu" v-bind="payload" />
                </template>
                <template #document-aside-bottom>
                  <slot name="document-aside-bottom" />
                </template>
              </WBDocument>
            </div>
          </div>
          <slot name="layout-bottom" />
        </div>
        <slot name="layout-aside" />
      </div>
    </Suspense>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue'
import WBDocument from './components/WBDocument.vue'
import WBHeader from './components/WBHeader.vue'
import WBHome from './components/WBHome.vue'
import WBSidebar from './components/WBSidebar.vue'

defineOptions({ name: 'WBLayout' })

const { page: pageData, frontmatter } = useData()
</script>
