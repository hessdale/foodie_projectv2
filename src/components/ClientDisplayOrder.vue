<template>
  <div>
    <div v-if="this.orders == null"></div>
    <section v-for="(order, i) in orders" :key="i">
      <h2>{{ order.name }}</h2>
      <h5>{{ order.price }}</h5>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      orders: undefined,
      client_id: cookies.get(`client_id`),
    };
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
          this.orders = response.data;
          console.log(this.orders);
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