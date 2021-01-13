<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h1 class="light-text font-bold text-2xl">Sample Admin Panel</h1>
    <Auth class="mt-8"/>
    <router-view :current-tab="currentTab" class="min-h-screen"/>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
import Auth from '@/components/Auth'
export default {
name: "Home",
  components: {Auth},
  props: ['currentTab'],
  setup () {
    const store = useStore()
    const tab = computed(() => store.state.Navbar.currentTab)
    const navItems = store.state.Navbar.navItems

    async function updateCurrentTab (item) {
      await store.dispatch('Navbar/updateCurrentTab', item)
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

<style scoped>

</style>