import Vue from "vue";

Vue.mixin({
  methods: {
    imageLoad: (path) => require(`@/assets/${path}`),
  },
});
