import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue'),
      // meta:{
      //   title: "HOME"
      // }
    }
  ]
})
// router.beforeEach((to, from, next)   =>{
//   document.title = `${to.meta.title}`;
//   next();
// })
export default router
