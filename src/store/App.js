export const AppModule = {
  namespaced: true,
  
  state: {
    darkMode: false,
    theme: 'Dark Mode'
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