<template>
  <default-layout>
    <template slot="content">
      <div class="grid flex justify-content-center align-items-center mt-5">
        <div
          class="col-6 flex justify-content-center align-items-center relative"
        >
          <input
            type="text"
            v-model="searchText"
            @keyup="searchMovie"
            class="search-input"
            placeholder="I'm looking for..."
          />
          <SearchSvg class="svg" />
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
import SearchSvg from '../assets/icons/search-svg.svg'
export default {
  name: 'SearchMovie',
  components: { MovieList, DefaultLayout, SearchSvg },
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

<style scoped lang="scss">
.search-input {
  height: 40px;
  border-radius: 16px;
  background-color: #151f30;
  border: none;
  padding: 0 1rem 0 1rem;
  font-size: 14px;
  color: #fff;
  appearance: none;
  box-shadow: none;
  transition: 0.5s ease;
  transition-property: color, border-color;
  width: 100%;
}
.search-input:focus {
  outline: none;
}
.svg {
  position: absolute;
  top: 35%;
  right: 1rem;
  fill: #fff;
  z-index: 2;

  width: 1.1rem;
  height: 1.1rem;
}
</style>
