<template>
  <div :dir="dir" class="min-h-screen my-6 flex flex-col justify-center items-center">
    <StatusBar />
    <div class="w-screen mt-4 mx-0 my-4 md:my-7 border-b border-gray-600 border-opacity-20"></div>
    <Navbar class="w-11/12"/>
    <div class="w-11/12 h-full panel-background py-10 px-8 rounded-3xl">
      <router-view class="min-h-screen"/>
      <div class="fixed bottom-5 right-16">
        <DarkModeBtn class="" :dark-mode="darkMode" :theme="theme" @switch-theme="$emit('toggleTheme')" />
      </div>
    </div>
  </div>
</template>

<script>
  import {computed, ref, watch} from 'vue'
  import {useI18n} from 'vue-i18n'
  import StatusBar from '@/components/StatusBar'
  import Navbar from '@/components/Navbar'
  import DarkModeBtn from '../components/DarkModeBtn'
  import {useStore} from 'vuex'

  export default {
    name: 'MainPanel',
    components: {DarkModeBtn, StatusBar, Navbar},
    props: ['darkMode', 'theme'],
    setup () {
      const store = useStore()
      const i18n = useI18n()
      const locale = ref(i18n.locale)
      const dir = computed(() => store.state.dir)

      watch(locale, (newVal, oldVal) => {
        if (oldVal !== newVal) {
          store.dispatch('changeDirection', newVal)
        }
      })

      return {
        dir
      }
    }
  }
</script>

<style scoped>

</style>