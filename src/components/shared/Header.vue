<template>
  <div class="header">
    <div class="grid justify-content-center align-items-center">
      <div class="col-8 column">
        <div
          class="
            header__content
            flex
            justify-content-between
            align-items-center
          "
        >
          <ul class="header__nav flex align-items-center header__nav-left">
            <li
              class="
                header__nav-item
                flex
                justify-content-start
                align-items-center
              "
            >
              <router-link
                :to="{ name: 'Home' }"
                href="#"
                class="align-self-center mr-2"
                ><BrandLogo
              /></router-link>
            </li>
            <li
              class="
                header__nav-item
                flex
                justify-content-start
                align-items-center
              "
            >
              <router-link :to="{ name: 'Home' }" class="no-underline ml-3"
                >Home</router-link
              >
            </li>
            <li
              class="
                header__nav-item
                flex
                justify-content-start
                align-items-center
              "
            >
              <router-link
                :to="{ name: 'SearchMovie' }"
                class="no-underline ml-3"
                >Search Movie</router-link
              >
            </li>
            <li
              class="
                header__nav-item
                flex
                justify-content-start
                align-items-center
              "
            >
              <router-link class="no-underline" :to="{ name: 'About' }"
                >About</router-link
              >
            </li>
            <li
              class="
                header__nav-item
                flex
                justify-content-start
                align-items-center
              "
            >
              <router-link class="no-underline" :to="{ name: 'Contact' }"
                >Contact</router-link
              >
            </li>
            <li
              class="
                header__nav-item
                flex
                justify-content-start
                align-items-center
              "
            >
              <router-link class="no-underline" :to="{ name: 'WatchList' }"
                >Watchlist</router-link
              >
            </li>
          </ul>
          <ul class="header__nav-right header__nav flex align-items-center">
            <li
              class="
                header__nav-item
                flex
                justify-content-start
                align-items-center
              "
            >
              <router-link class="no-underline" :to="{ name: 'Login' }"
                >Login</router-link
              >
            </li>
            <li
              class="
                header__nav-item
                flex
                justify-content-start
                align-items-center
              "
            >
              <router-link class="no-underline" :to="{ name: 'Signup' }"
                >Sign Up</router-link
              >
            </li>
          </ul>
        </div>
        <div class="mobile-brand">
          <router-link
            :to="{ name: 'Home' }"
            href="#"
            class="align-self-center mr-2"
            ><BrandLogo
          /></router-link>
        </div>
        <div
          @click="toggleNavBtn()"
          id="hamburger-icon"
          :class="{ open: isActive }"
        >
          <div class="bar-1"></div>
          <div class="bar-2"></div>
          <div class="bar-3"></div>
          <ul class="mobile-menu">
            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li>
              <router-link :to="{ name: 'SearchMovie' }"
                >Search Movie</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'About' }">About</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Contact' }">Contact</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Watchlist' }">Watchlist</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Login' }">Login</router-link>
            </li>
            <li><router-link :to="{ name: 'Signup' }">Sign up</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrandLogo from '@/assets/icons/video-movie.svg'
export default {
  name: 'Header',
  components: {
    BrandLogo
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNavBtn() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #131720;
  z-index: 99;
  transition: 0.5s margin 0s;
  .header__content {
    a {
      img {
        width: 80px;
        height: 30px;
      }
    }
    .header__nav {
      //position: relative;
      //top: auto;
      //left: auto;
      height: 70px;
      z-index: 2;
      width: auto;
      border-bottom: none;
      background: none;
      .header__nav-item {
        height: 100px;
        margin-bottom: 0;
        margin-right: 40px;
        a {
          color: #e0e0e0;
          line-height: 22px;
          height: 22px;
          display: inline-flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          font-weight: 500;
          transition: 0.5s ease;
          &:hover {
            color: #2f80ed;
          }
        }
      }
    }
  }
  .open .bar-1 {
    -webkit-transform: rotate(-45deg) translate(-6px, 6px);
    transform: rotate(-45deg) translate(-6px, 6px);
  }
  .open .bar-2 {
    opacity: 0;
  }
  .open .bar-3 {
    -webkit-transform: rotate(45deg) translate(-6px, -8px);
    transform: rotate(45deg) translate(-6px, -8px);
  }
  .open .mobile-menu {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }
  #hamburger-icon {
    margin: auto 0;
    display: none;
    cursor: pointer;
    color: #fff;
    div {
      width: 35px;
      height: 3px;
      background-color: #fff;
      margin: 6px 0;
      transition: all 0.4s;
    }
    .mobile-menu {
      display: none;
      position: absolute;
      top: 50px;
      left: 0;
      height: 200px;
      width: 100%;
      background-color: #131720;
      list-style-type: none;
      //TODO responsive navbara toggle eklenecek
      transition: all 1s ease-in;
      li {
        margin-bottom: 10px;
        a {
          color: #fff;
          text-decoration: none;
          transition: 0.5s ease;
          &:hover {
            color: #2f80ed;
          }
        }
      }
    }
  }
  .mobile-brand {
    display: none;
    img {
      width: 80px;
      height: 30px;
    }
  }
  @media only screen and (max-width: 1220px) {
    .header__content {
      display: none !important;
    }
    .column {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      padding: 10px;
    }
    #hamburger-icon {
      display: block;
    }
    .mobile-brand {
      display: block;
      img {
        width: 80px;
        height: 30px;
      }
    }
  }
}
</style>
