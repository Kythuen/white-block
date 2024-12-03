<template>
  <div
    relative
    m="x-auto"
    flex="~ col"
    items="center"
    :style="{
      '--wb-vc-primary': '96 42 154',
      '--wb-color-primary': '#602a9a'
    }"
  >
    <div
      relative
      w="full"
      max-w="lg:350 2xl:384"
      min-h="md:240 lg:290"
      aspect-ratio="1"
      m="y-30"
      flex="~ col"
      items="center"
    >
      <!-- bg -->
      <div
        absolute
        w="full"
        aspect-ratio="1 2xl:6/5"
        overflow="hidden"
        class="hidden !lg:block"
      >
        <div
          absolute
          max-w="384"
          w="full"
          aspect-ratio="1"
          m="x-auto"
          flex
          items="center"
          justify="center"
        >
          <div w="full" h="full" flex items="center" justify="center">
            <div
              w="65% dark:60%"
              aspect-ratio="1"
              rounded="full"
              bg="[rgb(var(--wb-vc-primary)/40%)] dark:$wb-color-primary"
            />
            <div absolute w="full" h="full" backdrop="blur-[5rem]" />
            <div absolute w="full" h="full" backdrop="blur-[5rem]" />
            <div absolute w="full" h="full" backdrop="blur-[5rem]" />
          </div>
          <div
            absolute
            w="40%"
            aspect-ratio="1"
            rounded="full"
            ring="px white/4"
          />
          <div
            absolute
            w="60%"
            aspect-ratio="1"
            rounded="full"
            ring="px white/6"
          />
          <div
            absolute
            w="90%"
            aspect-ratio="1"
            rounded="full"
            ring="px white/8"
          />
        </div>
      </div>
      <!-- preview -->
      <div
        absolute
        bottom="0"
        w="90% 2xl:full"
        aspect-ratio="[16/9]"
        p="2 2xl:3.5"
        rounded="4"
        overflow="hidden"
        bg="black/30 gradient-to-r no-repeat"
        from="black"
        via="transparent"
        to="black"
        class="hidden !md:block"
        :style="{
          backgroundSize: '100% 100%',
          boxShadow: isDark ? '0 0 10rem 1rem var(--wb-color-primary)' : 'none'
        }"
      >
        <div relative h="full" rounded="3" ring="1 white/10" overflow="hidden">
          <img w="full" src="../assets/preview.png" />
          <div
            absolute
            bottom="0"
            w="full"
            h="30%"
            bg="gradient-to-b no-repeat"
            from="transparent"
            to="black"
            overflow="hidden"
            style="background-size: 100% 100%"
          ></div>
        </div>
      </div>
      <!-- frontmatter -->
      <div
        absolute
        top="0"
        w="full"
        m="t-15% !md:t-10%"
        flex="~ col"
        items="center"
        gap="8 lg:12"
      >
        <div v-if="false && inFrontmatter(frontmatter, 'logo')">
          <img h="30" :src="withBase(frontmatter.logo)" alt="@ephemeras/fs" />
        </div>
        <h1
          v-if="inFrontmatter(frontmatter, 'slogan')"
          max-w="88% md:72%"
          text="8 sm:12 lg:17 xl:20 $wb-color-text-main center"
          font="black tracking-tight !leading-[1.25]"
          style="
            background: linear-gradient(
              to bottom,
              var(--wb-color-text-main),
              var(--wb-color-text-main),
              var(--wb-color-text-main),
              var(--wb-color-primary)
            );
            background-clip: text;
            color: transparent;
          "
        >
          {{ frontmatter.slogan }}
        </h1>
        <p
          v-if="inFrontmatter(frontmatter, 'description')"
          max-w="85% !md:54%"
          text="4 sm:4.5 lg:6 xl:7  $wb-color-text-main center"
          font="light tracking-tight !leading-[1.5]"
        >
          {{ frontmatter.description }}
        </p>
        <div
          v-if="inFrontmatter(frontmatter, 'link')"
          p="2"
          ring="px white/10"
          rounded="2"
          text="md"
        >
          <wb-button
            tag="a"
            size="lg"
            theme="contrast"
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
        </div>
      </div>
      <!-- content -->
      <slot name="page-content">
        <div max-w="xl:264" m="x-auto" class="vp-doc">
          <Content />
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { inFrontmatter } from '../../utils'

const { lang, frontmatter, isDark } = useData()
</script>
