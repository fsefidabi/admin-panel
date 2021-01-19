<template>
  <div class="absolute w-3 h-3 lg:w-3 lg:h-3 xl:w-4 xl:h-4 -translate-y-full top-full bg-contain z-10"
       :class="[isDarkMode === false ? 'bg-light-nav-item-sector' : 'bg-dark-nav-item-sector']"></div>
</template>

<script>
  import {useStore} from 'vuex'
  import {computed} from 'vue'

  export default {
    name: 'NavItemSector',

    setup () {
      const store = useStore()
      const isDarkMode = computed(() => store.state.isDarkMode)
      return {
        isDarkMode
      }
    }
  }
</script>

<style scoped>

</style>