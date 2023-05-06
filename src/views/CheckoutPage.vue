<template>
  <div>
    <div v-if="this.carts == undefined">
      <p>please make an order</p>
    </div>
    <div v-else>
      <section v-for="cart in carts" :key="cart.itemId">
        <h3>{{ cart.itemName }}</h3>
        <img width="100px" :src="cart.itemImg" :alt="cart.description" />
        <p>{{ cart.description }}</p>
        <h4>${{ cart.itemPrice }}</h4>
      </section>
    </div>
    <button @click="order">order</button>
    <button @click="clear">clear cart</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  methods: {
    clear(details) {
      details;
      this.carts = undefined;
      cookies.set(`order`, undefined);
    },
    order(details) {
      details;
      let menu_items = [];
      let restaurant = this.carts[0].restaurant_id;
      for (let i = 0; i < this.carts.length; i++) {
        menu_items.push(this.carts[i].itemId);
      }

      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client-order`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookies.get(`token`),
          },
          method: `POST`,
          data: {
            menu_items: menu_items,
            restaurant_id: restaurant,
          },
        })
        .then((response) => {
          console.log(response);
          let orders = [];
          if (cookies.get(`orderSent`) == null) {
            orders.push(response.data.order_id);
            cookies.set(`orderSent`, orders);
            this.clear();
          } else {
            let currentOrders = cookies.get(`order`);
            orders.push(currentOrders);
            orders.push(response.data.order_id);
            cookies.set(`orderSent`, orders);
            this.clear();
          }
        })
        .catch((error) => {
          console.log(`only order from one rest at a time`);
          console.log(error);
        });
    },
  },
  //bug even though I have carts undefined after order is sent it still goes through the
  //loop in the html
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