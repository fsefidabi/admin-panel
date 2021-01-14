<template>
  <div class="w-80">
    <button v-for="tab in tabs" :key="tab"
            class="w-1/2 py-3 rounded-t-md outline-none focus:outline-none duration-500 shadow-sm bg-teal-700 shadow-inner shadow-2xl"
            :class="[state.currentTab === tab ?
            'bg-teal-700 font-bold light-text border-b-0 border-2 border-gray-200' :
            'bg-opacity-40 border-b-2 border-gray-200 shadow-inner']"
            @click="toggleTabs(tab)">{{ tab }}
    </button>
    <div class="rounded-b-md bg-white shadow-md border-2 border-gray-200 border-t-0">
      <LoginForm v-if="state.currentTab === $i18n.t('authForm.login')"/>
      <RegistrationForm v-if="state.currentTab === $i18n.t('authForm.register')"/>
    </div>
  </div>
</template>

<script>
  import {computed, reactive} from 'vue'
  import LoginForm from '@/components/LoginForm'
  import RegistrationForm from '@/components/registrationForm'
  import {useI18n} from 'vue-i18n'

  export default {
    name: 'Auth',
    components: {RegistrationForm, LoginForm},
    setup () {
      const i18n = useI18n()
      const tabs = computed(() => [i18n.t('authForm.login'), i18n.t('authForm.register')])
      const state = reactive({
        currentTab: tabs.value[0]
      })

      function toggleTabs (tab) {
        state.currentTab = tab
      }

      return {
        state,
        toggleTabs,
        tabs,
      }
    }
  }
</script>

<style scoped>

</style>