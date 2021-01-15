<template>
  <div class="flex justify-between">
    <div class="flex items-center w-60 h-8 px-4 rounded-2xl bg-gray-200 text-gray-500">
      <input type="search" :placeholder="$t('statusBar.search')"
             class="w-full pr-10 bg-transparent text-sm placeholder-gray-500 focus:text-teal-900 focus:outline-none">
      <i class="fa fa-search text-gray-500 text-opacity-50"></i>
    </div>

    <div class="w-44 flex justify-between items-center relative" @mouseleave="hideSignOutLabel">
      <button v-if="$i18n.locale === 'en'" @click="switchLocale($i18n.locale)" class="focus:outline-none">
        <flag :iso="'ir'" :squared=false />
      </button>
      <button v-if="$i18n.locale === 'fa'" @click="switchLocale($i18n.locale)" class="focus:outline-none">
        <flag :iso="'us'" :squared=false />
      </button>
      <i class="fa fa-bell-o text-xl cursor-pointer"></i>
      <i class="fa fa-comment-o text-xl cursor-pointer"></i>
      <div id="userImage" class="w-9 h-9 rounded-3xl border cursor-pointer overflow-hidden"
           @mouseenter="showSignOutLabel">
        <img src="@/assets/default-profile.png" alt="profile picture" class="w-full">
      </div>
      <div id="signOutBtn"
           class="absolute hidden right-0 top-full py-2 px-3 rounded-3xl bg-gray-500 bg-opacity-70 light-text">
        <button @click="logout" class="focus:outline-none">{{ $t('statusBar.signOutButton') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {useRouter} from 'vue-router'
  import {useI18n} from 'vue-i18n'
  import axios from 'axios'

  export default {
    name: 'StatusBar',
    setup () {
      const router = useRouter()
      const i18n = useI18n()

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

      function switchLocale (lang) {
        if (lang === 'en') {
          i18n.locale.value = 'fa'
        } else {
          i18n.locale.value = 'en'
        }
      }

      return {
        showSignOutLabel,
        hideSignOutLabel,
        logout,
        switchLocale
      }
    }

  }
</script>

<style scoped>

</style>