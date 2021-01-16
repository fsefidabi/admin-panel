<template>
  <ul class="w-full flex flex-col md:flex-row items-center ">
    <li v-for="(item, index) of navItems" :key="index"
        class="relative inline-block py-2 lg:py-3.5 px-6 rtl:pr-6 cursor-pointer rounded-2xl md:rounded-t-2xl md:rounded-b-none light-text text-center md:text-left"
        :class="[state.currentTab === $t(item.name) ? 'panel-background main-text-color font-bold':
        'hover:bg-pink-50 hover:bg-opacity-20 duration-500 light-font']"
        @click="updateCurrentTab(item)">
      <NavItemSector class="hidden md:block transform translate-x-full rotate-180 right-0"
                     v-if="state.currentTab === $t(item.name)"/>
      <router-link :to="`/${item.path}`" class="inline-block w-full h-full">
        <span>
          <i :class="'fa fa-' + item.icon"></i>
        </span>
        <span class="inline md:hidden lg:inline mx-5 rtl:ml-0">{{ $t(item.name) }}</span>
      </router-link>
      <NavItemSector class="hidden md:block transform -translate-x-full rotate-90 left-0"
                     v-if="state.currentTab === $t(item.name)"/>
    </li>
  </ul>
</template>

<script>
  import NavItemSector from '@/components/NavItemSector'
  import {useI18n} from 'vue-i18n'
  import {reactive, computed, ref, watch} from 'vue'
  import {useRouter} from 'vue-router'

  export default {
    name: 'NavItem',
    components: {NavItemSector},
    setup () {
      const router = useRouter()
      const i18n = useI18n()
      const locale = ref(i18n.locale)

      const navItems = computed(() =>
          [
            {
              name: 'navbar.navItems.dashboard',
              icon: 'home',
              path: 'dashboard'
            },
            {
              name: 'navbar.navItems.pages',
              icon: 'file',
              path: 'pages'
            },
            {
              name: 'navbar.navItems.users',
              icon: 'users',
              path: 'users'
            },
            {
              name: 'navbar.navItems.archive',
              icon: 'archive',
              path: 'archive'
            }
          ]
      )

      const state = reactive({
        currentTab: i18n.t('navbar.navItems.dashboard')
      })

      watch(locale, (newVal, oldVal) => {
        if (oldVal !== newVal) {
          router.push('/dashboard')
          state.currentTab = i18n.t('navbar.navItems.dashboard', newVal)
        }
      })

      function updateCurrentTab (item) {
        state.currentTab = i18n.t(item.name)
      }

      return {
        state,
        navItems,
        updateCurrentTab
      }
    }
  }
</script>

<style scoped>

</style>