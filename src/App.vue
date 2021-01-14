<template>
  <div class="w-screen min-h-screen" :class="{dark: darkMode}">
    <div
        class="w-full h-full flex flex-col md:flex-row justify-center mx-auto p-6 background main-text-color">
      <Navbar />
      <MainPanel :current-tab="tab" class="panel-background"/>
      <DarkModeBtn class="fixed bottom-5 right-5"/>
    </div>
  </div>
</template>

<script>
  import { useStore } from 'vuex'
  import {computed} from 'vue'
  import Navbar from '@/components/Navbar'
  import MainPanel from '@/views/MainPanel'
  import DarkModeBtn from '@/components/DarkModeBtn'
  export default {
    components: {DarkModeBtn, MainPanel, Navbar},
    setup () {
      const store = useStore()
      const darkMode = computed(() => store.state.App.darkMode)

      return {
        darkMode,
      }
    }
  }
</script>

<style>

</style>
