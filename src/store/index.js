import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import i18n, {selectedLocale} from '@/plugins/i18n'

const store = createStore({
  state: {
    locale: selectedLocale,
    dir: 'ltr',
    isDarkMode: false
  },
  mutations: {
    UPDATE_LOCALE (state, newLocale) {
      state.locale = newLocale
    },
    CHANGE_DIRECTION (state, newVal) {
      if (newVal === 'fa') {
        state.dir = 'rtl'
      } else {
        state.dir = 'ltr'
      }
    },
    SWITCH_UI_MODE (state) {
      state.isDarkMode = !state.isDarkMode
    }
  },
  actions: {
    updateLocale ({commit}, newLocale) {
      i18n.global.locale = newLocale
      commit('UPDATE_LOCALE', newLocale)
    },
    changeDirection ({commit}, newVal) {
      commit('CHANGE_DIRECTION', newVal)
    },
    switchUiMode ({commit}) {
      commit('SWITCH_UI_MODE')
    }
  },
  modules: {},
  plugins: [createPersistedState()]
})

export default store
