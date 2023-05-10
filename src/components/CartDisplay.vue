<template>
  <div>
    <div>
      <section v-for="cart in carts" :key="cart.itemId">
        <h3>{{ cart.itemName }}</h3>
        <img width="100px" :src="cart.itemImg" :alt="cart.description" />
        <p>{{ cart.description }}</p>
        <h4>{{ cart.itemPrice }}</h4>
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
      let restaurant_ids = [];
      for (let i = 0; i < this.carts.length; i++) {
        restaurant_ids.push(this.carts[i].restaurant_id);
      }
      let restaurant = this.carts[0].restaurant_id;
      //loops through cart and pushes the item ids to the array
      for (let i = 0; i < this.carts.length; i++) {
        menu_items.push(this.carts[i].itemId);
      }
      //axios request to send the order only if restaurant ids are all the same
      let checkedIds = [];
      for (let i = 0; i < restaurant_ids.length; i++) {
        if (checkedIds.length < 1) {
          checkedIds.push(restaurant_ids[i]);
          this.equals = true;
        }

        if (checkedIds[i] == restaurant_ids[i]) {
          checkedIds.push(restaurant_ids[i]);
          this.equals = true;
        } else {
          this.eqauls = false;
        }
      }
      console.log(this.equals);
      if (this.equals == true) {
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
            this.clear();
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        document
          .querySelector(`section`)
          .insertAdjacentHTML(
            `beforeend`,
            `<h3>only order from one restaurant at a time`
          );
      }
    },
  },
  data() {
    return {
      carts: cookies.get(`order`),
      equals: false,
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