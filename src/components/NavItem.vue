<template>
  <ul class="w-full">
    <li id="nav-item" v-for="(item, index) of navItems" :key="index"
        class="relative py-2 lg:py-3.5 pl-5 lg:pl-4 xl:pl-7 my-1 cursor-pointer rounded-3xl md:rounded-l-3xl md:rounded-r-none light-text text-center md:text-left"
        :class="[currentTab === $t(item.name) ? 'panel-background main-text-color font-bold':
        'hover:bg-pink-50 hover:bg-opacity-10 duration-500 light-font']"
        @click="updateCurrentTab(item)">
      <NavItemSector class="hidden md:block transform translate-x-0 -translate-y-full rotate-90 top-0"
                     v-if="currentTab === $t(item.name)"/>
      <router-link :to=" item.path" class="inline-block w-full h-full">
        <span>
          <i :class="'fa fa-' + item.icon"></i>
        </span>
        <span class="inline md:hidden lg:inline ml-3 xl:ml-6">{{ $t(item.name) }}</span>
      </router-link>
      <NavItemSector class="hidden md:block transform translate-x-0 translate-y-0 rotate-0 top-full"
                     v-if="currentTab === $t(item.name)"/>
    </li>
  </ul>
</template>

<script>
  import NavItemSector from '@/components/NavItemSector'
  import {useI18n} from 'vue-i18n'
  import {computed } from 'vue'

  export default {
    name: 'NavItem',
    components: {NavItemSector},
    setup () {
      const i18n = useI18n()
      const navItems = computed(() =>
          [
            {
              name: 'navbar.navItems.dashboard',
              icon: 'home',
              path: '/dashboard'
            },
            {
              name: 'navbar.navItems.pages',
              icon: 'file',
              path: '/pages'
            },
            {
              name: 'navbar.navItems.users',
              icon: 'users',
              path: '/users'
            },
            {
              name: 'navbar.navItems.archive',
              icon: 'archive',
              path: '/archive'
            }
          ]
      )

      // const state = reactive({
      //   currentTab: i18n.t('navbar.navItems.dashboard')
      // })

      let currentTab = computed(() => i18n.t('navbar.navItems.dashboard'))

      function updateCurrentTab (item) {
        console.log(currentTab)
        currentTab = i18n.t(item.name)
        console.log(currentTab)
      }

      /* Its really funny!
      * Using computed causes maintenance in switching language
      * Using reactive causes reactivity in each language but lags when you switch lang
      *
      * I really hope ypo to find the problem!
      */

      return {
        // state,
        currentTab,
        navItems,
        updateCurrentTab
      }
    }
  }
</script>

<style scoped>

</style>