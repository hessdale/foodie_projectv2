<template>
  <div>
    <!-- button to display edit for client profile -->
    <button @click="editstatus">edit profile</button>
    <section v-if="edit === true">
      <!-- form for client to edit profile -->
      <input type="text" ref="Email" placeholder="Email" />
      <button @click="sendEmail">Change Email</button>
      <input type="text" ref="FirstName" placeholder="First Name" />
      <input type="text" ref="LastName" placeholder="Change Last Name" />
      <input type="text" ref="pfp" placeholder="Profile Picture (url)" />
      <input type="text" ref="Username" placeholder="Change Username" />
      <input type="text" ref="userPassword" placeholder="Password" />
      <button @click="SendEdit">Edit Profile Changes</button>
      <label for="passdel">Password to delete account: </label>
      <input type="text" id="passdel" ref="password" />
      <!-- button to delete account if password is correct -->
      <button @click="deleteAccount">DELETE ACCOUNT</button>
    </section>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  data() {
    return {
      //default state of edit
      edit: false,
    };
  },
  methods: {
    //toggle switch for edit state to display form
    editstatus() {
      if (this.edit == false) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    // if user enters correct password it deletes the account
    deleteAccount() {
      //getting value of entered password and token from cookies
      let password = this.$refs.password[`value`];
      let cookietoken = cookies.get(`token`);
      //axios request to delete account from api
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
        .then(() => {
          //sets cookies token and id to undefined and reloads page
          cookies.set(`token`, undefined);
          cookies.set(`client_id`, undefined);
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //function to edit different params of account
    SendEdit() {
      //building empty params to send to api
      let params = {};
      //if statements for each value checking if its blank or not and if it isnt it puts the param value into it with[]
      if (this.$refs[`Email`].value != ``) {
        let emailValue = this.$refs[`Email`].value;
        params[`email`] = emailValue;
      }
      if (this.$refs[`FirstName`].value != ``) {
        let nameValue = this.$refs[`FirstName`].value;
        params[`first_name`] = nameValue;
      }
      if (this.$refs[`LastName`].value != ``) {
        let lastValue = this.$refs[`LastName`].value;
        params[`last_name`] = lastValue;
      }
      if (this.$refs[`pfp`].value != ``) {
        let pfpValue = this.$refs[`pfp`].value;
        params[`image_url`] = pfpValue;
      }
      if (this.$refs[`Username`].value != ``) {
        let userValue = this.$refs[`Username`].value;
        params[`username`] = userValue;
      }
      if (this.$refs[`userPassword`].value != ``) {
        let userPassword = this.$refs[`userPassword`].value;
        params[`password`] = userPassword;
      }
      //gets cookie token value
      let cookietoken = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/client`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: params,
        })
        .then((response) => {
          console.log(response);
          //inserts success message
          document
            .querySelector(`section`)
            .insertAdjacentHTML(`beforeend`, `<h3>Success</h3>`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>