<template>
  <nav class="px-10 justify-start">
    <div class="flex md:block justify-between items-center mb-4">
      <div class="md:hidden w-4 h-3 relative origin-center cursor-pointer" @click="toggleHamburgerClass">
        <div class=" hamburgerIcon top-0" :class="[state.hamburgerIsActive === true ? 'transform top-1/2 rotate-45' : '']"></div>
        <div class="hamburgerIcon top-1/2 transform -translate-y-1/2" :class="[state.hamburgerIsActive === true ? 'hidden' : '']"></div>
        <div class="hamburgerIcon bottom-0" :class="[state.hamburgerIsActive === true ? 'transform top-1/2 -rotate-45' : '']"></div>
      </div>
    </div>
    <div>
      <NavItem class="md:block duration-500" :class="[state.hamburgerIsActive === true ? 'block' : 'hidden']"/>
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