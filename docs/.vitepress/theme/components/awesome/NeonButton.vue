<template>
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
        filter: blur(3em);
      "
    />
    <div
      absolute
      top="2px"
      left="2px"
      w="[calc(100%-4px)]"
      h="[calc(100%-4px)]"
      bg="$wb-color-background"
      rounded="2"
    />

    <div
      relative
      w="full"
      h="full"
      text="lg"
      flex
      items="center"
      justify="center"
      gap="2"
    >
      <slot>
        <span>Get Started</span>
        <div w="1em" h="1em" class="i-heroicons-arrow-right-20-solid" />
      </slot>
    </div>
  </button>
</template>

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
