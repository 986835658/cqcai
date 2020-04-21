export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "重庆市采购协议平台",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      // {
      //   src: "/script/lazysizes/lazysizes.min.js",
      //   async: true
      // }
    ]
  },
  /*
   ** Customize the progress-bar color
   */

  // loading: "~/components/loading.vue",
  /*
   ** Global CSS
   */

    server: {
      port: 3032, // default: 3000
      host: '0.0.0.0' // default: localhost
    },
    // other configs
  
  css: ["~/assets/main.css", "~/assets/min.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~plugins/iview", ssr: false },
    { src:"~plugins/vue-particles",ssr:false},
    "~/plugins/mock.js",
    "~/plugins/axios.js",
    "~/plugins/saveCook.js",
    '~plugins/echarts.js'
  ],
  router: {
    linkActiveClass: "active-link",
    linkExactActiveClass: "exact-active-link"
  },
  // router: {
  //   middleware: "authenticated"
  // },
  /*
   ** Nuxt.js dev-modules
   */
  axios: {
    baseURL: '',
    proxy: false
  },
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "bootstrap-vue/nuxt",
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  }
};
