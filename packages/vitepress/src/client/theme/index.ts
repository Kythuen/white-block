import type { Theme as ThemeType } from 'vitepress'
import WhiteBlock from 'white-block'
import 'white-block/dist/styles/index.css'
import Layout from './Layout.vue'
import WBIconButton from './components/WBIconButton.vue'
import 'vitepress/dist/client/theme-default/styles/vars.css'
import 'vitepress/dist/client/theme-default/styles/base.css'
import 'vitepress/dist/client/theme-default/styles/icons.css'
import 'vitepress/dist/client/theme-default/styles/utils.css'
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css'
import './styles/index.less'
import WBDocumentAside from './components/WBDocumentAside.vue'
import WBDocumentAsideMenu from './components/WBDocumentAsideMenu.vue'
import WBDocumentHeader from './components/WBDocumentHeader.vue'
import WBHeader from './components/WBHeader.vue'
import WBHome from './components/WBHome.vue'
import WBSidebar from './components/WBSidebar.vue'
import WBSidebarMenu from './components/WBSidebarMenu.vue'

export const Theme: ThemeType = {
  Layout,
  enhanceApp({ app, router }) {
    app.use(WhiteBlock)
    app.component('WBIconButton', WBIconButton)
    router.onBeforePageLoad = () => {
      if (!import.meta.env.SSR) {
        document.getElementById('layoutRoot')?.scrollTo(0, 0)
      }
    }
  }
}

export {
  Layout,
  WBIconButton,
  WBDocumentAside,
  WBDocumentAsideMenu,
  WBDocumentHeader,
  WBHeader,
  WBHome,
  WBSidebar,
  WBSidebarMenu
}
