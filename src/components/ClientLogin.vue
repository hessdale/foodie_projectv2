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
          url: `${process.env.VUE_APP_BASE_URL}/api/client-login`,
          method: `POST`,
          data: {
            email: email,
            password: password,
          },
        })
        .then((response) => {
          //sets cookies token/client_id/restaurant_id
          console.log(response)
          cookies.set(`token`, response.data[0].token);
          cookies.set(`client_id`, response.data[0].client_id);
          cookies.set(`restaurant_id`, undefined);
          //inserts success message
          document
            .querySelector(`section`)
            .insertAdjacentHTML(`beforebegin`, `<h3>Login Successful</h3>`);
   
        })
        .catch(() => {
          //inserts failure message
          document
            .querySelector(`section`)
            .insertAdjacentHTML(`beforebegin`, `<h3>Login Failed</h3>`);

        });
    },
  },
};
</script>

<style scoped>
</style>