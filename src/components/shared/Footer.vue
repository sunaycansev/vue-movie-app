<template>
  <footer class="footer mt-6">
    <div
      class="
        container
        grid
        flex
        col-12
        justify-content-center
        align-items-center
      "
    >
      <div class="xl:col-2 lg:col-6 md:col-4 sm:col-5 sm:col-offset-1">
        <div class="footer__vuetv"><BrandLogo /></div>
        <p class="footer__tagline">
          Movies & TV Shows, Online cinema, <br />
          Movie database HTML Template.
        </p>
        <div class="footer__social inline-flex align-items-start flex-wrap">
          <a href=""><FacebookSvg /></a>
          <a href=""><TwitterSvg /></a>
          <a href=""><InstagramSvg /></a>
          <a href=""><VkSvg /></a>
          <a href=""><TiktokSvg /></a>
        </div>
      </div>
      <div class="xl:col-2 lg:col-3 md:col-4 sm:col-5 sm:col-offset-1">
        <h6 class="footer__title">VueTv</h6>
        <div
          class="
            footer__nav
            flex flex-column
            justify-content-start
            align-items-start
          "
        >
          <router-link to="#">About Us</router-link>
          <router-link to="#">My Profile</router-link>
          <router-link to="#">Pricing plans</router-link>
          <router-link to="#">Contacts</router-link>
        </div>
      </div>
      <div class="xl:col-2 lg:col-6 md:col-4 sm:col-5 sm:col-offset-1">
        <div class="grid">
          <div class="col-12">
            <h6 class="footer__title">Browse</h6>
          </div>
          <div class="col-6">
            <div class="footer__nav flex flex-column">
              <router-link to="#">Live TV</router-link>
              <router-link to="#">Live News</router-link>
              <router-link to="#">Live Sports</router-link>
              <router-link to="#">Streaming Library</router-link>
            </div>
          </div>
          <div class="col-6">
            <div class="footer__nav flex flex-column">
              <router-link to="#">TV Shows</router-link>
              <router-link to="#">Movies</router-link>
              <router-link to="#">Kids</router-link>
              <router-link to="#">Collections</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-2 lg:col-3 md:col-4 sm:col-5 sm:col-offset-1">
        <h6 class="footer__title">Help</h6>
        <div
          class="
            footer__nav
            flex flex-column
            justify-content-start
            align-items-start
          "
        >
          <router-link to="#">Account & Billing</router-link>
          <router-link to="#">Plans & Pricing</router-link>
          <router-link to="#">Supported Devices</router-link>
          <router-link to="#">Accessibility</router-link>
        </div>
      </div>
    </div>
    <div class="grid justify-content-center">
      <div class="footer__content">
        <div
          class="col-12 justify-content-between flex align-items-center border"
        >
          <small class="footer__copyright mr-6">
            <span class="mb-2">VueTV.template, 2021.</span>
            <br />
            Created by
            <a href="https://github.com/sunaycansev">Ferhat Sunay Cansev</a> .
          </small>
          <div class="footer__links">
            <a href="#" class="mr-5 sm:mr-2">Privacy Policy</a>
            <a href="#">Terms and conditions</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import BrandLogo from "@/assets/icons/video-movie.svg";
import FacebookSvg from "@/assets/icons/facebook.svg";
import TwitterSvg from "@/assets/icons/twitter.svg";
import InstagramSvg from "@/assets/icons/instagram.svg";
import VkSvg from "@/assets/icons/vk.svg";
import TiktokSvg from "@/assets/icons/tiktok.svg";
export default {
  name: "Footer",
  components: {
    BrandLogo,
    FacebookSvg,
    TwitterSvg,
    InstagramSvg,
    VkSvg,
    TiktokSvg,
  },
};
</script>

<style scoped lang="scss">
.footer {
  background-color: #131720;
  position: relative;
  color: #fff;
  .container {
    position: relative;
    z-index: 2;
    .footer__tagline {
      margin-top: 20px;
      display: block;
      font-size: 13px;
      line-height: 21px;
    }
    .footer__social {
      a {
        margin-top: 20px;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition-property: all;
        transition: 0.5s ease;
        background-color: transparent;
        opacity: 0.8;
        &:hover {
          opacity: 1;
        }
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
    .footer__title {
      display: block;
      margin-top: 30px;
      font-size: 15px;
      color: #fff;
      font-family: "Rubik", sans-serif;
      font-weight: 600;
      margin-bottom: 15px;
    }
    .footer__nav {
      a {
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 10px;
        color: #e0e0e0;
        text-decoration: none;
        transition: 0.5s ease;
        transition-property: color, background-color, border-color;
        &:hover {
          color: #2f80ed;
        }
      }
    }
  }
  .footer__content {
    border-top: 1px solid #fff;
    .footer__links {
      a {
        text-decoration: none;
        color: #e0e0e0;
        transition: 0.5s ease;
        &:hover {
          color: #007bff;
        }
      }
    }
    .footer__copyright {
      font-size: 13px;
      color: #e0e0e0;
      display: block;
      a {
        color: #fff;
        transition: 0.5s ease;
        font-weight: 600;
        text-decoration: none;
        &:hover {
          color: #007bff;
        }
      }
    }
    @media (min-width: 768px) {
      margin-top: 80px;
      padding-top: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
  &::after {
    height: 300px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    z-index: 1;
    background: linear-gradient(
      180deg,
      rgba(21, 31, 48, 0.35) 0%,
      #131720 100%
    );
  }
}
//@media (min-width: 768px) {
//  .footer {
//    padding: 40px 0;
//  }
//}
</style>
