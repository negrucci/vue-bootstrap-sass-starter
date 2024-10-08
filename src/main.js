import('@/assets/bootstrap/bootstrap.scss')
// import('../node_modules/bootstrap/dist/js/bootstrap.bundle.min')
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'


const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
