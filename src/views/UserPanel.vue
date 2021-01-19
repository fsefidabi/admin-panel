<template>
  <div :dir="dir" class="min-h-screen my-6 flex flex-col justify-center items-center">
    <StatusBar />
    <div class="w-screen mt-4 mx-0 my-4 md:my-7 border-b border-gray-600 border-opacity-20"></div>
    <Navbar class="w-11/12"/>
    <div class="w-11/12 h-full panel-background py-10 px-8 rounded-3xl">
      <router-view class="min-h-screen"/>
      <div class="fixed bottom-5 right-16">
        <SwitchButton class="" :dark-mode="darkMode" :theme="theme" @switch-theme="$emit('toggleTheme')" />
      </div>
    </div>
  </div>
</template>

<script>
  import StatusBar from '@/components/StatusBar'
  import Navbar from '@/components/Navbar'
  import SwitchButton from '@/components/SwitchButton'

  export default {
    name: 'MainPanel',
    components: {SwitchButton, StatusBar, Navbar},
    props: ['darkMode', 'theme', 'dir'],
    emits: ['toggleTheme']
  }
</script>

<style scoped>

</style>