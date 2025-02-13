<template>
  <div>
    <main w="full !lg:320" m="x-auto" p="5">
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
            m="t-8"
            flex="~ wrap"
            items="center"
            gap="4"
          >
            <template
              v-for="item in frontmatter.hero?.actions || []"
              :key="item.text"
            >
              <NeonButton v-if="item.theme === 'neon'" w="full !md:50" h="12">
                <div w="5" h="5" m="r-1" :class="item.icon" />
                <span>{{ item.text }}</span>
              </NeonButton>
              <wb-button
                v-else
                :href="withBase(item.link)"
                :target="item.link.startsWith('http') ? '__blank' : ''"
                :theme="item.theme"
                tag="a"
                size="lg"
                w="full !md:50"
                h="12"
              >
                <div w="5" h="5" m="r-1" :class="item.icon" />
                <span>{{ item.text }}</span>
              </wb-button>
            </template>
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
            ring="px $wb-color-border"
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
        class="card"
      >
        <h2 text="dark:white 3xl md:4xl lg:5xl" font="bold tracking-tight">
          {{ frontmatter.started?.title }}
        </h2>
        <p m="t-6" text="lg md:xl black/70 dark:white/70">
          {{ frontmatter.started?.desc }}
        </p>
        <div flex m="t-12">
          <wb-button
            :href="frontmatter.started?.link"
            tag="a"
            theme="contrast"
            size="xl"
            p="x-6"
          >
            <span>Get Started</span>
            <div w="1em" h="1em" class="i-heroicons-arrow-right-20-solid" />
          </wb-button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'

const { frontmatter } = useData()
</script>

<style scoped>
.card {
  background-image: url(../assets/img/card-bg.webp);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: contain;
}
</style>
