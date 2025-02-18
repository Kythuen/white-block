import 'virtual:uno.css'
import { createApp } from 'vue'
import WhiteBlock from 'white-block'
import App from './App.vue'
import './assets/css/reset.css'

if (process.env.NODE_ENV === 'production') {
  import('white-block/dist/styles/index.css')
}

createApp(App).use(WhiteBlock).mount('#app')
