<template>
  <form @submit.prevent="register"
        class="flex flex-col justify-center items-center pt-6">
    <input type="email" placeholder="Email" v-model="email" class="formInput">
    <input type="password" placeholder="Password" v-model="password" class="formInput">
    <input type="password" placeholder="Confirm Password" v-model="confirmPassword" class="formInput">
    <button class="my-7 py-2.5 px-4 rounded-md bg-red-500 light-font font-bold outline-none focus:outline-none hover:bg-red-600">
      Sign Up
    </button>
  </form>
</template>

<script>
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'

  export default {
    name: 'registrationForm',
    setup () {
      const store = useStore()
      const router = useRouter()
      const email = ''
      const password = ''
      const confirmPassword = ''

      function register () {
        let email = this.email
        console.log('register')
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
        email,
        password,
        confirmPassword,
        register
      }
    }
  }
</script>

<style scoped>

</style>