<template>
  <div class="grid h-screen justify-content-center align-items-center">
    <div class="col-6 justify-content-center align-items-center">
      <div
        class="page-404__wrap justify-content-center align-items-center flex"
      >
        <div class="page-404__content">
          <h1 class="page-404__title">404</h1>
          <p class="page-404__text">
            The page you are looking for is not available!
          </p>
          <router-link :to="{ name: 'Home' }" class="page-404__btn"
            >GO BACK</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped lang="scss">
.page-404__wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;
}
.page-404__content {
  background-color: #131720;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 20px;
  position: relative;
  width: 100%;
  max-width: 400px;
  border: 1px solid #151f30;

  .page-404__title {
    position: relative;
    color: #2f80ed;
    line-height: 100%;
    font-size: 120px;
    margin-bottom: 10px;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
  }

  .page-404__text {
    text-align: center;
    display: block;
    width: 100%;
    color: #fff;
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 40px;
  }

  .page-404__btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 50px;
    border-radius: 16px;
    background-color: #2f80ed;
    font-size: 14px;
    color: #e0e0e0;
    text-transform: uppercase;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.5s ease;
    transition-property: color, background-color, border-color;
    text-decoration: none;

    &:hover {
      color: #151f30;
      background-color: #fff;
    }
  }
}
</style>
