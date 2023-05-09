<template>
  <div>
    <section v-if="this.id != undefined">
      <button @click="logout">LOGOUT</button>
      <h1>Welcome, {{ first_name }} {{ last_name }}</h1>
      <img width="200px" :src="image_url" alt="user profile picture" />
      <h1>{{ username }}</h1>
      <h3>INFO</h3>
      <p>date created: {{ created_at }}</p>
      <p>Email: {{ email }}</p>
      <p>id: {{ id }}</p>
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
      created_at: undefined,
      email: undefined,
      first_name: undefined,
      last_name: undefined,
      id: undefined,
      image_url: undefined,
      username: undefined,
    };
  },
  mounted() {
    // get existing user info with id figure out how to pass number on request not string
    let clientId = cookies.get(`client_id`);
    let clientjson = JSON.parse(clientId);
    axios
      .request({
        url: `https://foodie.bymoen.codes/api/client`,
        headers: {
          "x-api-key": `H0x7V93WN4ebcatCvCI3`,
        },
        method: `GET`,
        params: {
          client_id: clientjson,
        },
      })
      .then((response) => {
        this.created_at = response.data[0].created_at;
        this.email = response.data[0].email;
        this.first_name = response.data[0].first_name;
        this.last_name = response.data[0].last_name;
        this.id = response.data[0].id;
        this.image_url = response.data[0].image_url;
        this.username = response.data[0].username;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
};
</script>

<style scoped>
</style>