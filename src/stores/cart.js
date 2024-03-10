import { defineStore } from "pinia"
import { ref } from "vue"

// using setup store approach
export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  return { cart }
})