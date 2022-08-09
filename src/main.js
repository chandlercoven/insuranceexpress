import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'
import './assets/main.css'

const app = createApp(App).use(Vue3Lottie)

app.use(router)

app.mount('#app')
