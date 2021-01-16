<template>
  <div :class="{dark: isDarkMode}">
    <div class="w-screen min-h-screen flex flex-col justify-center items-center background main-text-color">
      <DarkModeBtn class="fixed bottom-5 right-5" :dark-mode="isDarkMode" :theme="state.theme"
                   @switch-theme="toggleTheme" />
      <router-view />
    </div>
  </div>
</template>
<script>
  import {computed, reactive} from 'vue'
  import {useStore} from 'vuex'
  import {useI18n} from 'vue-i18n'
  import DarkModeBtn from '@/components/DarkModeBtn'

  export default {
    components: {DarkModeBtn},
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
        console.log(isDarkMode)
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
