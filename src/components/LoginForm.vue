<template>
  <form @submit.prevent="login"
        class="flex flex-col justify-center items-center pt-6">
    <input type="email" placeholder="Email" v-model="email" class="formInput">
    <input type="password" placeholder="Password" v-model="password" class="formInput">
    <button class="my-7 py-2.5 px-4 rounded-md bg-red-500 light-font font-bold outline-none focus:outline-none hover:bg-red-600">
      Sign In
    </button>
  </form>
</template>

<script>
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'

  export default {
    name: 'LoginForm',
    setup () {
      const store = useStore()
      const router = useRouter()
      const email = ''
      const password = ''

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

      return {
        email,
        password,
        login
      }
    }
  }
</script>

<style scoped>

</style>