<template>
  <ClientOnly>
    <Suspense>
      <div
        id="layoutRoot"
        w="full"
        h="screen"
        bg="dark:[rgb(var(--wb-vc-gray-950))]"
        class="scrollable-main"
      >
        <WBHeader>
          <template #header-operation-before>
            <slot name="header-operation-before">
              <wb-popup
                trigger="hover"
                placement="bottom"
                content="Theme"
                :z-index="100"
              >
                <wb-button key="theme" type="text" theme="primary">
                  <div w="5" h="5" class="i-heroicons-swatch-20-solid" />
                </wb-button>
              </wb-popup>
            </slot>
          </template>
          <template #header-operation-inside>
            <slot name="header-operation-inside">
              <wb-popup
                trigger="hover"
                placement="bottom"
                content="Language"
                :z-index="100"
              >
                <wb-button key="lang" type="text" theme="contrast">
                  <div w="5" h="5" class="i-tdesign-translate" />
                </wb-button>
              </wb-popup>
            </slot>
          </template>
          <template #header-operation-after>
            <slot name="header-operation-after" />
          </template>
        </WBHeader>
        <div
          w="full"
          min-h="[calc(100vh-var(--wb-height-header))]"
          class="content"
        >
          <NotFound v-if="pageData.isNotFound" />
          <!-- <EPHome v-else-if="frontmatter.page === 'Home'" />
          <div v-else max-w="lg:400" h="full" m="x-auto" flex>
            <EPSidebar />
            <EPDocument />
          </div> -->
        </div>
      </div>
    </Suspense>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue'
import { ref } from 'vue'
import WBHeader from './components/WBHeader.vue'
import EPHome from './EPHome.vue'
import EPSidebar from './EPSidebar.vue'
import EPDocument from './EPDocument.vue'

defineOptions({ name: 'WBLayout' })

const { page: pageData, frontmatter, site } = useData()

const themeEditorVisible = ref(false)
function toggleThemeEditor(data: boolean) {
  themeEditorVisible.value = data
}
</script>
