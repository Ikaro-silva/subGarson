import { createRouter, createWebHistory } from 'vue-router'
import NProgress from"nprogress"


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
      component: () => import('../views/Adm/register_user.view.vue'),
      meta:{requireAuth:true}
    },
    {
      path: '/admRegister_Pratos',
      name: 'Administrador Register Pratos',
      component: () => import('../views/Adm/register_pratos.view.vue'),
      meta:{requireAuth:true}

    }

  ]
})

//validação do token
router.beforeEach((to, from, next) => {

  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/admLogin',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});


//Nprogress
router.beforeResolve((to,from,next)=>{
  if(to.name){
    NProgress.start()
  }
  next()
})
router.afterEach((to,from)=>{
  NProgress.done()
})
export default router
