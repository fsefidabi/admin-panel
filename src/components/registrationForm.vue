<template>
  <VeeForm v-slot="{ handleSubmit }" as="div">
    <form @submit="handleSubmit($event, register)" class="flex flex-col justify-center items-center pt-6">
      <div class="w-3/4 h-20">
        <Field name="username" type="text" :placeholder="$t('authForm.username')" class="formInput"
               rules="required"/>
        <ErrorMessage name="username" class="text-red-500 text-sm"/>
      </div>

      <div class="w-3/4 h-20">
        <Field name="email" type="email" :placeholder="$t('authForm.email')"
               class="formInput" rules="required|email"/>
        <ErrorMessage name="email" class="text-red-500 text-sm"/>
      </div>

      <div class="w-3/4 h-20">
        <Field type="password" :placeholder="$t('authForm.password')" name="password"
               class="formInput" rules="required|min:2"/>
        <ErrorMessage name="password" class="text-red-500 text-sm"/>
      </div>

      <div class="w-3/4 h-20">
        <Field type="password" :placeholder="$t('authForm.passwordConfirmation')" name="passwordConfirmation"
               class="formInput"/>
        <ErrorMessage class="text-red-500 text-sm"/>
      </div>

      <button
          class="mt-4 mb-7 py-2.5 px-4 rounded-md bg-red-500 light-text font-bold outline-none focus:outline-none hover:bg-red-600">
        {{ $t('authForm.register') }}
      </button>

    </form>
  </VeeForm>

</template>

<script>
  import {useRouter} from 'vue-router'
  import axios from 'axios'
  import {Form as VeeForm, Field, ErrorMessage} from 'vee-validate'
  export default {
    name: 'registrationForm',
    components: {VeeForm, Field, ErrorMessage},
    setup () {
      const router = useRouter()

      async function register (values) {
        console.log(values)
        let role = 'Authenticated'

        if (values.username.includes('admin')) {
          role = 'Admin'
        }
        try {
          const res = await axios.post('http://localhost:1337/auth/local/register',
              {
                username: values.username,
                email: values.email,
                password: values.password,
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

      // function equality (value) {
      //   if (value !== values.password) {
      //     alert('password confirmation doesn\'t match password')
      //   }
      // }

      return {
        register,
        // equality
      }
    }
  }
</script>

<style scoped>

</style>