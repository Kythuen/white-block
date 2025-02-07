<template>
  <div
    relative
    w="full"
    m="x-auto"
    p="2px"
    rounded="4"
    overflow="hidden"
    z-2
    bg="black gradient-to-r no-repeat"
    border="px solid $wb-color-border"
  >
    <div
      absolute
      top="-12.5"
      left="-12.5"
      w="full"
      h="full"
      style="animation: move 10s linear infinite"
    >
      <div
        absolute
        w="25"
        h="25"
        filter="blur-25"
        style="animation: change-color 12s linear infinite"
      />
    </div>
    <div w="full" h="full" bg="black" relative rounded="4" overflow="hidden">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
@keyframes change-color {
  0% {
    background: #ffcb47;
  }
  25% {
    background: #c4f042;
  }
  50% {
    background: #369eff;
  }
  75% {
    background: #bd54c6;
  }
  100% {
    background: #ffcb47;
  }
}

@keyframes move {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(100%, 0, 0);
  }
  50% {
    transform: translate3d(100%, 100%, 0);
  }
  75% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
