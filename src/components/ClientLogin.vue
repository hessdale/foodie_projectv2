<template>
  <div>
    <label for="email">Email</label>
    <input type="text" id="email" ref="userEmail" />
    <label for="password">Password</label>
    <input type="text" id="password" ref="userPassword" />
    <button @click="login">Log in</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      logged_in: cookies.get(`token`),
    };
  },
  methods: {
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
          cookies.set(`restaurant_id`, undefined);
          location.reload();
          document
            .querySelector(`div`)
            .insertAdjacentHTML(`beforebegin`, `<h3>Login Successful</h3>`);
        })
        .catch(() => {
          document
            .querySelector(`div`)
            .insertAdjacentHTML(`beforebegin`, `<h3>Login Failes</h3>`);
        });
    },
  },
};
</script>

<style scoped>
</style>