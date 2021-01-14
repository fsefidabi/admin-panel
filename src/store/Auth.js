import axios from 'axios'

export const AuthModule = {
  namespaced: true,
  
  state: {
    status: 'pending',
    token: localStorage.getItem('token') || '',
    user: {},
  },
  
  mutations: {
    RETRIEVE_TOKEN (state, user) {
      axios({url: 'http://localhost:3000/login', data: user, method: 'POST'})
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data.user))
          localStorage.setItem('jwt', res.data.token)

        })
    },
    LOGOUT () {
      localStorage.removeItem('user')
      localStorage.removeItem('jwt')
      delete axios.defaults.headers.common['Authorization']
    }
  },
  
  actions: {
    retrieveToken ({commit}, user) {
      commit('RETRIEVE_TOKEN', user)
    },
    logout ({commit}) {
      commit('LOGOUT')
    },
  }
}