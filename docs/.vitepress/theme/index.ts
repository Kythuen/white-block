import { Theme as WBTheme } from '@white-block/vitepress'
import 'virtual:group-icons.css'
import 'virtual:uno.css'
import type { Theme } from 'vitepress'
import WhiteBlock from 'white-block'
import Layout from './layout/Index.vue'
import './styles/index.less'

if (process.env.NODE_ENV === 'production') {
  import('white-block/dist/styles/index.css')
}

const theme: Theme = {
  extends: WBTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(WhiteBlock)
  }
}

export default theme
