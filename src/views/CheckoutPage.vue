<template>
  <div>
    <cart-display></cart-display>
  </div>
</template>

<script>
import CartDisplay from "@/components/CartDisplay.vue";
export default {
  components: {
    CartDisplay,
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