<template>
  <default-layout>
    <template slot="content">
      <div class="contact mt-6">
        <div class="grid flex justify-content-center">
          <div class="col-10 col-offset-1">
            <h1 class="contact__title">Contacts</h1>
          </div>
        </div>
      </div>
      <section class="form__section">
        <div class="container grid justify-content-center">
          <div class="sm:col-12 xl:col-8 flex justify-content-center">
            <form @submit.prevent="send" class="sign__form p-5">
              <div class="grid flex">
                <div class="sm:col-12 xl:col-6 sign__form-name-input">
                  <div class="sign__group">
                    <input
                      v-model="formData.name"
                      type="text"
                      name="name"
                      class="sign__input"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="sm:col-12 xl:col-6 sign__form-email-input">
                  <div class="sign__group">
                    <input
                      v-model="formData.email"
                      type="text"
                      name="email"
                      class="sign__input"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="sign__group">
                    <input
                      v-model="formData.subject"
                      type="text"
                      name="subject"
                      class="sign__input"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="sign__group">
                    <textarea
                      v-model="formData.message"
                      name="text"
                      class="sign__textarea"
                      placeholder="Type your message"
                    ></textarea>
                  </div>
                </div>
                <div class="sm:col-12 xl:col-3 sign__form-submit">
                  <button class="sign__btn">Send</button>
                </div>
              </div>
            </form>
          </div>
          <div
            class="
              sm:col-12
              xl:col-4
              form_right
              p-5
              flex
              justify-content-start
              flex-column
            "
          >
            <h2 class="section__title">Info</h2>
            <p class="section__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              consequatur maiores modi optio quasi reiciendis?
            </p>
            <ul class="section__list">
              <li><a href="#">+90 111 22 33</a></li>
              <li><a href="#">email.gmail.com</a></li>
            </ul>
          </div>
        </div>
      </section>
    </template>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout'
export default {
  name: 'Contact',
  components: {
    DefaultLayout
  },
  data() {
    return {
      formData: {
        name: null,
        email: null,
        subject: null,
        message: null
      }
    }
  },
  methods: {
    send() {
      console.log('send')
      this.$toast.success('Your message has been received!')
    }
  }
}
</script>

<style scoped lang="scss">
.contact {
  .contact__title {
    font-weight: 600;
    color: #fff;
    font-size: 3rem;
  }
}
section {
  .sign__form {
    background-color: #131720;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    padding: 1rem;
    border: 1px solid #151f30;
    margin-right: 20px;

    .sign__form-name-input {
      @media (max-width: 760px) {
        width: 100%;
      }
    }
    .sign__form-email-input {
      @media (max-width: 760px) {
        width: 100%;
      }
    }
    .sign__form-submit {
      @media (max-width: 578px) {
        width: 100%;
      }
    }
    .sign__group {
      input {
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
        margin-bottom: 10px;
        &:focus {
          background-color: #151f30;
          border-color: #2f80ed;
          outline: none;
        }
      }
      .sign__textarea {
        background-color: #151f30;
        margin-bottom: 10px;
        border: 1px solid transparent;
        border-radius: 16px;
        height: 144px;
        position: relative;
        color: #fff;
        font-size: 14px;
        width: 100%;
        padding: 15px 20px;
        resize: none;
        transition: 0.5s ease;
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
      width: 100%;
      height: 50px;
      border-radius: 16px;
      background-color: #2f80ed;
      font-size: 14px;
      color: #e0e0e0;
      text-transform: uppercase;
      font-weight: 500;
      padding: 0;
      border: none;
      transition: 0.5s ease;
      &:hover {
        color: #151f30;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }
  .form_right {
    .section__title {
      color: #fff;
      line-height: 120%;
      margin-bottom: 20px;
      font-size: 36px;
    }
    .section__text {
      font-size: 18px;
      line-height: 28px;
      color: #e0e0e0;
      margin-bottom: 20px;
    }
    .section__list {
      list-style-type: none;
      li {
        a {
          font-size: 18px;
          line-height: 32px;
          color: #fff;
          text-decoration: none;
          background-color: transparent;
          transition: 0.5s ease;
          transition-property: color, background-color, border-color;
          &:hover {
            color: #2f80ed;
          }
        }
      }
    }
  }
}
</style>
