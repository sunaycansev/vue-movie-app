<template>
  <default-layout>
    <template slot="content">
      <div
        class="h-screen grid justify-content-center align-items-center bg"
        :style="{
          'background-image':
            'url(https://dmitryvolkov.me/demo/flixtv/main/img/bg.jpg)'
        }"
      >
        <div class="col-12 flex justify-content-center">
          <div class="sign__content">
            <form class="sign__form">
              <div class="sign__logo"><BrandLogo /></div>
              <div class="sign__group">
                <input
                  type="text"
                  class="sign__input"
                  placeholder="Name"
                  v-model="formData.name"
                />
              </div>
              <div class="sign__group">
                <input
                  type="text"
                  class="sign__input"
                  placeholder="Email"
                  v-model="formData.email"
                />
              </div>
              <div class="sign__group">
                <input
                  type="password"
                  class="sign__input"
                  placeholder="Password"
                  v-model="formData.password"
                />
              </div>
              <div class="sign__group sign__group--checkbox">
                <p-checkbox
                  id="remember"
                  v-model="formData.agree"
                  :binary="true"
                  class="ml-1"
                />
                <label for="remember" class="text-white ml-3"
                  >I agree to the <a href="#">Privacy Policy</a></label
                >
              </div>
              <button type="button" class="sign__btn" @click="signUp">
                Sign in
              </button>

              <div class="sign__text">
                I already have an account?
                <router-link :to="{ name: 'Login' }">Sign in!</router-link>
              </div>
              <div class="sign__text">
                <a href="#">Forgot password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>
  </default-layout>
</template>

<script>
import BrandLogo from '@/assets/icons/video-movie.svg'
import DefaultLayout from '@/layout/DefaultLayout'
export default {
  name: 'Signup',
  components: {
    DefaultLayout,
    BrandLogo
  },
  data() {
    return {
      formData: {
        agree: null,
        email: null,
        password: null,
        name: null
      }
    }
  },
  methods: {
    signUp() {
      console.log('signup')
    }
  }
}
</script>

<style scoped lang="scss">
.bg {
  margin: 0;
  overflow: hidden;
}
.sign__content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;

  .sign__form {
    background-color: #131720;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    padding: 30px 20px;
    position: relative;
    width: 100%;
    max-width: 400px;
    border: 1px solid #151f30;
    @media (min-width: 576px) {
      padding: 40px;
    }
  }

  .sign__logo {
    margin-bottom: 40px;
  }
  .sign__group {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 20px;
    width: 100%;

    .sign__input {
      background-color: #151f30;
      border: 1px solid transparent;
      border-radius: 16px;
      height: 44px;
      position: relative;
      color: #fff;
      font-size: 14px;
      width: 100%;
      padding: 0 20px;
      transition: 0.5s ease;
      transition-property: color, border-color;

      &:focus {
        background-color: #151f30;
        border-color: #2f80ed;
        outline: none;
      }
    }
  }

  .sign__btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    width: 100%;
    height: 50px;
    border-radius: 16px;
    background-color: #2f80ed;
    font-size: 14px;
    color: #e0e0e0;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: 0.5s ease;
    transition-property: color, background-color, border-color;
    &:hover {
      color: #151f30;
      background-color: #fff;
    }
    &:focus {
      button:focus {
        outline: none;
      }
    }
  }

  .sign__text {
    margin-top: 15px;
    font-size: 14px;
    color: #e0e0e0;
    a {
      color: #2f80ed;
      text-decoration: none;
      transition: 0.5s ease;
      transition-property: color, background-color, border-color;

      &:hover {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
}
</style>
