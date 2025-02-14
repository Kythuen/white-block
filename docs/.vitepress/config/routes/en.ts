import type { DefaultTheme } from 'vitepress'
import { PLAYGROUND_URL } from '../constant'

/* ---------------------------------- packages/core --------------------------------- */
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
const SidebarWhiteBlock = [
  { text: 'Guide', items: SidebarGuides },
  { text: 'Components', items: SidebarComponents }
]

/* ------------------------------- packages/vitepress ------------------------------- */
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

/* -------------------------------- packages/types --------------------------------- */
const SidebarTypes = [
  { text: 'Usage', link: '/packages/types/' },
  { text: 'Changelogs', link: '/packages/types/changelogs' }
]

/* ------------------------------ packages/resolver ------------------------------- */
const SidebarResolver = [
  { text: 'Usage', link: '/packages/resolver/' },
  { text: 'Changelogs', link: '/packages/resolver/changelogs' }
]

export const SIDEBAR: Record<string, DefaultTheme.SidebarItem[]> = {
  '/guide': SidebarWhiteBlock,
  '/components/': SidebarWhiteBlock,
  '/packages/vitepress/': [
    { text: 'Guides', items: SidebarVitepress },
    { text: 'Others', items: SidebarVitepressOthers }
  ],
  '/packages/types/': [{ text: 'All', items: SidebarTypes }],
  '/packages/resolver/': [{ text: 'All', items: SidebarResolver }]
}

export const NAV = [
  { text: 'Guide', link: '/guide/started' },
  { text: 'Components', link: '/guide/overview' },
  { text: 'Playground', link: PLAYGROUND_URL },
  { text: 'Packages', link: '/packages' }
]
