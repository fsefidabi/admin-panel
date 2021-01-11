<template>
  <div class="w-screen flex flex-col md:flex-row justify-center mx-auto p-6">
    <Navbar :nav-items="navItems" :current-tab="tab" :update-current-tab="updateCurrentTab"/>
    <MainPanel :current-tab="tab"/>
  </div>
</template>

<script>
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  import Navbar from '@/components/Navbar'
  import MainPanel from '@/views/MainPanel'

  export default {
    components: {MainPanel, Navbar},
    setup () {
      const store = useStore()
      const tab = computed(() => store.state.currentTab)
      const navItems = store.state.navItems

      async function updateCurrentTab (item) {
        await store.dispatch('updateCurrentTab', item)
        console.log(tab)
      }

      return {
        tab,
        navItems,
        updateCurrentTab
      }
    }
  }
</script>

<style>

</style>
