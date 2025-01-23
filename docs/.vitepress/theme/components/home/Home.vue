<template>
  <div relative w="full">
    <div
      absolute
      inset="0"
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
        src="../../assets/img/bg-earth.webp"
        style="object-fit: cover"
      />
      <KongMing />
    </div>
    <div sticky top="4 md:6" z="100" w="85% xl:280" p="t-4 md:t-6" m="x-auto">
      <WBHeader />
    </div>
    <div relative>
      <div w="full lg:360" h="screen" m="x-auto" flex="~ col" items="center">
        <div
          w="85% xl:280"
          h="[calc(100vh-10rem)]"
          flex="~ col"
          items="center"
          justify-center
          gap="8 xl:12"
        >
          <div
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
          </div>
          <div text="6 md:10 center white" font="bold">WhiteBlock</div>
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
          <!-- <div absolute top="50%" right="10" w="80" h="80" pointer-events-none>
          <spline-viewer
            transform="scale-35"
            url="https://prod.spline.design/UgLhMEneL55Ks1Sg/scene.splinecode"
          />
        </div> -->
        </div>
      </div>
      <div w="90% xl:280" h="200vh" m="x-auto">
        <div relative>
          <div relative w="100" m="x-auto">
            <wb-radio-group
              :options="options"
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
        <div w="90% xl:280" h="100" m="t-50 x-auto">
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
              bg="gray/30"
              p="2"
              rounded="2"
              flex
              overflow-hidden
              style="width: fit-content"
            ></div>
            <div
              class="text-box2"
              bg="gray/30"
              p="2"
              rounded="2"
              flex
              overflow-hidden
              style="width: fit-content"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { onMounted, ref } from 'vue'
import KongMing from './KongMing.vue'
import WBHeader from './WBHeader.vue'
import Card from './Card.vue'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

onMounted(() => {
  ScrollTrigger.create({
    trigger: '.stars',
    scroller: '#layoutRoot',
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
    scroller: '#layoutRoot',
    scrub: true,
    start: 'top center',
    end: 'center center',
    animation: gsap
      .timeline()
      .fromTo('.preview-box', { rotateX: 30, y: -120 }, { rotateX: 0, y: 140 }),
    onUpdate: ({ progress }) => {
      active.value = progress > 0.9
    }
  })
  ScrollTrigger.create({
    trigger: '.title-box',
    scroller: '#layoutRoot',
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
      .to('.text-box', {
        duration: 2,
        text: '不论普通用户与专业开发者，LobeChat 旨在成为所有人的 AI 助手实验场。👇✨'
      })
      .to('.text-box2', {
        duration: 3,
        text: '随着人工智能模型能力不断进步，我们相信通过共享知识与技能能够将每个人潜在的创造力和生产力发挥至极致。 👯👭🏻🧑‍🤝‍🧑👫🧑🏿‍🤝‍🧑🏻👩🏾‍🤝‍👨🏿👬🏿'
      })
  })
})

const active = ref(false)
const options = [
  { label: '概览', value: '1' },
  { label: '助理', value: '2' },
  { label: '文生图', value: '3' },
  { label: '语音', value: '4' },
  { label: '插件', value: '5' },
  { label: '多模型', value: '6' }
]
</script>
