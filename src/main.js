import { createApp } from 'vue'
import './assets/styles/style.css'
import './assets/styles/calendar.scss'
import './assets/icons/arrow/css/arrow.css'

import App from './App.vue'
import {createPinia} from "pinia";

createApp(App)
  .use(createPinia())
  .mount('#app')
