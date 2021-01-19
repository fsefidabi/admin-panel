<template>
  <div :class="{dark: isDarkMode}">
    <div class="w-screen min-h-screen flex flex-col justify-center items-center background main-text-color">
      <router-view :dark-mode="isDarkMode" lang="fa" :dir="dir" @toggle-theme="toggleTheme" />
    </div>
  </div>
</template>
<script>
  import {computed, ref, watch} from 'vue'
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

      async function toggleTheme () {
        console.log(isDarkMode.value)
        await store.dispatch('switchUiMode')
        console.log(isDarkMode.value)
      }

      watch(locale, (newVal, oldVal) => {
        if (oldVal !== newVal) {
          store.dispatch('changeDirection', newVal)
        }
      })

      return {
        dir,
        isDarkMode,
        toggleTheme
      }
    }
  }
</script>

<style>

</style>
