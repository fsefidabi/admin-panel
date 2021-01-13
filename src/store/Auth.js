import axios from 'axios'

export const AuthModule = {
  namespaced: true,
  
  state: {
    status: 'pending',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  
  mutations: {
    RETRIEVE_TOKEN (state, user) {
      axios({url: '/login', data: user, method: 'POST'})
        .then((res) => {
          console.log(res)
          console.log(user)
          localStorage.setItem('user', JSON.stringify(res.data.user))
          localStorage.setItem('jwt', res.data.token)
          console.log(localStorage.getItem('user'))
          console.log(localStorage.getItem('jwt'))
        })
    },
    LOGOUT () {
      localStorage.removeItem('user')
      localStorage.removeItem('jwt')
      delete axios.defaults.headers.common['Authorization']
      console.log(localStorage.getItem('user'))
      console.log(localStorage.getItem('jwt'))
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