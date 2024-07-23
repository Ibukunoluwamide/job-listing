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
      component: () => import('@/views/ListingsLayout.vue'),
      children: [
        {
          path: '',
          name: 'listings',
          component: () => import('@/components/ListingJobs.vue'),
        },
        {
          path: ':id',
          name: 'listing-details',
          component: () => import('@/components/JobDetails.vue')
        },
        {
          path: 'create',
          name: 'listing-create',
          component: () => import('@/views/CreateJob.vue')
        },
        {
          path: 'search',
          name: 'listing-search',
          component: () => import('@/components/SearchQuery.vue')
        }
      ]
    }
  ]
})

export default router
