<template>
  <div class="w-60 flex justify-between items-center relative" @mouseleave="hideSignOutLabel">
    <button v-for="language in languages" :key="language.title" @click="$i18n.locale = language.language">
      <flag :iso="language.flag" :squared=false />
    </button>
    <i class="fa fa-bell-o text-xl cursor-pointer"></i>
    <i class="fa fa-comment-o text-xl cursor-pointer"></i>
    <div id="userImage" class="w-9 h-9 rounded-3xl border cursor-pointer overflow-hidden"
         @mouseenter="showSignOutLabel">
      <img src="@/assets/default-profile.png" alt="profile picture" class="w-full">
    </div>
    <div id="signOutBtn"
         class="absolute hidden right-0 top-full py-2 px-3 rounded-3xl bg-gray-500 bg-opacity-70 light-text">
      <button @click="logout" class="focus:outline-none">Sign Out</button>
    </div>
  </div>
</template>

<script>
  import {useRouter} from 'vue-router'
  import {useStore} from 'vuex'

  export default {
    name: 'NotificationBar',

    setup () {
      const router = useRouter()
      const store = useStore()

      const languages = store.state.App.languages

      function showSignOutLabel () {
        document.getElementById('signOutBtn').classList.remove('hidden')
        console.log(this.i18n.locale)
      }

      function hideSignOutLabel () {
        document.getElementById('signOutBtn').classList.add('hidden')
      }

      function logout () {
        store.dispatch('Auth/logout')
            .then(() => {
              console.log('logged out successfully.')
              router.push('/login')
            })
      }

      return {
        languages,
        showSignOutLabel,
        hideSignOutLabel,
        logout
      }
    }
  }

</script>

<style scoped>

</style>