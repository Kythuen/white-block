<template>
  <!-- Content -->
  <div v-show="tab === 'content'" class="vp-doc-content">
    <Content />
  </div>
  <!-- API -->
  <div
    v-if="frontmatter?.component"
    v-show="tab === 'api'"
    relative
    class="vp-doc-api"
  >
    <div
      v-for="(item, name) in page.params.api"
      :key="name"
      p="b-4 last:b-0"
      border="0 b-px last:b-0 solid $wb-color-border-base "
      color="$wb-color-text-3"
    >
      <template v-if="item[lang]?.props">
        <h2 :id="`API${name}Props`">
          {{ lang === 'en' ? `${name} Props` : `${name} 属性` }}
          <a class="header-anchor" :href="`#API${name}Props`"></a>
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="api-table" v-html="JSON.parse(item[lang]?.props || '')" />
      </template>
      <template v-if="item[lang]?.events">
        <h2 :id="`API${name}Events`">
          {{ lang === 'en' ? `${name} Events` : `${name} 事件` }}
          <a class="header-anchor" :href="`#API${name}Events`"></a>
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="api-table" v-html="JSON.parse(item[lang]?.events || '')" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

defineProps({
  tab: {
    type: String,
    default: 'content'
  }
})

const { page, frontmatter, lang }: any = useData()
</script>
