import {createApp} from 'vue'
import FlagIcon from 'vue-flag-icon'
import {defineRule, configure} from 'vee-validate'
import {localize} from '@vee-validate/i18n'
import * as rules from '@vee-validate/rules'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/index.css'
import i18n from './plugins/i18n'

createApp(App).use(FlagIcon).use(i18n).use(store).use(router).mount('#app')

Object.keys(rules).forEach(rule => {
  defineRule(rule, rules[rule])
})

configure({
  generateMessage: localize(i18n.global.locale, {
    messages: {
      required: i18n.global.t('authForm.alerts.required'),
      email: i18n.global.t('authForm.alerts.email'),
      confirmed: i18n.global.t('authForm.alerts.confirmation'),
      min: i18n.global.t('authForm.alerts.min'),
    },
  }),
})
