import {createStore} from 'vuex'
import {NavbarModule} from './Navbar'
import {AuthModule} from '@/store/Auth'

const store = createStore({
  state: {},
  
  mutations: {},
  
  actions: {},
  
  modules: {
    Navbar: NavbarModule,
    Auth: AuthModule
  }
})

export default store