<template>
  <div>
    <restaurant-profile></restaurant-profile>
    <button @click="editstatus">edit profile</button>
    <section v-if="edit === true">
      <label for="Email">Email: </label>
      <input type="text" id="Email" ref="Email" />
      <button @click="sendEmail">Change Email</button>

      <label for="Name">Restaurant Name: </label>
      <input type="text" id="Name" ref="Name" />
      <button @click="sendName">Change Name</button>

      <label for="Address">Address: </label>
      <input type="text" id="Address" ref="Address" />
      <button @click="sendAddress">Change Address</button>

      <label for="Number">Phone Number: </label>
      <input type="text" id="Number" ref="Number" />
      <button @click="sendNumber">Change Number</button>

      <label for="Bio">Bio: </label>
      <input type="text" id="Bio" ref="Bio" />
      <button @click="sendBio">Change Bio</button>

      <label for="City">City: </label>
      <input type="text" id="City" ref="City" />
      <button @click="sendCity">Change City</button>

      <label for="Profile">Profile Pic (url): </label>
      <input type="text" id="Profile" ref="Profile" />
      <button @click="sendProfile">Change Profile</button>

      <label for="Banner">Banner Pic (url): </label>
      <input type="text" id="Banner" ref="Banner" />
      <button @click="sendUsername">Change Banner</button>

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
import RestaurantProfile from "@/components/RestaurantProfile.vue";
import cookies from "vue-cookies";
import axios from "axios";

export default {
  methods: {
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
    sendEmail() {
      let Email = this.$refs.Email[`value`];
      let cookietoken = cookies.get(`token`);

      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: {
            email: Email,
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
    sendName() {
      let Name = this.$refs.Name[`value`];
      let cookietoken = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: {
            name: Name,
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
    sendAddress() {
      let Address = this.$refs.Address[`value`];
      let cookietoken = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: {
            address: Address,
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
    sendNumber() {
      let Number = this.$refs.Number[`value`];
      let cookietoken = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: {
            phone_number: Number,
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
    sendBio() {
      let Bio = this.$refs.Bio[`value`];
      let cookietoken = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: {
            bio: Bio,
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
    sendCity() {
      let City = this.$refs.City[`value`];
      let cookietoken = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: {
            city: City,
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
    sendProfile() {
      let Profile = this.$refs.Profile[`value`];
      let cookietoken = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: {
            profile_url: Profile,
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
    sendBanner() {
      let Banner = this.$refs.Banner[`value`];
      let cookietoken = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: {
            banner_url: Banner,
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
      let Password = this.$refs.userPassword[`value`];
      let cookietoken = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: cookietoken,
          },
          method: `PATCH`,
          data: {
            password: Password,
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
    RestaurantProfile,
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
}
</style>