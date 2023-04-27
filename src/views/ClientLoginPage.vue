<template>
  <div>
    <section v-if="logintoken != null">
      <button>sign out</button>
    </section>
    <section v-if="(i = true)">
      <client-signup-form></client-signup-form>
    </section>
    <section v-else-if="(i = false)">
      <client-login></client-login>
    </section>
    <div v-else></div>
    <button @click="switchlogin">login</button>
    <button @click="switchlogin">signup</button>
  </div>
</template>

<script>
import ClientSignupForm from "@/components/ClientSignupForm.vue";
import ClientLogin from "@/components/ClientLogin.vue";
import cookies from "vue-cookies";
export default {
  methods: {
    switchlogin() {
      if ((this.i = undefined)) {
        this.i = false;
      } else {
        this.i = true;
      }
    },
  },
  data() {
    return {
      logintoken: cookies.get(`token`),
      i: undefined,
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