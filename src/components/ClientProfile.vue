<template>
  <div>
    <!-- only displays if id is not undefined -->
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
    //function to log user out and set all affiliated cookies to undefined and reloads the page
    logout() {
      cookies.set(`token`, undefined);
      cookies.set(`client_id`, undefined);
      cookies.set(`restaurant_id`, undefined);
      location.reload();
    },
  },
  data() {
    return {
      //sets all used data to undefined for display
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
    //gets client id from cookies and parses it
    let clientId = cookies.get(`client_id`);
    let clientjson = JSON.parse(clientId);
    //get request to recieve data for profile
    axios
      .request({
        url: `${process.env.VUE_APP_BASE_URL}/api/client`,
        method: `GET`,
        params: {
          client_id: clientjson,
        },
      })
      .then((response) => {
        console.log(response)
        //sets data to local variables
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