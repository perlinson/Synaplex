<template>
  <v-menu
    offset-y
    left
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">{{ `${currency.currencySymbol} ${currency.label}` }}</v-btn>
    </template>

    <!-- currencies list -->
    <v-list density="compact" nav>
      <v-list-item v-for="item in currencies" :key="item.label" @click="setCurrency(item)">
        <v-list-item-title>{{ `${item.currencySymbol} ${item.label}` }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { useAppStore } from '../../stores/app'

/*
|---------------------------------------------------------------------
| Toolbar Currency Component
|---------------------------------------------------------------------
|
| Quickmenu to change currency in the toolbar
|
*/
export default {
  data() {
    return {
      currencies: [{
        label: 'USD',
        decimalDigits: 2,
        decimalSeparator: '.',
        thousandsSeparator: ',',
        currencySymbol: '$',
        currencySymbolNumberOfSpaces: 0,
        currencySymbolPosition: 'left'
      }, {
        label: 'EUR',
        decimalDigits: 2,
        decimalSeparator: '.',
        thousandsSeparator: ',',
        currencySymbol: '€',
        currencySymbolNumberOfSpaces: 1,
        currencySymbolPosition: 'right'
      }, {
        label: 'CNY',
        decimalDigits: 2,
        decimalSeparator: '.',
        thousandsSeparator: ',',
        currencySymbol: '¥',
        currencySymbolNumberOfSpaces: 0,
        currencySymbolPosition: 'left'
      }]
    }
  },
  computed: {
    currency() {
      const appStore = useAppStore()
      return appStore.currency
    }
  },
  methods: {
    setCurrency(currency) {
      const appStore = useAppStore()
      appStore.setCurrency(currency)
    }
  }
}
</script>
