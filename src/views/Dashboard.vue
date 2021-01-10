<template>
  <div class="flex-col flex-wrap">
    <h2 class="mb-7 text-lg font-bold">General Report</h2>
    <div class="flex w-full">
      <div v-for="(cardItem, index) in CardWidgets" :key="index" class="w-1/4 mx-3 first:ml-0 last:mr-0">
        <CardComponent
            :title="cardItem.title"
            :icon="cardItem.icon"
            :value="cardItem.value"
            :difference="cardItem.difference"
            :rate-sign="'fa fa-angle-' + cardItem.rate"
        />
      </div>
    </div>
    <div class="w-full h-80 mt-10">
      <img src="../assets/vue-chartjs.png" class="w-full h-full">
    </div>
  </div>
</template>

<script>
  import CardComponent from '@/components/CardComponent'

  export default {
    name: 'Dashboard',
    components: {CardComponent},
    setup () {
      const CardWidgets = [
        {
          title: 'New Users',
          icon: 'fa fa-user-circle text-pink-500',
          value: 173,
          difference: 17,
          rate: 'down'
        },
        {
          title: 'New Orders',
          icon: 'fa fa-shopping-cart text-purple-800',
          value: 378,
          difference: 918,
          rate: 'down'
        },
        {
          title: 'Total Products',
          icon: 'fa fa-shopping-bag text-lime-500',
          value: 5918,
          difference: 614,
          rate: 'up'
        },
        {
          title: 'Monthly Profits',
          icon: 'fa fa-line-chart text-blue-700',
          value: '6.420.000 IR',
          difference: 367,
          rate: 'down'
        }
      ]

      return {
        CardWidgets
      }
    }
  }
</script>
