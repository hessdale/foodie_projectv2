<template>
  <div>
    <div>
      <!-- loop that goes through restaurant items to display on page -->
      <section v-for="item in items" :key="item.id">
        <h3>{{ item.name }}</h3>
        <img width="100px" :src="item.image_url" :alt="item.description" />
        <p>{{ item.description }}</p>
        <h4>${{ item.price }}</h4>
        <!-- lorder button with all the items info stored in attributes -->
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
    //defining rest Id
    restInfo(details) {
      this.restaurantId = details;
    },
    //defining menu info
    menuInfo(details) {
      this.items = details;
    },

    addtocart(details) {
      //gets attribute value from button
      let itemId = details.currentTarget.attributes[1].value;
      let restId = details.currentTarget.attributes[2].value;
      let itemImg = details.currentTarget.attributes[3].value;
      let itemName = details.currentTarget.attributes[4].value;
      let itemDesc = details.currentTarget.attributes[5].value;
      let itemPrice = details.currentTarget.attributes[6].value;
      //gets current order from cookies
      let getItems = cookies.get(`order`);
      //sets get items to undefined only if its undefined from cookies else it gets current order
      if (getItems == "undefined") {
        getItems = undefined;
      } else {
        getItems = cookies.get(`order`);
      }
      // if get items is set to anything other than undefined it pushes item onto array to store in cookie
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
        //if its set to undefined then it will be set to an array with first order item
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
      }
    },
  },
  mounted() {
    //listens for rest ID and menu data
    this.$root.$on(`restaurant_id`, this.restInfo);
    this.$root.$on(`menu_data`, this.menuInfo);
  },
};
</script>

<style scoped>
</style>