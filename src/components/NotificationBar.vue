<template>
  <div class="w-32 flex justify-between items-center relative" @mouseleave="hideSignOutLabel">
    <i class="fa fa-bell-o text-xl cursor-pointer"></i>
    <i class="fa fa-comment-o text-xl cursor-pointer"></i>
    <div id="userImage" class="w-9 h-9 rounded-3xl border cursor-pointer overflow-hidden"
         @mouseenter="showSignOutLabel">
      <img src="@/assets/default-profile.png" class="w-full">
    </div>
    <div id="signOutBtn"
         class="absolute hidden right-0 top-full py-2 px-3 rounded-3xl bg-gray-500 bg-opacity-70 light-font">
      <button class="focus:outline-none">Sign Out</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotificationBar',

    setup() {
      function showSignOutLabel () {
        document.getElementById('signOutBtn').classList.remove('hidden')
      }

      function hideSignOutLabel () {
        document.getElementById('signOutBtn').classList.add('hidden')
      }

      return {
        showSignOutLabel,
        hideSignOutLabel
      }
    }
  }

</script>

<style scoped>

</style>