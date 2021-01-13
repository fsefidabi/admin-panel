<template>
  <div :class="{dark: darkMode}">
    <button @click="toggleTheme"
            class="px-3 py-2 border rounded-3xl theme-btn-background gray-font-color cursor-pointer focus:outline-none">{{
        theme
      }}
    </button>
  </div>
</template>

<script>

  import {useStore} from 'vuex'
  import {computed} from 'vue'

  export default {
    name: 'DarkModeBtn',
    setup () {
      const store = useStore()
      const darkMode = computed(() => store.state.App.darkMode)
      const theme = computed(() => store.state.App.theme)

      async function toggleTheme () {
        await store.dispatch('App/toggleDarkMode')
      }

      return {
        darkMode,
        theme,
        toggleTheme
      }
    }
  }
</script>

<style scoped>

</style>