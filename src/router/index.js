import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from 'views/shop/Shop'

const List = () => import('views/list/List')
const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
