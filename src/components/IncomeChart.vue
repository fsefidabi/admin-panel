<script>
  import {defineComponent} from 'vue'
  import {Bar} from 'vue3-chart-v2'
  import {useI18n} from 'vue-i18n'

  export default defineComponent({
    name: 'MonthlyChart',
    extends: Bar,
    props: ['options'],
    data () {
      return {
        i18n: useI18n()
      }
    },
    mounted () {
      this.renderChart({
        labels: [
          this.i18n.t('dashboard.incomeChart.months.Jan'),
          this.i18n.t('dashboard.incomeChart.months.Feb'),
          this.i18n.t('dashboard.incomeChart.months.Mar'),
          this.i18n.t('dashboard.incomeChart.months.Apr'),
          this.i18n.t('dashboard.incomeChart.months.May'),
          this.i18n.t('dashboard.incomeChart.months.Jun'),
          this.i18n.t('dashboard.incomeChart.months.Jul'),
          this.i18n.t('dashboard.incomeChart.months.Aug'),
          this.i18n.t('dashboard.incomeChart.months.Sep'),
          this.i18n.t('dashboard.incomeChart.months.Oct'),
          this.i18n.t('dashboard.incomeChart.months.Nov'),
          this.i18n.t('dashboard.incomeChart.months.Dec')],
        datasets: [
          {
            label: this.i18n.t('dashboard.incomeChart.title'),
            backgroundColor: '#2b8ea8',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ],
        responsive: false,
        maintainAspectRatio: false
      })
    }
  })
</script>
