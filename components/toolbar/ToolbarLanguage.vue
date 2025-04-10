<template>
  <v-menu
    offset-y
    left
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ props }">
      <v-btn text :icon="display.smAndDown.value" v-bind="props">
        <flag-icon :round="display.smAndDown.value" :flag="currentLocale.flag"></flag-icon>
        <span v-show="display.mdAndUp.value && showLabel" class="ml-1">{{ currentLocale.name }}</span>
        <v-icon v-if="showArrow">mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list density="compact" nav>
      <v-list-item v-for="locale in availableLocales" :key="locale.code" @click="setLocale(locale.code)">
        <template v-slot:prepend>
          <flag-icon :flag="locale.flag"></flag-icon>
        </template>
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import FlagIcon from '../common/FlagIcon'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '../../stores/locale'
import configs from '../../configs'
import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'
import { useRouter, useLocalePath } from '#imports'

const { availableLocales } = configs.locales

/*
|---------------------------------------------------------------------
| Language Switcher Component
|---------------------------------------------------------------------
|
| Locale menu to choose the language based on the locales present in
| vue-i18n locales available array
|
*/
export default {
  components: {
    FlagIcon
  },
  props: {
    // Show dropdown arrow
    showArrow: {
      type: Boolean,
      default: false
    },
    // Show the country label
    showLabel: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const display = useDisplay()
    const { locale } = useI18n()
    const router = useRouter()
    const localePath = useLocalePath()
    
    const currentLocale = computed(() => {
      return availableLocales.find((i) => i.code === locale.value)
    })
    
    const filteredAvailableLocales = computed(() => {
      return availableLocales.filter((i) => i.code !== locale.value)
    })
    
    const setLocale = (localeCode) => {
      const { setLocale } = useI18n()
      const localeStore = useLocaleStore()
      
      // 
      setLocale(localeCode)
      
      // 
      if (localeCode === 'ar') {
        localeStore.setRTL(true)
      } else {
        localeStore.setRTL(false)
      }
      
      // 
      router.push(localePath('/'))
    }
    
    return {
      display,
      currentLocale,
      availableLocales: filteredAvailableLocales,
      setLocale
    }
  }
}
</script>
