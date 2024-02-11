import vuetify  from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  pages:true,
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
})
// import vuetify from 'vite-plugin-vuetify'
// import { createResolver } from '@nuxt/kit'

// const { resolve } = createResolver(import.meta.url)

// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   css: [
//     'vuetify/lib/styles/main.sass',
//     '@mdi/font/css/materialdesignicons.min.css',
//   ],
//   build: {
//     transpile: ['vuetify'],
//   },
//   modules: [
//     (_options, nuxt) => {
//       nuxt.hooks.hook('vite:extendConfig', (config) => {
//         // @ts-expect-error
//         config.plugins.push(vuetify({ autoImport: true }))
//       })
//     },
//     //...
//   ],
// })