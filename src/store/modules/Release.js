import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      repos: [
        'SCTTGR001',
      ],
      data: [],
    }
  },
  getters: {
    list(state) {
      return state.repos.map((repo, index) => {
        return {
          repo,
          key: repo,
          body: state.data[index] || null,
        }
      }).filter(repo => repo.body != null)
    },
  },
  actions: {
    initialize({ commit, state }) {
      const promise = state.repos.map(repo => {
        return axios.get(`https://raw.githubusercontent.com/scttgr/${repo}/master/README.md`)
          .then(response => response.data, error => null)
      })
      Promise.all(promise)
        .then(data => {
          commit('setData', data)
        })
    },
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    },
  },
}
