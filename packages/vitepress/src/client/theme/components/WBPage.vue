<template>
  <div max-w="lg:400" h="full" m="x-auto">
    <div relative p="y-16">
      <div relative p="x-5 md:x-4 lg:x-8">
        <div
          v-if="frontmatterField(frontmatter, 'logo')"
          m="x-auto y-20"
          flex
          justify="center"
        >
          <img h="30" :src="withBase(frontmatter.logo)" alt="@ephemeras/fs" />
        </div>
        <h1
          v-if="frontmatterField(frontmatter, 'slogan')"
          max-w="100 md:280"
          m="x-auto"
          text="9 md:6xl $wb-color-text-main center"
          font="black tracking-tight !leading-[1.2]"
        >
          {{ frontmatter.slogan }}
        </h1>
        <div
          v-if="frontmatterField(frontmatter, 'link')"
          m="t-16"
          text="md"
          flex="~ wrap"
          gap="x-6 y-3"
          justify="center"
        >
          <wb-button
            tag="a"
            size="lg"
            :href="
              withBase(
                lang === 'zh' ? `/zh${frontmatter.link}` : frontmatter.link
              )
            "
          >
            Get Started
            <template #suffix>
              <i w="5" h="5" class="i-heroicons-arrow-right-20-solid" />
            </template>
          </wb-button>
          <wb-input
            v-if="frontmatterField(frontmatter, 'shell')"
            w="72"
            size="lg"
            text="$wb-color-foreground"
            readonly
            :value="frontmatter.shell"
          >
            <template #prefix>
              <i
                w="5"
                h="5"
                text="$wb-color-text-secondly"
                class="i-heroicons-command-line"
              />
            </template>
            <template #suffix>
              <button w="5" h="5" flex="~ row" items="center" justify="center">
                <i
                  w="4"
                  h="4"
                  text="$wb-color-text-secondly"
                  class="i-heroicons-clipboard-document"
                  @click="copyToClipboard(frontmatter.shell)"
                />
              </button>
            </template>
          </wb-input>
        </div>

        <slot name="page-content">
          <div max-w="xl:264" m="x-auto t-20" class="vp-doc">
            <Content />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { copyToClipboard, frontmatterField } from '../../utils'

const { lang, frontmatter } = useData()
</script>
