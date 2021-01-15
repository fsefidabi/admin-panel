<template>
  <form @submit.prevent="register" novalidate="true"
        class="flex flex-col justify-center items-center pt-6">
    <input name="username" type="text" v-model="username" :placeholder="$t('authForm.username')" @invalid="isRequired"
    class="formInput">
    <input name="email" type="email" v-model="email" :placeholder="$t('authForm.email')" class="formInput">
    <input name="password" type="password" v-model="password" :placeholder="$t('authForm.password')"
           class="formInput">
    <input type="password" v-model="confirmPassword" :placeholder="$t('authForm.passwordConfirmation')"
           class="formInput">
    <button
        class="my-7 py-2.5 px-4 rounded-md bg-red-500 light-text font-bold outline-none focus:outline-none hover:bg-red-600">
      {{ $t('authForm.register') }}
    </button>
  </form>
</template>

<script>
  import {useRouter} from 'vue-router'
  import axios from 'axios'

  export default {
    name: 'registrationForm',
    setup () {
      const router = useRouter()
      const username = ''
      const email = ''
      const password = ''
      const confirmPassword = ''

      function isRequired(value) {
        if (value) {
          return true
        }
        console.log('*required')
      }

      async function register () {
        let role = 'Authenticated'
        let username = this.username
        let email = this.email
        let password = this.password
        let confirmPassword = this.confirmPassword
        if (confirmPassword !== password) {
          alert('password confirmation doesn\'t match password')
        }
        if (username.includes('admin')) {
          role = 'Admin'
        }
        try {
          const res = await axios.post('http://localhost:1337/auth/local/register',
              {
                username: username,
                email: email,
                password: password,
                role: role
              })
          localStorage.setItem('user', JSON.stringify(res.data.user))
          localStorage.setItem('jwt', res.data.jwt)
          await router.push('/dashboard')
        } catch (err) {
          if (err.response.data.data[0].messages[0].message.includes('Username already taken')) {
            alert('Please choose another username. This username has already been token.')
          } else if (err.response.data.data[0].messages[0].message.includes('Please provide valid email address')) {
            alert('Please provide valid email address.')
          } else if (err.response.data.data[0].messages[0].message.includes('Email is already taken')) {
            alert('This email has already been registered.')
          }
        }
      }

      return {
        isRequired,
        username,
        email,
        password,
        confirmPassword,
        register,
      }
    }
  }
</script>

<style scoped>

</style>