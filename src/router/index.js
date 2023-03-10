// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SolicitacaoView from '../views/SolicitacaoView.vue'
import GraficoView from '../views/GraficoView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/solicitacoes',
    name: 'Solicitacoes',
    component: SolicitacaoView
  },
  {
    path: '/graficos',
    name: 'Graficos',
    component: GraficoView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
