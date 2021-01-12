import {createStore} from 'vuex'
import {NavbarModule} from './Navbar'

const store = createStore({
  state: {},
  
  mutations: {},
  
  actions: {},
  
  modules: {
    Navbar: NavbarModule
  }
})

export default store