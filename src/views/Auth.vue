<template>
  <div class="w-80">
    <button v-for="tab in tabs" :key="tab"
            class="w-1/2 py-3 rounded-t-md outline-none focus:outline-none duration-500 shadow-sm bg-teal-700 shadow-inner shadow-2xl"
            :class="{'bg-teal-700 font-bold light-font border-b-0 border-2 border-gray-200' : state.currentTab === tab,
            ' bg-opacity-40 border-b-2 border-gray-200 shadow-inner':
            state.currentTab
            !== tab}"
            @click="toggleTabs(tab)">{{ tab }}
    </button>
    <div class="rounded-b-md bg-white shadow-md border-2 border-gray-200 border-t-0">
      <form @submit.prevent="login"
            class="flex flex-col justify-center items-center pt-6">
        <input type="email" placeholder="Email" v-model="email" class="formInput">
        <input type="password" placeholder="Password" v-model="password" class="formInput">
        <!--        <input type="password" placeholder="Confirm Password" v-model="confirmPassword" v-if="state.currentTab ===-->
        <!--        'Sign Up'"-->
        <!--               class="formInput">-->
        <button
            class="my-7 py-2.5 px-4 rounded-md bg-red-500 light-font font-bold outline-none focus:outline-none hover:bg-red-600">
          {{ state.currentTab }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import {reactive} from 'vue'
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'

  export default {
    name: 'Auth',
    setup () {
      const store = useStore()
      const router = useRouter()
      let openTab = 1
      const tabs = ['Sign In', 'Sign Up']
      const email = ''
      const password = ''
      const confirmPassword = ''
      const state = reactive({
        currentTab: tabs[0]
      })

      function toggleTabs (tab) {
        state.currentTab = tab
      }


      function login () {
        let email = this.email
        let password = this.password
        store.dispatch('Auth/retrieveToken', {email, password})
            .then(() => {
              router.push('/login')
              console.log('dispatch done successfully')
            })
            .catch(err => console.log('dispatch failed ', err))
      }

      function register () {
        let email = this.email
        console.log(email)
        console.log(this.email)
        let password = this.password
        store.dispatch('Auth/retrieveToken', {email, password})
            .then(() => {
              router.push('/register')
              console.log('dispatch done successfully')
            })
            .catch(err => console.log('dispatch failed ', err))
      }

      return {
        openTab,
        tabs,
        email,
        password,
        confirmPassword,
        state,
        toggleTabs,
        login
        // register
      }
    }
  }
</script>

<style scoped>

</style>