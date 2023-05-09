<template>
  <div>
    <client-display-order></client-display-order>
    <restaurant-display-order></restaurant-display-order>
  </div>
</template>

<script>
import ClientDisplayOrder from "@/components/ClientDisplayOrder.vue";
import RestaurantDisplayOrder from "@/components/RestaurantDisplayOrder.vue";

export default {
  components: {
    ClientDisplayOrder,
    RestaurantDisplayOrder,
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;
  text-align: center;
}
</style>