<template>
  <div>
    <div v-if="(menus = undefined)">
      <h3>please select a menu</h3>
    </div>
    <div v-else>
      <section v-for="(menu, i) in menus" :key="i">
        <h3>{{ menu[i].name }}</h3>
        <img :src="menu[i].image_url" :alt="menu[i].description" />
        <p>{{ menu[i].description }}</p>
        <h4>{{ menu[i].price }}</h4>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: undefined,
    };
  },
  methods: {
    menuinfo(details) {
      this.menus = details;
      console.log(details);
    },
  },
  mounted() {
    this.$root.$on(`menu_data`, this.menuinfo);
  },
};
</script>

<style scoped>
</style>