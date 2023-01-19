import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Cardapio',
      component: () => import('../views/Cardapio/lista_pedidos.view.vue') 
    },
    {
      path: '/cozinha',
      name: 'Cozinha',
      component: () => import('../views/Cozinha/lista_pedidos.view.vue')
    },
    {
      path: '/caixa',
      name: 'Caixa',
      component: () => import('../views/Caixa/lista_pedidos.view.vue')
    },
    {
      path: '/adm',
      name: 'Administrador',
      component: () => import('../views/Adm/login_user.view.vue')
    }

  ]
})

export default router
