import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useLocaleStore } from '../stores/locale'
import { watch } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const localeStore = useLocaleStore()
  
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'light',
    },
    rtl: localeStore.isRTL
  })

  // 
  watch(() => localeStore.isRTL, (newValue) => {
    vuetify.rtl.value = newValue
  })

  nuxtApp.vueApp.use(vuetify)
})
