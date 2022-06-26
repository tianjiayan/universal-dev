import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import './iconfont/iconfont.css'
import installIcons from './icons/index.js'

const app = createApp(App)
installIcons(app)

app.use(store).use(router).use(ElementPlus).mount('#app')
