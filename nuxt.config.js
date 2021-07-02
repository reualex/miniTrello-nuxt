import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'miniTrello',
    titleTemplate: 'miniTrello | %s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/uuid.js',
    '@/plugins/lodash.js',
    '@/plugins/draggable.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', 'nuxt-vuex-localstorage'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
    strategies: {
      google: {
        clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
        codeChallengeMethod: '',
        responseType: 'token id_token',
      },
      github: {
        clientId: process.env.VUE_APP_GIT_CLIENT_ID,
        clientSecret: process.env.VUE_APP_GIT_CLIENT_SECRET,
      },
    },

    redirect: {
      login: '/login',
      callback: '/callback',
      logout: '/login',
    },
  },

  env: {
    VUE_APP_GOOGLE_CLIENT_ID: process.env.VUE_APP_GOOGLE_CLIENT_ID,
    VUE_APP_GOOGLE_CLIENT_SECRET: process.env.VUE_APP_GOOGLE_CLIENT_SECRET,

    VUE_APP_GIT_CLIENT_ID: process.env.VUE_APP_GIT_CLIENT_ID,
    VUE_APP_GIT_CLIENT_SECRET: process.env.VUE_APP_GIT_CLIENT_SECRET,

    VUE_APP_BASE_URL: process.env.VUE_APP_BASE_URL,
  },
  server: {
    port: 8085,
    timing: false,
  },
}
