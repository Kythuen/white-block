<template>
  <div>
    <main w="full lg:320" m="x-auto" p="5">
      <section
        p="t-12 b-16 lg:b-24"
        w="full"
        h="full"
        grid="~ lg:cols-2 place-items-center"
      >
        <div w="full" flex="~ col" justify="center">
          <h1 text="5xl lg:7xl" font="bold lg:tracking-tighter">
            Website template for ephemeras
          </h1>
          <p max-w="xl" m="t-5" text="lg dark:white/70">
            Ephemeras templates is a collection of various types projects, such
            as websites, npm library & command line tool. You can easily and
            quickly create a website with this starter.
          </p>
          <div h="12" m="t-6" flex="~ wrap" items="center" gap="3">
            <button
              w="full md:50"
              h="full"
              bg="gray/20 hover:gray/40"
              rounded
              un-text="4"
              font="semibold"
              ring="focus-visible:2 gray-200 offset-2"
              border="2 transparent"
              cursor="pointer"
              transition
              flex
              justify="center"
              items="center"
              gap="1.5"
            >
              <div w="5" h="5" class="i-iconamoon:lightning-2-fill" />
              <span>Get Started</span>
            </button>
            <a
              href="https://kythuen.github.io/ephemeras/create"
              w="full md:50"
              h="full"
              p="x-5 y-2.5"
              bg="black hover:black/80 dark:white dark:hover:white/80"
              color="white dark:black"
              rounded
              un-text="4"
              font="semibold"
              ring="focus-visible:2 gray-200 offset-2"
              border="2 transparent"
              cursor="pointer"
              transition
              flex
              justify="center"
              items="center"
              gap="1.5"
            >
              <div w="5" h="5" m="r-1" class="i-simple-icons:github" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
        <div w="full" p="y-6" hidden md:flex items="center" justify="center">
          <img src="../assets/img/hero.webp" />
        </div>
      </section>
      <section m="t-16 md:t-6">
        <h2 text="4xl lg:5xl" font="bold lg:tracking-tight">
          Start your project with ephemeras
        </h2>
        <p text="lg dark:white/70" m="t-4">
          Ephemeras has adopted popular technologies in the community and
          summarized various project templates, making it easy for you to
          quickly start your project development.
        </p>
        <div m="t-8 lg:t-16" grid="~ sm:cols-2 md:cols-3" gap="4">
          <div
            v-for="item in FEATURES"
            :key="item.title"
            p="4"
            bg="black/5 dark:white/10"
            rounded="3"
            flex
            items="start"
            gap="4"
          >
            <div
              w="8"
              h="8"
              p="2"
              m="t-1"
              bg="black/5 dark:white/10"
              rounded="full"
              shrink="0"
            >
              <div w="1em" h="1em" :class="item.icon" />
            </div>
            <div>
              <h3 text="lg dark:white" font="semibold">{{ item.title }}</h3>
              <p text="dark:white/70" m="t-2" font="leading-relaxed">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section m="t-24">
        <h2 text="center">Works with your technologies</h2>
        <div m="t-10" flex="~ wrap" gap="20" items="center" justify="center">
          <a v-for="item in TECHNOLOGIES" :key="item.title" :href="item.link">
            <div
              w="3em"
              h="3em"
              filter="grayscale hover:none"
              :class="item.icon"
            ></div>
          </a>
        </div>
      </section>
      <section
        relative
        inset="0"
        max-w="5xl"
        m="t-20 x-auto"
        p="10 md:20"
        bg="black/5 dark:white/10"
        rounded="lg"
        flex="~ col"
        items="center"
        justify="center"
      >
        <h2 text="dark:white 3xl md:4xl lg:5xl" font="tracking-tight">
          Build project faster.
        </h2>
        <p m="t-6" text="lg md:xl black/70 dark:white/70">
          Quickly implement your ideas with templates and enjoy your coding.
        </p>
        <div flex m="t-6">
          <a
            href="https://kythuen.github.io/ephemeras/create"
            p="x-5 y-2.5"
            bg="black hover:black/80 dark:white dark:hover:white/80"
            color="white dark:black"
            rounded
            font="semibold"
            ring="focus-visible:2 gray-200 offset-2"
            border="2 transparent"
            cursor="pointer"
            transition
            flex
            justify="center"
            items="center"
            gap="1.5"
          >
            <span>Get Started</span>
            <div w="5" h="5" class="i-heroicons:arrow-small-right" />
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const FEATURES = [
  {
    title: 'Popular Technologies',
    desc: `Keep up with popular technology trends, build your project using Vue, TypeScript, Vite, Unocss etc.`,
    icon: 'i-heroicons:archive-box'
  },
  {
    title: 'Focus On Inspiration',
    desc: `No need to start building frameworks from scratch, saving your time and quickly implement your ideas.`,
    icon: 'i-heroicons:computer-desktop'
  },
  {
    title: 'Been Optimized',
    desc: `On the basis of popular scaffolding, many optimizations have been made to code structure, linter, bundler, etc.`,
    icon: 'i-heroicons:cube'
  },
  {
    title: 'Broad Integration',
    desc: `Ephemeras templates supports TypeScript, Vue, Unocss, Vitepress and Easy to integrate other npm packages.`,
    icon: 'i-heroicons:circle-stack'
  },
  {
    title: 'Rich Ecosystem',
    desc: `Ephemeras itself also provides a rich collection of toolkit collection that can be applied in your projects as needed.`,
    icon: 'i-heroicons:document-magnifying-glass'
  },
  {
    title: 'Continuously Updates',
    desc: `Ephemeras templates will continuously optimized and expanded according to needs and feedback.`,
    icon: 'i-heroicons:users'
  }
]
const TECHNOLOGIES = [
  {
    title: 'vue',
    icon: 'i-logos:vue',
    link: 'https://vuejs.org/'
  },
  {
    title: 'typescript',
    icon: 'i-logos:typescript-icon',
    link: 'https://www.typescriptlang.org/'
  },
  {
    title: 'unocss',
    icon: 'i-logos:unocss',
    link: 'https://unocss.dev/'
  },
  {
    title: 'vite',
    icon: 'i-logos:vitejs',
    link: 'https://vite.dev/'
  },
  {
    title: 'vitest',
    icon: 'i-logos:vitest',
    link: 'https://vitest.dev/'
  },
  {
    title: 'unjs',
    icon: 'i-logos:unjs',
    link: 'https://unjs.dev/'
  }
  // {
  //   title: 'vitepress',
  //   icon: 'i-logos:vitepress',
  //   link: 'https://vitepress.dev/'
  // },
]

const theme = ref('dark')
function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('class', theme.value)
}
</script>
