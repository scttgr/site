import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      release: [
        {
          repo: 'SCTTGR001',
          soundcloud: 'playlists/668044188',
        },
        {
          repo: 'SCTTGR002',
          bandcamp: '2053228825',
        },
      ],
      data: [],
    }
  },
  getters: {
    list(state) {
      return state.release.map((item, index) => {
        return {
          key: item.repo,
          ...item,
          body: state.data[index] || null,
        }
      }).filter(repo => repo.body != null)
    },
  },
  actions: {
    initialize({ commit, state }) {
      const promise = state.release.map(item => {
        return axios.get(`https://raw.githubusercontent.com/scttgr/${item.repo}/master/README.md`)
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
