// 将 Vue 2 过滤器更新为 Nuxt 3 格式
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('filters', {
    capitalize: (value, allWords) => {
      if (!value) return ''

      if (allWords) {
        return value.replace(/\b\w/g, (l) => l.toUpperCase())
      } else {
        return value.replace(/\b\w/, (l) => l.toUpperCase())
      }
    }
  })
})
