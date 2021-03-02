<template>
  <div class="w-full flex justify-around items-start pt-10">
    <router-link to="/email-builder/grapesjs-email-preset" class="email-builder">GrapesJs <b class="text-red-300 dark:text-red-600">email preset</b></router-link>
    <router-link to="/email-builder/grapesjs-plugins" class="email-builder">GrapesJs <b class="text-red-300 dark:text-red-600">different plugins</b></router-link>
    <router-link to="/email-builder/vue-email-editor" class="email-builder">Vue Email Editor</router-link>
  </div>
</template>

<script>
  export default {
    name: 'EmailBuilder'
  }
</script>

<style scoped>
  
</style>
