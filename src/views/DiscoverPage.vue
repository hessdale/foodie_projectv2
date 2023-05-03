<template>
  <div>
    <display-menu></display-menu>
    <discover-restaurants></discover-restaurants>
  </div>
</template>

<script>
import DiscoverRestaurants from "../components/DiscoverRestaurants.vue";
import DisplayMenu from "../components/DisplayMenu.vue";

export default {
  components: {
    DiscoverRestaurants,
    DisplayMenu,
  },
};
</script>

<style scoped>
</style>