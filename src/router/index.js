import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from 'views/shop/Shop'

const List = () => import('views/list/List')
const Detail = () => import('views/detail/Detail')
const Songs = () => import('views/songs/Songs')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/songs',
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
