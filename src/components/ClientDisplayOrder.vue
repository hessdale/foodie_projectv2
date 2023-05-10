<template>
  <div>
    <!-- loops through orders and items to display on page -->
    <div v-if="this.orders == null"></div>
    <div v-for="(order, i) in orders" :key="i">
      <h1>order ID:{{ order[0].order_id }}</h1>
      <h3 v-if="order[0].is_confirmed == 1">Order Confirmed</h3>
      <h3 v-if="order[0].is_complete == 1">Order Complete</h3>
      <section v-for="(item, q) in order" :key="q">
        <h2>{{ item.name }}</h2>
        <h5>${{ item.price }}</h5>
        <p>{{ item.order_id }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      //defining unsorted orders as undefined
      unsorted_orders: undefined,
      //setting orders to undefined
      orders: undefined,
    };
  },
  methods: {
    //method used to sort orders and ids into array with info from axios request
    sort_orders(unsorted_orders) {
      let order_ids = [];
      let sorted_orders = [];
      //for loop going through unsorted orders array
      for (let i = 0; i < unsorted_orders.length; i++) {
        //using findIndex to find other order ids that are the smae
        let index = order_ids.findIndex(
          (order_id) => order_id === unsorted_orders[i].order_id
        );
        //if index returns -1 it means that there is the same id in the array already and will push into that array
        if (index !== -1) {
          sorted_orders[index].push(unsorted_orders[i]);
          //if not it means there are no matches and it pushes to the end of the array and makes a new one
        } else {
          sorted_orders.push([unsorted_orders[i]]);
          order_ids.push(unsorted_orders[i].order_id);
        }
      }
      //defines this.orders as the sorted array from the loop
      this.orders = sorted_orders;
    },
  },
  mounted() {
    //axios request to get clients orders
    axios
      .request({
        url: `https://foodie.bymoen.codes/api/client-order`,
        headers: {
          "x-api-key": `H0x7V93WN4ebcatCvCI3`,
          token: cookies.get(`token`),
        },
        method: `GET`,
      })
      .then((response) => {
        //sends the response to function of sort_orders
        this.sort_orders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
div {
  margin-bottom: 40px;
}
</style>