import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "bases" */ './views/Home.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "bases" */ './views/NotFound.vue'),
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(savedPosition)
  //       }, 500)
  //     })
  //   } else {
  //     return {x: 0, y: 0}
  //   }
  // },
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (router.app.$store.getters['auth/isLoaded']) {
//       const user = router.app.$store.getters['auth/user']
//       next(user ? undefined : { name: 'sign-in', query: { redirect: to.fullPath } })
//     } else {
//       const unwatch = router.app.$store.watch(state => state.auth.user, user => {
//         unwatch()
//         next(user ? undefined : { name: 'sign-in', query: { redirect: to.fullPath } })
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
