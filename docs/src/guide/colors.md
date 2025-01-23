---
title: Colors
description: Overview of the existing components. Get more information from repo CHANGELOG.
---

## Base
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

## Defined
<ColorGroup title="Text">
  <TextColors
    name="wb-vc-text"
    :group="['main', 'active', 'normal', 'decorative', 'placeholder']"
    variable
  />
</ColorGroup>
<br/>
<ColorGroup title="Border">
  <!-- <BorderColors
    name="wb-color-border"
    :group="['emphasize', 'base', 'soft', 'dinky']"
  /> -->
  <BorderColors
    name="wb-color-border1"
    :group="[1, 2, 3, 4]"
  />
</ColorGroup>
<br/>
<ColorGroup title="Status">
  <StatusColors
    name="wb-vc"
    :group="['success', 'warning', 'danger']"
    variable
  />
</ColorGroup>
<br/>
<ColorGroup title="Layout">
  <LayoutColors
    name="wb-vc"
    :group="['success', 'warning', 'danger']"
    variable
  />
</ColorGroup>