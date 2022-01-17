import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies
  },
  plugins: [
    createPersistedState({
      paths: ['movies']
    })
  ]
})
