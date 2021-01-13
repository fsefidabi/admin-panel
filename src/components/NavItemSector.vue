<template>
  <div class="absolute w-3 h-3 lg:w-3 lg:h-3 xl:w-4 xl:h-4 right-0 bg-contain"
       :class="[darkMode === false ? 'bg-light-nav-item-sector' : 'bg-dark-nav-item-sector']"></div>
</template>

<script>
  import {computed} from 'vue'
  import {useStore} from 'vuex'

  export default {
    name: 'NavItemSector',

    setup () {
      const store = useStore()
      const darkMode = computed(() => store.state.App.darkMode)

      return {darkMode}
    }
  }
</script>

<style scoped>

</style>