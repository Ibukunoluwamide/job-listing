import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
      
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      
    },
    {
      path: '/listings',
      name: 'listings',
      component: () => import('../components/ListingJobs.vue'),
      
    },
    {
      path: '/listings/:id',
      name: 'listing-details',
      component: () => import('../components/JobDetails.vue')
    },
    {
      path: '/listings/create',
      name: 'listing-create',
      component: () => import('@/views/CreateJob.vue')
    }
  ]
})

export default router
