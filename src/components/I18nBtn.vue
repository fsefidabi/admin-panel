<template>
  <div>
    <button v-if="$i18n.locale === 'en'" @click="switchLocale($i18n.locale)" class="focus:outline-none">
      <flag :iso="'ir'" :squared=false />
    </button>
    <button v-if="$i18n.locale === 'fa'" @click="switchLocale($i18n.locale)" class="focus:outline-none">
      <flag :iso="'us'" :squared=false />
    </button>
  </div>
</template>

<script>
  import {useI18n} from 'vue-i18n'

  export default {
    name: 'I18nButton',
    setup() {
      const i18n = useI18n()

      function switchLocale (lang) {
        if (lang === 'en') {
          i18n.locale.value = 'fa'
        } else {
          i18n.locale.value = 'en'
        }
      }

      return {
        switchLocale
      }
    }
  }
</script>

<style scoped>

</style>