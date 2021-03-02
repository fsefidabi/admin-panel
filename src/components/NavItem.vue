<template>
  <ul class="w-full flex flex-col md:flex-row items-center ">
    <li v-for="(item, index) of navItems" :key="index"
        class="relative inline-block cursor-pointer rounded-2xl md:rounded-t-2xl md:rounded-b-none light-text text-center md:text-left"
        :class="[state.currentTab === $t(item.name) ? 'panel-background main-text-color font-bold':
        'hover:bg-pink-50 hover:bg-opacity-20 duration-500 light-font']"
        @click="updateCurrentTab()">
      <router-link :to="`/${item.path}`" class="inline-block h-full py-2 lg:py-3.5 px-6 rtl:pr-6">
        <NavItemSector class="hidden md:block transform translate-x-full rotate-180 right-0" v-if="state.currentTab === $t(item.name)"/>
        <span>
          <i :class="item.icon"></i>
        </span>
        <span class="inline md:hidden lg:inline mx-5 rtl:ml-0">{{ $t(item.name) }}</span>
        <NavItemSector class="hidden md:block transform -translate-x-full rotate-90 left-0" v-if="state.currentTab === $t(item.name)"/>
      </router-link>
    </li>
  </ul>
</template>

<script>
  import {useI18n} from 'vue-i18n'
  import {reactive, computed, ref, watch} from 'vue'
  import {useRouter} from 'vue-router'
  import NavItemSector from '@/components/NavItemSector'

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
              icon: 'fa fa-home',
              path: 'dashboard'
            },
            {
              name: 'navbar.navItems.email-builder',
              icon: 'fa fa-file',
              path: 'email-builder'
            },
            {
              name: 'navbar.navItems.users',
              icon: 'fa fa-users',
              path: 'users'
            },
            {
              name: 'navbar.navItems.archive',
              icon: 'fa fa-archive',
              path: 'archive'
            }
          ]
      )

      const state = reactive({
        currentTab: i18n.t(`navbar.navItems.${router.currentRoute.value.fullPath.split('/')[1]}`)
      })

      watch(locale, (newVal, oldVal) => {
        if (oldVal !== newVal) {
          router.push('/dashboard')
          state.currentTab = i18n.t('navbar.navItems.dashboard', newVal)
        }
      })

      function updateCurrentTab () {
        state.currentTab = i18n.t(`navbar.navItems.${router.currentRoute.value.fullPath.split('/')[1]}`)
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
