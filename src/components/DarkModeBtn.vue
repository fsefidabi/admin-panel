<template>
  <div
      class="fixed bottom-5 right-16 bg-indigo-50 border-2 border-blueGray-700 dark:border-indigo-600 rounded-3xl shadow-2xl shadow-inner "
       :class="{dark: darkMode}">
    <button @click="$emit('switchTheme')"
            class="px-3 py-2 theme-btn-background dark:text-black cursor-pointer focus:outline-none font-extrabold">
      {{theme}}
    </button>
  </div>
</template>

<script>

  export default {
    name: 'DarkModeBtn',
    inheritAttrs: false,
    props: ['darkMode', 'theme'],
    emits: ['switchTheme']
  }
</script>

<style scoped>

</style>