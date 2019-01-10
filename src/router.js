import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'

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

Vue.use(VueAnalytics, {
  id: 'UA-131902923-1',
  router,
})

export default router
