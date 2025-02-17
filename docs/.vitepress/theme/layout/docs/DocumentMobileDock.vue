<template>
  <div
    fixed
    bottom="8"
    z="100"
    left="50%"
    transform="translate-x--50%"
    rounded="full"
    flex
    gap="2"
    class="!lg:hidden"
  >
    <div
      h="full"
      bg="[rgb(var(--wb-vc-black)/15%)] dark:[rgb(var(--wb-vc-white)/15%)]"
      rounded="full"
      backdrop="blur"
      flex
      items="center"
    >
      <slot />
    </div>
    <div
      v-show="focus"
      w="12"
      h="12"
      bg="$wb-color-comp"
      rounded="md"
      ring="1 $wb-color-border"
      color="$wb-color-text-main"
      flex
      items="center"
      justify="center"
      cursor="pointer"
      @click.stop="backTop"
    >
      <i w="6" h="6" i="heroicons-arrow-up-20-solid" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  focus: { type: Boolean, default: false }
})

function backTop() {
  document.getElementById('layoutRoot')?.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
