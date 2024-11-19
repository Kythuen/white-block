import type { Theme } from 'vitepress'
import WhiteBlock from 'white-block'
import 'white-block/dist/styles/index.css'
import Layout from './Layout.vue'
// import 'vitepress/dist/client/theme-default/styles/vars.css'
import 'vitepress/dist/client/theme-default/styles/base.css'
// import 'vitepress/dist/client/theme-default/styles/icons.css'
// import 'vitepress/dist/client/theme-default/styles/utils.css'
// import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
// import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
// import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
// import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
// import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css'
import './styles/vars.css'
import './styles/index.css'
// import './styles/vp.less'

export const theme: Theme = {
  Layout,
  enhanceApp({ app, router }) {
    app.use(WhiteBlock)
    router.onBeforePageLoad = () => {
      if (!import.meta.env.SSR) {
        document.getElementById('layoutRoot')?.scrollTo(0, 0)
      }
    }
  }
}
export default theme
