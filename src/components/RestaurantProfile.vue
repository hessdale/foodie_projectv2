<template>
  <div>
    <section v-if="this.restaurant_id != undefined">
      <button @click="logout">LOGOUT</button>
      <h1>Welcome, {{ name }}</h1>
      <img width="200px" :src="profile_url" alt="restaurant profile picture" />
      <h1>{{ city }}</h1>
      <h3>INFO</h3>
      <p>address: {{ address }} {{ city }}</p>
      <p>Email: {{ email }}</p>
      <p>id: {{ restaurant_id }}</p>
      <p>phone: {{ phone }}</p>
      <p>bio: {{ bio }}</p>
    </section>
    <div v-else>
      <h4>please log in</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    logout() {
      cookies.set(`token`, undefined);
      cookies.set(`client_id`, undefined);
      cookies.set(`restaurant_id`, undefined);
    },
  },
  data() {
    return {
      email: undefined,
      name: undefined,
      address: undefined,
      phone: undefined,
      bio: undefined,
      city: undefined,
      profile_url: undefined,
      banner_url: undefined,
      restaurant_id: undefined,
    };
  },
  mounted() {
    let restaurantId = cookies.get(`restaurant_id`);
    let restaurantJson = JSON.parse(restaurantId);
    axios
      .request({
        url: `https://foodie.bymoen.codes/api/restaurant`,
        headers: {
          "x-api-key": `H0x7V93WN4ebcatCvCI3`,
        },
        method: `GET`,
        params: {
          restaurant_id: restaurantJson,
        },
      })
      .then((response) => {
        this.email = response.data[0].email;
        this.name = response.data[0].name;
        this.address = response.data[0].address;
        this.phone = response.data[0].phone_number;
        this.bio = response.data[0].bio;
        this.city = response.data[0].city;
        this.profile_url = response.data[0].profile_url;
        this.banner_url = response.data[0].banner_url;
        this.restaurant_id = response.data[0].restaurant_id;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>