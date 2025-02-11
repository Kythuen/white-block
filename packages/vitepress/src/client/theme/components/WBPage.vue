<template>
  <div w="full" flex="~ col" items="center">
    <header
      absolute
      top="10"
      z="100"
      w="192"
      h="16"
      m="x-auto"
      rounded="full"
      bg="gray/10"
      backdrop="blur-lg saturate-180"
    ></header>
    <div relative w="screen" h="screen">
      <div
        absolute
        inset="0"
        w="screen"
        h="full"
        :style="{
          background: 'linear-gradient(to bottom, #000000, #211d2b, #2c3464)'
        }"
        class="stars"
      >
        <KongMing />
        <img
          v-show="scrollProgress < 0.2"
          absolute
          left="0"
          bottom="0"
          w="full"
          h="auto"
          src="../assets/bg-earth.webp"
          style="object-fit: contain; object-position: center bottom"
        />
      </div>
      <div
        relative
        w="300"
        h="screen"
        m="x-auto"
        flex="~ col wrap"
        items-center
        justify-center
      >
        <div text="30 center white" font="black italic" leading=" tight">
          Built for you the Super Individual
        </div>
        <div absolute top="50%" right="10" w="80" h="80" pointer-events-none>
          <spline-viewer
            transform="scale-35"
            url="https://prod.spline.design/UgLhMEneL55Ks1Sg/scene.splinecode"
          ></spline-viewer>
        </div>
      </div>
    </div>
    <div max-w="90% lg:250" m="x-auto">
      <div w="100" m="x-auto">
        <wb-radio-group
          :options="options"
          type="tab"
          tab-type="emphasize"
          theme="success"
        />
      </div>
      <div
        w="full"
        m="t--40"
        h="240"
        style="
          position: relative;
          perspective: 1000px;
          z-index: 10;
          backface-visibility: hidden;
        "
      >
        <Card
          class="preview-box"
          :style="{
            transform: `rotateX(30deg)`,
            boxShadow: active ? `0 0 12vw -4vw #a092ff` : 'none'
          }"
        >
          <div h="full" rounded="3" ring="1 white/10" overflow="hidden">
            <!-- <img w="full" src="../assets/preview.png" /> -->
            <video
              preload="none"
              src="https://hub-apac-1.lobeobjects.space/landing/0.webm"
              style="width: 100%; display: inline-block"
              poster="https://hub-apac-1.lobeobjects.space/landing/0.webp"
              tabindex="-1"
            ></video>
            <div
              w="full"
              h="30%"
              bg="gradient-to-b no-repeat"
              from="transparent"
              to="black"
              overflow="hidden"
              :style="{
                backgroundSize: '100% 100%'
              }"
            />
          </div>
        </Card>
      </div>
    </div>
    <div w="90% lg:300" h="[400vh]" flex="~ col" items="center">
      <div
        w="full"
        h="100"
        class="title-box"
        style="
          pointer-events: none;
          user-select: none;
          rotate: 180deg;
          width: 100%;
          height: 400px;
          margin-block-end: -120px;
          background-image: conic-gradient(
              from 90deg at 80% 50%,
              #000000,
              #a092ff
            ),
            conic-gradient(from 270deg at 20% 50%, #a092ff, #000000);
          background-repeat: no-repeat;
          background-size: 50% 100%;
          mask-image: radial-gradient(50% 50%, black, transparent);
          background-position:
            1% 0px,
            99% 0px;
          opacity: 0.05;
          transform: none;
        "
      >
        <div
          absolute
          top="50%"
          w="full"
          h="50%"
          bg="black"
          overflow-hidden
          style="
            /* filter: url(#noiseFilter); */
            mix-blend-mode: screen;
            mask-image: radial-gradient(
              140px 50% at 50% 100%,
              black,
              transparent
            );
          "
        ></div>
      </div>
      <div class="title" p="y-4" text="12 white" font="[SmileySans-Oblique]">
        点燃自我效能，重拾创造乐趣
      </div>

      <div w="full" m="y-20">
        <div
          ref="CardBox"
          class="card-box"
          w="full"
          grid="~ cols-3 rows-2 gap-4"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <div
            v-for="(item, index) in 6"
            :key="item"
            w="full"
            aspect-ratio="[6/5]"
            rounded="3"
            overflow-hidden
            ring="1 gray/20"
            p="1"
            z-1
            bg="[radial-gradient(circle_600px_at_var(--mouse-x)_var(--mouse-y),_rgba(255,255,255,1)_0%,_transparent_40%)]"
            :style="{
              '--mouse-x': `${mouseX - 400 * (index % 3)}px`,
              '--mouse-y': `${mouseY - 320 * Math.floor(index / 3)}px`
            }"
          >
            <div w-full h-full rounded="inherit" bg="black"></div>
          </div>
        </div>
      </div>

      <div class="text-box" bg="gray/30" p="2" rounded="2"></div>
    </div>
    <!-- <svg aria-hidden="true" style="display: none">
      <filter id="noiseFilter">
        <feTurbulence
          baseFrequency="6.29"
          numOctaves="6"
          stitchTiles="stitch"
          type="fractalNoise"
        ></feTurbulence>
      </filter>
    </svg> -->
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { onMounted, ref } from 'vue'
import KongMing from './KongMing.vue'
import Card from './Card.vue'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)
const active = ref(false)
const scrollProgress = ref(0)

