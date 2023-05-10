<template>
  <div>
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
      unsorted_orders: undefined,
      client_id: cookies.get(`client_id`),
      orders: undefined,
    };
  },
  methods: {
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
  mounted() {
    if (this.client_id != undefined) {
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
  margin-bottom: 40px;
}
</style>