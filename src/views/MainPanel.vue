<template>
  <div class="w-11/12 mx-auto py-6 px-7 xl:px-10 bg-gray-100 rounded-2xl">
    <StatusBar class="mb-5"/>
    <div class="mt-4 my-9 border-b border-gray-800 border-opacity-20"></div>
    <router-view :current-tab="currentTab"/>
  </div>
</template>

<script>
  import StatusBar from '@/components/StatusBar'
  export default {
    name: 'MainPanel',
    components: {StatusBar},
    props: ['currentTab']
  }
</script>

<style scoped>

</style>