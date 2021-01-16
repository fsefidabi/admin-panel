<template>
  <div class="w-11/12 min-h-screen my-6 flex">
    <Navbar />
    <div class="w-full h-full panel-background p-6 rounded-2xl">
      <StatusBar class="mb-5"/>
      <div class="mt-4 my-9 border-b border-gray-800 border-opacity-20"></div>
      <router-view class="min-h-screen" />
    </div>
  </div>
</template>

<script>
  import StatusBar from '@/components/StatusBar'
  import Navbar from '@/components/Navbar'
  export default {
    name: 'MainPanel',
    components: {StatusBar, Navbar},
  }
</script>

<style scoped>

</style>