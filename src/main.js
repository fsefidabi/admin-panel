import { createApp } from 'vue'
import FlagIcon from 'vue-flag-icon'
import VueFinalModal from 'vue-final-modal'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/index.css'
import i18n from './plugins/i18n'
import {defineRule} from 'vee-validate'
import {required, email, min} from '@vee-validate/rules'
import {localize} from '@vee-validate/i18n'
import { configure } from 'vee-validate'
import en from '@vee-validate/i18n/dist/locale/en.json'
import fa from '@vee-validate/i18n/dist/locale/fa.json'

createApp(App).use(VueFinalModal()).use(FlagIcon).use(i18n).use(store).use(router).mount('#app')

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

configure({
  generateMessage: localize({
    en,
    fa,
  }),
})
