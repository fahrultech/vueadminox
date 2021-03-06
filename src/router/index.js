import Vue from 'vue'
import VueRouter from 'vue-router'
import Quotation from '../components/quotation';
import Kategori from '../components/kategori';
import Barang from '../components/barang';
import Subkategori from '../components/subkategori';
import Dashboard from '../components/dashboard';


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path:'/kategori',
    name: 'kategori',
    component: Kategori
  },
  {
    path: '/quotation',
    name: 'quotation',
    component: Quotation
  },
  {
    path: '/barang',
    name: 'barang',
    component: Barang
  },
  {
    path: '/subkategori',
    name: 'subkategori',
    component: Subkategori
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
