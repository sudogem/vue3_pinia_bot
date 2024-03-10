import { defineStore } from "pinia"
import { ref, computed } from "vue"

// using setup store approach
export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  const cartTotal = computed(() => cart.value.reduce((prev, cur) => prev += cur.price, 0))

  return { cart, cartTotal }
})