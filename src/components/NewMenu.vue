<template>
  <div>
    <!-- form to create new menu item -->
    <section>
      <input
        type="text"
        for="description"
        ref="description"
        placeholder="description"
      />
      <input
        type="text"
        for="imageURL"
        ref="imageURL"
        placeholder="Image URL"
      />
      <input type="text" for="name" ref="name" placeholder="Name" />
      <input type="text" for="price" ref="price" placeholder="Price" />
      <button @click="newItem">Create New Menu Item</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    newItem() {
      //takes values from form and stores it in variables
      let description = this.$refs.description[`value`];
      let image_url = this.$refs.imageURL[`value`];
      let name = this.$refs.name[`value`];
      let price = this.$refs.price[`value`];
      let priceJson = JSON.parse(price);
      let restauranttoken = cookies.get(`token`);
      // axios request with values to create new item
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_URL}/api/menu`,
          headers: {
            token: restauranttoken,
          },
          method: `POST`,
          data: {
            description: description,
            image_url: image_url,
            name: name,
            price: priceJson,
          },
        })
        .then(() => {
          //inserts success message and reloads page
          document
            .querySelector(`section`)
            .insertAdjacentHTML(`beforeend`, `<h3>Creation Successful</h3>`);
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