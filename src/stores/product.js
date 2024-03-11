import { defineStore } from "pinia"
import { ref } from "vue"

import productData from '@/catalog/product-data'

export const useProductStore = defineStore('products', () => {
  const products = ref([])

  // private functions listed here
  // actions
  function getProducts() {
    products.value = productData
  }

  return {
    products,
    getProducts,
  }
})
