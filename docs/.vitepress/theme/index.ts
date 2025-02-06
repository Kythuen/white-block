import { Theme as WBTheme } from '@white-block/vitepress'
import 'virtual:group-icons.css'
import 'virtual:uno.css'
import './styles/index.less'
import type { Theme } from 'vitepress'
// import ComponentOverview from './components/ComponentOverview.vue'
// import CustomUsageBlock from './components/global/CustomUsageBlock.vue'
// import DemoBlock from './components/global/DemoBlock.vue'
// import DemoBox from './components/global/DemoBox.vue'
// import UsageBlock from './components/global/UsageBlock.vue'
import Layout from './Layout.vue'
import WhiteBlock from 'white-block'
// import 'white-block/dist/styles/index.css'

const theme: Theme = {
  extends: WBTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(WhiteBlock)
    // app.component('ComponentOverview', ComponentOverview)
  }
}

export default theme
