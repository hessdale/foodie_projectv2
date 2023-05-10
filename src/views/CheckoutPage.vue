<template>
  <div>
    <cart-display></cart-display>
  </div>
</template>

<script>
import CartDisplay from "@/components/CartDisplay.vue";
import cookies from "vue-cookies";
export default {
  components: {
    CartDisplay,
  },
  mounted() {
    if (cookies.get(`token`) === null) {
      this.$router.push(`/clientlogin`);
    }
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;
  text-align: center;
}
</style>