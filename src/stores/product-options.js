import { defineStore } from "pinia"

export const useProductStore = defineStore('products', {
  // state: () => {
  //   return {}
  // },
  // shorthand syntax
  state: () => ({
    products: [],
  }),
})
