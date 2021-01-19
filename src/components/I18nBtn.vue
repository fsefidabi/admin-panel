<template>
  <div>
    <button v-if="$i18n.locale === 'en'" @click="switchLocale('fa')" class="focus:outline-none">
      <flag :iso="'ir'" :squared=false />
    </button>
    <button v-if="$i18n.locale === 'fa'" @click="switchLocale('en')" class="focus:outline-none">
      <flag :iso="'us'" :squared=false />
    </button>
  </div>
</template>

<script>
  import {useStore} from 'vuex'

  export default {
    name: 'I18nButton',
    setup () {
      const store = useStore()

      function switchLocale (lang) {
        store.dispatch('updateLocale', lang)
      }

      return {
        switchLocale
      }
    }
  }
</script>

<style scoped>

</style>