<template>
  <div>
    <default-layout>
      <template slot="content">
        <movie-carousel></movie-carousel>
        <MovieList :loading="loading" :movies="popularMovies" />
      </template>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout'
import MovieList from '@/components/MovieList'
import { mapGetters } from 'vuex'
import MovieCarousel from '@/components/shared/MovieCarousel'
export default {
  name: 'Home',
  components: { MovieCarousel, MovieList, DefaultLayout },
  computed: {
    ...mapGetters({
      popularMovies: 'movies/_popularMovies',
      loading: 'movies/_loading'
    })
  },
  mounted() {
    this.$store.dispatch('movies/getPopularMovies')
  }
}
</script>

<style scoped lang="scss"></style>
