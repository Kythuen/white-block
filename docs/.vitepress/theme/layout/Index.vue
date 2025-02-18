<template>
  <Layout>
    <template #aside>
      <ThemeEditor
        v-if="themeEditorVisible"
        @close="setThemeEditorVisible(false)"
      />
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
        v-if="!router.route.path.includes('/white-block/packages')"
        name="lang"
        icon="i-tdesign-translate"
        tip="Language"
        @click="changeLanguage"
      />
    </template>
    <template #sidebar-top>
      <div
        v-if="
          matchItems(router.route.path, [
            '/white-block/components',
            '/white-block/guide'
          ])
        "
        m="b-4"
      >
        <wb-select
          :options="[{ label: CURRENT_VERSION, value: CURRENT_VERSION }]"
          :placeholder="CURRENT_VERSION"
          readonly
          @change="changeDocsVersion"
        />
      </div>
    </template>
    <template #doc-header="{ focus }">
      <DocumentHeader :focus="focus">
        <template #doc-header-top>
          <div v-if="frontmatter.component" m="b-4" class="hidden !md:block">
            <div class="!md:hidden">
              <img
                :src="`https://img.shields.io/badge/coverages-${coverageData.statements?.value}%25-${coverageData.statements?.color}`"
              />
            </div>
            <div gap="2" op="dark:85" class="hidden !md:flex">
              <img
                v-for="item in coverageData"
                :key="item.type"
                :src="`https://img.shields.io/badge/coverages:%20${item.type}-${item.value}%25-${item.color}`"
              />
            </div>
          </div>
        </template>
        <template #doc-header-bottom>
          <div
            v-if="frontmatter.component"
            class="hidden !md:block"
            absolute
            bottom="-6"
            w="42"
            h="12"
          >
            <wb-radio-group
              v-model="currentTab"
              :options="TAB_OPTIONS"
              type="tab"
              theme="white"
              size="lg"
              ring="1 inset $wb-color-border"
            />
          </div>
          <div
            v-if="frontmatter.component"
            absolute
            right="8"
            bottom="8"
            class="vp-raw hidden !md:block"
          >
            <wb-button-group w="72" theme="emphasize">
              <wb-button
                v-for="item in ISSUE_BUTTONS"
                :key="item.value"
                :href="`https://github.com/Kythuen/white-block/issues/${item.href}`"
                type="plain"
                theme="default"
                tag="a"
                target="_blank"
              >
                <template #prefix> <i :class="item.icon" /></template>
                {{ issueData.open }} {{ item.value }}
              </wb-button>
            </wb-button-group>
          </div>
        </template>
      </DocumentHeader>
    </template>
    <template #doc-content>
      <DocumentContent :tab="currentTab" />
    </template>
    <template #doc-footer="{ focus }">
      <DocumentMobileDock :focus="focus">
        <div w="40">
          <wb-radio-group
            v-model="currentTab"
            :options="TAB_OPTIONS"
            type="tab"
            theme="white"
            size="lg"
            ring="1 inset $wb-color-border"
          />
        </div>
      </DocumentMobileDock>
    </template>
    <template #doc-aside="{ focus }">
      <WBDocumentAside
        v-if="frontmatterField(frontmatter, 'doc-aside')"
        :focus="focus"
        :tab="currentTab"
      />
    </template>
    <template #footer>
      <div max-w="lg:360" m="x-auto">
        <DocumentFooter />
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DocumentHeader from './docs/DocumentHeader.vue'
import DocumentContent from './docs/DocumentContent.vue'
import DocumentFooter from './docs/DocumentFooter.vue'
import DocumentMobileDock from './docs/DocumentMobileDock.vue'
import ThemeEditor from './theme-editor/Index.vue'
import axios from 'axios'
import { ref, watch } from 'vue'
import { Layout, WBDocumentAside } from '@white-block/vitepress'
import { frontmatterField } from '@white-block/vitepress/utils'
import { useState, matchItems } from 'white-block'
import { useRoute, useRouter, useData } from 'vitepress'

const CURRENT_VERSION = __VERSION__

const { page, site, frontmatter } = useData()

const currentTab = ref('content')
const TAB_OPTIONS = [
  { label: 'DEMO', value: 'content' },
  { label: 'API', value: 'api' }
]

const componentName = frontmatter.value.component
const ISSUE_BUTTONS = [
  { label: 'Add', value: 'add', icon: 'i-tdesign-add', href: 'new/choose' },
  {
    label: 'Open',
    value: 'open',
    icon: 'i-tdesign-error-circle',
    href: `?q=is:issue+is:open+${componentName}`
  },
  {
    label: 'Closed',
    value: 'closed',
    icon: 'i-tdesign-check',
    href: `?q=is:issue+is:closed+${componentName}`
  }
]
const issueData = ref({ open: 0, closed: 0 })
const URL = 'https://api.github.com/search/issues'
async function getIssueData(type: 'open' | 'closed') {
  if (process.env.NODE_ENV !== 'production') return
  const q = `is:issue+is:${type}+${componentName}+repo:Kythuen/white-block`
  const { data } = await axios.get(URL, { params: { q } })
  if (data) {
    issueData.value[type] = data.items.length
  }
}

const coverageData: any = ref({})
const colorMap: any = { 0: 'red', 70: 'yellow', 90: 'green' }
async function getCoverageData() {
  const { coverage } = page.value.params || {}
  const result: any = {}
  for (const item in coverage) {
    const data = coverage[item]
    const value = parseFloat(data)
    const range =
      Object.keys(colorMap).find(key => value <= parseFloat(key)) || 90
    result[item] = {
      type: item,
      value,
      color: colorMap[range]
    }
  }
  coverageData.value = result
}

const currentRoute = useRoute()
watch(
  () => currentRoute.path,
  () => {
    if (componentName && import.meta.env.DEV) {
      getIssueData('open')
      getIssueData('closed')
      getCoverageData()
    }
  },
  { immediate: true }
)

const [themeEditorVisible, setThemeEditorVisible] = useState<boolean>(false)

const router = useRouter()
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

function changeDocsVersion(version) {
  console.log(version)
}
</script>
