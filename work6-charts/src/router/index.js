import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CityBar from '../views/CityBarView'
import Map from '../views/MapView'
import YearLine from '../views/YearLineView'
import ScorePie from '../views/ScorePieView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path: '/cityBar', component: CityBar},
  {path: '/map', component: Map},
  {path: '/yaerline', component: YearLine},
  {path: '/scorepie', component: ScorePie},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
