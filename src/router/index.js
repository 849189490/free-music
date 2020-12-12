import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from 'views/shop/Shop'

const List = () => import('views/list/List')
const Detail = () => import('views/detail/Detail')
const Songs = () => import('views/songs/Songs')
const History = () => import('views/history/History')
const Like = () => import('views/like/Like')
const CurPlay = () => import('views/curplay/CurPlay')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/shop',
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: {
      title: '音乐馆',
    },
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    meta: {
      title: 'music',
    },
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '详情',
    },
  },
  {
    path: '/songs/:song',
    name: 'Songs',
    component: Songs,
    meta: {
      title: '歌曲',
    },
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      title: '历史',
    },
  },
  {
    path: '/like',
    name: 'Like',
    component: Like,
    meta: {
      title: '喜爱',
    },
  },
  {
    path: '/curplay',
    name: 'CurPlay',
    component: CurPlay,
    meta: {
      title: '当前播放',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  // 全局守卫, 改变网页title
  document.title = to.matched[0].meta.title || 'coderMusic'
  next()
})
export default router
