<template>
  <div>
    <section v-if="logindisplay === true">
      <restaurant-login></restaurant-login>
    </section>
    <section v-if="signupdisplay === true">
      <restaurant-signup-form></restaurant-signup-form>
    </section>

    <button @click="switchtologin">login</button>
    <button @click="switchtosignup">register</button>
  </div>
</template>

<script>
import RestaurantSignupForm from "@/components/RestaurantSignupForm.vue";
import RestaurantLogin from "@/components/RestaurantLogin.vue";

export default {
  methods: {
    switchtosignup() {
      this.logindisplay = false;
      this.signupdisplay = true;
    },
    switchtologin() {
      this.signupdisplay = false;
      this.logindisplay = true;
    },
  },
  data() {
    return {
      logindisplay: false,
      signupdisplay: false,
    };
  },
  components: {
    RestaurantSignupForm,
    RestaurantLogin,
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