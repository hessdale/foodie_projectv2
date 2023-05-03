<template>
  <div>
    <div>
      <section v-for="item in items" :key="item.id">
        <h3>{{ item.name }}</h3>
        <img width="100px" :src="item.image_url" :alt="item.description" />
        <p>{{ item.description }}</p>
        <h4>${{ item.price }}</h4>
        <button @click="addtocart" :itemid="item.id" :restId="restaurantId">
          order
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  data() {
    return {
      items: undefined,
      cart: [],
      restaurantId: undefined,
    };
  },
  methods: {
    restInfo(details) {
      this.restaurantId = details;
    },
    menuInfo(details) {
      this.items = details;
    },

    addtocart(details) {
      let itemId = details.currentTarget.attributes[1].value;
      let restId = details.currentTarget.attributes[2].value;
      let getItems = cookies.get(`order`);

      if (getItems == null) {
        cookies.set(`order`, { menu_items: itemId, restaurant_id: restId });
      } else {
        let MenuItems = getItems.menu_items;
        let order = [MenuItems];
        order.push(itemId);
        cookies.set(`order`, { menu_items: order, restaurant_id: restId });
      }
    },
  },
  mounted() {
    this.$root.$on(`restaurant_id`, this.restInfo);
    this.$root.$on(`menu_data`, this.menuInfo);
  },
};
</script>

<style scoped>
</style>