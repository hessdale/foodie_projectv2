<template>
  <div v-if="cookies.get(`restaurant_id`) != undefined">
    <h1>Edit Menu Items</h1>
    <div v-for="menuItem in menuItems" :key="menuItem.id">
      <h2>{{ menuItem.name }}</h2>
      <img
        :src="menuItem.image_url"
        :alt="menuItem.description"
        width="100px"
      />
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
      <button @click="deleteItem" :itemId="menuItem.id">DELETE ITEM</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    deleteItem(details) {
      details;
      let id = details.currentTarget.attributes[1].value;
      let idParse = JSON.parse(id);
      let token = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/menu`,

          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: token,
          },
          data: {
            menu_id: idParse,
          },

          method: `DELETE`,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sendEdit(details) {
      details;
      let currentId = details.target.attributes[1].value;
      let idParse = JSON.parse(currentId);
      let params = { menu_id: idParse };
      if (this.$refs[`description` + currentId][0].value != ``) {
        let descValue = this.$refs[`description` + currentId][0].value;
        params[`description`] = descValue;
      }
      if (this.$refs[`imageUrl` + currentId][0].value != ``) {
        let imgValue = this.$refs[`imageUrl` + currentId][0].value;
        params[`image_url`] = imgValue;
      }
      if (this.$refs[`name` + currentId][0].value != ``) {
        let nameValue = this.$refs[`name` + currentId][0].value;
        params[`name`] = nameValue;
      }
      if (this.$refs[`price` + currentId][0].value != ``) {
        let priceValue = this.$refs[`price` + currentId][0].value;
        let priceParse = JSON.parse(priceValue);
        params[`price`] = priceParse;
      }

      let token = cookies.get(`token`);
      axios
        .request({
          url: `https://foodie.bymoen.codes/api/menu`,
          headers: {
            "x-api-key": `H0x7V93WN4ebcatCvCI3`,
            token: token,
          },
          data: params,

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