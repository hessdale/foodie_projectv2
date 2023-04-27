<template>
  <div>
    <section v-if="id != undefined">
      <h1>Welcome, {{ first_name }} {{ last_name }}</h1>
      <img :src="image_url" alt="user profile picture" />
      <h1>{{ username }}</h1>
      <h3>info</h3>
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
        data: {
          client_id: clientjson,
        },
      })
      .then((response) => {
        response;
        console.log(response);
      })
      .catch((error) => {
        error;
        console.log(error.response.data);
      });
  },
};
</script>

<style scoped>
</style>