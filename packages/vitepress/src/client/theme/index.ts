import type { Theme as ThemeType } from 'vitepress'
import 'vitepress/dist/client/theme-default/styles/base.css'
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css'
import 'vitepress/dist/client/theme-default/styles/icons.css'
import 'vitepress/dist/client/theme-default/styles/utils.css'
import 'vitepress/dist/client/theme-default/styles/vars.css'
import DefaultTheme from 'vitepress/theme-without-fonts'
import WhiteBlock from 'white-block'
import 'white-block/dist/styles/index.css'
import Layout from './Layout.vue'
import WBDocumentAside from './components/WBDocumentAside.vue'
import WBDocumentAsideMenu from './components/WBDocumentAsideMenu.vue'
import WBDocumentHeader from './components/WBDocumentHeader.vue'
import WBHeader from './components/WBHeader.vue'
import WBFooter from './components/WBFooter.vue'
import WBHome from './components/WBHome.vue'
import WBIconButton from './components/WBIconButton.vue'
import WBSidebar from './components/WBSidebar.vue'
import WBSidebarMenu from './components/WBSidebarMenu.vue'
import './styles/index.less'

export const Theme: ThemeType = {
  ...DefaultTheme,
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
  WBDocumentAside,
  WBDocumentAsideMenu,
  WBDocumentHeader,
  WBHeader,
  WBFooter,
  WBHome,
  WBIconButton,
  WBSidebar,
  WBSidebarMenu
}
