import { defineConfig } from 'vitepress'
import { DESCRIPTION, GITHUB_URL } from './constant'
import { NAV, SIDEBAR } from './routes/en'

export default defineConfig({
  lang: 'en',
  base: '/{{ repo }}/',
  srcDir: 'src',
  title: '{{ title }}',
  description: '{{ slogan }}',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
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
        logo: '/logo.svg',
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
