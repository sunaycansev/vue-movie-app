import movieService from "@/services/movieService";

const state = {
  popularMovies: [],
};
const mutations = {
  SET_POPULAR_MOVIES(state, data) {
    state.popularMovies = data;
  },
};
const getters = {
  _popularMovies(state) {
    return state.popularMovies;
  },
};
const actions = {
  getPopularMovies({ commit }) {
    movieService.getPopularMovies().then((res) => {
      commit("SET_POPULAR_MOVIES", res.data.results);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
