<template>
  <div class="flex flex-wrap justify-end p-6 pr-8 bg-white rounded-2xl shadow-lg transform hover:-translate-y-2 duration-300">
    <div class="w-full flex items-center">
      <i :class="icon" class="text-4xl"></i>
      <div class="ml-3 text-gray-600">{{ title }}</div>
    </div>
    <div class="w-full mt-6 font-bold text-3xl text-right">{{ value }}</div>
    <div class="mt-3 px-2 rounded-xl italic"
         :class="[rateSign === 'fa fa-angle-up' ? 'bg-green-500' : 'bg-red-600 text-white']">
      <span class="pr-2">{{ difference }}</span>
      <i :class="rateSign"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardComponent',
    props: ['title', 'icon', 'value', 'difference', 'rateSign']
  }
</script>

<style scoped>

</style>