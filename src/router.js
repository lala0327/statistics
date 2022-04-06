import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("./components/Home.vue")
  },
  {
    path: '/Random',
    name: 'Random',
    component: () => import("./components/Random.vue")
  },
  {
    path: '/Uniform',
    name: 'Uniform',
    component: () => import("./components/Uniform.vue")
  },
  {
    path: '/Normal',
    name: 'Normal',
    component: () => import("./components/Normal.vue")
  },
  {
    path: '/NormalSimulation',
    name: 'NormalSimulation',
    component: () => import("./components/NormalSimulation.vue")
  },
  {
    path: '/StandardNormal',
    name: 'StandardNormal',
    component: () => import("./components/StandardNormal.vue")
  },
  {
    path: '/Coin',
    name: 'Coin',
    component: () => import("./components/Coin.vue")
  },
  {
    path: '/NegativeBinomial',
    name: 'NegativeBinomial',
    component: () => import("./components/NegativeBinomial.vue")
  },
  {
    path: '/NBSimulation',
    name: 'NBSimulation',
    component: () => import("./components/NBSimulation.vue")
  }
]
const router = createRouter({
  history: createWebHistory('/statistics/'),
  routes,

})
export default router;

