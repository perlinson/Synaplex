import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    isRTL: false
  }),
  actions: {
    setRTL(value: boolean) {
      this.isRTL = value
    }
  }
})
