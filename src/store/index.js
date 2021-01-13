import {createStore} from 'vuex'
import {NavbarModule} from './Navbar'
import {AuthModule} from '@/store/Auth'
import {AppModule} from '@/store/App'

const store = createStore({
  state: {},
  
  mutations: {},
  
  actions: {},
  
  modules: {
    Navbar: NavbarModule,
    Auth: AuthModule,
    App: AppModule
  }
})

export default store