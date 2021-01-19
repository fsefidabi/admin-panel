<template>
  <VeeForm v-slot="{ handleSubmit }" as="div" >
    <form @submit="handleSubmit($event, register)" class="flex flex-col justify-center items-center pt-6">

      <div class="w-3/4 h-20">
        <Field name="username" type="text" rules="required" :placeholder="$t('authForm.username')" class="formInput" />
        <ErrorMessage name="username" class="inline-block w-full text-red-500 text-xs rtl:text-right leading-none"/>
      </div>

      <div class="w-3/4 h-20">
        <Field name="email" type="email" rules="required|email" :placeholder="$t('authForm.email')"
               class="formInput" />
        <ErrorMessage name="email" class="inline-block w-full text-red-500 text-xs rtl:text-right leading-none"/>
      </div>

      <div class="w-3/4 h-20">
        <Field name="password" type="password" rules="required|min:5" :placeholder="$t('authForm.password')" class="formInput" />
        <ErrorMessage name="password" class="inline-block w-full text-red-500 text-xs rtl:text-right leading-none"/>
      </div>

      <div class="w-3/4 h-20">
        <Field name="confirmation" type="password" rules="required|confirmed:@password"
               :placeholder="$t('authForm.passwordConfirmation')" class="formInput" />
        <ErrorMessage name="confirmation" class="inline-block w-full text-red-500 text-xs rtl:text-right leading-none"/>
      </div>

      <button class="mt-4 mb-7 py-2.5 px-4 rounded-md bg-red-500 light-text font-bold outline-none focus:outline-none hover:bg-red-600">
        {{ $t('authForm.register') }}
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
    name: 'registrationForm',
    components: {VeeForm, Field, ErrorMessage},
    setup () {
      const router = useRouter()
      const i18n = useI18n()

      async function register (values, actions) {
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
          const swal = await Swal.fire({
            icon: 'success',
            width: 500,
            backdrop: 'rgba(54,58,83,0.5)',
            title: i18n.t('authForm.alerts.successfulRegistration.title'),
            text: i18n.t('authForm.alerts.successfulRegistration.message'),
            timer: 2000,
            showCloseButton: true
          })
          if (swal.isConfirmed) {
            await router.push('/dashboard')
          }
          await router.push('/dashboard')
        } catch (err) {
          if (err.response.data.data[0].messages[0].message.includes('Username already taken')) {
            actions.setFieldError('username', i18n.t('authForm.alerts.duplicateUsername'))
          } else if (err.response.data.data[0].messages[0].message.includes('Please provide valid email address')) {
            actions.setFieldError('email', i18n.t('authForm.alerts.email'))
          } else if (err.response.data.data[0].messages[0].message.includes('Email is already taken')) {
            actions.setFieldError('email', i18n.t('authForm.alerts.duplicateEmail'))
          }
        }
      }

      return {
        register
      }
    }
  }
</script>

<style scoped>

</style>