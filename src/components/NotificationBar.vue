<template>
  <div class="w-32 flex justify-between items-center">
    <i class="fa fa-bell-o text-xl cursor-pointer"></i>
    <i class="fa fa-comment-o text-xl cursor-pointer"></i>
    <div class="w-9 h-9 rounded-3xl border cursor-pointer overflow-hidden">
      <img src="@/assets/default-profile.png" class="w-full">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotificationBar'
  }
</script>

<style scoped>

</style>