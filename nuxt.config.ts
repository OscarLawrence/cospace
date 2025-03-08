// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-27',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/device',
    '@nuxt/test-utils/module'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'fade',
      mode: 'out-in' // default
    }
  },

  runtimeConfig: {
    public: {
      DEFAULT_AVATAR_COLLECTION: 'lorelei'
    }
  },

  i18n: {
    vueI18n: './i18n/i18n.config.ts',
    strategy: 'no_prefix',
    defaultLocale: 'en',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'de',
        name: 'Deutsch',
        iso: 'de-DE'
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US'
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR'
      },
      {
        code: 'nl',
        name: 'Nederlands',
        iso: 'nl-NL'
      },
      {
        code: 'es',
        name: 'Español',
        iso: 'es-ES'
      }
    ]
  }
})