import {createStore} from 'vuex'

const store = createStore({
  state: {
    isDarkMode: false,
    dir: 'ltr'
  },
  
  mutations: {
    SWITCH_UI_MODE (state) {
      state.isDarkMode = !state.isDarkMode
    },
    CHANGE_DIRECTION (state, newVal) {
      if (newVal === 'fa') {
        state.dir = 'rtl'
      } else {
        state.dir = 'ltr'
      }
    }
  },
  
  actions: {
    switchUiMode ({commit}) {
      commit('SWITCH_UI_MODE')
    },
    changeDirection ({commit}, newVal) {
      commit('CHANGE_DIRECTION', newVal)
    }
  },
  
  modules: {}
})

export default store