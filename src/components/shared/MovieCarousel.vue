<template>
  <div class="grid justify-content-center">
    <div class="col-10">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/carousel_1.jpg" alt="1" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/carousel_2.jpg" alt="1" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/carousel_3.jpg" alt="1" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/carousel_5.jpg" alt="1" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'MovieCarousel',
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {},
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.swiper {
  height: 400px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    background-color: #fff;
    img {
      width: 100%;
      background-size: cover;
    }
  }
}
</style>
