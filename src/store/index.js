import {createStore} from 'vuex'

const store = createStore({
  state: {
    isDarkMode: false
  },
  
  mutations: {
    SWITCH_UI_MODE (state) {
      state.isDarkMode = !state.isDarkMode
    }
  },
  
  actions: {
    switchUiMode ({commit}) {
      commit('SWITCH_UI_MODE')
    }
  },
  
  modules: {

  }
})

export default store