onMounted(() => {
  const stars: any = gsap.utils.toArray('.stars')[0]
  gsap.to(stars, {
    scrollTrigger: {
      trigger: stars,
      scroller: '#layoutRoot',
      // markers: true,
      scrub: true,
      start: 'center center',
      end: '70% 50%'
    },
    scale: 2,
    opacity: 0
  })
  const preview: any = gsap.utils.toArray('.preview-box')[0]
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: preview,
      scroller: '#layoutRoot',
      markers: true,
      scrub: 1,
      start: 'top 95%',
      end: 'top top',
      onUpdate: ({ progress }) => {
        scrollProgress.value = progress
        active.value = progress > 0.9
      }
    }
  })
  tl.to(preview, {
    duration: 1,
    y: 0
  })
  tl.to(preview, {
    duration: 0.5,
    rotateX: 0,
    y: 185
  })
  const titleBox: any = gsap.utils.toArray('.title-box')[0]
  const title: any = gsap.utils.toArray('.title')[0]
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: titleBox,
      scroller: '#layoutRoot',
      // markers: true,
      scrub: true,
      start: 'center center',
      end: '70% 50%'
    }
  })
  tl1.to(titleBox, {
    scale: 2,
    opacity: 0.2,
    z: 0
  })
  tl1.from(title, {
    duration: 2,
    y: 40
  })

  const textBox: any = gsap.utils.toArray('.text-box')[0]
  gsap.to(textBox, {
    duration: 2,
    text: '不论普通用户与专业开发者，LobeChat 旨在成为所有人的 AI 助手实验场。👇✨',
    ease: 'none'
  })
})

const options = [
  { label: '概览', value: '1' },
  { label: '助理', value: '2' },
  { label: '文生图', value: '3' },
  { label: '语音', value: '4' },
  { label: '插件', value: '5' },
  { label: '多模型', value: '6' }
]

const CardBox = ref()
let startX = 0
let startY = 0
const mouseX = ref(-600)
const mouseY = ref(-600)
function handleMouseEnter() {
  const rect = CardBox.value.getBoundingClientRect()
  startX = rect.left
  startY = rect.top
  document.addEventListener('mousemove', handleMouseMove)
}
function handleMouseMove(e: MouseEvent) {
  mouseX.value = Math.round(e.clientX - startX)
  mouseY.value = Math.round(e.clientY - startY)
  // mouseX.value = e.offsetX
  // mouseY.value = e.offsetY
}
function handleMouseLeave() {
  mouseX.value = -600
  mouseY.value = -600
  document.removeEventListener('mousemove', handleMouseMove)
}
</script>
