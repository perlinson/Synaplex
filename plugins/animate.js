// 将 Vue 2 插件改为 Nuxt 3 的 defineNuxtPlugin
export default defineNuxtPlugin((nuxtApp) => {
  /**
   * Animate html elements with the help of the library Animate.css
   * https://animate.style/
   *
   * @param {*} node
   * @param {String} animationName
   * @param {Function} callback when the animation ends
   */
  nuxtApp.provide('animate', (node, animationName, callback) => {
    node.classList.add('animate__animated', `animate__${animationName}`)

    function handleAnimationEnd() {
      node.classList.remove('animate__animated', `animate__${animationName}`)
      node.removeEventListener('animationend', handleAnimationEnd)

      // eslint-disable-next-line callback-return
      if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
  })
})
