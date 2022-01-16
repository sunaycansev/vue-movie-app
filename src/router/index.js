import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import MovieDetail from "@/views/MovieDetail";
import Contact from "@/views/Contact";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "MovieDetail",
    component: MovieDetail,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;