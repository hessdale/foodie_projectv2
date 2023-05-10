<template>
  <div v-if="this.getID != undefined">
    <button @click="editstatus">edit profile</button>
    <section v-if="edit === true">
      <input type="text" ref="Email" placeholder="Change Email" />

      <input type="text" ref="Name" placeholder="Change Restaurant Name" />

      <input type="text" ref="Address" placeholder="Change Address" />

      <input type="text" ref="Number" placeholder="Change Phone Number" />

      <input type="text" ref="Bio" placeholder="Change Bio" />

      <input type="text" ref="City" placeholder="Change City" />

      <input type="text" ref="Profile" placeholder="Change Profile Pic (url)" />

      <input type="text" ref="Banner" placeholder="Change Banner Pic (url)" />

      <input type="text" ref="UserPassword" placeholder="Change Password" />
      <button @click="sendEdit">Change Account Info</button>

      <input
        type="text"
        ref="password"
        placeholder="Enter Password to delete"
      />
      <button @click="deleteAccount">DELETE ACCOUNT</button>
    </section>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  methods: {
    sendEdit(details) {
      details;
      let params = {};
      if (this.$refs[`Email`].value != ``) {
        let emailValue = this.$refs[`Email`].value;
        params[`email`] = emailValue;
      }
      if (this.$refs[`Name`].value != ``) {
        let nameValue = this.$refs[`Name`].value;
        params[`name`] = nameValue;
      }
      if (this.$refs[`Address`].value != ``) {
        let addressValue = this.$refs[`Address`].value;
        params[`address`] = addressValue;
      }
      if (this.$refs[`Number`].value != ``) {
        let numberValue = this.$refs[`Number`].value;
        params[`phone_number`] = numberValue;
      }
      if (this.$refs[`Bio`].value != ``) {
        let bioValue = this.$refs[`Bio`].value;
        params[`bio`] = bioValue;
      }
      if (this.$refs[`City`].value != ``) {
        let cityValue = this.$refs[`City`].value;
        params[`city`] = cityValue;
      }
      if (this.$refs[`Profile`].value != ``) {
        let profileValue = this.$refs[`Profile`].value;
        params[`profile_url`] = profileValue;
      }
      if (this.$refs[`Banner`].value != ``) {
        let bannerValue = this.$refs[`Banner`].value;
        params[`banner_url`] = bannerValue;
      }
      if (this.$refs[`UserPassword`].value != ``) {
        let userPassword = this.$refs[`UserPassword`].value;
        params[`password`] = userPassword;
      }

      let cookietoken = cookies.get(`token`);

      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: params,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //
    deleteAccount() {
      let password = this.$refs.password[`value`];
      let cookietoken = cookies.get(`token`);

      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
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
          cookies.set(`restaurant_id`, undefined);
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
  },
  data() {
    return {
      edit: false,
      getID: cookies.get(`restaurant_id`),
    };
  },
};
</script>

<style scoped>
</style>