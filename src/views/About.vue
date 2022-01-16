<template>
  <default-layout>
    <template slot="content">
      <section class="section--head">
        <div class="grid flex justify-content-center align-items-center">
          <div class="col-10">
            <h1 class="mt-5">AppcentTV - Best place for movies</h1>
          </div>
        </div>
        <div class="grid flex justify-content-center align-items-center mt-5">
          <div class="col-10 about-text">
            <p>
              Appcent is a company bringing together developers, designers,
              trainers, curious minds, and team players who aim to transform
              businesses digitally with the help of the latest technology and
              our expertise.
            </p>

            <p>
              We bring contemporary technologies to your fintech solutions and
              improve your existing products and services or cooperate with you
              to build new ones.
            </p>
            <p>
              With our expertise, we help you run your store seamlessly anytime
              and anywhere. Our solutions will guide you in your day-to-day
              tasks and save you time and money.
            </p>
          </div>
        </div>
        <div class="grid flex justify-content-center align-items-center">
          <div
            class="
              col-10
              flex
              justify-content-between
              sm:justify-content-center
              align-items-center
            "
          >
            <div class="step mr-3">
              <span class="step__number">01</span>
              <h3 class="step__title">Choose your plan</h3>
              <p class="step__text">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first
              </p>
            </div>
            <div class="step">
              <span class="step__number">02</span>
              <h3 class="step__title">Create an account</h3>
              <p class="step__text">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first
              </p>
            </div>
          </div>
        </div>
      </section>
    </template>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout'
export default {
  name: 'About',
  components: { DefaultLayout }
}
</script>

<style scoped lang="scss">
.section--head h1 {
  color: #fff;
  font-size: 2rem;
}
.section--head .about-text {
  color: #fff;
  font-size: 1.1rem;
}
.section--head .step {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 20px;
  padding: 2rem;
  border-radius: 16px;
  background-color: #151f30;

  .step__number {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-family: 'Rubik', sans-serif;
    line-height: 100%;
    font-weight: 500;
    font-size: 24px;
    color: #2f80ed;
    background-color: rgba(47, 128, 237, 0.3);

    @media (max-width: 760px) {
      display: none;
    }
  }
  .step__title {
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 0;
    margin-left: 20px;
  }
  .step__text {
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 26px;
    color: #e0e0e0;
    margin-bottom: 0;
    margin-top: 20px;
  }
}
</style>
