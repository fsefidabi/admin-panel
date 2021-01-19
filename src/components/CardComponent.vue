<template>
  <div
      class="flex flex-wrap justify-end p-6 card-background rounded-2xl shadow-lg transform hover:-translate-y-2 duration-300">
    <div class="w-full flex items-center">
      <i :class="[icon, color]" class="text-3xl lg:text-lg xl:text-3xl 2xl:text-2xl"></i>
      <div class="mx-3 text-lg lg:text-sm xl:text-lg gray-font-color">{{ title }}</div>
    </div>
    <div class="w-full mt-6 text-right rtl:text-left">
      <span class="font-bold text-3xl lg:text-2xl 2xl:text-3xl">{{ getPersianDigits(value) }}</span>
      <span v-if="title === 'Monthly Profits'" class="text-sm"> IR</span>
    </div>
    <div class="mt-3 px-2 rounded-xl italic active-text"
         :class="[rateSign === 'fa fa-angle-up' ? 'bg-green-500' : 'bg-red-600']">
      <span class="px-2">{{ getPersianDigits(difference) }}</span>
      <i :class="rateSign"></i>
    </div>
  </div>
</template>

<script>
  import {useI18n} from 'vue-i18n'

  export default {
    name: 'CardComponent',
    props: ['title', 'icon', 'color', 'value', 'difference', 'rateSign'],
    setup() {
      const i18n = useI18n()
      function getPersianDigits (num) {
        if (i18n.locale.value === 'fa') {
          const persianDigits = {
            0: '۰',
            1: '۱',
            2: '۲',
            3: '۳',
            4: '۴',
            5: '۵',
            6: '۶',
            7: '۷',
            8: '۸',
            9: '۹'
          }
          for (let i = 0; i <= 9; i++) {
            num = String(num).replace(new RegExp(`${i}`, 'g'), persianDigits[i])
          }
        }
        return num
      }

      return {
        getPersianDigits
      }
    }
  }
</script>

<style scoped>

</style>