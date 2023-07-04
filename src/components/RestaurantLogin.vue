<template>
  <div>
    <!-- form to log in -->
    <input type="text" id="email" ref="userEmail" placeholder="Email" />
    <input type="text" ref="userPassword" placeholder="Password" />
    <button @click="login">Log in</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    // login functing
    login() {
      //takes input from form and uses it in api to log in
      let email = this.$refs.userEmail[`value`];
      let password = this.$refs.userPassword[`value`];
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_URL}/api/restaurant-login`,
          method: `POST`,
          data: {
            email: email,
            password: password,
          },
        })
        .then((response) => {
          console.log(response)
          //sets cookies token/restaurant and client ID and displays success message then reloads the page
          cookies.set(`token`, response.data[0].token);
          cookies.set(`restaurant_id`, response.data[0].restaurant_id);
          cookies.set(`client_id`, undefined);
        })
        .catch((error) => {
          //displays log in failure message then reloads the page
          console.log(error);
          document
            .querySelector(`div`)
            .insertAdjacentHTML(`beforebegin`, `<h3>Log in Failed`);
          location.reload();
        });
    },
  },
};
</script>

<style scoped>
</style>