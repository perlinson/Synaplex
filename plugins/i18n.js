// i18n 插件，用于在组件中使用 $t 函数
import { useI18n } from '#imports'
import { useLocalePath } from '#i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  // 确保在模板中可以使用 $t
  vueApp.config.globalProperties.$t = (key) => {
    const { t } = useI18n()
    return t(key)
  }

  // 确保在模板中可以使用 localePath
  vueApp.config.globalProperties.localePath = (route) => {
    const localePath = useLocalePath()
    return localePath(route)
  }
})
