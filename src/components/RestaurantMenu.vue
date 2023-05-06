<template>
  <div>
    <h1>Edit Menu Items</h1>
    <div v-for="menuItem in menuItems" :key="menuItem.id">
      <h2>{{ menuItem.name }}</h2>

      <input
        type="text"
        :placeholder="menuItem.description"
        :ref="`description` + menuItem.id"
      />
      <input
        type="text"
        :placeholder="menuItem.image_url"
        :ref="`imageUrl` + menuItem.id"
      />
      <input
        type="text"
        :placeholder="menuItem.name"
        :ref="`name` + menuItem.id"
      />
      <input
        type="text"
        :placeholder="menuItem.price"
        :ref="`price` + menuItem.id"
      />
      <button @click="sendEdit" :itemId="menuItem.id">confirm edit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    sendEdit(details) {
      details;
      let currentId = details.target.attributes[1].value;
      let params = [];
      if (this.$refs[`description` + currentId].value != undefined) {
        let descValue = this.$refs[`description` + currentId].value;
        params.push({ description: descValue });
      }
      if (this.$refs[`imageUrl` + currentId].value != undefined) {
        let imgValue = this.$refs[`imageUrl` + currentId].value;
        params.push({ image_url: imgValue });
      }
      if (this.$refs[`name` + currentId].value != undefined) {
        let nameValue = this.$refs[`name` + currentId].value;
        params.push({ name: nameValue });
      }
      if (this.$refs[`name` + currentId].value != undefined) {
        let priceValue = this.$refs[`price` + currentId].value;
        params.push({ price: priceValue });
      }
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/menu`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
          },
          params: {
            restaurant_id: cookies.get(`restaurant_id`),
          },
          method: `PATCH`,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      menuItems: undefined,
    };
  },
  mounted() {
    axios
      .request({
        url: `https://foodie.bymoen.codes/api/menu`,
        headers: {
          "x-api-key": `H0x7V93WN4ebcatCvCI3`,
        },
        params: {
          restaurant_id: JSON.parse(cookies.get(`restaurant_id`)),
        },
        method: `GET`,
      })
      .then((response) => {
        this.menuItems = response.data;
      })
      .catch((error) => {
        error;
      });
  },
};
</script>

<style scoped>
</style>