import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "bases" */ './views/Home.vue'),
    },
    {
      path: '/release',
      component: () => import(/* webpackChunkName: "release" */ './views/Release.vue'),
    },
    {
      path: '/contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "bases" */ './views/NotFound.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 500)
      })
    } else {
      return {x: 0, y: 0}
    }
  },
})

export default router
