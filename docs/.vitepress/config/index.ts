import { defineConfig } from 'vitepress'
import { transformPageData } from '../transforms/data'
import mdPlugin from '../transforms/markdown'
import {
  DESCRIPTION,
  DESCRIPTION_ZH,
  GITHUB_URL,
  OG_IMAGE,
  TITLE
} from './constant'
import { NAV, SIDEBAR } from './routes/en'
import { NAV as NAV_ZH, SIDEBAR as SIDEBAR_ZH } from './routes/zh'
import { localSearchConfig } from './search'

export default defineConfig({
  srcDir: 'src',
  base: '/white-block/',
  title: TITLE,
  titleTemplate: TITLE,
  description: DESCRIPTION,
  appearance: 'dark',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['meta', { name: 'author', content: 'Kythuen' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: TITLE }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    [
      'script',
      {
        type: 'module',
        src: 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js'
      }
    ]
  ],
  themeConfig: {
    search: localSearchConfig
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: DESCRIPTION,
      head: [['meta', { name: 'og:description', content: DESCRIPTION }]],
      themeConfig: {
        logo: '/logo.png',
        siteTitle: 'WhiteBlock',
        nav: NAV,
        socialLinks: [{ icon: 'github', link: GITHUB_URL }],
        sidebar: SIDEBAR
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      description: DESCRIPTION_ZH,
      head: [['meta', { name: 'og:description', content: DESCRIPTION_ZH }]],
      themeConfig: {
        logo: '/logo.png',
        siteTitle: 'WhiteBlock',
        nav: NAV_ZH,
        socialLinks: [{ icon: 'github', link: GITHUB_URL }],
        sidebar: SIDEBAR_ZH
      }
    }
  },
  vite: {
    configFile: 'vite.config.ts'
  },
  markdown: {
    config: md => mdPlugin(md as any)
  },
  transformPageData
})
