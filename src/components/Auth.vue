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
  import {useI18n} from 'vue-i18n'
  // import {useStore} from 'vuex'

  export default {
    name: 'Auth',
    components: {RegistrationForm, LoginForm},
    setup () {
      const i18n = useI18n()
      // const store = useStore()
      let openTab = 1
      const tabs = ['Sign In', 'Sign Up']
      const state = reactive({
        currentTab: i18n.t('login')
      })
      //you've left here.
      // it works properly in first glance and shows right content for login and register tabs. but switching to
      //fa lang dont change anything.
      //according to the github issue which is opened in your chrome(!) you should use watch or ref to follow changes.
      //Good Luck Honey :)

      function toggleTabs (tab) {
        state.currentTab = tab
        console.log(i18n.locale)
        console.log(i18n.t)
        console.log(i18n.t('login'))
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