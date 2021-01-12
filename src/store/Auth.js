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
      console.log(state.status)
      console.log(user.email)
      console.log(user.password)
      
      axios({url: '/login', data: user, method: 'POST'})
        .then((res) => {
          console.log(res)
          localStorage.setItem('user', JSON.stringify(res.data.user))
          localStorage.setItem('jwt', res.data.token)
        })
    }
  },
  
  actions: {
    retrieveToken ({commit}, user) {
      commit('RETRIEVE_TOKEN', user)
    }
  }
}