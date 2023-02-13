import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
//挂载
createApp(App).use(store).mount('#app')
