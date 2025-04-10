import VueApexCharts from '../components/common/ApexCharts'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('apexchart', VueApexCharts)
})
