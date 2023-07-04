<template>
  <div>
    <!-- form for user to sign up with a restaurant -->
    <section>
      <input type="text" ref="Email" placeholder="Email" />
      <input type="text" ref="Name" placeholder="Name" />
      <input type="text" ref="Address" placeholder="Address" />
      <input type="text" ref="Phone" placeholder="Phone ###-###-####" />
      <input type="text" ref="Bio" placeholder="Bio" />
      <input
        type="text"
        ref="City"
        placeholder="City Vancouver/Toronto/Calgary"
      />
      <input type="text" ref="Profile" placeholder="Profile" />
      <input type="text" ref="Banner" placeholder="Banner" />
      <input type="text" ref="Password" placeholder="Password" />
      <button @click="Signup">Sign Up</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    //signup function that takes values that user input from the form and
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
      //axios request with values from form
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_URL}/api/restaurant`,
          method: `POST`,
          data: {
            email: email,
            name: name,
            address: address,
            phone_number: phone,
            bio: bio,
            city: city,
            profile_url: profile,
            banner_url: banner,
            password: password,
          },
        })
        .then((response) => {
          //sets cookies to user being logged in and logsout of client account if one displays success message and reloads page
          cookies.set(`token`, response.data.token);
          cookies.set(`restaurant_id`, response.data.restaurant_id);
          cookies.set(`client_id`, undefined);
          document
            .querySelector(`section`)
            .insertAdjacentHTML(`beforeend`, `<h3>creation successful</h3>`);
          location.reload();
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