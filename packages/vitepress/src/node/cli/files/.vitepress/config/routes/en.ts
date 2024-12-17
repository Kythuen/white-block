import type { DefaultTheme } from 'vitepress'

const SidebarGuides: DefaultTheme.NavItemWithLink[] = [
  { text: 'Getting Started', link: '/guide' }
]

export const SIDEBAR: Record<string, DefaultTheme.SidebarItem[]> = {
  '/guide': [{ text: 'Guide', items: SidebarGuides }]
}

export const NAV = [{ text: 'Guide', link: '/guide' }]
