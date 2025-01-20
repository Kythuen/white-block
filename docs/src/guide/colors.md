---
title: Colors
description: Overview of the existing components. Get more information from repo CHANGELOG.
---

## Base
<Colors title="Gray">
  <PaletteColors
    name="wb-vc-gray"
    :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
    variable
  />
</Colors>
<br/>
<Colors title="Primary">
  <PaletteColors
    name="wb-vc-primary"
    :group="[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]"
    variable
  />
</Colors>

## Defined
<Colors title="Text">
  <TextColors
    name="wb-vc-text"
    :group="['main', 'active', 'normal', 'decorative', 'placeholder']"
    variable
  />
</Colors>
<br/>
<Colors title="Border">
  <BorderColors
    name="wb-color-border"
    :group="['emphasize', 'base', 'soft', 'dinky']"
  />
  <BorderColors
    name="wb-color-border1"
    :group="[1, 2, 3, 4]"
  />
</Colors>
<br/>
<Colors title="Status">
  <StatusColors
    name="wb-vc"
    :group="['success', 'warning', 'danger']"
    variable
  />
</Colors>
<br/>
<Colors title="Layout">
  <LayoutColors
    name="wb-vc"
    :group="['success', 'warning', 'danger']"
    variable
  />
</Colors>