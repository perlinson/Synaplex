// 将 Vue 2 插件更新为 Nuxt 3 的插件
export default defineNuxtPlugin((nuxtApp) => {
  /**
   * Copy to clipboard the text passed
   * @param {String} text string to copy
   * @param {String} toastText message to appear on the toast notification
   */
  nuxtApp.provide('clipboard', (text) => {
    const el = document.createElement('textarea')

    el.value = text
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  })
})
