<template>
  <div>
    <client-profile></client-profile>
    <button @click="editstatus">edit profile</button>
    <section v-if="edit === true">
      <client-edit-profile></client-edit-profile>
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
      <button @click="sendPassword">Change Password</button>
    </section>
  </div>
</template>

<script>
import ClientProfile from "@/components/ClientProfile.vue";
import ClientEditProfile from "@/components/ClientEditProfile.vue";
import cookies from "vue-cookies";
import axios from "axios";

export default {
  methods: {
    editstatus() {
      if (this.edit == false) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    sendEmail() {
      let inputemail = this.$refs.userEmail[`value`];
      let cookietoken = cookies.get(`token`);

      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
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
    sendPassword() {
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
  data() {
    return {
      edit: false,
    };
  },
  components: {
    ClientProfile,
    ClientEditProfile,
  },
};
</script>

<style scoped>
</style>