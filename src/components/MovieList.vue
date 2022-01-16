<template>
  <div class="grid p-5 justify-content-center">
    <loading-spinner v-if="loading"></loading-spinner>
    <MovieCard
      v-else
      class="col-fixed m-3"
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
export default {
  name: 'MovieList',
  components: { LoadingSpinner, MovieCard },
  props: {
    movies: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped></style>
