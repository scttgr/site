import Vue from 'vue'
import Vuex from 'vuex'
import news from '@/store/modules/News'
import release from '@/store/modules/Release'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    news,
    release,
  },
  getters: {},
  strict: process.env.NODE_ENV !== 'production',
})

export default store
