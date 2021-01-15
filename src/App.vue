<template>
  <div class="w-screen min-h-screen" :class="{dark: isDarkMode}">
    <div
        class="w-full h-full flex flex-col md:flex-row justify-center mx-auto p-6 background main-text-color">
      <Navbar />
      <MainPanel class="panel-background"/>
      <DarkModeBtn class="fixed bottom-5 right-5" :dark-mode="isDarkMode" :theme="state.theme"
                   @switch-theme="toggleTheme"/>
    </div>
  </div>
</template>

<script>
  import {computed, reactive} from 'vue'
  import {useStore} from 'vuex'
  import {useI18n} from 'vue-i18n'
  import Navbar from '@/components/Navbar'
  import MainPanel from '@/views/MainPanel'
  import DarkModeBtn from '@/components/DarkModeBtn'
  export default {
    components: {DarkModeBtn, MainPanel, Navbar},
    setup () {
      const store = useStore()
      const i18n = useI18n()

      const isDarkMode = computed(() => store.state.isDarkMode)
      const darkTheme = computed(() => i18n.t('uiTheme.lightMode'))
      const lightTheme = computed(() => i18n.t('uiTheme.darkMode'))

      const state = reactive({
        theme: lightTheme
      })

      async function toggleTheme () {
        await store.dispatch('switchUiMode')
        if (isDarkMode.value === true) {
          state.theme = darkTheme
        } else {
          state.theme = lightTheme
        }
      }

      return {
        state,
        isDarkMode,
        toggleTheme
      }
    }
  }
</script>

<style>

</style>
