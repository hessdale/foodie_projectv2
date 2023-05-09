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
</style>