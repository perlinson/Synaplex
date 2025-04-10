import moment from 'moment-timezone'

export default defineNuxtPlugin((nuxtApp) => {
  const formatDate = (value, filterFormat) => {
    // u5728 Nuxt 3 u4e2du83b7u53d6 store
    const store = useNuxtApp().$store
    const { zone, format } = store.state.app.time

    if (value) {
      return moment(value).tz(zone).format(filterFormat || format || 'lll')
    }

    return ''
  }

  // u6ce8u518cu8fc7u6ee4u5668
  nuxtApp.provide('filters', {
    formatDate
  })
})
