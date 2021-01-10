<template>
  <nav class="w-1/12 lg:w-1/6 text-left">
    <a href="#" class="inline-block mt-5 ml-7 text-2xl text-white font-bold">
      <i class="fa fa-diamond" aria-hidden="true"></i>
      Logo
    </a>
    <div class="w-11/12 my-6 border-b border-gray-50 border-opacity-20"></div>
    <NavItem :nav-items="navItems" :current-tab="currentTab" :update-current-tab="updateCurrentTab"/>
  </nav>
</template>

<script>
  import NavItem from '@/components/NavItem'

  export default {
    name: 'Navbar',
    components: {NavItem},
    props: ['navItems', 'currentTab', 'updateCurrentTab']
  }

</script>

<style scoped>

</style>