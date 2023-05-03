<template>
  <div>
    <div>
      <section v-for="item in items" :key="item.id">
        <h3>{{ item.name }}</h3>
        <img width="100px" :src="item.image_url" :alt="item.description" />
        <p>{{ item.description }}</p>
        <h4>{{ item.price }}</h4>
        <button @click="addtocart">order</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: undefined,
    };
  },
  methods: {
    menuinfo(details) {
      this.items = details;
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