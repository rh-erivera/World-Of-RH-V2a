
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: '/design15/col1/15_bg_places_01.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_places_02.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_places_03.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_places_04.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_products_01.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_products_02.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_products_03.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_products_04.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_spaces_01.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_spaces_02.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_spaces_03.jpg', as: 'image'},
      { rel: 'preload', href: '/design15/col1/15_bg_spaces_04.jpg', as: 'image'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-touch'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
