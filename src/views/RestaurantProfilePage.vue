<template>
  <div>
    <restaurant-profile></restaurant-profile>
    <new-menu></new-menu>
    <restaurant-edit></restaurant-edit>
    <restaurant-menu></restaurant-menu>
  </div>
</template>

<script>
import RestaurantProfile from "@/components/RestaurantProfile.vue";
import RestaurantMenu from "@/components/RestaurantMenu.vue";
import RestaurantEdit from "@/components/RestaurantEdit.vue";
import NewMenu from "@/components/NewMenu.vue";
import cookies from "vue-cookies";

export default {
  components: {
    RestaurantProfile,
    NewMenu,
    RestaurantMenu,
    RestaurantEdit,
  },
  mounted() {
    if (cookies.get(`restaurant_id`) === null) {
      this.$router.push(`/restaurantlogin`);
    }
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