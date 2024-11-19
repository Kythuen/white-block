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
