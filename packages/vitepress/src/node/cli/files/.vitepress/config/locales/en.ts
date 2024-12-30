import * as CONSTANT from './constant'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const title = '{{ title }}'
export const description = '{{ slogan }}'

const SidebarGuides: DefaultTheme.NavItemWithLink[] = [
  { text: 'Getting Started', link: '/guide' }
]

const sidebar: Record<string, DefaultTheme.SidebarItem[]> = {
  '/guide': [{ text: 'Guide', items: SidebarGuides }]
}

const nav = [{ text: 'Guide', link: '/guide' }]

export default {
  label: 'English',
  lang: 'en',
  description,
  head: [['meta', { name: 'og:description', content: description }]],
  themeConfig: {
    logo: CONSTANT.LOGO,
    siteTitle: title,
    nav,
    sidebar
  }
} as LocaleSpecificConfig<any> & { label: string; link?: string }
