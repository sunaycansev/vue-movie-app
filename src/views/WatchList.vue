<template>
  <default-layout>
    <template slot="content">
      <div v-if="movies.length === 0" class="grid justify-content-center mt-3">
        <div class="col-6">
          <h1 class="text-white text-center">
            There is no movie in your watchlist.
          </h1>
        </div>
      </div>
      <movie-list :loading="loading" :movies="movies" />
    </template>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout'
import { mapGetters } from 'vuex'
import MovieList from '@/components/MovieList'
export default {
  name: 'WatchList',
  components: { MovieList, DefaultLayout },
  computed: {
    ...mapGetters({
      loading: 'movies/_loading',
      movies: 'movies/_watchList'
    })
  }
}
</script>

<style scoped></style>
