import { Theme as WBTheme } from '@white-block/vitepress'
import 'virtual:uno.css'
import 'virtual:group-icons.css'
import type { Theme } from 'vitepress'
import ComponentOverview from './components/ComponentOverview.vue'
import CustomUsageBlock from './components/global/CustomUsageBlock.vue'
import DemoBlock from './components/global/DemoBlock.vue'
import DemoBox from './components/global/DemoBox.vue'
import UsageBlock from './components/global/UsageBlock.vue'
import Layout from './Layout.vue'
import './styles/index.less'

const theme: Theme = {
  extends: WBTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock)
    app.component('UsageBlock', UsageBlock)
    app.component('CustomUsageBlock', CustomUsageBlock)
    app.component('DemoBox', DemoBox)
    app.component('ComponentOverview', ComponentOverview)
  }
}

export default theme
