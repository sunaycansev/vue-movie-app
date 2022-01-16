<template>
  <div class="grid m-0">
    <div class="col-12 mb-6">
      <Header />
    </div>
    <div class="col-12">
      <slot name="content"></slot>
    </div>
    <div class="col-12">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import Footer from '@/components/shared/Footer'
export default {
  name: "DefaultLayout",
  components: { Footer, Header },
};
</script>

<style scoped lang="scss"></style>
