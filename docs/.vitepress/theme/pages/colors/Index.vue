<template>
  <div>
    <h2 id="Palette">Palette</h2>
    <div p="x-4" flex="~ col" gap="4">
      <ColorGroup title="Primary">
        <PaletteColors
          name="wb-color-primary"
          :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
        />
      </ColorGroup>
      <ColorGroup title="Green">
        <PaletteColors
          name="wb-color-green"
          :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
        />
      </ColorGroup>
      <ColorGroup title="Red">
        <PaletteColors
          name="wb-color-red"
          :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
        />
      </ColorGroup>
      <ColorGroup title="Yellow">
        <PaletteColors
          name="wb-color-yellow"
          :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
        />
      </ColorGroup>
      <ColorGroup title="Gray">
        <PaletteColors
          name="wb-color-gray"
          :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
        />
      </ColorGroup>
    </div>

    <h2 id="Defined">Defined</h2>
    <div p="x-4" flex="~ col" gap="4">
      <ColorGroup title="Text">
        <TextColors
          name="wb-color-text"
          :group="['main', 'active', 'default', 'secondly', 'placeholder']"
        />
      </ColorGroup>
      <ColorGroup title="Border">
        <BorderColors
          name="wb-color-border"
          :group="['active', 'default', 'comp', 'dinky']"
        />
      </ColorGroup>
      <ColorGroup title="Status">
        <StatusColors
          name="wb-color"
          :group="['blue', 'green', 'yellow', 'red']"
        />
      </ColorGroup>
      <ColorGroup title="Layout">
        <LayoutColors />
      </ColorGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorGroup from './ColorGroup.vue'
import PaletteColors from './PaletteColors.vue'
import TextColors from './TextColors.vue'
import BorderColors from './BorderColors.vue'
import StatusColors from './StatusColors.vue'
import LayoutColors from './LayoutColors.vue'
</script>
