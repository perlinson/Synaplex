import { defineStore } from 'pinia'
import configs from '../configs'

const { product, time, theme, currencies } = configs

const { globalTheme, menuTheme, toolbarTheme, isToolbarDetached, isContentBoxed, isRTL } = theme
const { currency, availableCurrencies } = currencies

// 货币属性
interface Currency {
  label: string;
  decimalDigits: number;
  decimalSeparator: string;
  thousandsSeparator: string;
  currencySymbol: string;
  currencySymbolNumberOfSpaces: number;
  currencySymbolPosition: string;
}

// 应用状态
interface AppState {
  product: any;
  time: any;
  currency: Currency;
  availableCurrencies: Currency[];
  globalTheme: string;
  menuTheme: string;
  toolbarTheme: string;
  isToolbarDetached: boolean;
  isContentBoxed: boolean;
  isRTL: boolean;
}

// 应用存储
export const useAppStore = defineStore('app', {
  // 状态
  state: (): AppState => ({
    product,
    time,

    // 货币
    currency,
    availableCurrencies,

    // 主题和布局配置
    globalTheme,
    menuTheme,
    toolbarTheme,
    isToolbarDetached,
    isContentBoxed,
    isRTL
  }),

  // getters
  getters: {
    getGlobalTheme: (state) => state.globalTheme,
    getMenuTheme: (state) => state.menuTheme,
    getToolbarTheme: (state) => state.toolbarTheme,
    getIsToolbarDetached: (state) => state.isToolbarDetached,
    getIsContentBoxed: (state) => state.isContentBoxed,
    getIsRTL: (state) => state.isRTL,
    getCurrency: (state) => state.currency,
    getAvailableCurrencies: (state) => state.availableCurrencies
  },

  // actions
  actions: {
    // 设置全局主题
    setGlobalTheme(theme: string) {
      this.globalTheme = theme
    },

    // 设置菜单主题
    setMenuTheme(theme: string) {
      this.menuTheme = theme
    },

    // 设置工具栏主题
    setToolbarTheme(theme: string) {
      this.toolbarTheme = theme
    },

    // 设置工具栏是否分离
    setIsToolbarDetached(isDetached: boolean) {
      this.isToolbarDetached = isDetached
    },

    // 设置内容是否盒装
    setIsContentBoxed(isBoxed: boolean) {
      this.isContentBoxed = isBoxed
    },

    // 设置是否 RTL
    setIsRTL(isRTL: boolean) {
      this.isRTL = isRTL
    },

    // 设置货币
    setCurrency(currency: Currency) {
      this.currency = currency
    }
  }
})
