<template>
  <div :class="{dark: darkMode}">
    <button @click="$emit('switchTheme')"
            class="px-3 py-2 border rounded-3xl theme-btn-background gray-font-color cursor-pointer focus:outline-none">
      {{theme}}
    </button>
  </div>
</template>

<script>

  export default {
    name: 'DarkModeBtn',
    props: ['darkMode', 'theme'],
    emits: ['switchTheme']
  }
</script>

<style scoped>

</style>