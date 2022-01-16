<template>
  <default-layout>
    <template slot="content">
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
