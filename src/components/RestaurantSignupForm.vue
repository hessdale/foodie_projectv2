<template>
  <div>
    <label for="Email">Email: </label>
    <input type="text" id="Email" ref="Email" />
    <label for="tName">Name: </label>
    <input type="text" id="Name" ref="Name" />
    <label for="Address">Address: </label>
    <input type="text" id="Address" ref="Address" />
    <label for="Phone">Phone #: </label>
    <input type="text" id="Phone" ref="Phone" />
    <label for="Bio">Bio: </label>
    <input type="text" id="Bio" ref="Bio" />
    <label for="City">City: </label>
    <input type="text" id="City" ref="City" />
    <label for="Profile">Profile: </label>
    <input type="text" id="Profile" ref="Profile" />
    <label for="Banner">Banner: </label>
    <input type="text" id="Banner" ref="Banner" />
    <label for="Password">Password: </label>
    <input type="text" id="Password" ref="Password" />
    <button @click="Signup">Sign Up</button>
    <p>
      rest1@gmail.com restaurant1 north 999-999-9999 best testaurant1 Vancouver
      password1
    </p>
    <p>
      https://images.pexels.com/photos/16014517/pexels-photo-16014517.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load
    </p>
    <p>
      https://images.pexels.com/photos/13542947/pexels-photo-13542947.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load
    </p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    Signup(details) {
      details;
      let email = this.$refs.Email[`value`];
      let name = this.$refs.Name[`value`];
      let address = this.$refs.Address[`value`];
      let phone = this.$refs.Phone[`value`];
      let bio = this.$refs.Bio[`value`];
      let city = this.$refs.City[`value`];
      let profile = this.$refs.Profile[`value`];
      let banner = this.$refs.Banner[`value`];
      let password = this.$refs.Password[`value`];
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/restaurant`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
          },
          method: `POST`,
          data: {
            email: email,
            name: name,
            address: address,
            phone_number: phone, //(string in the form of ###-###-####),
            bio: bio,
            city: city, //string, one of Calgary, Vancouver or Toronto
            profile_url: profile,
            banner_url: banner,
            password: password,
          },
        })
        .then((response) => {
          response;
          cookies.set(`token`, response.data.token);
          cookies.set(`restaurant_id`, response.data.client_id);
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