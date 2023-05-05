<template>
  <div>
    <section v-for="cart in carts" :key="cart.itemId">
      <h3>{{ cart.itemName }}</h3>
      <img width="100px" :src="cart.itemImg" :alt="cart.description" />
      <p>{{ cart.description }}</p>
      <h4>${{ cart.itemPrice }}</h4>
    </section>
    <button>order</button>
    <button>clear cart</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  methods: {
    clear(details) {
      details;
    },
    order(details) {
      details;
    },
  },
  data() {
    return {
      carts: undefined,
    };
  },
  mounted() {
    this.carts = cookies.get(`order`);
    console.log(this.carts);
  },
};
</script>

<style scoped>
</style>