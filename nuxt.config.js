export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Basic',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  axios: {
    baseURL: 'http://localhost:8000/'
  },

  auth: {
    strategies: {
      local: {
        endopoints: {
          login: {
            method: 'post',
            url: 'login',
            propertyName: 'token'
          },
          user: {
            method: 'get',
            url: 'postPerformance',
            propertyName: 'user'
          },
          logout: false
        },
      },
    },
    redirect: {
      login: 'admin/index2',
    }
    // local: {
    //   localStorage: {
    //     prefix: 'auth.'
    //   },
    //   token: {
    //     prefix: 'access_token.',
    //     property: 'access_token',
    //     maxAge: 86400,
    //     type: 'Bearer'
    //   },
    //   refreshToken: {
    //     prefix: 'refresh_token.',
    //     property: 'refresh_token',
    //     data: 'refresh_token',
    //     maxAge: 60 * 60 * 24 * 15
    //   },
    //   user: {
    //     peoperty: 'user',
    //     autoFetch: true
    //   },
    //   endpoints: {
    //     login: {
    //       url: '/login',
    //       methods: 'post'
    //     },
    //     refresh: {
    //       url: '/token/refresh/',
    //       methods: 'post'
    //     },
    //     user: {
    //       url: '/user',
    //       methods: 'get'
    //     },
    //     logout: {
    //       url: 'logout',
    //       methods: 'post'
    //     }

    //   },
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

}
