<template>
  <VeeForm v-slot="{ handleSubmit }" as="div">
    <form @submit="handleSubmit($event, login)" class="flex flex-col justify-center items-center pt-6">

      <div class="w-3/4 h-20">
        <Field type="email" :placeholder="$t('authForm.email')" name="email" class="formInput"
               rules="required|email"/>
        <ErrorMessage name="email" class="inline-block w-full text-red-500 text-xs rtl:text-right leading-none"/>
      </div>

      <div class="w-3/4 h-20">
        <Field type="password" :placeholder="$t('authForm.password')" name="password"
               class="formInput" rules="required"/>
        <ErrorMessage name="password" class="inline-block w-full text-red-500 text-xs rtl:text-right leading-none"/>
      </div>

      <button
          class="mt-4 mb-7 py-2.5 px-4 rounded-md bg-red-500 light-text font-bold outline-none focus:outline-none hover:bg-red-600">
        {{ $t('authForm.login') }}
      </button>
    </form>
  </VeeForm>
</template>

<script>
  import {useRouter} from 'vue-router'
  import {useI18n} from 'vue-i18n'
  import axios from 'axios'
  import {Form as VeeForm, Field, ErrorMessage} from 'vee-validate'
  import Swal from 'sweetalert2'

  export default {
    name: 'LoginForm',
    components: {VeeForm, Field, ErrorMessage},
    setup () {
      const router = useRouter()
      const i18n = useI18n()

      async function login (values, actions) {
        try {
          const res = await axios.post('http://localhost:1337/auth/local', {
            identifier: values.email,
            password: values.password
          })
          localStorage.setItem('user', JSON.stringify(res.data.user))
          localStorage.setItem('jwt', res.data.jwt)
          await router.push('/dashboard')
        } catch (err) {
          if (err.response.data.data[0].messages[0].message.includes('Identifier or password invalid')) {
            console.log(err.response.data.data[0].messages[0])
            actions.setErrors({
              email: i18n.t('authForm.alerts.wrongInput'),
              password: i18n.t('authForm.alerts.wrongInput')
            })
          } else {
            Swal.fire({
              icon: 'error',
              width: 500,
              backdrop: 'rgba(54,58,83,0.5)',
              text: i18n.t('authForm.alerts.generalError'),
              showConfirmButton: false,
              showCloseButton: true
            })
          }
        }
      }

      return {
        login
      }
    }
  }
</script>

<style scoped>

</style>