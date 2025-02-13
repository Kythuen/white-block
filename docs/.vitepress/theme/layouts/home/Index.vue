<template>
  <div
    relative
    w="full"
    bg="#000000"
    color="$wb-color-text-default"
    class="dark"
  >
    <div
      absolute
      w="screen"
      h="screen"
      :style="{
        background: 'linear-gradient(to bottom, #000000, #211d2b, #2c3464)'
      }"
      class="stars"
    >
      <img
        absolute
        left="0"
        bottom="0"
        width="auto"
        h="100% md:60%"
        m="x-auto"
        :src="withBase('/assets/img/home/bg-earth.webp')"
        style="object-fit: cover"
      />
      <KongMing />
    </div>
    <Transition name="down">
      <div
        v-show="showHeader"
        fixed
        top="4 md:6"
        left="50%"
        z="100"
        w="85% xl:280"
        p="t-4 md:t-6"
        m="x-auto"
        transform="translate-x--50%"
      >
        <WBHeader />
      </div>
    </Transition>
    <div relative>
      <div
        relative
        w="full lg:360"
        h="screen"
        m="x-auto"
        flex="~ col"
        items="center"
      >
        <div
          w="85% xl:280"
          h="screen"
          flex="~ col"
          items="center"
          justify-center
          gap="8 xl:12"
        >
          <!-- <div
            p="2 x-3"
            bg="#ffffff09"
            backdrop="blur-lg"
            border="px solid $wb-color-border"
            rounded="full"
            flex
            items="center"
            gap="2"
          >
            <wb-button theme="warning" shape="round">News</wb-button>
            <div text="sm white">
              LobeChat Knowledge Base Launch — From Now On, Every Step Counts
            </div>
            <div text="5 white" i="heroicons-arrow-right-20-solid"></div>
          </div> -->
          <div
            text="6 md:10 center white"
            font="bold"
            flex
            items=" start"
            gap="2"
          >
            <div h="10" font="extrabold leading-tight">WhiteBlock</div>
            <wb-button type="plain" size="sm">0.0.36</wb-button>
          </div>
          <div
            w="full"
            text="7 md:15 xl:24 center white"
            font="black italic"
            leading="[1.1]"
            flex="~ wrap"
          >
            Intuitive Design for Effortless Development
          </div>
          <div w="full" m="t-8 xl:t-12" flex="~ wrap" justify="center" gap="4">
            <wb-button w="full md:60" theme="contrast" size="xl">
              Get Started
            </wb-button>
            <wb-button w="full md:60" color="black" size="xl">
              Explorer More
            </wb-button>
          </div>
          <!-- <div
            absolute
            top="50%"
            right="10"
            w="80"
            h="80"
            pointer-events-none
            class="hidden !2xl:block"
          >
            <spline-viewer
              transform="scale-35"
              url="https://prod.spline.design/UgLhMEneL55Ks1Sg/scene.splinecode"
            />
          </div> -->
        </div>
      </div>
      <div w="90% xl:280" m="x-auto">
        <div relative>
          <div relative w="60" m="x-auto">
            <wb-radio-group
              :options="options"
              font="bold"
              type="tab"
              tab-type="emphasize"
              theme="success"
            />
          </div>
          <div
            relative
            w="full"
            m="t--8%"
            aspect-ratio="1120/680"
            style="
              perspective: 1000px;
              z-index: 10;
              backface-visibility: hidden;
            "
          >
            <Card
              class="preview-box"
              :style="{
                boxShadow: active ? `0 0 12vw -4vw #a092ff` : 'none'
              }"
            >
              <div h="full" rounded="3" ring="1 white/10" overflow="hidden">
                <video
                  preload="none"
                  src="https://hub-apac-1.lobeobjects.space/landing/0.webm"
                  style="height: 100%; display: inline-block"
                  poster="https://hub-apac-1.lobeobjects.space/landing/0.webp"
                  tabindex="-1"
                />
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
        <div m="t-50 x-auto">
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
              background-image:
                conic-gradient(from 90deg at 80% 50%, #000000, #a092ff),
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
          <div
            class="title"
            p="y-4"
            text="7 md:12 white center"
            font="[SmileySans-Oblique]"
          >
            点燃自我效能，重拾创造乐趣
          </div>
          <div w="xl:3xl" m="t-30 x-auto" flex="~ col" gap="3">
            <div
              class="text-box"
              bg="gray/20"
              p="2"
              rounded="2"
              flex
              overflow-hidden
              style="width: fit-content"
            ></div>
            <div
              class="text-box2"
              bg="gray/20"
              p="2"
              rounded="2"
              flex
              overflow-hidden
              style="width: fit-content"
            ></div>
          </div>
        </div>
        <div h="200" p="y-8">
          <div flex gap="4">
            <div
              flex="1"
              h="160"
              ring="px $wb-color-border"
              rounded="2"
              style="
                background: linear-gradient(to bottom, #000000 50%, #111111);
              "
            ></div>
            <div
              flex="1"
              h="160"
              ring="px $wb-color-border"
              rounded="2"
              style="
                background: linear-gradient(to bottom, #000000 50%, #111111);
              "
            ></div>
            <div
              flex="1"
              h="160"
              ring="px $wb-color-border"
              rounded="2"
              style="
                background: linear-gradient(to bottom, #000000 50%, #111111);
              "
            ></div>
          </div>
          <div m="t-8" flex justify="center">
            <wb-button p="x-6" type="plain" theme="default" size="lg">
              View the Complete Roadmap
            </wb-button>
          </div>
        </div>
        <Card
          :style="{
            boxShadow: active ? `0 0 12vw -4vw #a092ff` : 'none'
          }"
        >
          <div h="full" rounded="3" ring="1 white/10" overflow="hidden">
            <img :src="withBase('/mode.png')" />
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
        <!-- <WBFooter m="t-50 b-10" /> -->
      </div>
    </div>
    <div fixed right="6" top="50%" z="100" transform="translate-y--50%">
      <WBAside />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import KongMing from './KongMing.vue'
import WBHeader from './WBHeader.vue'
// import WBFooter from './WBFooter.vue'
import WBAside from './WBAside.vue'
import { withBase } from 'vitepress'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

const controller = new AbortController()
const { signal } = controller

onMounted(() => {
  ScrollTrigger.defaults({
    scroller: '#layoutRoot'
  })
  ScrollTrigger.create({
    trigger: '.stars',
    scrub: true,
    start: 'center center',
    end: '70% 50%',
    animation: gsap.to('.stars', {
      scale: 5,
      opacity: 0
    })
  })
  ScrollTrigger.create({
    trigger: '.preview-box',
    scrub: true,
    start: 'top center',
    end: 'center center',
    animation: gsap
      .timeline()
      .fromTo('.preview-box', { rotateX: 30, y: -120 }, { rotateX: 0, y: 120 }),
    onUpdate: ({ progress }) => {
      active.value = progress > 0.9
    }
  })
  ScrollTrigger.create({
    trigger: '.title-box',
    scrub: true,
    start: 'top center',
    end: 'center center',
    animation: gsap
      .timeline()
      .to('.title-box', {
        scale: 2,
        opacity: 0.2,
        z: 0,
        ease: 'power4.in'
      })
      .from('.title', {
        duration: 1,
        y: 40,
        ease: 'power4.inOut'
      })
  })
  ScrollTrigger.create({
    trigger: '.title-box',
    start: 'top center',
    end: 'center top',
    animation: gsap
      .timeline()
      .to('.text-box', {
        duration: 1,
        text: '不论普通用户与专业开发者，LobeChat 旨在成为所有人的 AI 助手实验场。👇✨'
      })
      .to('.text-box2', {
        duration: 1.5,
        text: '随着人工智能模型能力不断进步，我们相信通过共享知识与技能能够将每个人潜在的创造力和生产力发挥至极致。 👯👭🏻🧑‍🤝‍🧑👫🧑🏿‍🤝‍🧑🏻👩🏾‍🤝‍👨🏿👬🏿'
      })
  })
  // TODO: 滚动超过一屏后，继续向下滚动header隐藏，向上滚动时header恢复显示
  const container = document.getElementById('layoutRoot')
  container?.addEventListener('scroll', doSomething, { signal })
})

let scrollTop = 0
const showHeader = ref(true)
function doSomething(e: any) {
  if (e.target.scrollTop < document.body.clientHeight) {
    if (!showHeader.value) {
      showHeader.value = true
    }
    return
  }
  showHeader.value = scrollTop > e.target.scrollTop
  scrollTop = e.target.scrollTop
}

onBeforeUnmount(() => {
  controller.abort()
})

const active = ref(false)
const options = [
  { label: 'Overview', value: '1' },
  { label: 'Colors', value: '2' },
  { label: 'Mode', value: '3' }
]
</script>

<style scoped>
.down-enter-active,
.down-leave-active {
  transform: translate3d(-50%, 0, 0);
  transition: transform 0.5s ease-in-out;
}
.down-enter-from,
.down-leave-to {
  transform: translate3d(-50%, -10rem, 0);
}
</style>
