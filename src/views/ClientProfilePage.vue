<template>
  <div>
    <client-profile></client-profile>
    <button @click="editstatus">edit profile</button>
    <section v-if="edit === true">
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

      <label for="passdel">Password to delete account: </label>
      <input type="text" id="passdel" ref="password" />
      <button @click="deleteAccount">DELETE ACCOUNT</button>
    </section>
  </div>
</template>

<script>
import ClientProfile from "@/components/ClientProfile.vue";
import cookies from "vue-cookies";
import axios from "axios";

export default {
  methods: {
    deleteAccount() {
      let password = this.$refs.password[`value`];
      let cookietoken = cookies.get(`token`);

      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `DELETE`,
          data: {
            password: password,
          },
        })
        .then((response) => {
          response;
          cookies.set(`token`, undefined);
          cookies.set(`client_id`, undefined);
          console.log(response);
        })
        .catch((error) => {
          error;
          console.log(error);
        });
    },
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
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
}
</style>