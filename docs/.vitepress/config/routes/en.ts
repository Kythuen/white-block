import type { DefaultTheme } from 'vitepress'
import { PLAYGROUND_URL } from '../constant'

const SidebarGuides: DefaultTheme.NavItemWithLink[] = [
  { text: 'Getting Started', link: '/guide' },
  { text: 'Overview', link: '/guide/overview' },
  { text: 'Colors', link: '/guide/colors' }
]

const SidebarComponents: DefaultTheme.NavItemWithLink[] = [
  { text: 'Button', link: '/components/button' },
  { text: 'ButtonGroup', link: '/components/button-group' },
  { text: 'Input', link: '/components/input' },
  { text: 'InputNumber', link: '/components/input-number' },
  { text: 'Toggle', link: '/components/toggle' },
  { text: 'Radio', link: '/components/radio' },
  { text: 'RadioGroup', link: '/components/radio-group' },
  { text: 'Select', link: '/components/select' },
  { text: 'Slider', link: '/components/slider' },
  { text: 'Space', link: '/components/space' },
  { text: 'Popup', link: '/components/popup' },
  { text: 'Placeholder', link: '/components/placeholder' },
  { text: 'ColorPicker', link: '/components/color-picker' },
  { text: 'Form', link: '/components/form' },
  { text: 'FormItem', link: '/components/form-item' },
  { text: 'Loading', link: '/components/loading' },
  { text: 'Message', link: '/components/message' }
]

// const SidebarEcosystem = {
//   text: 'Ecosystem',
//   items: [
//     { text: 'vitepress', link: '/vitepress' },
//     { text: 'types', link: '/types' }
//   ]
// }
const SidebarWhiteBlock = [
  { text: 'Guide', items: SidebarGuides },
  { text: 'Components', items: SidebarComponents }
]
const SidebarVitepress = [
  { text: 'Getting Started', link: '/vitepress/guide' },
  { text: 'Layout', link: '/vitepress/layout' },
  { text: 'Layout Slots', link: '/vitepress/slots' }
]
const SidebarTypes = [{ text: 'Getting Started', link: '/types/guide' }]

export const SIDEBAR: Record<string, DefaultTheme.SidebarItem[]> = {
  '/guide': SidebarWhiteBlock,
  '/components/': SidebarWhiteBlock,
  '/vitepress/': [
    { text: 'Guides', items: SidebarVitepress }
    // SidebarEcosystem
  ],
  '/types/': [
    { text: 'Guides', items: SidebarTypes }
    // SidebarEcosystem
  ]
}

export const NAV = [
  { text: 'Guide', link: '/guide' },
  { text: 'Components', link: '/guide/overview' },
  { text: 'Playground', link: PLAYGROUND_URL },
  { text: 'Packages', link: '/packages' }
]
