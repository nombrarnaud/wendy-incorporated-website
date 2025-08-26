// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  css: [
    '~/assets/sass/style.scss',
    'aos/dist/aos.css'
  ],
  i18n: {
    locales: [
      {
        code: 'fr',
        file: 'fr.json',
        name: 'Français'
      },
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'fr',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  devServer: {
    port: 8000
  },
  plugins: [
    '~/plugins/aos.client.ts'
  ]
})
