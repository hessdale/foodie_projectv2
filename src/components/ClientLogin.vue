<template>
  <div>
    <label for="email">Email</label>
    <input type="text" id="email" ref="userEmail" />
    <label for="password">Password</label>
    <input type="text" id="password" ref="userPassword" />
    <button @click="login">Log in</button>
    <section>
      <input type="text" ref="idNum" />
      <button @click="getInfo">get info</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    // LOG IN
    login(details) {
      details;
      let email = this.$refs.userEmail[`value`];
      let password = this.$refs.userPassword[`value`];
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client-login`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
          },
          method: `POST`,
          data: {
            email: email,
            password: password,
          },
        })
        .then((response) => {
          cookies.set(`token`, response.data.token);
          cookies.set(`client_id`, response.data.client_id);
        })
        .catch((error) => {
          error;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>