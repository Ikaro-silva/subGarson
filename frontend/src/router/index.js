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
      path: '/admLogin',
      name: 'Administrador',
      component: () => import('../views/Adm/login_user.view.vue')
    },
     {
      path: '/admRegister_User',
      name: 'Administrador Register User',
      component: () => import('../views/Adm/register_user.view.vue')
    },
    {
      path: '/admRegister_Pratos',
      name: 'Administrador Register Pratos',
      component: () => import('../views/Adm/register_pratos.view.vue')
    }

  ]
})

export default router
