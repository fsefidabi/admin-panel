<template>
  <div
      class="flex flex-wrap justify-end p-6 card-background rounded-2xl shadow-lg transform hover:-translate-y-2 duration-300">
    <div class="w-full flex items-center">
      <i :class="[icon, color]" class="text-3xl lg:text-lg xl:text-3xl 2xl:text-2xl"></i>
      <div class="mx-3 text-lg lg:text-sm xl:text-lg gray-font-color">{{ title }}</div>
    </div>
    <div class="w-full mt-6 text-right rtl:text-left">
      <span class="font-bold text-3xl lg:text-2xl 2xl:text-3xl">{{ value }}</span>
      <span v-if="title === 'Monthly Profits'" class="text-sm"> IR</span>
    </div>
    <div class="mt-3 px-2 rounded-xl italic active-text"
         :class="[rateSign === 'fa fa-angle-up' ? 'bg-green-500' : 'bg-red-600']">
      <span class="px-2">{{ difference }}</span>
      <i :class="rateSign"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardComponent',
    props: ['title', 'icon', 'color', 'value', 'difference', 'rateSign']
  }
</script>

<style scoped>

</style>