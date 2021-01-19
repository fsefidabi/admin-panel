<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center panel-background">
    <div class="w-80 mb-5">
      <button v-for="tab in tabs" :key="tab"
            class="w-1/2 py-3 rounded-t-md outline-none focus:outline-none duration-500 shadow-sm shadow-inner shadow-2xl"
            :class="[state.currentTab === tab ? 'bg-indigo-500 font-bold light-text border-2 border-gray-200' :
            'bg-opacity-20 bg-indigo-300 border-b-2 main-text-color border-gray-200 shadow-inner']"
            @click="toggleTabs(tab)">{{ tab }}
      </button>
      <div dir="ltr" class="rounded-b-md bg-white shadow-md border-2 border-gray-200 border-t-0">
        <LoginForm v-if="state.currentTab === $i18n.t('authForm.login')"/>
        <RegistrationForm v-if="state.currentTab === $i18n.t('authForm.register')"/>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <DarkModeBtn :dark-mode="darkMode" :theme="theme" @switch-theme="$emit('toggleTheme')" />
      <I18nButton class="ml-5 rtl:mr-5" />
    </div>
  </div>
</template>

<script>
  import {computed, reactive, ref, watch} from 'vue'
  import {useI18n} from 'vue-i18n'
  import LoginForm from '@/components/LoginForm'
  import RegistrationForm from '@/components/registrationForm'
  import I18nButton from '@/components/I18nBtn'
  import DarkModeBtn from '@/components/DarkModeBtn'

  export default {
    name: 'Auth',
    components: {DarkModeBtn, I18nButton, RegistrationForm, LoginForm},
    props: ['darkMode', 'theme'],
    emits: ['toggleTheme'],
    setup () {
      const i18n = useI18n()
      const locale = ref(i18n.locale)
      const tabs = computed(() => [i18n.t('authForm.login'), i18n.t('authForm.register')])
      const state = reactive({
        currentTab: tabs.value[0]
      })

      watch(locale, (newVal, oldVal) => {
        if (oldVal !== newVal) {
          state.currentTab = i18n.t('authForm.login', newVal)
        }
      })

      function toggleTabs (tab) {
        state.currentTab = tab
      }

      return {
        state,
        toggleTabs,
        tabs
      }
    }
  }
</script>

<style scoped>

</style>