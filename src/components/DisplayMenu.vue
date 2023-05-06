<template>
  <div>
    <div>
      <section v-for="item in items" :key="item.id">
        <h3>{{ item.name }}</h3>
        <img width="100px" :src="item.image_url" :alt="item.description" />
        <p>{{ item.description }}</p>
        <h4>${{ item.price }}</h4>
        <button
          @click="addtocart"
          :itemId="item.id"
          :restId="restaurantId"
          :itemImage="item.image_url"
          :itemName="item.name"
          :itemDesc="item.description"
          :itemPrice="item.price"
        >
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
      let itemImg = details.currentTarget.attributes[3].value;
      let itemName = details.currentTarget.attributes[4].value;
      let itemDesc = details.currentTarget.attributes[5].value;
      let itemPrice = details.currentTarget.attributes[6].value;
      let getItems = cookies.get(`order`);
      if (getItems == "undefined") {
        getItems = undefined;
      } else {
        getItems = cookies.get(`order`);
      }
      if (getItems != undefined) {
        getItems.push({
          description: itemDesc,
          itemId: itemId,
          itemImg: itemImg,
          itemName: itemName,
          itemPrice: itemPrice,
          restaurant_id: restId,
        });
        cookies.set(`order`, getItems);
      } else {
        cookies.set(`order`, [
          {
            description: itemDesc,
            itemId: itemId,
            itemImg: itemImg,
            itemName: itemName,
            itemPrice: itemPrice,
            restaurant_id: restId,
          },
        ]);
        console.log(getItems);
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