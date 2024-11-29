<template>
  <div
    relative
    min-h="[calc(100vh-var(--wb-height-layout-header)-1px+10rem)]"
    m="x-auto"
    p="y-10"
    flex="~ col"
    items="center"
    bg="[url(/assets/hero.svg)] no-repeat"
    style="background-size: 100% auto"
  >
    <div p="y-16">
      <div p="x-5 md:x-4 lg:x-8">
        <div
          v-if="inFrontmatter(frontmatter, 'logo')"
          m="x-auto y-20"
          flex
          justify="center"
        >
          <img h="30" :src="withBase(frontmatter.logo)" alt="@ephemeras/fs" />
        </div>
        <h1
          v-if="inFrontmatter(frontmatter, 'slogan')"
          max-w="100 md:280"
          m="x-auto"
          text="9 md:6xl $wb-color-text-main center"
          font="black tracking-tight !leading-[1.2]"
        >
          {{ frontmatter.slogan }}
        </h1>
        <div
          v-if="inFrontmatter(frontmatter, 'link')"
          m="y-16"
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
            v-if="inFrontmatter(frontmatter, 'shell')"
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
          <div max-w="xl:264" m="x-auto" class="vp-doc">
            <Content />
          </div>
        </slot>
      </div>
    </div>
    <div w="380" h="225" p="3.5" rounded="4" bg="black/50" overflow-hidden>
      <div relative h="full" rounded="3" ring="1 gray/10" overflow="hidden">
        <img w="full" op="90" src="../assets/preview.png" />
        <img absolute bottom="0" w="373" op="90" src="../assets/shade.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { copyToClipboard, inFrontmatter } from '../../utils'

const { lang, frontmatter } = useData()
</script>
