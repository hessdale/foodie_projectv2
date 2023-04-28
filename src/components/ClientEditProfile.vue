<template>
  <div>
    <!--
    <label for="Email">Email: </label>
    <input type="text" id="Email" ref="userEmail" />
    <button @click="sendEmail">Change Email</button>
    <label for="FirstName">First Name: </label>
    <input type="text" id="FirstName" ref="userFirstName" />
    <button @click="sendFirst">Change First Name</button>
    <label for="LastName">Last Name: </label>
    <input type="text" id="LastName" ref="userLastName" />
    <button @click="sendLast">Change Last Name</button>
    <label for="Pfp">Profile Picture (url): </label>
    <input type="text" id="pfp" ref="userPfp" />
    <button @click="sendPfp">Change Picture</button>
    <label for="Username">Username: </label>
    <input type="text" id="Username" ref="userUsername" />
    <button @click="sendUsername">Change Username</button>
    <label for="Password">Password: </label>
    <input type="text" id="Password" ref="userPassword" />
    <button @click="sendPassword">Change Password</button> -->
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    sendEmail() {
      let inputemail = this.$refs.userEmail[`value`];
      let cookietoken = cookies.get(`token`);
      let tokenparse = JSON.parse(cookietoken);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: tokenparse,
          },
          method: `PATCH`,
          data: {
            email: inputemail,
          },
        })
        .then((response) => {
          response;

          console.log(response);
        })
        .catch((error) => {
          error;
          console.log(error);
        });
    },
    sendFirst() {
      let first = this.$refs.userFirstName[`value`];
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: JSON.parse(cookies.get(`token`)),
          },
          method: `PATCH`,
          data: {
            first_name: first,
          },
        })
        .then((response) => {
          response;

          console.log(response);
        })
        .catch((error) => {
          error;
          console.log(error);
        });
    },
    sendLast() {
      let last = this.$refs.userLastName[`value`];
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: JSON.parse(cookies.get(`token`)),
          },
          method: `PATCH`,
          data: {
            last_name: last,
          },
        })
        .then((response) => {
          response;

          console.log(response);
        })
        .catch((error) => {
          error;
          console.log(error);
        });
    },
    sendPfp() {
      let pfp = this.$refs.userPfp[`value`];
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: JSON.parse(cookies.get(`token`)),
          },
          method: `PATCH`,
          data: {
            image_url: pfp,
          },
        })
        .then((response) => {
          response;

          console.log(response);
        })
        .catch((error) => {
          error;
          console.log(error);
        });
    },
    sendUsername() {
      let username = this.$refs.userUsername[`value`];
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: JSON.parse(cookies.get(`token`)),
          },
          method: `PATCH`,
          data: {
            username: username,
          },
        })
        .then((response) => {
          response;

          console.log(response);
        })
        .catch((error) => {
          error;
          console.log(error);
        });
    },
    sendpassword() {
      let password = this.$refs.userPassword[`value`];
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: JSON.parse(cookies.get(`token`)),
          },
          method: `PATCH`,
          data: {
            password: password,
          },
        })
        .then((response) => {
          response;

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