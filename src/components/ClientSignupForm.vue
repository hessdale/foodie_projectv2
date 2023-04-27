<template>
  <div>
    <label for="Email">Email: </label>
    <input type="text" id="Email" ref="userEmail" />
    <label for="FirstName">First Name: </label>
    <input type="text" id="FirstName" ref="userFirstName" />
    <label for="LastName">Last Name: </label>
    <input type="text" id="LastName" ref="userLastName" />
    <label for="Pfp">Profile Picture (url): </label>
    <input type="text" id="pfp" ref="userPfp" />
    <label for="Username">Username: </label>
    <input type="text" id="Username" ref="userUsername" />
    <label for="Password">Password: </label>
    <input type="text" id="Password" ref="userPassword" />
    <button @click="Signup">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    Signup(details) {
      details;
      let email = this.$refs.userEmail[`value`];
      let firstName = this.$refs.userFirstName[`value`];
      let lastName = this.$refs.userLastName[`value`];
      let pfp = this.$refs.userPfp[`value`];
      let username = this.$refs.userUsername[`value`];
      let password = this.$refs.userPassword[`value`];
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
          },
          method: `POST`,
          data: {
            email: email,
            first_name: firstName,
            last_name: lastName,
            image_url: pfp,
            username: username,
            password: password,
          },
        })
        .then((response) => {
          response;
          cookies.set(`token`, response.data.token);
          cookies.set(`client_id`, response.data.client_id);
          console.log(response);
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