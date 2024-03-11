<template>
  <div>
    <h1>Catalog</h1>
    <span>Total Products: {{ productStore.products.length }} </span>
    <ul class="products">
      <li class="product-item" v-for="(product, index) in productStore.products" :key="index">
        <ProductInfo :product="product">
          <button class="cta" @click="addToCart(product)">Buy</button>
        </ProductInfo>
      </li>
    </ul>
  </div>
</template>

<!-- Composition API -->
<script setup>
import ProductInfo from './product-info/ProductInfo.vue'
// import products from './product-data.js'

import { useProductStore } from '@/stores/product.js' // load data by using synchronous action
import { useCartStore } from '@/stores/cart.js'

const cartStore = useCartStore()
const productStore = useProductStore()

productStore.getProducts()

function addToCart(product) {
  // using approach #1: using push() simple approach
  // cartStore.cart.push({ ...product })
  // console.log('cartStore.cart.length:', cartStore.cart.length)
  
  // using approach #2: using spread
  // const newCart = [...cartStore.cart, product]
  // cartStore.cart = newCart
  
  // using approach #3: $patch({}) pass by object - use to modify multiple state properties on the store
  // const newCart = [...cartStore.cart, product]
  // cartStore.$patch({
  //   cart: newCart,
  //   anotherProperties: 'foobar',
  // })

  // using approach #4: $patch((state)) pass by function 
  cartStore.$patch((state) => {
    state.cart.push({ ...product })
    state.anotherProperties = 'foobar'
  })
}
</script>

<style scoped>
.products {
  margin: 0 100px;
}

.product-item {
  border-bottom: 2px solid #999;
}
</style>