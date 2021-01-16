<template>
  <nav class="md:w-1/12 lg:w-1/6 text-left">
    <div class="flex md:block justify-between items-center">
      <a href="#"
         class="inline-block md:w-full md:mt-5 md:my-5 lg:mb-0 ml-7 md:ml-0 lg:ml-7  text-xl lg:text-2xl light-text font-bold text-left md:text-center lg:text-left">
        <i class="fa fa-diamond" aria-hidden="true"></i>
        <span class="md:hidden lg:inline ml-3">{{$t('navbar.websiteLogo')}}</span>
      </a>
      <div class="md:hidden w-6 h-4 relative origin-center cursor-pointer" @click="toggleHamburgerClass">
        <div class=" hamburgerIcon top-0" :class="[state.hamburgerIsActive === true ? 'transform top-1/2 rotate-45' :
      '']"></div>
        <div
            class="hamburgerIcon top-1/2 transform -translate-y-1/2" :class="[state.hamburgerIsActive === true ?
          'hidden' : '']"></div>
        <div class="hamburgerIcon bottom-0" :class="[state.hamburgerIsActive === true ?
      'transform top-1/2 -rotate-45' : '']"></div>
      </div>
    </div>
    <div class="md:hidden lg:block w-full lg:w-11/12 my-6 mx-auto border-b border-gray-50 border-opacity-20"></div>
    <div>
      <NavItem class="md:block duration-500"
               :class="[state.hamburgerIsActive === true ? 'block' : 'hidden']"/>
    </div>
  </nav>
</template>

<script>
  import NavItem from '@/components/NavItem'
  import {reactive} from 'vue'

  export default {
    name: 'Navbar',
    components: {NavItem},
    setup () {
      const state = reactive({
        hamburgerIsActive: false
      })

      function toggleHamburgerClass () {
        state.hamburgerIsActive = !state.hamburgerIsActive
      }

      return {
        state,
        toggleHamburgerClass
      }
    }
  }

</script>

<style scoped>

</style>