import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/',
        name: 'homeview',
        component: () => import('../layout/HomeView.vue')
      },

      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/MenuView/IndexView.vue')
      },
      {
        path: '/menuadd',
        name: 'menuadd',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/MenuView/MenuAdd.vue')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/RoleView/IndexView.vue')
      },
      {
        path: '/roleadd',
        name: 'roleadd',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/RoleView/RoleAdd.vue')
      },

      {
        path: '/admin',
        name: 'admin',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/AdminView/IndexView.vue')
      },
      {
        path: '/adminadd',
        name: 'adminadd',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/AdminView/AdminAdd.vue')
      },
      {
        path: '/one',
        name: 'one',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/OneView/IndexView.vue')
      },
      {
        path: '/oneadd',
        name: 'oneadd',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/OneView/OneAdd.vue')
      },
      {
        path: '/two',
        name: 'two',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/TwoView/IndexView.vue')
      },
      {
        path: '/twoadd',
        name: 'twoadd',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/TwoView/TwoAdd.vue')
      },
      {
        path: '/three',
        name: 'three',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/ThreeView/IndexView.vue')
      },
      {
        path: '/threeadd',
        name: 'threeadd',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/ThreeView/ThreeAdd.vue')
      },
      {
        path: '/four',
        name: 'four',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/FourView/IndexView.vue')
      },
      {
        path: '/fouradd',
        name: 'fouradd',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/FourView/FourAdd.vue')
      },
      {
        path: '/five',
        name: 'five',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/FiveView/IndexView.vue')
      },
      {
        path: '/fiveadd',
        name: 'fiveadd',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/FiveView/FiveAdd.vue')
      },
      {
        path: '/six',
        name: 'six',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/SixView/IndexView.vue')
      },
      {
        path: '/sixadd',
        name: 'sixadd',
        component: () => import(/* webpackChunkName: "about" */ '@/layout/SixView/SixAdd.vue')
      },
    ],
   
  },
  {
    path:'/login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/GoLogin.vue')
    
  },
  {
    path:'*',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')

  }
  // 路由重定向

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
