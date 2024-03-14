import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '@/catalog/ProductCatalog-Options.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/catalog',
      name: 'Catalog',
      component: ProductCatalog,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/cart/ShoppingCart-Options.vue'),
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/search/ProductSearch-Options.vue'),
    },
    {
      path: '/',
      redirect: '/catalog',
    },
  ],
})

export default router
