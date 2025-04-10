import config from './configs'

const { locale, availableLocales, fallbackLocale } = config.locales
const { gaId } = config.analytics

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // ssr: false,
  // target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - nuxt',
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap' },
      ...config.icons.map((href) => ({ rel: 'stylesheet', href }))
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/scss/theme.scss',
    'vuetify/lib/styles/main.sass'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // plugins
    { src: './plugins/animate.js', mode: 'client' },
    { src: './plugins/apexcharts.js', mode: 'client' },
    { src: './plugins/clipboard.js', mode: 'client' },
    { src: './plugins/vue-shortkey.js', mode: 'client' },
    { src: './plugins/vuetify.js' },
    { src: './plugins/i18n.js' },

    // 统一的过滤器插件
    { src: './plugins/filters.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // 添加 nuxt-gtag 模块
    'nuxt-gtag',
    // 添加 Pinia 模块
    '@pinia/nuxt',
    // 添加国际化模块
    ['@nuxtjs/i18n', {
      strategy: 'prefix_except_default',
      defaultLocale: locale,
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      locales: availableLocales.map(locale => ({
        code: locale.code,
        name: locale.name,
        file: locale.file
      })),
      lazy: true,
      langDir: 'translations/',
      fallbackLocale,
      bundle: {
        optimizeTranslationDirective: false
      }
    }]
  ],

  // 配置 nuxt-gtag
  gtag: {
    id: gaId,
    config: {
      debug_mode: true
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vuetify']
  }
})
