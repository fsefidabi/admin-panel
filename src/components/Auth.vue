<template>
  <div class="w-80">
    <button v-for="tab in tabs" :key="tab"
            class="w-1/2 py-3 rounded-t-md outline-none focus:outline-none duration-500 shadow-sm bg-teal-700 shadow-inner shadow-2xl"
            :class="{'bg-teal-700 font-bold light-text border-b-0 border-2 border-gray-200' : state.currentTab === tab,
            ' bg-opacity-40 border-b-2 border-gray-200 shadow-inner':
            state.currentTab
            !== tab}"
            @click="toggleTabs(tab)">{{ tab }}
    </button>
    <div class="rounded-b-md bg-white shadow-md border-2 border-gray-200 border-t-0">
      <LoginForm v-if="state.currentTab === 'Sign In'" />
      <RegistrationForm v-if="state.currentTab === 'Sign Up'" />
    </div>
  </div>
</template>

<script>
  import {reactive} from 'vue'
  import LoginForm from '@/components/LoginForm'
  import RegistrationForm from '@/components/registrationForm'

  export default {
    name: 'Auth',
    components: {RegistrationForm, LoginForm},
    setup () {
      let openTab = 1
      const tabs = ['Sign In', 'Sign Up']

      const state = reactive({
        currentTab: tabs[0]
      })

      function toggleTabs (tab) {
        state.currentTab = tab
      }

      return {
        openTab,
        tabs,
        state,
        toggleTabs,
      }
    }
  }
</script>

<style scoped>

</style>