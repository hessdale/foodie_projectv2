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
div {
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;
  text-align: center;
}
</style>