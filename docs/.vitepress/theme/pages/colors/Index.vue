<template>
  <div>
    <h2 id="Base">Base</h2>
    <ColorGroup title="Primary">
      <PaletteColors
        name="wb-color-primary"
        :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
      />
    </ColorGroup>
    <br />
    <ColorGroup title="Green">
      <PaletteColors
        name="wb-color-green"
        :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
      />
    </ColorGroup>
    <br />
    <ColorGroup title="Red">
      <PaletteColors
        name="wb-color-red"
        :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
      />
    </ColorGroup>
    <br />
    <ColorGroup title="Yellow">
      <PaletteColors
        name="wb-color-yellow"
        :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
      />
    </ColorGroup>
    <br />
    <ColorGroup title="Gray">
      <PaletteColors
        name="wb-color-gray"
        :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
      />
    </ColorGroup>

    <h2 id="Defined">Defined</h2>
    <ColorGroup title="Text">
      <TextColors
        name="wb-color-text"
        :group="['main', 'active', 'default', 'secondly', 'placeholder']"
      />
    </ColorGroup>
    <br />
    <ColorGroup title="Border">
      <BorderColors
        name="wb-color-border"
        :group="['active', 'default', 'comp', 'dinky']"
      />
    </ColorGroup>
    <br />
    <ColorGroup title="Status">
      <StatusColors name="wb-color" :group="['green', 'yellow', 'red']" />
    </ColorGroup>
    <br />
    <ColorGroup title="Layout">
      <LayoutColors
        name="wb-vc"
        :group="['success', 'warning', 'danger']"
        variable
      />
    </ColorGroup>
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
