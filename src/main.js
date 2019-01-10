import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'

Vue.config.productionTip = false

const redirect = sessionStorage.redirect
if (redirect != undefined) {
  if (/404.html$/.test(redirect) == false && redirect != location.href) {
    history.replaceState(null, null, redirect)
  }
  delete sessionStorage.redirect
}

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
