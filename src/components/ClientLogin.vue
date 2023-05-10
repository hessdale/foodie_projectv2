<template>
  <div>
    <section>
      <!-- form for log in -->
      <label for="email">Email</label>
      <input type="text" id="email" ref="userEmail" />
      <label for="password">Password</label>
      <input type="text" id="password" ref="userPassword" />
      <button @click="login">Log in</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    login(details) {
      details;
      //gets value of email and password for use in api request
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
          //sets cookies token/client_id/restaurant_id
          cookies.set(`token`, response.data.token);
          cookies.set(`client_id`, response.data.client_id);
          cookies.set(`restaurant_id`, undefined);
          //inserts success message
          document
            .querySelector(`section`)
            .insertAdjacentHTML(`beforebegin`, `<h3>Login Successful</h3>`);
          location.reload();
        })
        .catch(() => {
          //inserts failure message
          document
            .querySelector(`section`)
            .insertAdjacentHTML(`beforebegin`, `<h3>Login Failed</h3>`);
          location.reload();
        });
    },
  },
};
</script>

<style scoped>
</style>