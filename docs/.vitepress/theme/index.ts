import { Theme as WBTheme } from '@white-block/vitepress'
import 'virtual:uno.css'
import 'virtual:group-icons.css'
import type { Theme } from 'vitepress'
import ComponentOverview from './components/ComponentOverview.vue'
import Colors from './components/colors/Colors.vue'
import PaletteColors from './components/colors/Palette.vue'
import TextColors from './components/colors/Text.vue'
import BorderColors from './components/colors/Border.vue'
import StatusColors from './components/colors/Status.vue'
import LayoutColors from './components/colors/Layout.vue'
import SeriesColor from './components/colors/SeriesColor.vue'
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
    app.component('SeriesColor', SeriesColor)
    app.component('Colors', Colors)
    app.component('PaletteColors', PaletteColors)
    app.component('BorderColors', BorderColors)
    app.component('StatusColors', StatusColors)
    app.component('LayoutColors', LayoutColors)
    app.component('TextColors', TextColors)
  }
}

export default theme
