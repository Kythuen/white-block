<template>
  <div max-w="lg:360" h="full" m="x-auto">
    <div relative p="y-32 md:y-48 lg:y-25vh b-16">
      <div absolute inset="0" h="full" class="hidden !lg:block">
        <div
          absolute
          inset="0"
          m="auto"
          w="80"
          h="40"
          bg="$wb-color-primary"
          rounded="full"
          filter="blur-240"
        />
      </div>
      <div relative p="x-5 md:x-4 lg:x-8">
        <h1
          max-w="100 md:180"
          m="x-auto"
          text="11 md:6xl $wb-color-text-main center"
          font="black tracking-tight !leading-[1.2]"
        >
          {{ site.description }}
        </h1>
        <div m="t-12" text="center" flex="~ col" gap="y-2 md:y-4">
          <p>
            Inspired by
            <a
              color="$wb-color-primary"
              font="bold"
              class="hover:underline"
              href="https://tdesign.tencent.com/vue-next/overview"
            >
              TDesign
            </a>
            &
            <a
              color="$wb-color-primary"
              font="bold"
              class="hover:underline"
              href="https://ui.nuxt.com/"
            >
              NuxtUI
            </a>
          </p>
          <p>
            Implement with
            <a
              color="$wb-color-primary"
              font="bold"
              class="hover:underline"
              href="https://vitejs.dev/"
            >
              Vite
            </a>
            &
            <a
              color="$wb-color-primary"
              font="bold"
              class="hover:underline"
              href="https://unocss.dev/"
            >
              Unocss
            </a>
          </p>
          <p>
            With
            <span color="$wb-color-text-main" font="black">
              efficient docs
            </span>
            &
            <span color="$wb-color-text-main" font="black"> better DX </span>
          </p>
        </div>
        <div m="t-16" text="md" flex="~ wrap" gap="x-6 y-3" justify="center">
          <wb-button
            tag="a"
            size="lg"
            :href="withBase(lang === 'zh' ? `/zh/guide/` : '/guide/')"
          >
            Getting started
            <template #suffix>
              <i w="5" h="5" class="i-heroicons-arrow-right-20-solid" />
            </template>
          </wb-button>
          <wb-input
            w="58"
            size="lg"
            text="$wb-color-foreground"
            readonly
            value="pnpm add white-block"
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
                />
              </button>
            </template>
          </wb-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase, useData } from 'vitepress'

const { site, lang } = useData()
</script>
