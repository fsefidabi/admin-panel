<template>
  <div :class="{dark: isDarkMode}">
    <div class="w-screen min-h-screen flex flex-col justify-center items-center background main-text-color">
      <router-view :dark-mode="isDarkMode" :theme="state.theme" :dir="dir"
                   @toggle-theme="toggleTheme" />
    </div>
  </div>
</template>
<script>
  import {computed, reactive, ref, watch} from 'vue'
  import {useStore} from 'vuex'
  import {useI18n} from 'vue-i18n'

  export default {
    emits: ['toggleTheme'],
    setup () {
      const store = useStore()
      const i18n = useI18n()
      const locale = ref(i18n.locale)

      const dir = computed(() => store.state.dir)
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

      watch(locale, (newVal, oldVal) => {
        console.log(newVal)
        if (oldVal !== newVal) {
          store.dispatch('changeDirection', newVal)
        }
      })

      return {
        state,
        dir,
        isDarkMode,
        toggleTheme
      }
    }
  }
</script>

<style>

</style>
