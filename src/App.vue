<template>
  <div class="flex p-6">
    <Navbar :nav-items="navItems" :current-tab="state.currentTab" :update-current-tab="updateCurrentTab"/>
    <div class="w-11/12 py-6 px-10 bg-gray-100 rounded-2xl">
      <StatusBar class="mb-5"/>
      <div class="mt-4 my-9 border-b border-gray-800 border-opacity-20"></div>
      <router-view :current-tab="state.currentTab"/>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import {reactive} from 'vue'
  import StatusBar from '@/components/StatusBar'

  export default {
    components: {StatusBar, Navbar},
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
        currentTab: navItems[0].name
      })

      function updateCurrentTab (item) {
        state.currentTab = item.name
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
