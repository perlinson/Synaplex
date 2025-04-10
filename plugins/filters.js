// 统一注册所有过滤器
export default defineNuxtPlugin((nuxtApp) => {
  // 定义所有过滤器函数
  const filters = {
    // capitalize 过滤器
    capitalize: (value, allWords) => {
      if (!value) return ''

      if (allWords) {
        return value.replace(/\w/g, (l) => l.toUpperCase())
      } else {
        return value.replace(/\b\w/, (l) => l.toUpperCase())
      }
    },

    // lowercase 过滤器
    lowercase: (value) => {
      if (!value) return ''

      return value.toString().toLowerCase()
    },

    // uppercase 过滤器
    uppercase: (value) => {
      if (!value) return ''

      return value.toString().toUpperCase()
    },

    // formatDate 过滤器
    formatDate: (value, filterFormat) => {
      // 需要导入 moment
      const moment = nuxtApp.$moment || window.moment
      if (!moment) {
        console.error('Moment.js is not available')
        return value
      }

      // 获取 store
      const store = useNuxtApp().$store
      const { zone, format } = store?.state?.app?.time || { zone: 'UTC', format: 'lll' }

      if (value) {
        return moment(value).tz(zone).format(filterFormat || format || 'lll')
      }

      return ''
    },

    // formatCurrency 过滤器
    formatCurrency: (value, currency) => {
      // 获取 store
      const store = useNuxtApp().$store
      currency = currency || store?.state?.app?.currency

      if (!currency) {
        return value
      }

      return formatPrice(value, currency)
    }
  }

  // 辅助函数 - formatPrice
  function formatPrice(price, currency) {
    try {
      const numberFormatted = numberFormat(
        price,
        currency.decimalDigits,
        currency.decimalSeparator,
        currency.thousandsSeparator
      )

      if (currency.currencySymbol) {
        const priceSeparator = currency.currencySymbolNumberOfSpaces > 0
          ? ' '.repeat(currency.currencySymbolNumberOfSpaces)
          : ''
        let priceParts = [numberFormatted, priceSeparator, currency.currencySymbol]

        if (currency.currencySymbolPosition === 'left') {
          priceParts = priceParts.reverse()
        }

        return priceParts.join('')
      } else {
        return numberFormatted
      }
    } catch (e) {
      return price
    }
  }

  // 辅助函数 - numberFormat
  function numberFormat(number, decimals, dec_point, thousands_sep) {
    if (isNaN(number)) {
      return number
    }

    const negative = number < 0

    if (negative) number = number * -1

    const str = number.toFixed(decimals ? decimals : 0).toString().split('.')
    const parts = []

    for (let i = str[0].length; i > 0; i -= 3) {
      parts.unshift(str[0].substring(Math.max(0, i - 3), i))
    }

    str[0] = parts.join(thousands_sep ? thousands_sep : ',')

    return (negative ? '-' : '') + str.join(dec_point ? dec_point : '.')
  }

  // 全局注册过滤器
  nuxtApp.provide('filters', filters)

  // 为了兼容性，也可以单独提供每个过滤器
  Object.keys(filters).forEach(key => {
    nuxtApp.provide(`filter.${key}`, filters[key])
  })
})
