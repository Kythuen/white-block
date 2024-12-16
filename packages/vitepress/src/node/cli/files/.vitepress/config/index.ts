import { defineConfig } from 'vitepress'
import { DESCRIPTION, GITHUB_URL } from './constant'
import { NAV, SIDEBAR } from './routes/en'

export default defineConfig({
  lang: 'en',
  base: '/ephemeras/',
  srcDir: 'src',
  title: 'Ephemeras',
  description: 'Make development easier and more efficient',
  cleanUrls: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: DESCRIPTION,
      head: [['meta', { name: 'og:description', content: DESCRIPTION }]],
      themeConfig: {
        logo: '/logo.png',
        siteTitle: '',
        nav: NAV,
        socialLinks: [{ icon: 'github', link: GITHUB_URL }],
        sidebar: SIDEBAR
      }
    }
  },
  vite: {
    configFile: 'vite.config.ts'
  }
})
