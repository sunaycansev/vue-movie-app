import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import MovieDetail from '@/views/MovieDetail'
import Contact from '@/views/Contact'
import About from '@/views/About'
import SearchMovie from '@/views/SearchMovie'
import WatchList from '@/views/WatchList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/search',
    name: 'SearchMovie',
    component: SearchMovie
  },
  {
    path: '/watchlist',
    name: 'WatchList',
    component: WatchList
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
