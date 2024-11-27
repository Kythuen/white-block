import type { VitePluginConfig } from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetWind,
  transformerDirectives,
  transformerAttributifyJsx
} from 'unocss'

const configs: Partial<VitePluginConfig> = {
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({
      cdn: 'https://esm.sh/'
    })
  ],
  transformers: [transformerDirectives(), transformerAttributifyJsx()],
  rules: [
    [
      /^text-line-clamp-(\d+)$/,
      ([, line]: any) => ({
        'overflow': 'hidden',
        'display': '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': line,
        'line-clamp': line
      })
    ]
  ],
  blocklist: [/size-.*/]
}

export default configs

export type UnocssConfigOptions = {
  usePresetWind: boolean
  usePresetAttributify: boolean
  usePresetIcons: boolean
  useTransformerAttributifyJsx: boolean
  extendConfigs: Partial<VitePluginConfig>
}
export function UnocssConfig(options?: Partial<UnocssConfigOptions>) {
  const {
    usePresetWind = true,
    usePresetAttributify = true,
    usePresetIcons = true,
    useTransformerAttributifyJsx = true,
    extendConfigs = {}
  } = options || {}
  const presets: any = []
  if (usePresetWind) {
    presets.push(presetWind())
  }
  if (usePresetAttributify) {
    presets.push(presetAttributify())
  }
  if (usePresetIcons) {
    presets.push(
      presetIcons({
        cdn: 'https://esm.sh/'
      })
    )
  }
  const transformers: any = []
  if (useTransformerAttributifyJsx) {
    transformers.push(transformerAttributifyJsx())
  }
  const result: Partial<VitePluginConfig> = {
    ...extendConfigs,
    presets: [...presets, ...(extendConfigs.presets || [])],
    transformers: [...transformers, ...(extendConfigs.transformers || [])],
    rules: [
      [
        /^text-line-clamp-(\d+)$/,
        ([, line]: any) => ({
          'overflow': 'hidden',
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': line,
          'line-clamp': line
        })
      ],
      ...(extendConfigs.rules || [])
    ],
    blocklist: [/size-.*/, ...(extendConfigs.blocklist || [])]
  }

  return result
}
