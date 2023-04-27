<template>
  <div>
    <section>
      <client-signup-form></client-signup-form>
    </section>
    <section>
      <client-login></client-login>
    </section>
  </div>
</template>

<script>
import ClientSignupForm from "@/components/ClientSignupForm.vue";
import ClientLogin from "@/components/ClientLogin.vue";
export default {
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