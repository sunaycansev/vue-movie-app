import axios from 'axios'

const movieService = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL
})

export default {
  getPopularMovies() {
    return movieService.get(
      `/movie/popular?api_key=${process.env.VUE_APP_API_KEY}`
    )
  },
  getMovieDetail(id) {
    return movieService.get(
      `/movie/${id}?api_key=${process.env.VUE_APP_API_KEY}`
    )
  },
  searchMovie(searchText) {
    return movieService.get(
      `search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchText}`
    )
  }
}
