<template>
  <div>
    <div>
      <section v-for="cart in carts" :key="cart.itemId">
        <h3>{{ cart.itemName }}</h3>
        <img width="100px" :src="cart.itemImg" :alt="cart.description" />
        <p>{{ cart.description }}</p>
        <h4>${{ cart.itemPrice }}</h4>
      </section>
    </div>
    <div>
      <!-- buttons with functions to order cart and clear it -->
      <button @click="order">order</button>
      <button @click="clear">clear cart</button>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  methods: {
    //function to delete cart and reset cookies then reloads the page
    clear(details) {
      details;
      this.carts = undefined;
      cookies.set(`order`, undefined);
      location.reload();
    },
    //function to  send order to the api
    order(details) {
      details;
      //defines empty array of menu items and takes the first restaurant id and sets it as the main ID
      let menu_items = [];
      let restaurant = this.carts[0].restaurant_id;
      //loops through cart and pushes the item ids to the array
      for (let i = 0; i < this.carts.length; i++) {
        menu_items.push(this.carts[i].itemId);
      }
      //axios request to send the order
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
          //MAYBE DELETE ALL OF THIS RESPONSE NOT SURE WHAT IT DOES or try to understand it
          //defines empty order
          let orders = [];
          //if orderSent cookie is null then itsets the orderSent cookie wih response data
          if (cookies.get(`orderSent`) == null) {
            orders.push(response.data.order_id);
            cookies.set(`orderSent`, orders);
            this.clear();
          } else {
            //if ordersent cookies is set then it gets info from orders and pushes the current order and new order to orders data
            let currentOrders = cookies.get(`order`);
            orders.push(currentOrders);
            orders.push(response.data.order_id);
            cookies.set(`orderSent`, orders);
            this.clear();
          }
        })
        .catch((error) => {
          console.log(`only order from one restaurant at a time`);
          console.log(error);
        });
    },
  },
  data() {
    return {
      carts: cookies.get(`order`),
    };
  },
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;
  text-align: center;
}
</style>