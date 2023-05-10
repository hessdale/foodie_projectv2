<template>
  <div>
    <div v-if="this.orders == null"></div>
    <div v-for="(order, i) in orders" :key="i">
      <h1>order ID:{{ order[0].order_id }}</h1>
      <button @click="confirmed" :orderId="order.order_id">Confirmed</button>
      <button @click="completed" :orderId="order.order_id">Complete</button>
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
    confirmed(details) {
      let Id = details.currentTarget.attributes[1].value;
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
            is_confirmed: `true`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    completed(details) {
      let Id = details.currentTarget.attributes[1].value;
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
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sort_orders(unsorted_orders) {
      let order_ids = [];
      let sorted_orders = [];
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
      this.orders = sorted_orders;
      console.log(this.orders);
    },
  },
  data() {
    return {
      orders: undefined,
      restaurant_id: cookies.get(`restaurant_id`),
    };
  },
  mounted() {
    if (this.restaurant_id != undefined) {
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
          console.log(response);
          this.sort_orders(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log(`please log in`);
    }
  },
};
</script>

<style scoped>
div {
  margin-bottom: 50px;
}
</style>