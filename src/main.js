import { createApp } from 'vue'
import FlagIcon from 'vue-flag-icon'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/index.css'
import i18n from './plugins/i18n'

createApp(App).use(FlagIcon).use(i18n).use(store).use(router).mount('#app')
