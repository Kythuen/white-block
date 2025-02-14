---
title: API Reference
description: The built-in API provided.
---

WhiteBlock Theme offers several built-in APIs for you.

## UnocssConfig

Get default unocss config provided by WhiteBlock Theme.

### Usage
::: code-group
```ts [uno.config.ts]
import { UnocssConfig } from '@white-block/vitepress/unocss'

export default UnocssConfig(/* Options */)
```
:::

:::details Options declaration.
```ts
export type UnocssConfigOptions = {
  usePresetWind: boolean
  usePresetAttributify: boolean
  usePresetIcons: boolean
  useTransformerAttributifyJsx: boolean
  extendConfigs: Partial<VitePluginConfig>
}
```
Use `extendConfigs` to extend the default configs, see [Available Options](https://unocss.dev/config/#options).
:::