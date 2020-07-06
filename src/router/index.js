import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Index from '../components/Index.vue'

Vue.use(VueRouter)
// 防止路由重复
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children: [
      { path: '/index', component: () => import(/* webpackChunkName: "about" */ '../components/Index.vue') },
      {
        path: '/drugconsult',
        component: () => import(/* webpackChunkName: "about" */ '../components/DrugConsult.vue'),
        children: [
          // { path: '/consultList', component: () => import(/* webpackChunkName: "about" */ '../components/DrugConsult/ConsultList.vue') },
        ]
      },
      { path: '/introduction', component: () => import(/* webpackChunkName: "about" */ '../components/Introduction.vue') },
      { path: '/consultDetail', component: () => import(/* webpackChunkName: "about" */ '../components/DrugConsult/ConsultDetail.vue') }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
