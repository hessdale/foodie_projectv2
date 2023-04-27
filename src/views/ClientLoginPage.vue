<template>
  <div>
    <section v-if="logindisplay === true">
      <client-login></client-login>
    </section>
    <section v-if="signupdisplay === true">
      <client-signup-form></client-signup-form>
    </section>

    <button @click="switchtologin">login</button>
    <button @click="switchtosignup">register</button>
  </div>
</template>

<script>
import ClientSignupForm from "@/components/ClientSignupForm.vue";
import ClientLogin from "@/components/ClientLogin.vue";

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
    ClientSignupForm,
    ClientLogin,
  },
};
</script>

<style scoped>
section {
  margin-top: 30px;
}
</style>