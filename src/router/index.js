// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SolicitacaoView from '../views/SolicitacaoView.vue'


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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
