<template>
  <div>
    <default-layout>
      <template slot="content">
        <MovieList :loading="loading" :movies="popularMovies" />
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
