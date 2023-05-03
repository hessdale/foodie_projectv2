<template>
  <div>
    <div v-for="(restaurant, i) in restaurants" :key="i">
      <h1>{{ restaurant[`name`] }}</h1>
      <img
        width="200px"
        :src="restaurant[`profile_url`]"
        alt="restaurants profile picture"
      />
      <p>{{ restaurant[`city`] }}:{{ restaurant[`address`] }}</p>
      <p>{{ restaurant[`bio`] }}</p>
    </div>
    <section></section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      restaurants: undefined,
    };
  },
  mounted() {
    cookies;
    axios
      .request({
        url: `https://foodie.bymoen.codes/api/restaurants`,
        headers: {
          "x-api-key": `H0x7V93WN4ebcatCvCI3`,
        },
      })
      .then((response) => {
        console.log(response);
        this.restaurants = response.data;
        console.log(this.restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>