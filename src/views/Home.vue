<template>
  <div>
    <default-layout>
      <template slot="content">
        <MovieList :movies="popularMovies" />
      </template>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout'
import MovieList from '@/components/MovieList'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: { MovieList, DefaultLayout },
  computed: {
    ...mapGetters({
      popularMovies: 'movies/_popularMovies'
    })
  },
  mounted() {
    this.$store.dispatch('movies/getPopularMovies')
  }
}
</script>

<style scoped></style>
