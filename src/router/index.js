import Vue from 'vue'
import VueRouter from 'vue-router'
import { Notify } from 'quasar'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store /*, ssrContext */}) {

  function parseJwt (token) {
    if (token) {
      let base64Url = token.split('.')[1]
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      let jsonPayload = decodeURIComponent(Buffer.from(base64, "base64").toString("ascii").split("").map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))
      return JSON.parse(jsonPayload)
    } else {
      return null
    }
  }

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  })

  Router.beforeEach((to, from, next) => {

    if (to.path == '/') {
      store.dispatch('mainstore/carregarToken')
    }    

    if (to.matched.some(record => record.meta.autenticar) &&
     !store.getters['mainstore/token']) {      
      next('/login')
    } else {
      const jwtPayload = parseJwt(store.getters['mainstore/token']) 
      if (jwtPayload) {
        if (jwtPayload.exp < Date.now() / 1000) {
          Notify.create({ color: 'negative', position: 'top',
            message: 'Token expirado!', icon: 'report_problem'
          })  
        }
      }
      next()
    }
  })  

  return Router
}
