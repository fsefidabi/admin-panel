<template>
  <div class="w-screen flex flex-col md:flex-row justify-center mx-auto p-6">
    <Navbar :nav-items="navItems" :current-tab="state.currentTab" :update-current-tab="updateCurrentTab"/>
    <MainPanel :current-tab="state.currentTab"/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import {reactive, ref} from 'vue'
  import MainPanel from '@/views/MainPanel'

  export default {
    components: {MainPanel, Navbar},
    setup () {
      const navItems = [
        {
          name: 'Dashboard',
          icon: 'fa fa-home'
        },
        {
          name: 'Pages',
          icon: 'fa fa-file'
        },
        {
          name: 'Users',
          icon: 'fa fa-users'
        },
        {
          name: 'Archive',
          icon: 'fa fa-archive'
        }
      ]

      const state = reactive({
        currentTab: ref('Dashboard')
      })

      function updateCurrentTab (item) {
        state.currentTab = item.name
        console.log(state.currentTab)
      }

      return {
        navItems,
        state,
        updateCurrentTab
      }
    }
  }
</script>

<style>

</style>
