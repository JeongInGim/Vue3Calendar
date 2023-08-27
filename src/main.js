import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles/style.css'
import './assets/styles/calendar.scss'
import App from './App.vue'

const pinia = createPinia()
// App.use(pinia)

createApp(App).use(pinia).mount('#app')
