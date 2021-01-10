<template>
  <ul class="w-full">
    <li id="nav-item" v-for="(item, index) of navItems" :key="index"
        class="relative py-2 lg:py-3.5 pl-4 lg:pl-5 lg:pl-7 my-1 cursor-pointer rounded-l-3xl text-white"
        :class="{'bg-gray-100 text-gray-800 font-bold': currentTab === item.name,
        'hover:bg-pink-50 hover:bg-opacity-10 duration-500': currentTab !== item.name}"
        @click="updateCurrentTab(item)">
      <NavItemSector class="transform translate-x-0 -translate-y-full rotate-90 top-0" v-if="currentTab === item.name"/>
      <a :href="item.name.toLowerCase()">
        <span>
          <i :class="item.icon"></i>
        </span>
        <span class="hidden lg:inline lg:ml-3 xl:ml-6">{{ item.name }}</span>
      </a>
      <NavItemSector class="transform translate-x-0 translate-y-0 rotate-0 top-full" v-if="currentTab === item.name"/>
    </li>
  </ul>
</template>

<script>
  import NavItemSector from '@/components/NavItemSector'

  export default {
    name: 'NavItem',
    components: {NavItemSector},
    props: ['navItems', 'currentTab', 'updateCurrentTab']
  }
</script>

<style scoped>

</style>