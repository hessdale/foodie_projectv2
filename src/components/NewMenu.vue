<template>
  <div>
    <label for="description">description:</label>
    <input type="text" for="description" ref="description" />

    <label for="imageUrl">Image URL:</label>
    <input type="text" for="imageURL" ref="imageURL" />

    <label for="name">Name:</label>
    <input type="text" for="name" ref="name" />

    <label for="price">Price:</label>
    <input type="text" for="price" ref="price" />
    <button @click="newItem">Create New Menu Item</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    newItem(details) {
      details;

      let description = this.$refs.description[`value`];
      let image_url = this.$refs.imageURL[`value`];
      let name = this.$refs.name[`value`];
      let price = this.$refs.price[`value`];
      let restauranttoken = cookies.get(`token`);

      axios
        .request({
          url: `https://foodie.bymoen.codes/api/menu`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: restauranttoken,
          },
          method: `POST`,
          data: {
            description: description,
            image_url: image_url,
            name: name,
            price: price,
          },
        })
        .then((response) => {
          console.log(response);
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