import movieService from '@/services/movieService'

const state = {
  popularMovies: [],
  searchedMovies: [],
  loading: false
}
const mutations = {
  SET_POPULAR_MOVIES(state, data) {
    state.popularMovies = data
  },
  SET_LOADING(state, isLoading) {
    state.loading = isLoading
  },
  SET_SEARCHED_MOVIES(state, data) {
    state.searchedMovies = data
  }
}
const getters = {
  _popularMovies(state) {
    return state.popularMovies
  },
  _loading(state) {
    return state.loading
  },
  _searchedMovies(state) {
    return state.searchedMovies
  }
}
const actions = {
  async getPopularMovies({ commit }) {
    try {
      commit('SET_LOADING', true)
      await movieService.getPopularMovies().then((res) => {
        commit('SET_POPULAR_MOVIES', res.data.results)
      })
    } catch (e) {
      console.log(e)
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async getSearchedMovies({ commit }, payload) {
    try {
      commit('SET_LOADING', true)
      await movieService.searchMovie(payload).then((res) => {
        commit('SET_SEARCHED_MOVIES', res.data.results)
      })
    } catch (e) {
      console.log(e)
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
