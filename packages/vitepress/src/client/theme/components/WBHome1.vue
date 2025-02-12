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
          <h1 text="5xl lg:6xl" font="bold lg:tracking-tighter">
            {{ frontmatter.hero?.slogan || 'Slogan' }}
          </h1>
          <p
            v-if="frontmatter.hero?.intro"
            max-w="xl"
            m="t-5"
            text="lg dark:white/70"
          >
            {{ frontmatter.hero?.intro }}
          </p>
          <div
            v-if="frontmatter.hero?.actions"
            h="12"
            m="t-6"
            flex="~ wrap"
            items="center"
            gap="3"
          >
            <wb-button
              v-for="item in frontmatter.hero?.actions || []"
              :key="item.text"
              :href="withBase(item.link)"
              :theme="item.theme"
              tag="a"
              size="lg"
              w="full md:50"
              h="12"
            >
              <div w="5" h="5" m="r-1" :class="item.icon" />
              <span>{{ item.text }}</span>
            </wb-button>
          </div>
        </div>
        <div w="full" p="y-6" hidden md:flex items="center" justify="center">
          <img v-if="frontmatter.hero?.image" :src="frontmatter.hero?.image" />
          <img v-else src="../assets/img/hero.webp" />
        </div>
      </section>
      <section v-if="frontmatter.features" m="t-16 md:t-6">
        <h2
          v-if="frontmatter.features?.title"
          text="4xl lg:5xl"
          font="bold lg:tracking-tight"
        >
          {{ frontmatter.features?.title }}
        </h2>
        <p v-if="frontmatter.features?.desc" text="lg dark:white/70" m="t-4">
          {{ frontmatter.features?.desc }}
        </p>
        <div
          v-if="frontmatter.features?.items"
          m="t-8 lg:t-16"
          grid="~ sm:cols-2 md:cols-3"
          gap="4"
        >
          <div
            v-for="item in frontmatter.features?.items"
            :key="item.title"
            p="4"
            bg="$wb-color-card"
            rounded="3"
            flex
            items="start"
            gap="4"
          >
            <div
              w="9"
              h="9"
              shrink="0"
              flex="~ none"
              items="center"
              justify="center"
            >
              <img v-if="item.icon?.includes('/')" :src="item.icon" />
              <div v-else text="8">{{ item.icon }}</div>
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
        <h2 v-if="frontmatter.technologies?.title" text="center" m="b-10">
          {{ frontmatter.technologies?.title }}
        </h2>
        <div flex="~ wrap" gap="20" items="center" justify="center">
          <a
            v-for="item in frontmatter.technologies?.items"
            :key="item.title"
            :href="item.link"
          >
            <div w="3em" h="3em" :class="item.icon"></div>
          </a>
        </div>
      </section>
      <section
        v-if="frontmatter.started"
        relative
        inset="0"
        max-w="5xl"
        m="t-20 x-auto"
        p="10 md:20"
        bg="$wb-color-card"
        ring="px $wb-color-border"
        rounded="lg"
        overflow="hidden"
        flex="~ col"
        items="center"
        justify="center"
      >
        <img
          absolute
          inset="0"
          h="full"
          src="../assets/img/card-bg.webp"
          alt=""
        />
        <h2 text="dark:white 3xl md:4xl lg:5xl" font="tracking-tight">
          {{ frontmatter.started?.title }}
        </h2>
        <p m="t-6" text="lg md:xl black/70 dark:white/70">
          {{ frontmatter.started?.desc }}
        </p>
        <div flex m="t-6">
          <a
            :href="frontmatter.started?.link"
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
// import { ref } from 'vue'
import { useData, withBase } from 'vitepress'

const { frontmatter } = useData()

// const FEATURES = [
//   {
//     title: 'Popular Technologies',
//     desc: `Keep up with popular technology trends, build your project using Vue, TypeScript, Vite, Unocss etc.`,
//     icon: '🌟'
//     // icon: new URL('../assets/img/icons/diamond.webp', import.meta.url).href
//   },
//   {
//     title: 'Focus On Inspiration',
//     desc: `No need to start building frameworks from scratch, saving your time and quickly implement your ideas.`,
//     icon: '🎯'
//   },
//   {
//     title: 'Been Optimized',
//     desc: `On the basis of popular scaffolding, many optimizations have been made to code structure, linter, bundler, etc.`,
//     icon: '🪄'
//   },
//   {
//     title: 'Broad Integration',
//     desc: `Ephemeras templates supports TypeScript, Vue, Unocss, Vitepress and Easy to integrate other npm packages.`,
//     icon: '🔌'
//   },
//   {
//     title: 'Rich Ecosystem',
//     desc: `Ephemeras itself also provides a rich collection of toolkit collection that can be applied in your projects as needed.`,
//     icon: '🌈'
//   },
//   {
//     title: 'Continuously Updates',
//     desc: `Ephemeras templates will continuously optimized and expanded according to needs and feedback.`,
//     icon: '👨‍💻'
//   }
// ]
// const TECHNOLOGIES = [
//   {
//     title: 'vue',
//     icon: 'i-logos:vue',
//     link: 'https://vuejs.org/'
//   },
//   {
//     title: 'typescript',
//     icon: 'i-logos:typescript-icon',
//     link: 'https://www.typescriptlang.org/'
//   },
//   {
//     title: 'unocss',
//     icon: 'i-logos:unocss',
//     link: 'https://unocss.dev/'
//   },
//   {
//     title: 'vite',
//     icon: 'i-logos:vitejs',
//     link: 'https://vite.dev/'
//   },
//   {
//     title: 'vitest',
//     icon: 'i-logos:vitest',
//     link: 'https://vitest.dev/'
//   },
//   {
//     title: 'unjs',
//     icon: 'i-logos:unjs',
//     link: 'https://unjs.dev/'
//   }
//   // {
//   //   title: 'vitepress',
//   //   icon: 'i-logos:vitepress',
//   //   link: 'https://vitepress.dev/'
//   // },
// ]

// const theme = ref('dark')
// function toggleTheme() {
//   theme.value = theme.value === 'dark' ? 'light' : 'dark'
//   document.documentElement.setAttribute('class', theme.value)
// }
</script>
