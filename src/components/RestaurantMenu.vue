<template>
  <div>
    <h1>Edit Menu Items</h1>
    <!-- for for each item to edit items -->
    <section>
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
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    //function to delete item from api
    deleteItem(details) {
      details;
      let id = details.currentTarget.attributes[1].value;
      let idParse = JSON.parse(id);
      let token = cookies.get(`token`);
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_URL}/api/menu`,

          headers: {
            token: token,
          },
          data: {
            menu_id: idParse,
          },

          method: `DELETE`,
        })
        .then(() => {
          //reloads page on success
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //sends edit params to api to edit each item
    sendEdit(details) {
      //sets current id from attributes and parses it
      let currentId = details.target.attributes[1].value;
      let idParse = JSON.parse(currentId);
      //builds params with menu_id: already populated
      let params = { menu_id: idParse };
      //ifs to build the params with [] if value is not ``
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
      //gets cookie token
      let token = cookies.get(`token`);
      //acios request with built params and token
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_URL}/api/menu`,
          headers: {
            token: token,
          },
          data: params,

          method: `PATCH`,
        })
        .then(() => {
          //success message and then reload
          document
            .querySelector(`section`)
            .insertAdjacentHTML(`beforeend`, `<h3>edit successful</h3>`);
          location.reload();
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
    //axios request with parsed restaured id from cookies
    axios
      .request({
        url: `${process.env.VUE_APP_BASE_URL}/api/menu`,
        params: {
          restaurant_id: JSON.parse(cookies.get(`restaurant_id`)),
        },
        method: `GET`,
      })
      .then((response) => {
        //sets menu items to response
        this.menuItems = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>