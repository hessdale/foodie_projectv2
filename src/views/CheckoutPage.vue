<template>
  <div></div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  data() {
    return {
      cart: undefined,
    };
  },
  mounted() {
    this.cart = cookies.get(`order`);
  },
};
</script>

<style scoped>
</style>