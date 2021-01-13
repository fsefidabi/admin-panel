import i18n from '@/plugins/i18n'

export const AppModule = {
  namespaced: true,
  
  state: {
    darkMode: false,
    theme: 'Dark Mode',
    locale: i18n.locale,
    languages: [
      {
        flag: 'us',
        language: 'en',
        title: 'English'
      },
      {
        flag: 'ir',
        language: 'fa',
        title: 'فارسی'
      }
    ]
  },
  
  mutations: {
    TOGGLE_DARK_MODE (state) {
      state.darkMode = !state.darkMode
      if (state.darkMode === true) {
        state.theme = 'Light Mode'
      } else {
        state.theme = 'Dark Mode'
      }
    }
  },
  
  actions: {
    toggleDarkMode ({commit}) {
      commit('TOGGLE_DARK_MODE')
    }
  }
}