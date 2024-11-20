<template>
  <Layout>
    <template #layout-aside>
      <ThemeEditor
        v-if="themeEditorVisible"
        @close="setThemeEditorVisible(false)"
      />
    </template>
    <template #home-top>
      <div
        v-if="homeTopVisible"
        w="full"
        h="17.5"
        color="$wb-color-text-5"
        bg="$wb-color-background"
        round="1"
        flex
        items="center"
        justify="center"
        @click="setHomeTopVisible(false)"
      >
        #home-top
      </div>
    </template>
    <template #home-content>
      <WBHome />
    </template>
    <template #header-top>
      <div
        v-if="headerTopVisible"
        w="full"
        h="17.5"
        color="$wb-color-text-5"
        bg="$wb-color-background"
        round="1"
        flex
        items="center"
        justify="center"
        @click="setHeaderTopVisible(false)"
      >
        #header-top
      </div>
    </template>
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
      <div m="b-4">
        <wb-select
          :options="[{ label: '0.0.1', value: '0.0.1' }]"
          placeholder="0.0.1"
        />
      </div>
    </template>
    <template #sidebar-bottom>
      <div
        w="full"
        h="40"
        m="t-4"
        color="$wb-color-text-5"
        bg="$wb-color-background"
        round="1"
        flex
        items="center"
        justify="center"
      >
        #sidebar-bottom
      </div>
    </template>
    <template #document-header="{ focus, tab, setTab }">
      <DocumentHeader :focus="focus" :tab="tab" :setTab="setTab" />
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
      <div
        w="full"
        h="60"
        color="$wb-color-text-5"
        bg="$wb-color-background"
        round="1"
        flex
        items="center"
        justify="center"
      >
        Document Bottom
      </div>
    </template>
    <template #document-aside-menu="{ focus, tab }">
      <WBDocumentAside :focus="focus" :tab="tab" />
    </template>
    <template #document-aside-bottom>
      <div
        w="full"
        h="60"
        m="t-4"
        color="$wb-color-text-5"
        bg="$wb-color-background"
        round="1"
        flex
        items="center"
        justify="center"
      >
        #document-aside-bottom
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DocumentHeader from './components/DocumentHeader.vue'
import DocumentContent from './components/DocumentContent.vue'
import DocumentMobileDock from './components/DocumentMobileDock.vue'
import ThemeEditor from './components/theme-editor/Index.vue'
import { Layout, WBDocumentAside, WBHome } from '@white-block/vitepress'
import { useState } from 'white-block'
import { useRouter, useData } from 'vitepress'

const { site } = useData()
const router = useRouter()

const TAB_OPTIONS = [
  { label: 'DEMO', value: 'content' },
  { label: 'API', value: 'api' }
]
const [currentTab, setCurrentTab] = useState<string>('content')

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
