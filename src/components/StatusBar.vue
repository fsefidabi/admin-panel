<template>
  <div class="flex justify-between">
    <SearchBar/>
    <NotificationBar />
  </div>
</template>

<script>
  import SearchBar from '@/components/SearchBar'
  import NotificationBar from '@/components/NotificationBar'

  export default {
    name: 'StatusBar',
    components: {NotificationBar, SearchBar}

  }
</script>

<style scoped>

</style>