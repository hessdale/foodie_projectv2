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
      <button @click="viewmenu" :restaurantID="restaurant[`restaurant_id`]">
        MENU
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      menu: undefined,
      restaurants: undefined,
    };
  },
  methods: {
    viewmenu(details) {
      let ID = details.srcElement.attributes[1].value;
      let IDparse = JSON.parse(ID);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/menu`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
          },
          method: `GET`,
          params: {
            restaurant_id: IDparse,
          },
        })
        .then((response) => {
          this.menu = response.data;
          this.$root.$emit(`restaurant_id`, IDparse);
          this.$root.$emit(`menu_data`, this.menu);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
        this.restaurants = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>