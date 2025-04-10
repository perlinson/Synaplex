// 将 Vue 2 过滤器更新为 Nuxt 3 格式
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('filters', {
    uppercase: (value) => {
      if (!value) return ''

      return value.toString().toUpperCase()
    }
  })
})
