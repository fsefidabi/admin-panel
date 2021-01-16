<template>
  <div class="w-11/12 mb-2 flex flex-row justify-between items-center light-text">
    <a href="#"
       class="lg:mb-0 ml-7 md:ml-0 text-xl lg:text-2xl font-bold text-left md:text-center lg:text-left">
      <i class="fa fa-diamond" aria-hidden="true"></i>
      <span class="hidden sm:inline mx-3">{{$t('navbar.websiteLogo')}}</span>
    </a>
    <div class="flex justify-between items-center relative" @mouseleave="hideSignOutLabel">
      <div class="flex items-center w-40 md:w-60 h-8 mx-2 px-4 rounded-2xl bg-gray-50 text-gray-500">
        <input type="search" :placeholder="$t('statusBar.search')"
               class="w-full pr-10 rtl:pr-0 rtl:pl-10 bg-transparent text-sm placeholder-gray-500 focus:text-teal-900 focus:outline-none">
        <i class="fa fa-search text-opacity-50"></i>
      </div>
      <I18nButton class="mx-2" />
      <i class="fa fa-bell-o mx-2 text-xl cursor-pointer"></i>
      <i class="fa fa-comment-o mx-2 text-xl cursor-pointer"></i>
      <div id="userImage" class="w-9 h-9 mx-2 rounded-3xl border border-white cursor-pointer overflow-hidden"
           @mouseenter="showSignOutLabel">
        <img src="@/assets/default-profile.png" alt="profile picture" class="w-full">
      </div>
      <div id="signOutBtn"
           class="absolute hidden right-0 rtl:right-auto rtl:left-0 top-full py-2 px-3 rounded-3xl bg-gray-500 bg-opacity-70 light-text">
        <button @click="logout" class="focus:outline-none">{{ $t('statusBar.signOutButton') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {useRouter} from 'vue-router'
  import axios from 'axios'
  import I18nButton from './I18nBtn'

  export default {
    name: 'StatusBar',
    components: {I18nButton},
    setup () {
      const router = useRouter()

      function showSignOutLabel () {
        document.getElementById('signOutBtn').classList.remove('hidden')
      }

      function hideSignOutLabel () {
        document.getElementById('signOutBtn').classList.add('hidden')
      }

      function logout () {
        localStorage.removeItem('user')
        localStorage.removeItem('jwt')
        delete axios.defaults.headers.common['Authorization']
        router.push('/')

      }

      return {
        showSignOutLabel,
        hideSignOutLabel,
        logout,
      }
    }

  }
</script>

<style scoped>

</style>