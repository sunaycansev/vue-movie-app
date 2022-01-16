<template>
  <default-layout>
    <template slot="content">
      <loading-spinner v-if="loading"></loading-spinner>
      <div class="grid flex justify-content-center align-items-center">
        <div class="col-6 flex justify-content-center align-items-center">
          <input
            type="text"
            v-model="searchText"
            @keyup="searchMovie"
            class="search-input"
          />
        </div>
      </div>
      <MovieList :loading="loading" :movies="movies"></MovieList>
    </template>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout'
import MovieList from '@/components/MovieList'
import { mapGetters } from 'vuex'
import { debounce } from 'debounce'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
export default {
  name: 'SearchMovie',
  components: { LoadingSpinner, MovieList, DefaultLayout },
  data() {
    return {
      searchText: null
    }
  },
  methods: {
    searchMovie: debounce(function (e) {
      this.$store.dispatch('movies/getSearchedMovies', e.target.value)
    }, 900)
  },
  computed: {
    ...mapGetters({
      loading: 'movies/_loading',
      movies: 'movies/_searchedMovies'
    })
  }
}
</script>

<style scoped></style>
