import { defineConfig } from 'vitepress'
import * as CONSTANT from './locales/constant'
import en, { description, title } from './locales/en'

export default defineConfig({
  lang: 'en',
  base: '/{{ repo }}/',
  srcDir: 'src',
  title,
  description,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: CONSTANT.FAVICON }]
  ],
  themeConfig: {
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: CONSTANT.GITHUB_URL }]
  },
  locales: {
    root: en
  },
  vite: { configFile: 'vite.config.ts' }
})
