import type { DefaultTheme } from 'vitepress'
import { PLAYGROUND_URL } from '../constant'

const SidebarGuides: DefaultTheme.NavItemWithLink[] = [
  { text: 'Getting Started', link: '/guide/started' },
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
  { text: 'Getting Started', link: '/packages/vitepress/guide' },
  { text: 'Layouts', link: '/packages/vitepress/layouts' },
  { text: 'Slots', link: '/packages/vitepress/slots' },
  { text: 'Components', link: '/packages/vitepress/components' },
  { text: 'Customize', link: '/packages/vitepress/customize' },
  { text: 'Deploy', link: '/packages/vitepress/deploy' }
]
const SidebarVitepressOthers = [
  { text: 'API Reference', link: '/packages/vitepress/api' },
  { text: 'Changelogs', link: '/packages/vitepress/changelogs' },
  { text: 'Q & A', link: '/packages/vitepress/qa' }
]
const SidebarTypes = [
  { text: 'Getting Started', link: '/packages/types/guide' }
]

export const SIDEBAR: Record<string, DefaultTheme.SidebarItem[]> = {
  '/guide': SidebarWhiteBlock,
  '/components/': SidebarWhiteBlock,
  '/packages/vitepress/': [
    { text: 'Guides', items: SidebarVitepress },
    { text: 'Others', items: SidebarVitepressOthers }
    // SidebarEcosystem
  ],
  '/packages/types/': [
    { text: 'Guides', items: SidebarTypes }
    // SidebarEcosystem
  ]
}

export const NAV = [
  { text: 'Guide', link: '/guide/started' },
  { text: 'Components', link: '/guide/overview' },
  { text: 'Playground', link: PLAYGROUND_URL },
  { text: 'Packages', link: '/packages' }
]
