<template>
  <div class="card">
    <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
      <div class="card__product-img">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          :alt="movie.title"
        />
      </div>
    </router-link>
    <div class="card__content">
      <router-link
        class="no-underline"
        :to="{ name: 'MovieDetail', params: { id: movie.id } }"
      >
        <p class="card__name font-bold text-center">{{ movie.title }}</p>
      </router-link>
      <div class="card__content-bottom">
        <!--        <div class="card_category">category</div>-->
        <div class="card_release-date align-self-center">
          {{ movie.release_date.slice(0, 4) }}
        </div>
        <div class="card_watchlist-btn">
          <button
            class="add-to-watchlist-btn"
            v-if="!isInWatchList(movie.id)"
            @click="addToWatchList(movie)"
          >
            Add watchlist
          </button>
          <button
            class="remove-from-watchlist-btn"
            v-if="isInWatchList(movie.id)"
            @click="removeFromWatchList(movie)"
          >
            remove watchlist
          </button>
        </div>
        <div class="card__footer align-self-center">
          <p>{{ movie.vote_average }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToWatchList(movie) {
      this.$store.dispatch('movies/addToWatchList', movie)
      this.$toast.success('Movie added to watchlist!')
    },
    removeFromWatchList(movie) {
      this.$store.dispatch('movies/removeFromWatchList', movie)
      this.$toast.success('Movie removed from watchlist!')
    }
  },
  computed: {
    ...mapGetters({
      isInWatchList: 'movies/_isInWatchList'
    }),
    id() {
      return this.movie.id
    }
  },
  watch: {
    // react when route change
    $route(to) {
      this.id = to.params.id
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 330px;
  background-color: #15263f;
  color: #8bacd9;
  border-radius: 16px;
  padding: 24px;
  font-size: 1rem;
  box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  .card__product-img {
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
    }
    @mixin hoverOpacity {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.25s ease-out;
    }
    &::before {
      @include hoverOpacity;
      background-color: cyan;
    }
    &::after {
      @include hoverOpacity;
      background: no-repeat url(../assets/icons/icon-view.svg) center;
    }
    &:hover {
      &::before {
        opacity: 0.5;
      }
      &::after {
        opacity: 1;
      }
    }
  }
  .card__content {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 12px;
    padding: 24px 0 16px 0;
    .card__name {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      &:hover {
        color: #00fff8;
      }
    }
  }
  .card__content-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    color: #8bacd9;

    .add-to-watchlist-btn {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0;
      width: 100%;
      min-width: 160px;
      height: 40px;
      border-radius: 16px;
      background-color: #358f80;
      font-size: 13px;
      color: #e0e0e0;
      text-transform: uppercase;
      font-weight: 500;
      transition: 0.3s ease-in;
      border: none;
    }

    .add-to-watchlist-btn:hover {
      cursor: pointer;
      background-color: #036666;
    }
    .remove-from-watchlist-btn {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0;
      width: 100%;

      min-width: 160px;
      height: 40px;
      border-radius: 16px;
      background-color: #800f2f;
      font-size: 13px;
      color: #fff;
      text-transform: uppercase;
      font-weight: 600;
      transition: 0.7s ease;
      transition-property: color, background-color, border-color;
      border: none;
    }
    .remove-from-watchlist-btn:hover {
      cursor: pointer;
      background-color: #590d22;
    }
  }
}
</style>
