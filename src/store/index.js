import {createStore} from 'vuex'
import {AuthModule} from '@/store/Auth'
import {AppModule} from '@/store/App'

const store = createStore({
  state: {},
  
  mutations: {},
  
  actions: {},
  
  modules: {
    Auth: AuthModule,
    App: AppModule
  }
})

export default store