<template>
  <form @submit.prevent="login"
        class="flex flex-col justify-center items-center pt-6">
    <input type="email" :placeholder="$t('authForm.email')" v-model="email" class="formInput">
    <input type="password" :placeholder="$t('authForm.password')" v-model="password" class="formInput">
    <button
        class="my-7 py-2.5 px-4 rounded-md bg-red-500 light-text font-bold outline-none focus:outline-none hover:bg-red-600">
      {{ $t('authForm.login') }}
    </button>
  </form>
</template>

<script>
  import {useRouter} from 'vue-router'
  import axios from 'axios'

  export default {
    name: 'LoginForm',
    setup () {
      const router = useRouter()
      const email = ''
      const password = ''

      async function login () {
        let email = this.email
        let password = this.password
        try {
          const res = await axios.post('http://localhost:1337/auth/local', {identifier: email, password:
            password})
          localStorage.setItem('user', JSON.stringify(res.data.user))
          localStorage.setItem('jwt', res.data.jwt)
          await router.push('/dashboard')
        } catch (err) {
          if (err.response.data.data[0].messages[0].message.includes('Identifier or password invalid')) {
            alert('Incorrect email or password')
          } else {
            alert('It seems something bad has happened. Please try again later.')
          }
        }
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