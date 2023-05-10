<template>
  <div>
    <!-- goes throuhg order ids and order items to display -->
    <div v-if="this.orders == null"></div>
    <div v-for="(order, i) in orders" :key="i">
      <h1>order ID:{{ order[0].order_id }}</h1>
      <button @click="confirmed" :orderId="order[0].order_id">Confirmed</button>
      <button @click="completed" :orderId="order[0].order_id">Complete</button>
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
  methods: {
    //function to confirm order on api
    confirmed(details) {
      //gets id and parses it
      let Id = details.target.attributes[1].value;
      let IdParse = JSON.parse(Id);
      //sends request with token and parsed id and changes is confirmed to true
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant-order`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookies.get(`token`),
          },
          method: `PATCH`,
          data: {
            order_id: IdParse,
            is_confirmed: `true`,
          },
        })
        .then(() => {
          console.log(`success`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //sends request to api with token and parsed id and changes completed to true
    completed(details) {
      let Id = details.target.attributes[1].value;
      let IdParse = JSON.parse(Id);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant-order`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookies.get(`token`),
          },
          method: `PATCH`,
          data: {
            order_id: IdParse,
            is_complete: `true`,
          },
        })
        .then(() => {
          console.log(`success`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //sorts incoming orders from api
    sort_orders(unsorted_orders) {
      //makes two arrays to populate with unique ids and sort orders into same order ids
      let order_ids = [];
      let sorted_orders = [];
      //for loop using findIndex to sort orders and get unique order ids into array
      for (let i = 0; i < unsorted_orders.length; i++) {
        let index = order_ids.findIndex(
          (order_id) => order_id === unsorted_orders[i].order_id
        );
        if (index !== -1) {
          sorted_orders[index].push(unsorted_orders[i]);
        } else {
          sorted_orders.push([unsorted_orders[i]]);
          order_ids.push(unsorted_orders[i].order_id);
        }
      }
      //sets orders to sorted orders
      this.orders = sorted_orders;
    },
  },
  data() {
    return {
      orders: undefined,
    };
  },
  mounted() {
    axios
      .request({
        url: `https://foodie.bymoen.codes/api/restaurant-order`,
        headers: {
          "x-api-key": `H0x7V93WN4ebcatCvCI3`,
          token: cookies.get(`token`),
        },
        method: `GET`,
      })
      .then((response) => {
        //calls on function to sort incoming order data
        this.sort_orders(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(`please log in`);
      });
  },
};
</script>

<style scoped>
div {
  margin-bottom: 50px;
}
</style>