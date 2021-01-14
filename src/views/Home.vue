<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h1 class="light-text font-bold text-2xl">Sample Admin Panel</h1>
    <Auth class="mt-8"/>
    <router-view class="min-h-screen"/>
  </div>
</template>

<script>
import Auth from '@/components/Auth'
export default {
name: "Home",
  components: {Auth},

}
</script>

<style scoped>

</style>