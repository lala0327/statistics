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
  // history: createWebHistory('/statistics/'),
  // routes,
  // mode: 'history',
  mode: 'hash',
  base: '/statistics/'
})
export default router;

// if(sessionStorage.getItem('permission')) {
//   let routerData = routeConfig();
//   routerData.routes.forEach(route => router.options.routes.push(route));
//   router.addRoutes(routerData.routes);
// }