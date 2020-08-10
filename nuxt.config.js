const resolve = require('path').resolve

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /**
   * Source directory
   */
  srcDir: resolve(__dirname, 'src'),
  /**
   * Root directory
   */
  rootDir: resolve(__dirname),
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.8.2/css/all.css',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~assets/scss/main.scss'],
  /**
   * Global SCSS
   */
  styleResources: {
    sass: ['./assets/scss/_variables.sass'],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/style-resources',
  ],
  /**
   * Buefy options config
   */
  buefy: {
    defaultIconPack: 'far',
  },
  /*
   ** i18n module configuration
   */
  i18n: {
    vueI18n: {
      fallbackLocale: 'en',
      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'VND',
            currencyDisplay: 'symbol',
          },
        },
        vi: {
          currency: {
            style: 'currency',
            currency: 'VND',
            currencyDisplay: 'symbol',
          },
        },
      },
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en',
        flag: 'gb',
      },
      {
        code: 'vi',
        iso: 'vi-VN',
        name: 'Việt Nam',
        file: 'vi',
        flag: 'vn',
      },
    ],
    defaultLocale: 'en',
    langDir: 'lang/',
    detectBrowserLanguage: {
      alwaysRedirect: false,
      useCookie: true,
      cookieKey: 'joma.lang',
      fallbackLocale: 'en',
    },
    lazy: true,
    seo: true,
    vuex: {
      moduleName: 'i18n',
      syncLocale: true,
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
