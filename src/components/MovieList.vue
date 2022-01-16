<template>
  <div class="grid p-5 justify-content-center">
    <MovieCard
      class="col-fixed m-3"
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
export default {
  name: "MovieList",
  components: { MovieCard },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
