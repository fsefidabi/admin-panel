<template>
  <div class="flex-col flex-wrap">
    <h2 class="mb-7 text-lg font-bold">{{ $t('dashboard.title') }}</h2>
    <div class="flex justify-between flex-wrap lg:flex-nowrap w-full">
      <div v-for="(cardItem, index) in state.cardWidgets" :key="index" class="my-5 w-full sm:w-9/19 lg:w-3/13">
        <CardComponent
            :title="cardItem.title"
            :icon="cardItem.icon"
            :color="cardItem.color"
            :value="cardItem.value"
            :difference="cardItem.difference"
            :rate-sign="'fa fa-angle-' + cardItem.rate"
        />
      </div>
    </div>
    <div class="md:w-1/2 mt-10 border text-3xl">
      <IncomeChart :height="200"/>
    </div>
  </div>
</template>

<script>
  import {useI18n} from 'vue-i18n'
  import {computed, reactive} from 'vue'
  import CardComponent from '../components/CardComponent.vue'
  import IncomeChart from '../components/IncomeChart.vue'

  export default {
    name: 'Dashboard',
    components: {IncomeChart, CardComponent},
    setup () {
      const i18n = useI18n()
      const state = reactive({
        cardWidgets: [
          {
            title: computed(() => i18n.t('dashboard.cards.newUsersCard.title')),
            icon: 'fa fa-user-circle',
            color: 'text-pink-500',
            value: 173,
            difference: 17,
            rate: 'down'
          },
          {
            title: computed(() => i18n.t('dashboard.cards.newOrdersCard.title')),
            icon: 'fa fa-shopping-cart',
            color: 'text-purple-800',
            value: 378,
            difference: 918,
            rate: 'down'
          },
          {
            title: computed(() => i18n.t('dashboard.cards.totalProductsCard.title')),
            icon: 'fa fa-shopping-bag',
            color: 'text-lime-500',
            value: 5918,
            difference: 614,
            rate: 'up'
          },
          {
            title: computed(() => i18n.t('dashboard.cards.monthlyProfitCard.title')),
            icon: 'fa fa-line-chart',
            color: 'text-blue-700',
            value: 6420000,
            difference: 367,
            rate: 'down'
          }
        ]
      })

      return {
        state
      }
    }
  }
</script>

<style>

</style>
