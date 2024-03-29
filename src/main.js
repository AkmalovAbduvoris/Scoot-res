import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(MotionPlugin)
app.use(router)

app.mount('#app')
