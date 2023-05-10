<template>
  <div>
    <!-- form for user to register -->
    <section>
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
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    Signup() {
      //gets values from the form
      let email = this.$refs.userEmail[`value`];
      let firstName = this.$refs.userFirstName[`value`];
      let lastName = this.$refs.userLastName[`value`];
      let pfp = this.$refs.userPfp[`value`];
      let username = this.$refs.userUsername[`value`];
      let password = this.$refs.userPassword[`value`];
      //post axios request to make a new account
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
          //sets cookies for client_id and token then displays success message and sends user to the profile page
          cookies.set(`token`, response.data.token);
          cookies.set(`client_id`, response.data.client_id);
          document
            .querySelector(`section`)
            .insertAdjacentHTML(`beforebegin`, `<h3>Creation Successful</h3>`);
          this.$router.push(`/clientprofile`);
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