<template>
  <div>
    <!-- loops through restaurants array to display -->
    <div v-for="(restaurant, i) in restaurants" :key="i">
      <h1>{{ restaurant[`name`] }}</h1>
      <img
        width="200px"
        :src="restaurant[`profile_url`]"
        alt="restaurants profile picture"
      />
      <p>{{ restaurant[`city`] }}:{{ restaurant[`address`] }}</p>
      <p>{{ restaurant[`bio`] }}</p>
      <button @click="viewmenu" :id="restaurant[`restaurant_id`]">
        MENU
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      menu: undefined,
      restaurants: undefined,
    };
  },
  methods: {
    viewmenu(details) {
      //gets value from attribute set by loop above  and uses it in a get request
      let ID = details.currentTarget.attributes[1].value;
      let IDparse = JSON.parse(ID);
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_URL}/api/menu`,
          method: `GET`,
          params: {
            restaurant_id: IDparse,
          },
        })
        .then((response) => {
          //displays menu of restaurant that was selected
          this.menu = response.data;
          //emits menu data and restaurant ID
          this.$root.$emit(`menu_data`, this.menu);
          this.$root.$emit(`restaurant_id`, ID);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    //axios request to display the restaurants above
    axios
      .request({
        url: `${process.env.VUE_APP_BASE_URL}/api/restaurants`,
      })
      .then((response) => {
        console.log(response.data)
        //sets local variable to response data
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