<template>
  <Layout>
    <template #layout-aside>
      <ThemeEditor
        v-if="themeEditorVisible"
        @close="setThemeEditorVisible(false)"
      />
    </template>
    <!-- <template #home-top>
      <div
        v-if="homeTopVisible"
        w="full"
        h="17.5"
        color="$wb-color-text-5"
        bg="$wb-color-background"
        rounded="1"
        flex
        items="center"
        justify="center"
        @click="setHomeTopVisible(false)"
      >
        #home-top
      </div>
    </template> -->
    <template #home-content>
      <Home />
    </template>
    <!-- <template #header-top>
      <div
        v-if="headerTopVisible"
        w="full"
        h="17.5"
        color="$wb-color-text-5"
        bg="$wb-color-container"
        rounded="1"
        flex
        items="center"
        justify="center"
        @click="setHeaderTopVisible(false)"
      >
        #header-top / #home-top
      </div>
    </template> -->
    <template #header-operation-before>
      <WBIconButton
        name="theme"
        icon="i-heroicons-swatch-20-solid"
        tip="Theme"
        theme="primary"
        @click="setThemeEditorVisible(true)"
      />
    </template>
    <template #header-operation-inside>
      <WBIconButton
        name="lang"
        icon="i-tdesign-translate"
        tip="Language"
        @click="changeLanguage"
      />
    </template>
    <template #sidebar-top>
      <!-- <div
        v-if="
          matchItems(router.route.path, [
            '/white-block/components',
            '/white-block/guide'
          ])
        "
        m="b-4"
      >
        <wb-select
          :options="[{ label: '0.0.1', value: '0.0.1' }]"
          placeholder="0.0.1"
        />
      </div> -->
      <div
        v-if="router.route.path.includes('vitepress')"
        w="full"
        h="30"
        p="x-3"
        m="b-4"
        color="$wb-color-text-5"
        rounded="1"
        flex="~ col"
        gap="4"
        justify="center"
      >
        <div text="lg white/80" font="bold">@ephemeras/types</div>
        <div flex gap="2">
          <div w="5" h="5" class="i-simple-icons-npm"></div>
          <div w="5" h="5" class="i-simple-icons-github"></div>
          changlogs, npm,github,Q&A
        </div>
        <div>{{ frontmatter.package }}</div>
      </div>
    </template>
    <!-- <template #sidebar-bottom>
      <div
        w="full"
        h="40"
        m="t-4"
        color="$wb-color-text-5"
        bg="$wb-color-container"
        rounded="1"
        flex
        items="center"
        justify="center"
      >
        #sidebar-bottom
      </div>
    </template> -->
    <template #document-header="{ focus, tab, setTab }">
      <DocumentHeader :focus="focus" :tab="tab" :set-tab="setTab" />
    </template>
    <template #document-content="{ tab }">
      <DocumentContent :tab="tab" />
    </template>
    <template #document-bottom="{ focus, tab, setTab }">
      <DocumentMobileDock :focus="focus">
        <div w="40">
          <wb-radio-group
            :default-value="tab"
            ring="1 inset $wb-color-border-base"
            :options="TAB_OPTIONS"
            type="tab"
            tab-type="emphasize"
            shape="round"
            size="lg"
            @change="setTab"
          />
        </div>
      </DocumentMobileDock>
      <!-- <div
        w="full"
        h="60"
        m="t-6"
        color="$wb-color-text-5"
        bg="$wb-color-container"
        rounded="1"
        flex
        items="center"
        justify="center"
      >
        #document-bottom
      </div> -->
    </template>
    <template #document-aside-menu="{ focus, tab }">
      <WBDocumentAside :focus="focus" :tab="tab" />
    </template>
    <!-- <template #document-aside-bottom>
      <div
        w="full"
        h="60"
        m="t-4"
        color="$wb-color-text-5"
        bg="$wb-color-container"
        rounded="1"
        flex
        items="center"
        justify="center"
      >
        #document-aside-bottom
      </div>
    </template> -->
  </Layout>
</template>

<script setup lang="ts">
import DocumentHeader from './components/DocumentHeader.vue'
import DocumentContent from './components/DocumentContent.vue'
import DocumentMobileDock from './components/DocumentMobileDock.vue'
import ThemeEditor from './components/theme-editor/Index.vue'
import { Layout, WBHeader, WBDocumentAside } from '@white-block/vitepress'
import { useState } from 'white-block'
import { useRouter, useData } from 'vitepress'
import Home from './components/home/Home.vue'

const { site, frontmatter } = useData()
const router = useRouter()

const TAB_OPTIONS = [
  { label: 'DEMO', value: 'content' },
  { label: 'API', value: 'api' }
]
// const [currentTab, setCurrentTab] = useState<string>('content')

const [homeTopVisible, setHomeTopVisible] = useState<boolean>(true)
const [headerTopVisible, setHeaderTopVisible] = useState<boolean>(true)

const [themeEditorVisible, setThemeEditorVisible] = useState<boolean>(false)
function changeLanguage() {
  let targetPath = ''
  const { path } = router.route
  if (path.includes('/zh')) {
    targetPath = path.replace('/zh', '')
  } else {
    const { base } = site.value
    const pure = path.replace(base, '')
    targetPath = `${base}zh/${pure}`
  }
  router.go(targetPath)
}
</script>
