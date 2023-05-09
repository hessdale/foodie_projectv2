<template>
  <div>
    <div v-if="this.orders == null"></div>
    <section v-for="(order, i) in orders" :key="i">
      <h2>{{ order.name }}</h2>
      <h5>${{ order.price }}</h5>
      <p>{{ order.order_id }}</p>
      <button @click="confirmed" :orderId="order.order_id">Confirmed</button>
      <button @click="completed" :orderId="order.order_id">Complete</button>
    </section>
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
          this.orders = response.data;
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
</style>