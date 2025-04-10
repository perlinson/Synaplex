// 将 Vue 2 过滤器改为 Nuxt 3 的 defineNuxtPlugin 格式
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('filters', {
    lowercase: (value) => {
      if (!value) return ''

      return value.toString().toLowerCase()
    }
  })
})
