import movieService from '@/services/movieService'

const state = {
  popularMovies: [],
  searchedMovies: [],
  watchList: [],
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
  },
  ADD_TO_WATCH_LIST(state, data) {
    state.watchList.push(data)
  },
  REMOVE_FROM_WATCHLIST(state, data) {
    state.watchList = state.watchList.filter((item) => item.id !== data.id)
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
  },
  _watchList(state) {
    return state.watchList
  },
  _isInWatchList: (state) => (id) => {
    if (state.watchList.length > 0) {
      return state.watchList.filter((item) => item.id === id).length > 0
    } else {
      return false
    }
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
  },
  addToWatchList({ commit }, payload) {
    try {
      commit('SET_LOADING', true)
      commit('ADD_TO_WATCH_LIST', payload)
    } catch (e) {
      console.log(e)
    } finally {
      commit('SET_LOADING', false)
    }
  },
  removeFromWatchList({ commit }, payload) {
    try {
      commit('SET_LOADING', true)
      commit('REMOVE_FROM_WATCHLIST', payload)
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
