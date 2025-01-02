<template>
  <div
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
        ref="canvasContainer"
        absolute
        w="full"
        aspect-ratio="1 2xl:1"
        overflow="hidden"
        class="hidden !lg:block"
        :style="{
          display: active ? 'none' : 'block',
          opacity: `${1 - scrollProgress}`
        }"
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
              backdrop="~ blur-lg"
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
            z="3"
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
        <StarsRing :style="{ transform: `scale(${1 + scrollProgress})` }" />
      </div>
      <!-- preview -->
      <div w="250" m="t-150" style="perspective: 1000px">
        <Card
          :style="{
            boxShadow:
              isDark && active
                ? '0 0 1rem 1rem rgb(var(--wb-vc-primary)/10%)'
                : 'none'
          }"
        >
          <div h="full" rounded="3" ring="1 white/10" overflow="hidden">
            <img w="full" src="../assets/preview.png" />
            <div
              w="full"
              h="30%"
              bg="gradient-to-b no-repeat"
              from="transparent"
              to="black"
              overflow="hidden"
              :style="{
                backgroundSize: '100% 100%',
                boxShadow:
                  isDark && active
                    ? '0 0 5rem 1rem var(--wb-color-primary)'
                    : 'none'
              }"
            />
          </div>
        </Card>
      </div>
      <!-- frontmatter -->
      <div
        absolute
        top="0"
        w="full"
        m="t-15% !md:t-4%"
        flex="~ col"
        items="center"
        gap="8 lg:16"
      >
        <div v-if="false && inFrontmatter(frontmatter, 'logo')">
          <img h="30" :src="withBase(frontmatter.logo)" alt="@ephemeras/fs" />
        </div>
        <h1
          v-if="inFrontmatter(frontmatter, 'slogan')"
          max-w="88% md:70%"
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
        <a
          v-if="inFrontmatter(frontmatter, 'link')"
          :href="
            withBase(
              lang === 'zh' ? `/zh${frontmatter.link}` : frontmatter.link
            )
          "
        >
          <button
            relative
            z="1"
            p="3 x-5"
            rounded="2"
            style="
              background-image: linear-gradient(
                -45deg,
                #ffcb47,
                #e34ba9,
                #369eff,
                #95f3d9
              );
              background-size: 400% 400%;
              animation: 5s bgp-animation 5s ease infinite;
            "
            flex
            items="center"
            gap="2"
          >
            <div
              absolute
              w="full"
              h="full"
              top="0"
              left="0"
              op="50"
              z="-1"
              style="
                background-image: linear-gradient(
                  -45deg,
                  #ffcb47,
                  #e34ba9,
                  #369eff,
                  #95f3d9
                );
                background-size: 400% 400%;
                animation: 5s bgp-animation 5s ease infinite;
                filter: blur(1.5em);
              "
            ></div>
            <div
              absolute
              top="2px"
              left="2px"
              w="[calc(100%-4px)]"
              h="[calc(100%-4px)]"
              bg="black"
              rounded="1.5"
            ></div>
            <div relative w="full" h="full" text="4">Get Started</div>

            <i w="5" h="5" class="i-heroicons-arrow-right-20-solid" />
          </button>
        </a>
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
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useData, withBase } from 'vitepress'
import { onMounted, ref } from 'vue'
import { inFrontmatter } from '../../utils'
import StarsRing from './StarsRing.vue'
import Card from './Card.vue'

const { lang, frontmatter, isDark } = useData()

gsap.registerPlugin(ScrollTrigger)
const active = ref(false)
const scrollProgress = ref(0)

onMounted(() => {
  const elements: any = gsap.utils.toArray('.preview-box')
  gsap.from(elements[0], {
    scrollTrigger: {
      trigger: elements[0],
      scroller: '#layoutRoot',
      // markers: true,
      scrub: true,
      start: 'top 85%',
      end: 'top 50%',
      onUpdate: ({ progress }) => {
        scrollProgress.value = progress
        active.value = progress > 0.9
        console.log(progress)
      }
    },
    rotateX: 50
  })
})
</script>

<style>
@keyframes bgp-animation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
