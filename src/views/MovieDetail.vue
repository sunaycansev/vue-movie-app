<template>
  <default-layout>
    <template slot="content" class="template">
      <section
        class="
          section__head
          section__head__fixed
          section__gradient
          section__details-bg
        "
      >
        <div
          class="section__bg"
          :style="{
            'background-image': backdropPath
          }"
        ></div>
        <div class="container">
          <!--          article start-->
          <div class="article grid justify-content-center align-items-center">
            <div class="col-8 xl:col-8">
              <!--              Trailer-->
              <a href="#" class="article__trailer open-video mb-5"
                ><PlayButtonSvg class="" />Trailer</a
              >
              <!--              Trailer End-->
              <!--              Article Content Start-->
              <div class="article__content">
                <h1 class="mb-3">{{ movie.title }}</h1>
                <h3 class="mb-5 movie-tagline">{{ movie.tagline }}</h3>
                <ul
                  class="
                    list
                    mb-3
                    flex
                    justify-content-start
                    align-items-center
                    flex-wrap
                    w-full
                  "
                >
                  <li><StarSvg class="star-svg" />{{ movie.vote_average }}</li>
                  <li><DotSvg />{{ movieGenres[0] }}</li>
                  <li><DotSvg />{{ movie.release_date.slice(0, 4) }}</li>
                  <li><DotSvg />{{ movie.runtime }}</li>
                  <li><DotSvg />{{ movie.revenue | currencyFormatter }}</li>
                </ul>
                <p>
                  {{ movie.overview }}
                </p>
                <h3 class="mt-3">Genres</h3>
                <span v-for="genre in movieGenres" :key="genre"
                  ><a href="#" class="movie-genre-item">{{ genre }}</a></span
                >
                <!--                <h3 class="mt-3">Top Billed Cast</h3>-->
                <!--                <div class="movie__cast">-->
                <!--                  <ul class="movie_cast_list flex">-->
                <!--                    <li class="cast_card">-->
                <!--                      <a href="#"-->
                <!--                        ><img-->
                <!--                          class="mb-2"-->
                <!--                          src="https://picsum.photos/200"-->
                <!--                          alt="#"-->
                <!--                      /></a>-->
                <!--                      <p class="mb-3 text-center font-bold char-name">-->
                <!--                        <a href="#">Lorem ipsum.</a>-->
                <!--                      </p>-->
                <!--                      <p class="my-3 text-center char-role-name">-->
                <!--                        Lorem ipsum dolor.-->
                <!--                      </p>-->
                <!--                    </li>-->
                <!--                  </ul>-->
                <!--                </div>-->
              </div>
              <!--              Article Content End-->
            </div>
          </div>

          <!--          article end-->
        </div>
      </section>
    </template>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout'
import movieService from '@/services/movieService'
import PlayButtonSvg from '@/assets/icons/play-button-svg.svg'
import StarSvg from '@/assets/icons/star-svg.svg'
import DotSvg from '@/assets/icons/dot-svg.svg'
export default {
  name: 'MovieDetail',
  components: { DefaultLayout, PlayButtonSvg, StarSvg, DotSvg },
  computed: {
    movieId() {
      return this.$route.params.id
    },
    movieGenres() {
      if (this.movie.genres) {
        return this.movie
          ? this.movie.genres.map((item) => {
              return item.name
            })
          : null
      } else {
        return null
      }
    }
  },
  data() {
    return {
      movie: {},
      backdropPath: null,
      posterPath: null
    }
  },
  filters: {
    currencyFormatter: function (number) {
      return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    }
  },
  mounted() {
    // console.log('backdrop', this.movie.backdrop_path)
    console.log('genres', this.movieGenres)
  },
  created() {
    movieService.getMovieDetail(this.movieId).then((res) => {
      console.log('res in movie detail', res)
      this.movie = res.data
      this.backdropPath = `url(https://image.tmdb.org/t/p/w1280${res.data.backdrop_path})`
      this.posterPath = `https://image.tmdb.org/t/p/w1280${res.data.poster_path}`
    })
  }
}
</script>

<style scoped lang="scss">
.section__head {
  margin-bottom: 600px;
  position: relative;
  .section__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 450px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      z-index: 1;
      background: linear-gradient(
        180deg,
        rgba(19, 23, 32, 0.5) 0%,
        #131720 100%
      );
      pointer-events: none;
    }
    &::selection {
      background: #fff;
      color: #151f30;
      text-shadow: none;
    }
  }
  .container {
    position: relative;
    z-index: 2;
    .article {
      position: absolute;
      top: 200px;
      color: #fff;
      letter-spacing: 1.5px;
      .article__trailer {
        //TODO hover konusu çözülecek
        display: inline-flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        text-decoration: none;
        transition: all 0.5s ease;
        background-color: transparent;
        transition-property: color, background-color, border-color;
        //transition: all 0.5s;
        &:hover {
          color: #2f80ed;
          outline: none;
        }
        svg {
          display: block;
          fill: #fff;
          width: 46px;
          height: auto;
          margin-right: 15px;
          transition: fill 0.5s;
          &:hover {
            fill: #2f80ed;
          }
        }
      }
      .article__content {
        h3 {
          font-style: italic;
          opacity: 0.9;
        }
        ul.list {
          margin-top: -20px;
          li {
            margin-right: 20px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
          }
          svg {
            width: 18px;
            height: 18px;
            margin-right: 5px;
            fill: #2f80ed;
          }
        }
        p {
          line-height: 26px;
          &::selection {
            background: #ebebeb;
            color: #151f30;
            text-shadow: none;
          }
        }
        .movie-genre-item {
          min-width: 60px;
          width: auto;
          height: 30px;
          color: #e0e0e0;
          border-radius: 12px;
          background-color: #151f30;
          font-size: 14px;
          text-decoration: none;
          padding: 0 12px;
          margin-top: 20px;
          display: inline-flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
        }
        .movie__cast {
          .movie_cast_list {
            list-style-type: none;
          }
          .cast_card {
            margin: 10px 4px 10px 10px;
            border: 1px solid #ececec;
            border-radius: 6px;
            overflow: hidden;
            min-width: 140px;
            width: 180px;
            background-color: #131720;
            color: black;
            box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
            .char-name {
              color: red;
            }
          }
        }
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 300px;
    left: 0;
    right: 0;
    display: block;
    z-index: 1;
    background: linear-gradient(0deg, rgba(21, 31, 48, 0.35) 0%, #131720 100%);
    pointer-events: none;
  }
  //TODO will be refactored cause of position relativeness in footer and movieDetails section
  @media (max-width: 950px) {
    margin-bottom: 700px;
  }
  @media (max-width: 690px) {
    margin-bottom: 800px;
  }
  @media (max-width: 563px) {
    margin-bottom: 1000px;
  }
  @media (max-width: 420px) {
    margin-bottom: 1100px;
  }
}
</style>
