import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      data: [],
    }
  },
  getters: {
    list(state) {
      return state.data.map(d => {
        return {
          key: d.sha,
          body: d.commit.message,
          date: d.commit.author.date,
          url: d.html_url,
        }
      })
    },
  },
  actions: {
    initialize({ commit }) {
      axios.get('https://api.github.com/repos/scttgr/news/commits')
      .then(response => {
        commit('setData', response.data)
      })
    },
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    },
  },
}
