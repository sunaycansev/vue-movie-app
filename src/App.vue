<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  &::selection {
    background: #fff !important;
    color: #151f30 !important;
    text-shadow: none !important;
  }
}
html {
}
body {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background-color: #131720;
  -webkit-font-smoothing: antialiased;
}
</style>
