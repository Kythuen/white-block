<template>
  <ClientOnly>
    <Suspense>
      <div w="full" h="screen" flex>
        <div
          id="layoutRoot"
          w="full"
          h="screen"
          bg="$wb-color-background"
          overflow="x-hidden y-auto"
        >
          <WBHeader v-if="frontmatterField(frontmatter, 'header')">
            <template #header-nav>
              <slot name="header-nav" />
            </template>
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
            <template #header-bottom>
              <slot name="header-bottom" />
            </template>
          </WBHeader>
          <div
            w="full"
            min-h="[calc(100vh-var(--vp-wb-header-height)-1px)]"
            class="content"
          >
            <NotFound v-if="pageData.isNotFound" />
            <template v-else-if="frontmatter.layout === 'home'">
              <slot name="home-content">
                <WBHome />
              </slot>
            </template>
            <template v-else-if="frontmatter.layout === 'empty'">
              <Content />
            </template>
            <div v-else max-w="lg:360" h="full" m="x-auto" flex>
              <WBSidebar v-if="frontmatterField(frontmatter, 'sidebar')">
                <template #sidebar-top>
                  <slot name="sidebar-top" />
                </template>
                <template #sidebar-menu>
                  <slot name="sidebar-menu" />
                </template>
                <template #sidebar-bottom>
                  <slot name="sidebar-bottom" />
                </template>
              </WBSidebar>
              <WBDocument>
                <template #doc-header="payload">
                  <slot name="doc-header" v-bind="payload" />
                </template>
                <template #doc-header-top>
                  <slot name="doc-header-top" />
                </template>
                <template #doc-header-bottom>
                  <slot name="doc-header-bottom" />
                </template>
                <template #doc-content="payload">
                  <slot name="doc-content" v-bind="payload" />
                </template>
                <template #doc-footer="payload">
                  <slot name="doc-footer" v-bind="payload" />
                </template>
                <template #doc-footer-top>
                  <slot name="doc-footer-top" />
                </template>
                <template #doc-footer-bottom>
                  <slot name="doc-footer-bottom" />
                </template>
                <template #doc-aside="payload">
                  <slot name="doc-aside" v-bind="payload" />
                </template>
                <template #doc-aside-top>
                  <slot name="doc-aside-top" />
                </template>
                <template #doc-aside-menu="payload">
                  <slot name="doc-aside-menu" v-bind="payload" />
                </template>
                <template #doc-aside-bottom>
                  <slot name="doc-aside-bottom" />
                </template>
              </WBDocument>
            </div>
          </div>
          <slot name="footer">
            <WBFooter v-if="frontmatterField(frontmatter, 'footer')">
              <template #footer-top>
                <slot name="footer-top" />
              </template>
              <template #footer-bottom>
                <slot name="footer-bottom" />
              </template>
            </WBFooter>
          </slot>
        </div>
        <slot name="aside" />
      </div>
    </Suspense>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { frontmatterField } from '../utils'
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue'
import WBDocument from './components/WBDocument.vue'
import WBHeader from './components/WBHeader.vue'
import WBHome from './components/WBHome.vue'
import WBSidebar from './components/WBSidebar.vue'
import WBFooter from './components/WBFooter.vue'

defineOptions({ name: 'WBLayout' })

const { page: pageData, frontmatter } = useData()
</script>
